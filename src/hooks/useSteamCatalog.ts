import { useEffect, useMemo, useState } from "react";
import type { SteamCatalogEntry } from "../types";

type SteamCatalogState = {
  entries: SteamCatalogEntry[];
  loading: boolean;
  error?: string;
  updatedAt?: string;
  source?: string;
};

export function useSteamCatalog() {
  const [state, setState] = useState<SteamCatalogState>({
    entries: [],
    loading: true
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadCatalog() {
      try {
        const response = await fetch("/api/steam/apps?lang=russian&cc=RU", {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(`Steam API proxy returned ${response.status}`);
        }

        const payload = (await response.json()) as {
          games: SteamCatalogEntry[];
          updatedAt?: string;
          source?: string;
        };

        setState({
          entries: payload.games ?? [],
          loading: false,
          updatedAt: payload.updatedAt,
          source: payload.source
        });
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        setState({
          entries: [],
          loading: false,
          error: error instanceof Error ? error.message : "Steam catalog is unavailable"
        });
      }
    }

    loadCatalog();

    return () => controller.abort();
  }, []);

  const byAppId = useMemo(() => {
    return new Map(state.entries.map((entry) => [entry.appId, entry]));
  }, [state.entries]);

  return {
    ...state,
    byAppId
  };
}
