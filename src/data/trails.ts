import type { TrailGame } from "../types";

const steamAsset = (appId: number, file: string) =>
  `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/${file}`;

const steamAssetWithHash = (appId: number, hash: string, file: string) =>
  `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/${hash}/${file}`;

const steamPoster = (appId: number) => steamAsset(appId, "library_600x900_2x.jpg");
const steamHero = (appId: number) => steamAsset(appId, "library_hero.jpg");

export const trailsGames: TrailGame[] = [
  {
    slug: "trails-in-the-sky-fc",
    order: 1,
    appId: 251150,
    title: "The Legend of Heroes: Trails in the Sky FC",
    shortTitle: "Sky FC",
    arc: "liberl",
    place: "Либерл",
    color: "#2dd4bf",
    accent: "#f7c948",
    background: steamHero(251150),
    foreground: steamPoster(251150),
    remakeAppId: 3375780
  },
  {
    slug: "trails-in-the-sky-sc",
    order: 2,
    appId: 251290,
    title: "The Legend of Heroes: Trails in the Sky SC",
    shortTitle: "Sky SC",
    arc: "liberl",
    place: "Либерл",
    color: "#fb7185",
    accent: "#60a5fa",
    background: steamHero(251290),
    foreground: steamPoster(251290)
  },
  {
    slug: "trails-in-the-sky-3rd",
    order: 3,
    appId: 436670,
    title: "The Legend of Heroes: Trails in the Sky the 3rd",
    shortTitle: "Sky 3rd",
    arc: "liberl",
    place: "Phantasma",
    color: "#a78bfa",
    accent: "#f97316",
    background: steamHero(436670),
    foreground: steamPoster(436670)
  },
  {
    slug: "trails-from-zero",
    order: 4,
    appId: 1668510,
    title: "The Legend of Heroes: Trails from Zero",
    shortTitle: "Zero",
    arc: "crossbell",
    place: "Кроссбелл",
    color: "#38bdf8",
    accent: "#f43f5e",
    background: steamAsset(1668510, "library_hero_2x.jpg"),
    foreground: steamPoster(1668510)
  },
  {
    slug: "trails-to-azure",
    order: 5,
    appId: 1668520,
    title: "The Legend of Heroes: Trails to Azure",
    shortTitle: "Azure",
    arc: "crossbell",
    place: "Кроссбелл",
    color: "#0ea5e9",
    accent: "#facc15",
    background: steamAsset(1668520, "library_hero_2x.jpg"),
    foreground: steamPoster(1668520)
  },
  {
    slug: "trails-of-cold-steel",
    order: 6,
    appId: 538680,
    title: "The Legend of Heroes: Trails of Cold Steel",
    shortTitle: "Cold Steel",
    arc: "erebonia",
    place: "Эребония",
    color: "#ef4444",
    accent: "#22c55e",
    background: steamHero(538680),
    foreground: steamPoster(538680)
  },
  {
    slug: "trails-of-cold-steel-ii",
    order: 7,
    appId: 748490,
    title: "The Legend of Heroes: Trails of Cold Steel II",
    shortTitle: "Cold Steel II",
    arc: "erebonia",
    place: "Эребония",
    color: "#f97316",
    accent: "#14b8a6",
    background: steamHero(748490),
    foreground: steamPoster(748490)
  },
  {
    slug: "trails-of-cold-steel-iii",
    order: 8,
    appId: 991270,
    title: "The Legend of Heroes: Trails of Cold Steel III",
    shortTitle: "Cold Steel III",
    arc: "erebonia",
    place: "Эребония",
    color: "#8b5cf6",
    accent: "#34d399",
    background: steamHero(991270),
    foreground: steamPoster(991270)
  },
  {
    slug: "trails-of-cold-steel-iv",
    order: 9,
    appId: 1198090,
    title: "The Legend of Heroes: Trails of Cold Steel IV",
    shortTitle: "Cold Steel IV",
    arc: "erebonia",
    place: "Эребония",
    color: "#dc2626",
    accent: "#fbbf24",
    background: steamHero(1198090),
    foreground: steamPoster(1198090)
  },
  {
    slug: "trails-into-reverie",
    order: 10,
    appId: 1668540,
    title: "The Legend of Heroes: Trails into Reverie",
    shortTitle: "Reverie",
    arc: "reverie",
    place: "Кроссбелл и Эребония",
    color: "#06b6d4",
    accent: "#c084fc",
    background: steamAsset(1668540, "library_hero_2x.jpg"),
    foreground: steamPoster(1668540)
  },
  {
    slug: "trails-through-daybreak",
    order: 11,
    appId: 2138610,
    title: "The Legend of Heroes: Trails through Daybreak",
    shortTitle: "Daybreak",
    arc: "calvard",
    place: "Кальвард",
    color: "#f59e0b",
    accent: "#06b6d4",
    background: steamAsset(2138610, "library_hero_2x.jpg"),
    foreground: steamPoster(2138610)
  },
  {
    slug: "trails-through-daybreak-ii",
    order: 12,
    appId: 2668430,
    title: "The Legend of Heroes: Trails through Daybreak II",
    shortTitle: "Daybreak II",
    arc: "calvard",
    place: "Кальвард",
    color: "#ec4899",
    accent: "#22d3ee",
    background: steamAsset(2668430, "library_hero_2x.jpg"),
    foreground: steamPoster(2668430)
  },
  {
    slug: "trails-beyond-the-horizon",
    order: 13,
    appId: 3316940,
    title: "The Legend of Heroes: Trails beyond the Horizon",
    shortTitle: "Beyond the Horizon",
    arc: "calvard",
    place: "Кальвард",
    color: "#fde047",
    accent: "#818cf8",
    background: steamAssetWithHash(3316940, "6b2da2ea65997f7e0e62c36e0ed7b52c7aaaf476", "library_hero_2x.jpg"),
    foreground: steamAssetWithHash(3316940, "2b557295293892e14ec977fea4651c2dd5c73799", "library_600x900.jpg"),
    logo: "https://thelegendofheroes.com/horizon/img/horizon-logo.webp"
  }
];

export const arcLabels: Record<TrailGame["arc"], string> = {
  liberl: "Либерл",
  crossbell: "Кроссбелл",
  erebonia: "Эребония",
  reverie: "Reverie",
  calvard: "Кальвард"
};
