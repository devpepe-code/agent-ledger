"use client";

import { Shield } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DASHBOARD_MAIN_HREF } from "@/lib/auth";

import { WalletConnectPanel } from "./wallet-connect-panel";

export function DashboardWalletOverlay() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function continueSimulated() {
    setError(null);
    setBusy(true);
    try {
      const res = await fetch("/api/auth/simulate", {
        method: "POST",
        headers: { Accept: "application/json" },
        credentials: "same-origin",
      });
      if (!res.ok) {
        setError("Could not start demo session. Try again.");
        setBusy(false);
        return;
      }
      await res.json().catch(() => ({}));
      window.location.assign(DASHBOARD_MAIN_HREF);
    } catch {
      setError("Network error — try again.");
      setBusy(false);
    }
  }

  return (
    <div
      className="pointer-events-auto fixed inset-0 z-[9999] flex items-center justify-center bg-[#0F0F1A]/96 px-4 py-8 font-sans antialiased"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dashboard-wallet-title"
      style={{
        fontFamily: "var(--font-sans), ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div className="relative z-10 w-full max-w-md font-sans">
        <Card className="border-2 border-white/15 bg-[#1a1c2e] font-sans shadow-2xl shadow-black/50">
          <CardHeader className="space-y-3 pb-2 text-center font-sans">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#06B6D4]">
              <Shield className="h-6 w-6 text-white" aria-hidden />
            </div>
            <CardTitle
              id="dashboard-wallet-title"
              className="!font-sans text-2xl font-bold tracking-tight text-white"
            >
              Connect wallet
            </CardTitle>
            <CardDescription className="font-sans text-white/50">
              Ethereum (WalletConnect / browser) or Solana (Phantom / Solflare).
              Session is a demo gate — add SIWE / signatures when you ship.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 font-sans">
            <WalletConnectPanel />
            <div className="relative py-2 text-center text-xs text-white/40">
              <span className="relative z-10 bg-[#151525] px-2">or demo</span>
              <span className="absolute inset-x-0 top-1/2 z-0 h-px bg-white/10" />
            </div>
            {error ? (
              <p className="text-center text-sm text-red-300/90" role="alert">
                {error}
              </p>
            ) : null}
            <Button
              type="button"
              variant="outline"
              disabled={busy}
              className="h-12 w-full !font-sans border-white/20 bg-white/5 text-base font-semibold text-white hover:bg-white/10"
              onClick={() => void continueSimulated()}
            >
              {busy ? "Opening dashboard…" : "Continue without wallet (simulated)"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
