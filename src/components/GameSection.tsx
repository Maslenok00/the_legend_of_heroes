import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { BookOpen, ExternalLink, Gamepad2, Link as LinkIcon, Map, Search, Sparkles, Users } from "lucide-react";
import { characterDatabaseUrl, resourceLinksFor } from "../data/resourceLinks";
import { storeOffersFor } from "../data/storePrices";
import { arcTitlesRu, gameVisuals } from "../data/visuals";
import type { ResourceLink } from "../data/resourceLinks";
import type { SteamCatalogEntry, TrailGame } from "../types";
import { GameLogo } from "./GameLogo";

type GameSectionProps = {
  game: TrailGame;
  steam?: SteamCatalogEntry;
  usdRub?: number;
  index: number;
  active: boolean;
  onActive: (slug: string) => void;
};

export function GameSection({ game, steam, usdRub, index, active, onActive }: GameSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(index === 0);
  const visual = gameVisuals[game.slug];
  const links = useMemo(() => resourceLinksFor(game), [game]);
  const offers = useMemo(() => storeOffersFor(game, steam, usdRub), [game, steam, usdRub]);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);

        if (entry.isIntersecting && entry.intersectionRatio > 0.32) {
          onActive(game.slug);
        }
      },
      {
        threshold: [0.18, 0.32, 0.56, 0.78],
        rootMargin: "-8% 0px -24% 0px"
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [game.slug, onActive]);

  const style = {
    "--game-color": game.color,
    "--game-accent": game.accent,
    "--game-art": `url("${visual?.wallpaper}")`
  } as CSSProperties;

  return (
    <section
      className={`game-section ${visible ? "is-visible" : ""} ${active ? "is-current" : ""}`}
      id={game.slug}
      ref={ref}
      style={style}
    >
      <div className="game-art-layer" aria-hidden="true" />
      <div className="section-rune" aria-hidden="true">
        {game.order.toString().padStart(2, "0")}
      </div>

      <div className="game-layout">
        <header className="game-identity">
          <div className="logo-plane">
            <GameLogo appId={game.appId} logoUrl={visual?.logo} shortTitle={game.shortTitle} title={game.title} />
          </div>
          <div className="identity-copy">
            <div className="eyebrow">
              <Sparkles size={16} />
              {arcTitlesRu[game.arc]} / {game.place}
            </div>
            <h2>{game.title}</h2>
            {game.remakeAppId && (
              <a
                className="remake-link"
                href={`https://store.steampowered.com/app/${game.remakeAppId}`}
                target="_blank"
                rel="noreferrer"
              >
                Ремейк Sky FC <ExternalLink size={14} />
              </a>
            )}
          </div>
        </header>

        <aside className="price-panel" aria-label="Цены по площадкам">
          <div className="panel-title">
            <Gamepad2 size={19} />
            Где купить
          </div>
          <div className="store-grid">
            {offers.map((offer) => (
              <a className="store-card" href={offer.url} key={`${game.slug}-${offer.store}`} target="_blank" rel="noreferrer">
                <span>{offer.store}</span>
                <strong>{offer.priceRub}</strong>
                {offer.note && <em>{offer.note}</em>}
                <ExternalLink size={15} />
              </a>
            ))}
          </div>
        </aside>

        <div className="database-shell link-shell">
          <div className="panel-title">
            <LinkIcon size={19} />
            Быстрые ссылки
          </div>
          <div className="resource-grid">
            <a className="resource-card characters" href={characterDatabaseUrl(game)} target="_blank" rel="noreferrer">
              <Users size={20} />
              <span>персонажи</span>
              <h3>Открыть базу персонажей</h3>
              <strong>
                Перейти <ExternalLink size={15} />
              </strong>
            </a>
            {links.map((link) => (
              <ResourceCard game={game} key={`${game.slug}-${link.title}`} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourceCard({ game, link }: { game: TrailGame; link: ResourceLink }) {
  return (
    <a className={`resource-card ${link.kind}`} href={link.url} target="_blank" rel="noreferrer">
      <ResourceIcon kind={link.kind} />
      <span>{resourceLabel(link.kind)}</span>
      <h3>{game.slug === "trails-from-zero" && link.url.includes("3610446298") ? "Гайд из Steam" : link.title}</h3>
      <strong>
        Перейти <ExternalLink size={15} />
      </strong>
    </a>
  );
}

function ResourceIcon({ kind }: { kind: ResourceLink["kind"] }) {
  if (kind === "characters") return <Users size={20} />;
  if (kind === "maps") return <Map size={20} />;
  if (kind === "walkthrough") return <BookOpen size={20} />;
  return <Search size={20} />;
}

function resourceLabel(kind: ResourceLink["kind"]) {
  if (kind === "characters") return "персонажи";
  if (kind === "maps") return "карты";
  if (kind === "walkthrough") return "прохождение";
  return "источник";
}
