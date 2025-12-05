import type { Market } from "../../../types/Market";
import Link from "next/link";

const MOCK_MARKETS: Market[] = [
  {
    id: "1",
    question: "Will BTC be above $100k by 2026?",
    yesPrice: 0.42,
    noPrice: 0.58,
    volume: 123456,
  },
  {
    id: "2",
    question: "Will ETH flip BTC in market cap before 2030?",
    yesPrice: 0.21,
    noPrice: 0.79,
    volume: 78901,
  },
  {
    id: "3",
    question: "Will SOL stay in the top 5 by market cap through 2026?",
    yesPrice: 0.63,
    noPrice: 0.37,
    volume: 54321,
  },
];

interface PredictPageProps {
  params: { id: string };
}

export default function PredictPage({ params }: PredictPageProps) {
  const market = MOCK_MARKETS.find((m) => m.id === params.id);

  if (!market) {
    return (
      <div className="card">
        <h1 className="page-title">Market not found</h1>
        <p className="page-subtitle">
          This is a mock UI. In the real build we&apos;ll pull markets directly
          from Polymarket.
        </p>
        <Link href="/markets">
          <button className="btn-secondary" style={{ marginTop: "1rem" }}>
            Back to markets
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="card">
      <h1 className="page-title">Make your call</h1>
      <p className="page-subtitle" style={{ marginBottom: "1rem" }}>
        {market.question}
      </p>

      <p style={{ fontSize: "0.9rem", color: "#9ca3af", marginBottom: "1rem" }}>
        In degen4good, you use play points instead of real money. When your
        prediction would have lost on-chain, a small donation is sent from our
        pool to a selected charity.
      </p>

      <div className="grid" style={{ marginTop: "1rem" }}>
        <button className="btn-primary">
          I&apos;m bullish (YES • {market.yesPrice.toFixed(2)})
        </button>
        <button className="btn-secondary">
          I&apos;m bearish (NO • {market.noPrice.toFixed(2)})
        </button>
      </div>

      <p
        style={{
          marginTop: "1.3rem",
          fontSize: "0.8rem",
          color: "#9ca3af",
        }}
      >
        TODO (hackathon): hook this up to wallet login, on-chain donation logic,
        and Polymarket outcome data.
      </p>
    </div>
  );
}
