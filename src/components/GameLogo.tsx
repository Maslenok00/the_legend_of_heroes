import { useState } from "react";

type GameLogoProps = {
  appId: number;
  logoUrl?: string;
  title: string;
  shortTitle: string;
};

export function GameLogo({ appId, logoUrl, title, shortTitle }: GameLogoProps) {
  const [failed, setFailed] = useState(false);
  const source = logoUrl ?? `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appId}/logo.png`;

  if (failed) {
    return (
      <div className="fallback-logo" aria-label={title}>
        <span>{shortTitle}</span>
      </div>
    );
  }

  return (
    <div className="logo-stack">
      <img className="game-logo" src={source} alt={title} decoding="async" onError={() => setFailed(true)} />
      <span>{shortTitle}</span>
    </div>
  );
}
