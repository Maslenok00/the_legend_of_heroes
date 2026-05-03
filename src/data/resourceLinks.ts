import type { GameLink, TrailGame } from "../types";

const encode = (value: string) => encodeURIComponent(value);

export function characterDatabaseUrl(game: TrailGame) {
  return `https://kiseki.fandom.com/wiki/Special:Search?query=${encode(`${game.title} characters`)}`;
}

export function resourceLinksFor(game: TrailGame): GameLink[] {
  const links: GameLink[] = [
    {
      label: "Персонажи",
      kind: "characters",
      url: characterDatabaseUrl(game)
    },
    {
      label: "Карты и сундуки",
      kind: "maps",
      url: `https://steamcommunity.com/app/${game.appId}/guides/?searchText=${encode("map chest")}`
    },
    {
      label: "Прохождение",
      kind: "walkthrough",
      url: `https://steamcommunity.com/app/${game.appId}/guides/?searchText=${encode("walkthrough")}`
    },
    {
      label: "GameFAQs",
      kind: "walkthrough",
      url: `https://gamefaqs.gamespot.com/search?game=${encode(game.title)}`
    }
  ];

  if (game.slug === "trails-from-zero") {
    links.unshift({
      label: "Steam-гайд 100%",
      kind: "walkthrough",
      url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3610446298"
    });
  }

  return links;
}
