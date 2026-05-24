import { NextResponse } from "next/server";

// Placeholder for future Douyin Open API integration.
// Requires Douyin enterprise verification and API credentials.
export async function GET() {
  return NextResponse.json(
    {
      message:
        "Douyin API integration requires enterprise verification. For now, use static portfolio data.",
    },
    { status: 501 }
  );
}
