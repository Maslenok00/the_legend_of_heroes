import { BookOpen, ExternalLink, Map, Users } from "lucide-react";
import type { GameLink, GameLinkKind } from "../types";

type LinkPanelProps = {
  links: GameLink[];
};

export function LinkPanel({ links }: LinkPanelProps) {
  return (
    <section className="panel">
      <h2>
        <BookOpen size={18} />
        Полезное
      </h2>

      <div className="link-grid">
        {links.map((link) => (
          <a className="link-card" href={link.url} key={`${link.kind}-${link.label}`} target="_blank" rel="noreferrer">
            <LinkIcon kind={link.kind} />
            <span>{link.label}</span>
            <ExternalLink size={15} />
          </a>
        ))}
      </div>
    </section>
  );
}

function LinkIcon({ kind }: { kind: GameLinkKind }) {
  if (kind === "characters") return <Users size={18} />;
  if (kind === "maps") return <Map size={18} />;
  return <BookOpen size={18} />;
}
