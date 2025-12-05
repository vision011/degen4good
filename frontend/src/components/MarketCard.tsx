"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import type { Market } from "@/types/Market";

interface Props {
  market: Market;
}

export default function MarketCard({ market }: Props) {
  const yesPrice = market.outcomePrices[0] ?? 0;
  const noPrice = market.outcomePrices[1] ?? 0;

  const handleDonateClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          marketId: market.id,
          amount: 0.1,
        }),
      });

      if (!res.ok) {
        console.error(await res.text());
        alert("Donation failed");
        return;
      }

      const { txSignature } = await res.json();
      console.log("Donation tx:", txSignature);
      alert("Donation sent! Check console.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong sending the donation.");
    }
  };

  return (
    <div className="card">
      <div style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.4rem" }}>
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
        <span>Vol: ${market.volumeNum.toLocaleString()}</span>
        <span>
          YES {(yesPrice * 100).toFixed(1)}% • NO {(noPrice * 100).toFixed(1)}%
        </span>
      </div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Link href={`/predict/${market.id}`}>
          <button className="btn-secondary">Make a prediction</button>
        </Link>

        <button className="btn-primary" onClick={handleDonateClick}>
          Donate my loss
        </button>
      </div>
    </div>
  );
}
