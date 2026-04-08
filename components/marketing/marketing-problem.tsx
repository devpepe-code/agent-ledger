import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "88%",
    label: "of enterprises had a confirmed AI agent security incident last year",
    source: "Gravitee, 2026",
    border: "border-[#EF4444]/40",
    glow: "shadow-[#EF4444]/10",
  },
  {
    value: "½",
    label: "of all deployed AI agents run with zero logging or oversight",
    source: "Gravitee State of AI Agent Security, 2026",
    border: "border-amber-400/45",
    glow: "shadow-amber-400/10",
  },
  {
    value: "$38.5M",
    label: "maximum EU AI Act fine for opaque automated AI decisions",
    source: "EU AI Act, August 2026",
    border: "border-[#7C3AED]/45",
    glow: "shadow-[#7C3AED]/15",
  },
];

export function MarketingProblem() {
  return (
    <section
      className="relative border-t border-white/5 bg-[#0D1117]/80 py-20 sm:py-28"
      style={{ backgroundColor: "rgba(13, 17, 23, 0.92)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-[2.75rem]">
              82% of executives think
              <br />
              their AI agents are safe.
            </h2>
            <p className="mt-4 text-lg text-white/50">The data says otherwise.</p>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/60">
              AI agents are now making decisions in your business 24/7 — filing
              reports, calling APIs, handling customers, moving money. But most
              organizations have no verified record of what those agents actually
              did. Not a log. Not a receipt. Not proof. Just an assumption.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {stats.map((s) => (
              <div key={s.value}>
                <Card
                  className={`border bg-white/[0.04] ${s.border} shadow-lg ${s.glow} backdrop-blur-sm`}
                >
                  <CardContent className="p-6">
                    <p className="text-4xl font-extrabold tabular-nums text-white sm:text-5xl">
                      {s.value}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {s.label}
                    </p>
                    <p className="mt-4 text-xs font-medium text-white/40">
                      Source: {s.source}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}

            <p className="mt-4 text-center text-base font-bold text-white lg:text-left">
              Opacity is expensive. AgentLedger is not.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="/#how-it-works"
                className={cn(
                  buttonVariants(),
                  "bg-[#7C3AED] hover:bg-[#6d31d4]",
                )}
              >
                See how proof works
              </Link>
              <Link
                href="/#pricing"
                className={buttonVariants({
                  variant: "outline",
                  className: "border-white/20",
                })}
              >
                Compare plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
