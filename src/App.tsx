import { useCallback, useEffect, useRef, useState } from "react";
import { GameSlide } from "./components/GameSlide";
import { SideNav } from "./components/SideNav";
import { TopBar } from "./components/TopBar";
import { trailsGames } from "./data/trails";
import { useExchangeRate } from "./hooks/useExchangeRate";
import { useSteamCatalog } from "./hooks/useSteamCatalog";

export function App() {
  const [activeSlug, setActiveSlug] = useState(trailsGames[0].slug);
  const activeSlugRef = useRef(activeSlug);
  const steamCatalog = useSteamCatalog();
  const usdRub = useExchangeRate();

  const handleActiveGame = useCallback((slug: string) => setActiveSlug(slug), []);
  const scrollToGame = useCallback((slug: string) => {
    activeSlugRef.current = slug;
    setActiveSlug(slug);
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    activeSlugRef.current = activeSlug;
  }, [activeSlug]);

  useEffect(() => {
    let isLocked = false;
    let unlockTimer = 0;

    const scrollByOneSlide = (direction: 1 | -1) => {
      const currentIndex = trailsGames.findIndex((game) => game.slug === activeSlugRef.current);
      const safeIndex = currentIndex === -1 ? 0 : currentIndex;
      const nextIndex = Math.min(Math.max(safeIndex + direction, 0), trailsGames.length - 1);
      const nextGame = trailsGames[nextIndex];

      if (nextGame.slug === activeSlugRef.current) {
        return;
      }

      scrollToGame(nextGame.slug);
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaY) < 8) {
        return;
      }

      event.preventDefault();

      if (isLocked) {
        return;
      }

      isLocked = true;
      scrollByOneSlide(event.deltaY > 0 ? 1 : -1);
      window.clearTimeout(unlockTimer);
      unlockTimer = window.setTimeout(() => {
        isLocked = false;
      }, 820);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.clearTimeout(unlockTimer);
    };
  }, [scrollToGame]);

  return (
    <div className="app-shell">
      <TopBar />
      <SideNav activeSlug={activeSlug} games={trailsGames} onSelect={scrollToGame} />

      <main className="slides">
        {trailsGames.map((game) => (
          <GameSlide
            game={game}
            key={game.slug}
            onActive={handleActiveGame}
            steam={steamCatalog.byAppId.get(game.appId)}
            usdRub={usdRub}
          />
        ))}
      </main>
    </div>
  );
}
