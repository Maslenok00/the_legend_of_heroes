import type { IncomingMessage, ServerResponse } from "node:http";

const cacheTtlSeconds = 60 * 60 * 6;
const fallbackRate = 75.13;

export default async function handler(_req: IncomingMessage, res: ServerResponse) {
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

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", `s-maxage=${cacheTtlSeconds}, stale-while-revalidate=86400`);
    res.end(
      JSON.stringify({
        source: "open.er-api.com",
        cached: false,
        rate,
        updatedAt: payload.time_last_update_utc
      })
    );
  } catch (error) {
    console.warn(error);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(
      JSON.stringify({
        source: "fallback",
        cached: false,
        rate: fallbackRate
      })
    );
  }
}
