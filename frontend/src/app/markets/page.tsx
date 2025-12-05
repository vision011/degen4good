import MarketCard from "../../components/MarketCard";
import { fetchTopMarkets } from "../../lib/polymarket";

export default async function MarketsPage() {
  const markets = await fetchTopMarkets(5);

  return (
    <>
      {/* Intro card */}
      <div className="card">
        <h1 className="page-title">Top Polymarket Markets</h1>
        <p className="page-subtitle">
          Live markets pulled directly from Polymarket. degen4good lets you play
          with prediction data using points and every wrong call helps route
          donations toward real world causes.
        </p>
      </div>

      {/* Market grid */}
      <div className="grid grid-2" style={{ marginTop: "1rem" }}>
        {markets.map((m) => (
          <MarketCard key={m.id} market={m} />
        ))}
      </div>
    </>
  );
}
