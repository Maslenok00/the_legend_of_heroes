import { ExternalLink, ScrollText } from "lucide-react";
import type { SteamCatalogEntry, SteamGuideSpotlight as Guide } from "../types";

type SteamGuideSpotlightProps = {
  guide: Guide;
  steam?: SteamCatalogEntry;
};

export function SteamGuideSpotlight({ guide, steam }: SteamGuideSpotlightProps) {
  return (
    <section className="guide-band compact-guide" id="steam-guide">
      <div className="guide-copy">
        <div className="eyebrow">
          <ScrollText size={16} />
          Гайд для Trails from Zero
        </div>
        <h2>{guide.title}</h2>
      </div>
      <div className="guide-actions">
        <a className="primary-link" href={guide.url} target="_blank" rel="noreferrer">
          Открыть гайд <ExternalLink size={16} />
        </a>
        {steam && (
          <a className="ghost-link" href={steam.steamUrl} target="_blank" rel="noreferrer">
            Страница игры <ExternalLink size={16} />
          </a>
        )}
      </div>
    </section>
  );
}
