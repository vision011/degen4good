// src/app/api/markets/route.ts
import { NextResponse } from "next/server";
import { fetchTopMarkets } from "@/lib/polymarket";

export async function GET() {
  try {
    const markets = await fetchTopMarkets(5);
    return NextResponse.json({ markets });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to load markets" },
      { status: 500 }
    );
  }
}
