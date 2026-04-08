import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DASHBOARD_LAUNCH_HREF } from "@/lib/auth";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    blurb: "For founders proving agent behavior to customers.",
    features: ["Up to 5 agents", "30-day history", "Email support"],
  },
  {
    name: "Team",
    price: "$199",
    period: "/mo",
    blurb: "For teams that need audit-ready records.",
    features: ["Unlimited agents", "Full history", "Slack alerts", "SSO (soon)"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Let’s talk",
    period: "",
    blurb: "Regulated industries, custom SLAs, on-prem options.",
    features: ["Dedicated success", "Custom retention", "EU region", "DPAs"],
  },
];

export function MarketingPricingAndFooter() {
  return (
    <>
      <section
        id="demo"
        className="scroll-mt-24 border-t border-white/5 py-16"
        style={{ backgroundColor: "#0F0F1A" }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to open the app?
          </h2>
          <p className="mt-3 text-white/55">
            Jump into the interactive preview — same layout you&apos;ll use with your
            team.
          </p>
          <Link
            href={DASHBOARD_LAUNCH_HREF}
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "mt-6 inline-flex bg-[#7C3AED] hover:bg-[#6d31d4]",
            )}
          >
            Launch App
          </Link>
        </div>
      </section>

      <section
        id="pricing"
        className="scroll-mt-24 py-20 sm:py-28"
        style={{ backgroundColor: "#0F0F1A" }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#06B6D4]">
              Pricing
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Simple plans. Serious proof.
            </h2>
            <p className="mt-4 text-white/55">
              Mock pricing for launch storytelling — talk to us for pilots.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.name}>
                <Card
                  className={`h-full border bg-white/[0.04] backdrop-blur-sm ${
                    tier.highlight
                      ? "border-[#7C3AED]/50 shadow-xl shadow-[#7C3AED]/15"
                      : "border-white/10"
                  }`}
                >
                  <CardContent className="flex h-full flex-col p-6">
                    <p className="text-sm font-medium text-[#06B6D4]">
                      {tier.name}
                    </p>
                    <p className="mt-3 flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-white">
                        {tier.price}
                      </span>
                      <span className="text-sm text-white/45">{tier.period}</span>
                    </p>
                    <p className="mt-3 text-sm text-white/55">{tier.blurb}</p>
                    <ul className="mt-6 flex flex-1 flex-col gap-2 text-sm text-white/65">
                      {tier.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <span className="text-[#10B981]">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    {tier.name === "Enterprise" ? (
                      <div className="mt-8 flex flex-col gap-2">
                        <a
                          href="mailto:pilots@agentledger.dev?subject=Enterprise%20pilot"
                          className={cn(
                            buttonVariants(),
                            "w-full bg-[#7C3AED] hover:bg-[#6d31d4]",
                          )}
                        >
                          Contact sales
                        </a>
                        <Link
                          href={DASHBOARD_LAUNCH_HREF}
                          prefetch={false}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "w-full border-white/15",
                          )}
                        >
                          Launch app (demo)
                        </Link>
                      </div>
                    ) : (
                      <Link
                        href={DASHBOARD_LAUNCH_HREF}
                        prefetch={false}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({
                            variant: tier.highlight ? "default" : "outline",
                          }),
                          "mt-8 w-full",
                          tier.highlight
                            ? "bg-[#7C3AED] hover:bg-[#6d31d4]"
                            : "border border-white/15 bg-white/5 hover:bg-white/10",
                        )}
                      >
                        Launch App
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        className="border-t border-white/10 py-12"
        style={{ backgroundColor: "#0F0F1A" }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-white">AgentLedger</p>
            <p className="mt-1 max-w-md text-sm text-white/45">
              Your AI agents are making decisions right now — AgentLedger gives
              you proof of what they did.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/55">
            <Link href="/leaderboard" className="hover:text-white">
              Leaderboard
            </Link>
            <Link href="/alerts" className="hover:text-white">
              Safety feed
            </Link>
            <Link href="/#how-it-works" className="hover:text-white">
              How it works
            </Link>
            <Link href="/#pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link
              href={DASHBOARD_LAUNCH_HREF}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#22d3ee] hover:text-white"
            >
              Launch app →
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
