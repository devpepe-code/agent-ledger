import type { Metadata } from "next";
import Link from "next/link";

import { MarketingNav } from "@/components/marketing/marketing-nav";
import { DASHBOARD_LAUNCH_HREF } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { MOCK_LEADERBOARD } from "@/lib/mock/leaderboard";

export const metadata: Metadata = {
  title: "Leaderboard | AgentLedger",
  description: "Top organizations by verified agent accountability.",
};

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white">
      <MarketingNav />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#06B6D4]">
            Community
          </p>
          <h1 className="mt-4 font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Transparency leaderboard
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
            Illustrative rankings for the launch site — composite trust score
            and verified actions (demo data). Open the app to record real
            attestations.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] text-xs uppercase tracking-wider text-white/45">
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">Organization</th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">
                  Sector
                </th>
                <th className="px-4 py-3 font-medium">Score</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">
                  Verified
                </th>
                <th className="px-4 py-3 font-medium">Δ</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_LEADERBOARD.map((row) => (
                <tr
                  key={row.rank}
                  className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                >
                  <td className="px-4 py-3.5 tabular-nums text-white/50">
                    {row.rank}
                  </td>
                  <td className="px-4 py-3.5 font-medium text-white">
                    {row.org}
                  </td>
                  <td className="hidden px-4 py-3.5 text-white/55 sm:table-cell">
                    {row.industry}
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="tabular-nums text-[#6ee7b7]">
                      {row.trustScore}
                    </span>
                  </td>
                  <td className="hidden px-4 py-3.5 tabular-nums text-white/65 md:table-cell">
                    {row.verifiedActions.toLocaleString()}
                  </td>
                  <td className="px-4 py-3.5 text-white/50">{row.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild className="bg-[#7C3AED] hover:bg-[#6d31d4]">
            <Link
              href={DASHBOARD_LAUNCH_HREF}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the board — open app
            </Link>
          </Button>
          <Button variant="outline" className="border-white/20" asChild>
            <Link href="/#how-it-works">How scoring works</Link>
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
