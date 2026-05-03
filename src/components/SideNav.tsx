import type { TrailGame } from "../types";

type SideNavProps = {
  games: TrailGame[];
  activeSlug: string;
  onSelect: (slug: string) => void;
};

export function SideNav({ games, activeSlug, onSelect }: SideNavProps) {
  return (
    <nav className="side-nav" aria-label="Игры серии">
      {games.map((game) => (
        <button
          className={game.slug === activeSlug ? "active" : ""}
          key={game.slug}
          onClick={() => onSelect(game.slug)}
          type="button"
        >
          <span>{game.order.toString().padStart(2, "0")}</span>
          {game.shortTitle}
        </button>
      ))}
    </nav>
  );
}
