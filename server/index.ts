import express from "express";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer as createViteServer } from "vite";
import { trailsGames } from "../src/data/trails";
import type { SteamCatalogEntry } from "../src/types";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const isProduction = process.env.NODE_ENV === "production" || process.argv.includes("--production");
const port = Number(process.env.PORT ?? 5173);
const steamCache = new Map<string, { expiresAt: number; payload: SteamCatalogEntry[] }>();
const rateCache = new Map<string, { expiresAt: number; rate: number; updatedAt?: string }>();
const cacheTtlMs = 1000 * 60 * 30;
const rateCacheTtlMs = 1000 * 60 * 60 * 6;

const safeParam = (value: unknown, fallback: string) => {
  if (typeof value !== "string") {
    return fallback;
  }

  return /^[a-zA-Z0-9_-]{2,12}$/.test(value) ? value : fallback;
};

const steamUrl = (appId: number) => `https://store.steampowered.com/app/${appId}`;
const logoUrl = (appId: number) => `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/logo.png`;

async function fetchSteamApp(appId: number, language: string, country: string): Promise<SteamCatalogEntry> {
  const endpoint = new URL("https://store.steampowered.com/api/appdetails");
  endpoint.searchParams.set("appids", String(appId));
  endpoint.searchParams.set("l", language);
  endpoint.searchParams.set("cc", country);

  const response = await fetch(endpoint, {
    headers: {
      "user-agent": "AtlasZemuriiFanSite/0.1 (+local development)"
    }
  });

  if (!response.ok) {
    throw new Error(`Steam returned ${response.status} for app ${appId}`);
  }

  const json = (await response.json()) as Record<
    string,
    {
      success: boolean;
      data?: {
        name?: string;
        release_date?: { date?: string };
        price_overview?: { final_formatted?: string };
      };
    }
  >;

  const result = json[String(appId)];
  const data = result?.data;

  if (!result?.success || !data) {
    throw new Error(`Steam app ${appId} is unavailable`);
  }

  return {
    appId,
    name: data.name ?? `Steam app ${appId}`,
    releaseDate: data.release_date?.date,
    price: data.price_overview?.final_formatted,
    steamUrl: steamUrl(appId)
  };
}

function fallbackSteamEntry(appId: number): SteamCatalogEntry {
  const local = trailsGames.find((game) => game.appId === appId);

  return {
    appId,
    name: local?.title ?? `Steam app ${appId}`,
    steamUrl: steamUrl(appId)
  };
}

async function createApp() {
  const app = express();
  const httpServer = createServer(app);

  app.get("/api/steam/apps", async (req, res) => {
    const language = safeParam(req.query.lang, "russian");
    const country = safeParam(req.query.cc, "RU");
    const cacheKey = `${language}:${country}`;
    const cached = steamCache.get(cacheKey);

    if (cached && cached.expiresAt > Date.now()) {
      res.json({
        source: "Steam Store API",
        cached: true,
        updatedAt: new Date(cached.expiresAt - cacheTtlMs).toISOString(),
        games: cached.payload
      });
      return;
    }

    const payload = await Promise.all(
      trailsGames.map(async (game) => {
        try {
          return await fetchSteamApp(game.appId, language, country);
        } catch (error) {
          console.warn(error);
          return fallbackSteamEntry(game.appId);
        }
      })
    );

    steamCache.set(cacheKey, {
      expiresAt: Date.now() + cacheTtlMs,
      payload
    });

    res.json({
      source: "Steam Store API",
      cached: false,
      updatedAt: new Date().toISOString(),
      logoPattern: logoUrl(251150).replace("251150", "{appId}"),
      games: payload
    });
  });

  app.get("/api/rates/usd-rub", async (_req, res) => {
    const cached = rateCache.get("usd-rub");

    if (cached && cached.expiresAt > Date.now()) {
      res.json({
        source: "open.er-api.com",
        cached: true,
        rate: cached.rate,
        updatedAt: cached.updatedAt
      });
      return;
    }

    try {
      const response = await fetch("https://open.er-api.com/v6/latest/USD");

      if (!response.ok) {
        throw new Error(`Rate API returned ${response.status}`);
      }

      const payload = (await response.json()) as {
        rates?: { RUB?: number };
        time_last_update_utc?: string;
      };
      const rate = payload.rates?.RUB;

      if (!rate) {
        throw new Error("RUB rate is unavailable");
      }

      rateCache.set("usd-rub", {
        expiresAt: Date.now() + rateCacheTtlMs,
        rate,
        updatedAt: payload.time_last_update_utc
      });

      res.json({
        source: "open.er-api.com",
        cached: false,
        rate,
        updatedAt: payload.time_last_update_utc
      });
    } catch (error) {
      console.warn(error);
      res.json({
        source: "fallback",
        cached: false,
        rate: 75.13
      });
    }
  });

  if (!isProduction) {
    const vite = await createViteServer({
      root,
      server: {
        middlewareMode: true,
        hmr: {
          server: httpServer
        }
      },
      appType: "custom"
    });

    app.use(vite.middlewares);
    app.use(async (req, res, next) => {
      try {
        const url = req.originalUrl;
        const templatePath = path.resolve(root, "index.html");
        let template = await readFile(templatePath, "utf-8");
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (error) {
        vite.ssrFixStacktrace(error as Error);
        next(error);
      }
    });
  } else {
    const distPath = path.resolve(root, "dist");
    app.use(express.static(distPath));
    app.use(async (_req, res) => {
      const indexPath = path.join(distPath, "index.html");

      if (!existsSync(indexPath)) {
        res.status(404).send("Run npm run build before npm start.");
        return;
      }

      res.sendFile(indexPath);
    });
  }

  return httpServer;
}

createApp().then((server) => {
  server.listen(port, "127.0.0.1", () => {
    console.log(`Атлас Земурии запущен: http://127.0.0.1:${port}`);
  });
});
