import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { DASHBOARD_LAUNCH_HREF } from "@/lib/auth";
import { cn } from "@/lib/utils";

const FEED_LINES = [
  { tone: "ok" as const, text: "✓ research-agent completed task" },
  { tone: "info" as const, text: "→ trading-agent called Stripe API" },
  {
    tone: "alert" as const,
    text: "⚠️ data-scraper blocked — injection attempt",
  },
  { tone: "ok" as const, text: "✓ research-agent completed task" },
  { tone: "info" as const, text: "→ trading-agent updated CRM record" },
  {
    tone: "alert" as const,
    text: "⚠️ data-scraper blocked — injection attempt",
  },
];

export function HeroMiniDashboard() {
  const doubled = [...FEED_LINES, ...FEED_LINES];

  return (
    <div className="relative mt-14 w-full max-w-4xl">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-3">
            {[
              { name: "research-agent", ok: true },
              { name: "trading-agent", ok: true },
              { name: "data-scraper", ok: false },
            ].map((agent) => (
              <div
                key={agent.name}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#1A1A2E]/60 px-3 py-2.5 sm:px-4"
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  <span
                    className={`relative flex h-2.5 w-2.5 shrink-0 rounded-full ${
                      agent.ok ? "bg-[#10B981]" : "bg-[#EF4444]"
                    }`}
                  >
                    <span
                      className={`absolute inset-0 rounded-full motion-safe:animate-marketing-pulse-dot ${
                        agent.ok ? "bg-[#10B981]" : "bg-[#EF4444]"
                      }`}
                      style={{ opacity: 0.45 }}
                    />
                  </span>
                  <span className="truncate font-mono text-xs text-white/85">
                    {agent.name}
                  </span>
                </div>
                {agent.ok ? (
                  <span className="shrink-0 rounded-md bg-[#10B981]/15 px-2 py-0.5 text-[10px] font-medium text-[#6ee7b7]">
                    Active
                  </span>
                ) : (
                  <span className="motion-safe:animate-marketing-blink shrink-0 rounded-md bg-[#EF4444]/20 px-2 py-0.5 text-[10px] font-medium text-[#fca5a5]">
                    ⚠️ Blocked
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="relative h-[200px] overflow-hidden rounded-xl border border-white/10 bg-[#0F0F1A]/70 sm:h-[220px]">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-[#0F0F1A] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-[#0F0F1A] to-transparent" />
            <div className="animate-marketing-feed">
              <ul className="space-y-2 p-3">
                {doubled.map((line, i) => (
                  <li
                    key={`feed-${i}`}
                    className={`rounded-lg border px-3 py-2 text-xs sm:text-[13px] ${
                      line.tone === "ok"
                        ? "border-[#10B981]/25 bg-[#10B981]/10 text-[#a7f3d0]"
                        : line.tone === "info"
                          ? "border-[#06B6D4]/25 bg-[#06B6D4]/10 text-[#a5f3fc]"
                          : "border-[#EF4444]/30 bg-[#EF4444]/10 text-[#fecaca]"
                    }`}
                  >
                    {line.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-between">
          <Link
            href="/#pricing"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "border-white/15 bg-white/5 text-white hover:bg-white/10",
            )}
          >
            View pricing
          </Link>
          <Link
            href={DASHBOARD_LAUNCH_HREF}
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-[#7C3AED] hover:bg-[#6d31d4]",
            )}
          >
            Try interactive dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
