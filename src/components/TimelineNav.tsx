import type { CSSProperties } from "react";
import type { TrailGame } from "../types";

type TimelineNavProps = {
  games: TrailGame[];
  activeSlug: string;
};

export function TimelineNav({ games, activeSlug }: TimelineNavProps) {
  return (
    <nav className="timeline-nav" aria-label="Хронология Trails">
      {games.map((game) => (
        <button
          className={game.slug === activeSlug ? "timeline-dot is-active" : "timeline-dot"}
          key={game.slug}
          onClick={() => document.getElementById(game.slug)?.scrollIntoView({ behavior: "smooth", block: "start" })}
          style={
            {
              "--dot-color": game.color,
              "--dot-accent": game.accent
            } as CSSProperties
          }
          title={game.title}
          type="button"
        >
          <span>{game.order.toString().padStart(2, "0")}</span>
          <strong>{game.shortTitle}</strong>
        </button>
      ))}
    </nav>
  );
}
