import type { SteamCatalogEntry, TrailGame } from "../types";

export type StoreOffer = {
  store: string;
  price: string;
  note: "точно" | "ориентир" | "нет в продаже";
  url: string;
};

type ExternalPrice = {
  store: string;
  usd?: number;
  url: string;
};

const encode = (value: string) => encodeURIComponent(value);

const stores: Record<string, ExternalPrice[]> = {
  default: [
    { store: "PlayStation", usd: 59.99, url: "https://store.playstation.com/en-us/search/" },
    { store: "Epic Games", usd: 59.99, url: "https://store.epicgames.com/en-US/browse" },
    { store: "GOG", usd: 39.99, url: "https://www.gog.com/en/games" }
  ],
  sky: [
    { store: "GOG", usd: 19.99, url: "https://www.gog.com/en/games" }
  ],
  crossbell: [
    { store: "PlayStation", usd: 39.99, url: "https://store.playstation.com/en-us/search/" },
    { store: "Nintendo", usd: 39.99, url: "https://www.nintendo.com/us/search/" },
    { store: "GOG", usd: 39.99, url: "https://www.gog.com/en/games" }
  ]
};

function rubPrice(usd: number, usdRub?: number) {
  if (!usdRub) {
    return `$${usd.toFixed(2)}`;
  }

  return `≈ ${Math.round(usd * usdRub).toLocaleString("ru-RU")} руб.`;
}

function externalStores(game: TrailGame) {
  if (game.arc === "liberl") return stores.sky;
  if (game.arc === "crossbell") return stores.crossbell;
  return stores.default;
}

function searchUrl(store: string, baseUrl: string, title: string) {
  if (store === "PlayStation") return `${baseUrl}${encode(title)}`;
  if (store === "Nintendo") return `${baseUrl}#q=${encode(title)}&p=1&cat=gme&sort=df`;
  if (store === "Epic Games") return `${baseUrl}?q=${encode(title)}&sortBy=relevance&sortDir=DESC`;
  return `${baseUrl}?query=${encode(title)}`;
}

export function storeOffersFor(game: TrailGame, steam?: SteamCatalogEntry, usdRub?: number): StoreOffer[] {
  const offers: StoreOffer[] = [
    {
      store: "Steam",
      price: steam?.price ?? "нет цены",
      note: "точно",
      url: steam?.steamUrl ?? `https://store.steampowered.com/app/${game.appId}`
    }
  ];

  externalStores(game).forEach((offer) => {
    offers.push({
      store: offer.store,
      price: offer.usd ? rubPrice(offer.usd, usdRub) : "нет цены",
      note: offer.usd ? "ориентир" : "нет в продаже",
      url: searchUrl(offer.store, offer.url, game.title)
    });
  });

  return offers;
}
