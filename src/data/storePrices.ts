import type { SteamCatalogEntry, TrailGame } from "../types";

export type StoreOffer = {
  store: string;
  priceRub: string;
  note?: string;
  url: string;
  exact: boolean;
};

type ExternalOffer = {
  store: string;
  usd?: number;
  unavailable?: string;
  url: string;
};

const search = (value: string) => encodeURIComponent(value);
const psSearch = (title: string) => `https://store.playstation.com/en-us/search/${search(title)}`;
const epicSearch = (title: string) => `https://store.epicgames.com/en-US/browse?q=${search(title)}&sortBy=relevance&sortDir=DESC`;
const gogSearch = (title: string) => `https://www.gog.com/en/games?query=${search(title)}`;
const nintendoSearch = (title: string) => `https://www.nintendo.com/us/search/#q=${search(title)}&p=1&cat=gme&sort=df`;

const externalPrices: Record<string, ExternalOffer[]> = {
  "trails-in-the-sky-fc": [
    { store: "GOG", usd: 19.99, url: gogSearch("The Legend of Heroes Trails in the Sky") },
    { store: "PlayStation Store", unavailable: "нет современной цифровой версии", url: psSearch("The Legend of Heroes Trails in the Sky") },
    { store: "Epic Games Store", unavailable: "нет страницы игры", url: epicSearch("The Legend of Heroes Trails in the Sky") }
  ],
  "trails-in-the-sky-sc": [
    { store: "GOG", usd: 29.99, url: gogSearch("The Legend of Heroes Trails in the Sky SC") },
    { store: "PlayStation Store", unavailable: "нет современной цифровой версии", url: psSearch("The Legend of Heroes Trails in the Sky SC") },
    { store: "Epic Games Store", unavailable: "нет страницы игры", url: epicSearch("The Legend of Heroes Trails in the Sky SC") }
  ],
  "trails-in-the-sky-3rd": [
    { store: "GOG", usd: 29.99, url: gogSearch("The Legend of Heroes Trails in the Sky the 3rd") },
    { store: "PlayStation Store", unavailable: "нет современной цифровой версии", url: psSearch("The Legend of Heroes Trails in the Sky the 3rd") },
    { store: "Epic Games Store", unavailable: "нет страницы игры", url: epicSearch("The Legend of Heroes Trails in the Sky the 3rd") }
  ],
  "trails-from-zero": [
    { store: "PlayStation Store", usd: 39.99, url: psSearch("The Legend of Heroes Trails from Zero") },
    { store: "Nintendo eShop", usd: 39.99, url: nintendoSearch("The Legend of Heroes Trails from Zero") },
    { store: "GOG", usd: 39.99, url: gogSearch("The Legend of Heroes Trails from Zero") }
  ],
  "trails-to-azure": [
    { store: "PlayStation Store", usd: 39.99, url: psSearch("The Legend of Heroes Trails to Azure") },
    { store: "Nintendo eShop", usd: 39.99, url: nintendoSearch("The Legend of Heroes Trails to Azure") },
    { store: "GOG", usd: 39.99, url: gogSearch("The Legend of Heroes Trails to Azure") }
  ],
  "trails-of-cold-steel": [
    { store: "PlayStation Store", usd: 39.99, url: psSearch("The Legend of Heroes Trails of Cold Steel") },
    { store: "GOG", usd: 39.99, url: gogSearch("The Legend of Heroes Trails of Cold Steel") }
  ],
  "trails-of-cold-steel-ii": [
    { store: "PlayStation Store", usd: 39.99, url: psSearch("The Legend of Heroes Trails of Cold Steel II") },
    { store: "GOG", usd: 39.99, url: gogSearch("The Legend of Heroes Trails of Cold Steel II") }
  ],
  "trails-of-cold-steel-iii": [
    { store: "PlayStation Store", usd: 59.99, url: psSearch("The Legend of Heroes Trails of Cold Steel III") },
    { store: "Epic Games Store", usd: 59.99, url: epicSearch("The Legend of Heroes Trails of Cold Steel III") },
    { store: "Nintendo eShop", usd: 59.99, url: nintendoSearch("The Legend of Heroes Trails of Cold Steel III") },
    { store: "GOG", usd: 59.99, url: gogSearch("The Legend of Heroes Trails of Cold Steel III") }
  ],
  "trails-of-cold-steel-iv": [
    { store: "PlayStation Store", usd: 59.99, url: psSearch("The Legend of Heroes Trails of Cold Steel IV") },
    { store: "Epic Games Store", usd: 59.99, url: epicSearch("The Legend of Heroes Trails of Cold Steel IV") },
    { store: "Nintendo eShop", usd: 59.99, url: nintendoSearch("The Legend of Heroes Trails of Cold Steel IV") },
    { store: "GOG", usd: 59.99, url: gogSearch("The Legend of Heroes Trails of Cold Steel IV") }
  ],
  "trails-into-reverie": [
    { store: "PlayStation Store", usd: 59.99, url: psSearch("The Legend of Heroes Trails into Reverie") },
    { store: "Epic Games Store", usd: 59.99, url: epicSearch("The Legend of Heroes Trails into Reverie") },
    { store: "Nintendo eShop", usd: 59.99, url: nintendoSearch("The Legend of Heroes Trails into Reverie") },
    { store: "GOG", usd: 59.99, url: gogSearch("The Legend of Heroes Trails into Reverie") }
  ],
  "trails-through-daybreak": [
    { store: "PlayStation Store", usd: 59.99, url: "https://store.playstation.com/en-us/concept/10001886/" },
    { store: "Epic Games Store", usd: 59.99, url: "https://store.epicgames.com/p/the-legend-of-heroes-trails-through-daybreak-dac84d" },
    { store: "Nintendo eShop", usd: 59.99, url: nintendoSearch("The Legend of Heroes Trails through Daybreak") },
    { store: "GOG", usd: 59.99, url: gogSearch("The Legend of Heroes Trails through Daybreak") }
  ],
  "trails-through-daybreak-ii": [
    { store: "PlayStation Store", usd: 59.99, url: psSearch("The Legend of Heroes Trails through Daybreak II") },
    { store: "Epic Games Store", usd: 59.99, url: epicSearch("The Legend of Heroes Trails through Daybreak II") },
    { store: "Nintendo eShop", usd: 59.99, url: nintendoSearch("The Legend of Heroes Trails through Daybreak II") },
    { store: "GOG", usd: 59.99, url: gogSearch("The Legend of Heroes Trails through Daybreak II") }
  ],
  "trails-beyond-the-horizon": [
    { store: "PlayStation Store", usd: 59.99, url: psSearch("The Legend of Heroes Trails beyond the Horizon") },
    { store: "Epic Games Store", usd: 59.99, url: "https://store.epicgames.com/en-US/p/the-legend-of-heroes-trails-beyond-the-horizon" },
    { store: "Nintendo eShop", usd: 59.99, url: nintendoSearch("The Legend of Heroes Trails beyond the Horizon") },
    { store: "GOG", usd: 59.99, url: gogSearch("The Legend of Heroes Trails beyond the Horizon") }
  ]
};

function rubFromUsd(usd: number, usdRub?: number) {
  if (!usdRub) {
    return `$${usd.toFixed(2)}`;
  }

  return `≈ ${Math.round(usd * usdRub).toLocaleString("ru-RU")} руб.`;
}

export function storeOffersFor(game: TrailGame, steam?: SteamCatalogEntry, usdRub?: number): StoreOffer[] {
  const offers: StoreOffer[] = [
    {
      store: "Steam",
      priceRub: steam?.price ?? "нет цены",
      note: "точно",
      url: steam?.steamUrl ?? `https://store.steampowered.com/app/${game.appId}`,
      exact: true
    }
  ];

  for (const offer of externalPrices[game.slug] ?? []) {
    offers.push({
      store: offer.store,
      priceRub: offer.usd ? rubFromUsd(offer.usd, usdRub) : offer.unavailable ?? "нет цены",
      note: offer.usd ? "ориентир" : undefined,
      url: offer.url,
      exact: false
    });
  }

  return offers;
}
