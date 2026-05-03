import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { arcLabels } from "../data/trails";
import { resourceLinksFor } from "../data/resourceLinks";
import { storeOffersFor } from "../data/storePrices";
import type { SteamCatalogEntry, TrailGame } from "../types";
import { ArtworkPanel } from "./ArtworkPanel";
import { LinkPanel } from "./LinkPanel";
import { PricePanel } from "./PricePanel";

type GameSlideProps = {
  game: TrailGame;
  steam?: SteamCatalogEntry;
  usdRub?: number;
  onActive: (slug: string) => void;
};

export function GameSlide({ game, steam, usdRub, onActive }: GameSlideProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const links = useMemo(() => resourceLinksFor(game), [game]);
  const offers = useMemo(() => storeOffersFor(game, steam, usdRub), [game, steam, usdRub]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio > 0.18);

        if (entry.intersectionRatio > 0.55) {
          onActive(game.slug);
        }
      },
      { threshold: [0.18, 0.55] }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [game.slug, onActive]);

  const style = {
    "--game-color": game.color,
    "--game-accent": game.accent,
    "--location-art": `url("${game.background}")`
  } as CSSProperties;

  return (
    <section className={`game-slide ${isVisible ? "is-visible" : ""}`} id={game.slug} ref={sectionRef} style={style}>
      <div className="location-bg" aria-hidden="true" />

      <div className="slide-content">
        <ArtworkPanel game={game} />

        <div className="game-info">
          <p className="game-kicker">
            {game.order.toString().padStart(2, "0")} / {arcLabels[game.arc]} / {game.place}
          </p>
          <h1>{game.title}</h1>

          <div className="panels">
            <PricePanel offers={offers} />
            <LinkPanel links={links} />
          </div>
        </div>
      </div>
    </section>
  );
}
