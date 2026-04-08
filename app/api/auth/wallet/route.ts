import { NextResponse } from "next/server";

import { AUTH_COOKIE_NAME } from "@/lib/auth";

function isEvmAddress(s: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(s);
}

/** Base58 Solana public key length is typically 32–44 chars. */
function isSolanaAddress(s: string): boolean {
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(s);
}

/**
 * Sets session cookie when at least one wallet address is present and valid.
 * (Demo gate — replace with signature verification / SIWE later.)
 */
export async function POST(request: Request) {
  let body: { evmAddress?: string | null; solanaAddress?: string | null } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const evmRaw = body.evmAddress != null ? String(body.evmAddress).trim() : "";
  const solRaw =
    body.solanaAddress != null ? String(body.solanaAddress).trim() : "";

  const evm = evmRaw && isEvmAddress(evmRaw) ? evmRaw : null;
  const sol = solRaw && isSolanaAddress(solRaw) ? solRaw : null;

  if (!evm && !sol) {
    return NextResponse.json(
      { error: "Connect an Ethereum or Solana wallet." },
      { status: 400 },
    );
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(AUTH_COOKIE_NAME, "wallet", {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
