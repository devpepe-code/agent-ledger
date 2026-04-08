"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { WellbeingLevel } from "@/lib/mock/narrative";
import { wellbeingCopy } from "@/lib/mock/narrative";

export function WellbeingStrip({ level }: { level: WellbeingLevel }) {
  const { headline, detail } = wellbeingCopy(level);
  const ok = level === "ok";

  return (
    <div
      className={`flex flex-col gap-2 rounded-xl border px-5 py-4 sm:flex-row sm:items-center sm:gap-4 ${
        ok
          ? "border-[#10B981]/25 bg-[#10B981]/[0.07]"
          : "border-amber-400/25 bg-amber-500/[0.08]"
      }`}
      role="status"
      aria-live="polite"
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
          ok ? "bg-[#10B981]/20 text-[#6ee7b7]" : "bg-amber-500/20 text-amber-200"
        }`}
      >
        {ok ? (
          <CheckCircle2 className="h-5 w-5" aria-hidden />
        ) : (
          <AlertCircle className="h-5 w-5" aria-hidden />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-white">{headline}</p>
        <p className="mt-1 text-sm leading-relaxed text-white/65">{detail}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="border-white/20" asChild>
            <Link href="/alerts">Safety feed</Link>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <a href="#todays-summary">Today&apos;s digest</a>
          </Button>
          {!ok ? (
            <Button size="sm" className="bg-amber-600 hover:bg-amber-500" asChild>
              <Link href="/agents">Review integrations</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
