import { ExternalLink, ShoppingBag } from "lucide-react";
import type { StoreOffer } from "../data/storePrices";

type PricePanelProps = {
  offers: StoreOffer[];
};

export function PricePanel({ offers }: PricePanelProps) {
  return (
    <section className="panel">
      <h2>
        <ShoppingBag size={18} />
        Где купить
      </h2>

      <div className="price-grid">
        {offers.map((offer) => (
          <a className="price-card" href={offer.url} key={offer.store} target="_blank" rel="noreferrer">
            <span>{offer.store}</span>
            <strong>{offer.price}</strong>
            <em>{offer.note}</em>
            <ExternalLink size={15} />
          </a>
        ))}
      </div>
    </section>
  );
}
