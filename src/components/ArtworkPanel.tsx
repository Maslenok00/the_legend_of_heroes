import type { TrailGame } from "../types";
import { GameLogo } from "./GameLogo";

type ArtworkPanelProps = {
  game: TrailGame;
};

export function ArtworkPanel({ game }: ArtworkPanelProps) {
  return (
    <aside className="artwork-panel" aria-label={`Постер ${game.shortTitle}`}>
      <img className="poster-art" src={game.foreground} alt="" loading="eager" decoding="async" />
      <div className="logo-card">
        <GameLogo appId={game.appId} logoUrl={game.logo} shortTitle={game.shortTitle} title={game.title} />
      </div>
    </aside>
  );
}
