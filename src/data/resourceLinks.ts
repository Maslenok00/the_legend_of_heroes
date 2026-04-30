import { steamGuideSpotlight } from "./trails";
import type { TrailGame } from "../types";

export type ResourceLink = {
  title: string;
  description: string;
  url: string;
  kind: "characters" | "maps" | "walkthrough" | "official";
};

const search = (value: string) => encodeURIComponent(value);

export function characterUrl(name: string) {
  return `https://kiseki.fandom.com/wiki/Special:Search?query=${search(name)}`;
}

export function characterDatabaseUrl(game: TrailGame) {
  return `https://kiseki.fandom.com/wiki/Special:Search?query=${search(`${game.title} characters`)}`;
}

export function resourceLinksFor(game: TrailGame): ResourceLink[] {
  const links: ResourceLink[] = [
    {
      title: "Карты, сундуки и чеклисты в Steam Guides",
      description: "Раздел руководств Steam по игре: карты зон, сундуки, рыбалка, журнал монстров и маршруты на 100%.",
      url: `https://steamcommunity.com/app/${game.appId}/guides/?searchText=${search("chest map 100%")}`,
      kind: "maps"
    },
    {
      title: "Прохождения в Steam Guides",
      description: "Подборка пользовательских прохождений, маршрутов достижений и списков пропускаемых вещей.",
      url: `https://steamcommunity.com/app/${game.appId}/guides/?searchText=${search("walkthrough guide")}`,
      kind: "walkthrough"
    },
    {
      title: "Поиск прохождений на GameFAQs",
      description: "Удобно для старых частей серии: пошаговые прохождения, списки коллекционных предметов и справочные материалы.",
      url: `https://gamefaqs.gamespot.com/search?game=${search(game.title)}`,
      kind: "walkthrough"
    },
    {
      title: "Поиск карт и гайдов на Neoseeker",
      description: "Дополнительный источник прохождений, карт, боссов и подсказок по побочным активностям.",
      url: `https://www.neoseeker.com/search/?q=${search(game.title)}`,
      kind: "maps"
    }
  ];

  if (game.slug === steamGuideSpotlight.gameSlug) {
    links.unshift({
      title: "Steam-гайд: 100% достижений и полное прохождение",
      description: "Руководство, которое ты просил вставить: маршрут по достижениям, сундукам и пропускаемым действиям.",
      url: steamGuideSpotlight.url,
      kind: "walkthrough"
    });
  }

  return links;
}
