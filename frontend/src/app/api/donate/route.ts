import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { marketId, amount } = await req.json();

    // Simulate a short delay (feels real)
    await new Promise((res) => setTimeout(res, 600));

    // Return a fake devnet signature
    const fakeSignature =
      "MockTx_" + Math.random().toString(36).substring(2, 12);

    return NextResponse.json({
      ok: true,
      marketId,
      amount,
      txSignature: fakeSignature,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to process donation" },
      { status: 500 }
    );
  }
}
