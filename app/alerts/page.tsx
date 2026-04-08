import type { Metadata } from "next";
import Link from "next/link";

import { PublicSafetyFeed } from "@/components/alerts/public-safety-feed";
import { MarketingNav } from "@/components/marketing/marketing-nav";
import { DASHBOARD_LAUNCH_HREF } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { cloneOwnerDashboard } from "@/lib/mock/data";

export const metadata: Metadata = {
  title: "Live alerts | AgentLedger",
  description: "Safety blocks and high-risk agent events.",
};

export default function AlertsPage() {
  const payload = cloneOwnerDashboard();
  const alerts = payload.recentEvents.filter(
    (e) => e.type === "safety_block" || e.riskScore >= 70,
  );
  const agentNames = Object.fromEntries(
    payload.agents.map((a) => [a.id, a.displayName]),
  );
  const blockedWeek = alerts.filter((e) => e.type === "safety_block").length;

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white">
      <MarketingNav />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#EF4444]">
            Live feed
          </p>
          <h1 className="mt-4 font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Safety &amp; risk signals
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
            Sample incidents from your demo workspace — blocks and high-risk
            actions that would surface in production monitoring.{" "}
            <span className="text-white/75">
              {blockedWeek} safety blocks
            </span>{" "}
            in the current digest window.
          </p>
        </div>

        <div className="mt-10">
          <PublicSafetyFeed events={alerts} agentNames={agentNames} />
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild className="bg-[#7C3AED] hover:bg-[#6d31d4]">
            <Link
              href={DASHBOARD_LAUNCH_HREF}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open full dashboard
            </Link>
          </Button>
          <Button variant="outline" className="border-white/20" asChild>
            <Link href="/leaderboard">View leaderboard</Link>
          </Button>
        </div>

        <p className="mt-12 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-[#22d3ee] transition-colors hover:text-white"
          >
            ← Back to home
          </Link>
        </p>
      </main>
    </div>
  );
}
