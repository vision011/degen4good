import MarketCard from "../../components/MarketCard";
import type { Market } from "../../types/Market";

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

export default function MarketsPage() {
  return (
    <>
      <div className="card">
        <h1 className="page-title">Top markets remix</h1>
        <p className="page-subtitle">
          These are example markets that degen4good can mirror from Polymarket.
          Make free predictions and route losses toward real-world good.
        </p>
      </div>

      <div className="grid grid-2">
        {MOCK_MARKETS.map((m) => (
          <MarketCard key={m.id} market={m} />
        ))}
      </div>
    </>
  );
}
