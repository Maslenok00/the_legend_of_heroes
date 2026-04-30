export type ArcKey = "liberl" | "crossbell" | "erebonia" | "reverie" | "calvard";

export type TrailCharacter = {
  name: string;
  role: string;
  faction: string;
  note: string;
  tags: string[];
};

export type TrailMapNode = {
  id: string;
  x: number;
  y: number;
  kind: "chest" | "boss" | "quest" | "camp";
  label: string;
  loot?: string;
};

export type TrailMap = {
  name: string;
  region: string;
  focus: string;
  chestCount: number;
  completionNote: string;
  route: string[];
  nodes: TrailMapNode[];
};

export type WalkthroughChapter = {
  chapter: string;
  pace: string;
  goals: string[];
  missables: string[];
  bossPrep: string;
};

export type TrailGame = {
  slug: string;
  order: number;
  appId: number;
  title: string;
  shortTitle: string;
  arc: ArcKey;
  arcTitle: string;
  place: string;
  releaseWindow: string;
  color: string;
  accent: string;
  summary: string;
  themes: string[];
  remakeAppId?: number;
  characters: TrailCharacter[];
  maps: TrailMap[];
  walkthrough: WalkthroughChapter[];
};

export type SteamCatalogEntry = {
  appId: number;
  name: string;
  releaseDate?: string;
  developers: string[];
  publishers: string[];
  genres: string[];
  categories: string[];
  price?: string;
  shortDescription?: string;
  headerImage?: string;
  capsuleImage?: string;
  background?: string;
  screenshots: string[];
  website?: string;
  metacritic?: number;
  recommendations?: number;
  steamUrl: string;
};

export type SteamGuideSpotlight = {
  title: string;
  gameSlug: string;
  url: string;
  steamId: string;
  sourceLabel: string;
  status: string;
  highlights: string[];
  routeCards: {
    title: string;
    summary: string;
  }[];
};
