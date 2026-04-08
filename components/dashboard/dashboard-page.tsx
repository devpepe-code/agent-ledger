"use client";

import dynamic from "next/dynamic";

import { ErrorBoundary } from "@/components/error-boundary";
import type { OwnerDashboardPayload } from "@/lib/mock/types";
import {
  buildHeroNarrative,
  computeWellbeing,
} from "@/lib/mock/narrative";

import { AgentGrid } from "./agent-grid";
import { DailyDigest } from "./daily-digest";
import { HeroNarrative } from "./hero-narrative";
import { SiteHeader, type DashboardSessionKind } from "./site-header";
import { WellbeingStrip } from "./wellbeing-strip";

const VolumeChart = dynamic(
  () => import("./volume-chart").then((m) => m.VolumeChart),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex h-[320px] min-h-[320px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sm text-white/45"
        aria-hidden
      >
        Loading chart…
      </div>
    ),
  },
);

function Shell({
  children,
  sessionKind,
}: {
  children: React.ReactNode;
  sessionKind: DashboardSessionKind;
}) {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0F0F1A] via-[#0D1117] to-[#0F0F1A] text-white"
      style={{
        backgroundColor: "#0F0F1A",
        color: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 58, 237, 0.22), transparent),
            radial-gradient(ellipse 60% 40% at 100% 0%, rgba(6, 182, 212, 0.12), transparent),
            linear-gradient(to bottom, transparent, #0F0F1A)
          `,
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <SiteHeader sessionKind={sessionKind} />
      <main className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}

export function DashboardPage({
  payload,
  sessionKind,
}: {
  payload: OwnerDashboardPayload;
  sessionKind: DashboardSessionKind;
}) {
  const hero = buildHeroNarrative(payload);
  const wellbeing = computeWellbeing(payload.recentEvents);
  const blocksWeek = payload.recentEvents.filter((e) => e.type === "safety_block")
    .length;
  const verifiedWeek = payload.recentEvents.filter(
    (e) => e.verificationStatus === "verified",
  ).length;
  const actionSum = payload.eventVolumeByDay.reduce((s, d) => s + d.count, 0);

  return (
    <Shell sessionKind={sessionKind}>
      <div className="space-y-10">
        <section className="max-w-4xl space-y-3">
          <h1 className="text-sm font-medium text-white/55">
            See what your AI agents actually did — and prove it when it matters.
          </h1>
        </section>

        <HeroNarrative
          headline={hero.headline}
          tone={hero.tone}
          highlight={hero.highlight}
        />

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-white/40">
              Actions anchored (sample window)
            </p>
            <p className="mt-2 text-2xl font-semibold tabular-nums text-white">
              {actionSum.toLocaleString()}
            </p>
            <p className="mt-1 text-xs text-white/45">
              Everything your agents did that hit the ledger in this chart range.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-white/40">
              Verified receipts
            </p>
            <p className="mt-2 text-2xl font-semibold tabular-nums text-[#6ee7b7]">
              {verifiedWeek}
            </p>
            <p className="mt-1 text-xs text-white/45">
              In today&apos;s digest sample — ready for audit or customer evidence.
            </p>
          </div>
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-amber-200/70">
              Guardrail stops
            </p>
            <p className="mt-2 text-2xl font-semibold tabular-nums text-amber-100">
              {blocksWeek}
            </p>
            <p className="mt-1 text-xs text-white/55">
              Policy or safety blocks before harm reached customers or regulators.
            </p>
          </div>
          <div className="rounded-xl border border-[#7C3AED]/25 bg-[#7C3AED]/[0.08] p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-[#c4b5fd]/90">
              Production agents
            </p>
            <p className="mt-2 text-2xl font-semibold tabular-nums text-white">
              {payload.agents.length}
            </p>
            <p className="mt-1 text-xs text-white/55">
              Each with its own policy pack and attestation trail.
            </p>
          </div>
        </section>

        <WellbeingStrip level={wellbeing} />

        <DailyDigest events={payload.recentEvents} agents={payload.agents} />

        <section className="space-y-5">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-white">
              Show me the full picture
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/55">
              Trends and team view for when you want more detail — still without
              drowning you in infrastructure jargon up front.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ErrorBoundary>
                <VolumeChart data={payload.eventVolumeByDay} />
              </ErrorBoundary>
            </div>
            <AgentGrid agents={payload.agents} />
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center text-xs text-white/40">
          AgentLedger — sample data for demonstration
        </footer>
      </div>
    </Shell>
  );
}
