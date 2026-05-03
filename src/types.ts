export type ArcKey = "liberl" | "crossbell" | "erebonia" | "reverie" | "calvard";

export type GameLinkKind = "characters" | "maps" | "walkthrough";

export type GameLink = {
  label: string;
  kind: GameLinkKind;
  url: string;
};

export type TrailGame = {
  slug: string;
  order: number;
  appId: number;
  title: string;
  shortTitle: string;
  arc: ArcKey;
  place: string;
  color: string;
  accent: string;
  background: string;
  foreground: string;
  logo?: string;
  remakeAppId?: number;
};

export type SteamCatalogEntry = {
  appId: number;
  name: string;
  releaseDate?: string;
  price?: string;
  steamUrl: string;
};
