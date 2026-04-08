"use client";

import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroNarrative({
  headline,
  tone,
  highlight,
}: {
  headline: string;
  tone: "calm" | "watch";
  highlight?: string;
}) {
  const scrollToDigest = () => {
    document.getElementById("todays-summary")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="space-y-6">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#06B6D4]/90">
        Right now
      </p>
      <div
        className={`rounded-2xl border px-6 py-8 sm:px-8 sm:py-10 ${
          tone === "watch"
            ? "border-amber-500/25 bg-amber-500/[0.07]"
            : "border-white/10 bg-white/[0.04]"
        }`}
      >
        <p
          className={`max-w-3xl text-2xl font-medium leading-snug tracking-tight sm:text-[1.65rem] sm:leading-snug ${
            tone === "watch" ? "text-white" : "text-white/95"
          }`}
        >
          {headline}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {(highlight || tone === "watch") && (
            <Button
              type="button"
              variant={tone === "watch" ? "default" : "outline"}
              className="gap-2"
              onClick={scrollToDigest}
            >
              {highlight ?? "See today’s summary"}
              <ArrowDown className="h-4 w-4 opacity-80" />
            </Button>
          )}
          {tone === "calm" && !highlight && (
            <Button
              type="button"
              variant="ghost"
              className="text-white/60 hover:text-white"
              onClick={scrollToDigest}
            >
              What happened today
              <ArrowDown className="h-4 w-4 opacity-70" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
