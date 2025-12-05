import { fetchTopMarkets } from "@/lib/polymarket";
import Link from "next/link";

export default async function PredictPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch a batch of markets (simple hackathon approach)
  const markets = await fetchTopMarkets(50);
  const market = markets.find((m) => m.id === id);

  if (!market) {
    return (
      <div className="card">
        <h1 className="page-title">Market not found</h1>
        <p className="page-subtitle">
          This market may have expired or been removed.
        </p>
        <Link href="/markets">
          <button className="btn-secondary" style={{ marginTop: "1rem" }}>
            Back to markets
          </button>
        </Link>
      </div>
    );
  }

  const yes = market.outcomePrices[0] ?? 0;
  const no = market.outcomePrices[1] ?? 0;

  return (
    <div className="card">
      <h1 className="page-title">Make your call</h1>
      <p className="page-subtitle" style={{ marginBottom: "1rem" }}>
        {market.question}
      </p>

      <p
        style={{ fontSize: "0.9rem", color: "#9ca3af", marginBottom: "1rem" }}
      >
        In degen4good, you use play points instead of real money. When your
        prediction would have lost on chain, a small donation is sent from our
        pool to a selected charity.
      </p>

      <div className="grid" style={{ marginTop: "1rem" }}>
        <button className="btn-primary">
          I&apos;m bullish (YES • {(yes * 100).toFixed(1)}%)
        </button>
        <button className="btn-secondary">
          I&apos;m bearish (NO • {(no * 100).toFixed(1)}%)
        </button>
      </div>

      <p
        style={{
          marginTop: "1.3rem",
          fontSize: "0.8rem",
          color: "#9ca3af",
        }}
      >
        TODO: hook this up to wallet login, on-chain donation logic, and live
        Polymarket outcome data.
      </p>
    </div>
  );
}
