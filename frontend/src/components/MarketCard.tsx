import Link from "next/link";
import type { Market } from "../types/Market";

interface Props {
  market: Market;
}

export default function MarketCard({ market }: Props) {
  return (
    <div className="card">
      <div
        style={{
          fontSize: "0.95rem",
          fontWeight: 600,
          marginBottom: "0.4rem",
        }}
      >
        {market.question}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.85rem",
          color: "#9ca3af",
          marginBottom: "0.75rem",
        }}
      >
        <span>Vol: ${market.volume.toLocaleString()}</span>
        <span>
          YES {market.yesPrice.toFixed(2)} • NO {market.noPrice.toFixed(2)}
        </span>
      </div>
      <Link href={`/predict/${market.id}`}>
        <button className="btn-secondary" style={{ marginTop: "0.25rem" }}>
          Make a prediction
        </button>
      </Link>
    </div>
  );
}
