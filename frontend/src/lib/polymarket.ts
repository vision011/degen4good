import type { Market } from "@/types/Market";

export async function fetchTopMarkets(limit: number = 10): Promise<Market[]> {
  const res = await fetch(
    `https://clob.polymarket.com/markets?limit=${limit}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Polymarket data");
  }

  const json = await res.json();
  const marketsArray = json.data;

  if (!Array.isArray(marketsArray)) {
    console.error("Unexpected Polymarket API format:", json);
    throw new Error("Invalid API response from Polymarket");
  }

  return marketsArray.map((m: any) => ({
    id: m.id,
    question: m.question,
    outcomePrices: m.outcomePrices ?? [0, 0],
    volumeNum: m.volumeNum ?? 0,
  }));
}
