import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { DASHBOARD_LAUNCH_HREF } from "@/lib/auth";
import { cn } from "@/lib/utils";

import { HeroMiniDashboard } from "./hero-mini-dashboard";
import { MarketingHeroBackground } from "./marketing-hero-background";
import { MarketingSolutionHeroBlock } from "./marketing-solution-steps";

export function MarketingHero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col items-center px-4 pb-20 pt-6 sm:px-6 md:pb-24"
      style={{ backgroundColor: "#0F0F1A" }}
    >
      <MarketingHeroBackground />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center text-center">
        <h1 className="max-w-4xl overflow-visible py-2 text-4xl font-extrabold leading-[1.18] tracking-tight sm:text-5xl sm:leading-[1.16] md:text-6xl md:leading-[1.14] lg:text-[4.5rem] lg:leading-[1.12]">
          <span className="text-white">Your AI agents are</span>
          <br />
          <span className="mt-2 inline-block" style={{ color: "#7dd3fc" }}>
            operating in the dark.
          </span>
        </h1>

        <MarketingSolutionHeroBlock />

        <div className="mt-10">
          <Link
            href={DASHBOARD_LAUNCH_HREF}
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 min-w-[200px] bg-[#7C3AED] text-base font-semibold shadow-lg shadow-[#7C3AED]/35 transition-shadow hover:bg-[#6d31d4] hover:shadow-xl hover:shadow-[#7C3AED]/40",
            )}
          >
            Launch App
          </Link>
        </div>

        <HeroMiniDashboard />
      </div>
    </section>
  );
}
