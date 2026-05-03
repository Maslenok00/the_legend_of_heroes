import type { IncomingMessage, ServerResponse } from "node:http";

type ApiRequest = IncomingMessage & {
  query?: Record<string, string | string[] | undefined>;
};

type SteamCatalogEntry = {
  appId: number;
  name: string;
  releaseDate?: string;
  price?: string;
  steamUrl: string;
};

const steamApps = [
  { appId: 251150, title: "The Legend of Heroes: Trails in the Sky FC" },
  { appId: 251290, title: "The Legend of Heroes: Trails in the Sky SC" },
  { appId: 436670, title: "The Legend of Heroes: Trails in the Sky the 3rd" },
  { appId: 1668510, title: "The Legend of Heroes: Trails from Zero" },
  { appId: 1668520, title: "The Legend of Heroes: Trails to Azure" },
  { appId: 538680, title: "The Legend of Heroes: Trails of Cold Steel" },
  { appId: 748490, title: "The Legend of Heroes: Trails of Cold Steel II" },
  { appId: 991270, title: "The Legend of Heroes: Trails of Cold Steel III" },
  { appId: 1198090, title: "The Legend of Heroes: Trails of Cold Steel IV" },
  { appId: 1668540, title: "The Legend of Heroes: Trails into Reverie" },
  { appId: 2138610, title: "The Legend of Heroes: Trails through Daybreak" },
  { appId: 2668430, title: "The Legend of Heroes: Trails through Daybreak II" },
  { appId: 3316940, title: "The Legend of Heroes: Trails beyond the Horizon" }
];

const cacheTtlSeconds = 60 * 30;

const safeParam = (value: string | string[] | undefined, fallback: string) => {
  const normalized = Array.isArray(value) ? value[0] : value;

  if (!normalized) {
    return fallback;
  }

  return /^[a-zA-Z0-9_-]{2,12}$/.test(normalized) ? normalized : fallback;
};

const steamUrl = (appId: number) => `https://store.steampowered.com/app/${appId}`;

async function fetchSteamApp(appId: number, language: string, country: string): Promise<SteamCatalogEntry> {
  const endpoint = new URL("https://store.steampowered.com/api/appdetails");
  endpoint.searchParams.set("appids", String(appId));
  endpoint.searchParams.set("l", language);
  endpoint.searchParams.set("cc", country);

  const response = await fetch(endpoint, {
    headers: {
      "user-agent": "AtlasZemuriiFanSite/0.1 (+vercel)"
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
  const local = steamApps.find((game) => game.appId === appId);

  return {
    appId,
    name: local?.title ?? `Steam app ${appId}`,
    steamUrl: steamUrl(appId)
  };
}

export default async function handler(req: ApiRequest, res: ServerResponse) {
  const language = safeParam(req.query?.lang, "russian");
  const country = safeParam(req.query?.cc, "RU");

  const games = await Promise.all(
    steamApps.map(async (game) => {
      try {
        return await fetchSteamApp(game.appId, language, country);
      } catch (error) {
        console.warn(error);
        return fallbackSteamEntry(game.appId);
      }
    })
  );

  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", `s-maxage=${cacheTtlSeconds}, stale-while-revalidate=86400`);
  res.end(
    JSON.stringify({
      source: "Steam Store API",
      cached: false,
      updatedAt: new Date().toISOString(),
      games
    })
  );
}
