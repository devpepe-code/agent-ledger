import type { Metadata } from "next";

import { MarketingPage } from "@/components/marketing/marketing-page";

export const metadata: Metadata = {
  title: "AgentLedger — Proof for every AI agent action",
  description:
    "Your AI agents are making decisions right now — and you have zero proof of what they did. AgentLedger records everything permanently and tamper-proof.",
  openGraph: {
    title: "AgentLedger — Proof for every AI agent action",
    description:
      "Permanent, tamper-proof records of what your AI agents do. Solana-anchored. EU AI Act ready.",
  },
};

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0F0F1A",
        color: "#ffffff",
      }}
    >
      <MarketingPage />
    </div>
  );
}
