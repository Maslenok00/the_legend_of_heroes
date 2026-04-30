import type { CSSProperties } from "react";
import { useCallback, useMemo, useState } from "react";
import { DatabaseZap, ExternalLink, RefreshCcw, Satellite, ShieldCheck, Sparkles } from "lucide-react";
import { GameSection } from "./components/GameSection";
import { Starfield } from "./components/Starfield";
import { SteamGuideSpotlight } from "./components/SteamGuideSpotlight";
import { TimelineNav } from "./components/TimelineNav";
import { steamGuideSpotlight, trailsGames } from "./data/trails";
import { gameVisuals } from "./data/visuals";
import { useExchangeRate } from "./hooks/useExchangeRate";
import { useSteamCatalog } from "./hooks/useSteamCatalog";

export function App() {
  const [activeSlug, setActiveSlug] = useState(trailsGames[0].slug);
  const steamCatalog = useSteamCatalog();
  const usdRub = useExchangeRate();
  const activeGame = trailsGames.find((game) => game.slug === activeSlug) ?? trailsGames[0];
  const zeroSteam = steamCatalog.byAppId.get(1668510);

  const background = useMemo(() => {
    return gameVisuals[activeGame.slug]?.wallpaper;
  }, [activeGame.slug]);

  const handleActive = useCallback((slug: string) => {
    setActiveSlug(slug);
  }, []);

  return (
    <div className="app-shell" style={{ "--active-art": background ? `url("${background}")` : "none" } as CSSProperties}>
      <Starfield />
      <div className="ambient-art" aria-hidden="true" />
      <header className="site-hero">
        <nav className="topbar">
          <a className="brand-lockup" href="#top" aria-label="Атлас Земурии">
            <span className="brand-sigil">АЗ</span>
            <span>Атлас Земурии</span>
          </a>
          <div className="topbar-links">
            <a href="#steam-guide">Steam-гайд</a>
            <a href={`https://store.steampowered.com/app/${activeGame.appId}`} target="_blank" rel="noreferrer">
              Текущая игра <ExternalLink size={14} />
            </a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <div className="eyebrow">
              <Satellite size={17} />
              Хронология Trails / магазины / гайды
            </div>
            <h1>Атлас серии The Legend of Heroes: Trails</h1>
            <div className="hero-actions">
              <a className="primary-link" href="#trails-in-the-sky-fc">
                Начать с Sky FC
              </a>
              <a className="ghost-link" href="#trails-beyond-the-horizon">
                К последней игре
              </a>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <span>
            <Sparkles size={16} />
            {trailsGames.length} игр
          </span>
          <span>
            <DatabaseZap size={16} />
            {trailsGames.reduce((count, game) => count + game.characters.length, 0)} персонажей
          </span>
          <span>
            <ShieldCheck size={16} />
            внешние базы и гайды
          </span>
          <span>
            <RefreshCcw size={16} />
            цены в рублях
          </span>
        </div>
      </header>

      <SteamGuideSpotlight guide={steamGuideSpotlight} steam={zeroSteam} />

      <div className="timeline-shell">
        <TimelineNav activeSlug={activeSlug} games={trailsGames} />
        <main className="game-stack">
          {trailsGames.map((game, index) => (
            <GameSection
              active={activeSlug === game.slug}
              game={game}
              index={index}
              key={game.slug}
              onActive={handleActive}
              steam={steamCatalog.byAppId.get(game.appId)}
              usdRub={usdRub}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
