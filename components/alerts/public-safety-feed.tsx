"use client";

import { ChevronDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { env } from "@/lib/env";
import { humanEventKind, verificationHuman } from "@/lib/mock/narrative";
import type { BehaviorEvent } from "@/lib/mock/types";
import { solanaTxUrl } from "@/lib/solana-explorer";

export function PublicSafetyFeed({
  events,
  agentNames,
}: {
  events: BehaviorEvent[];
  agentNames: Record<string, string>;
}) {
  return (
    <ul className="mx-auto max-w-2xl space-y-3">
      {events.map((ev) => (
        <IncidentRow
          key={ev.id}
          event={ev}
          agentName={agentNames[ev.agentId] ?? "Agent"}
        />
      ))}
    </ul>
  );
}

function IncidentRow({
  event,
  agentName,
}: {
  event: BehaviorEvent;
  agentName: string;
}) {
  const [open, setOpen] = useState(false);
  const v = verificationHuman(event.verificationStatus);
  const badgeVariant =
    v.variant === "success"
      ? "success"
      : v.variant === "destructive"
        ? "destructive"
        : "secondary";

  return (
    <li className="rounded-xl border border-white/10 bg-white/[0.04]">
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="destructive" className="uppercase">
              Blocked
            </Badge>
            <Badge variant={badgeVariant}>{v.label}</Badge>
            <span className="text-xs text-white/45">{agentName}</span>
          </div>
          <p className="text-[15px] leading-relaxed text-white/90">
            <span className="text-[#EF4444]/90">
              {humanEventKind(event.type)}.
            </span>{" "}
            {event.summary}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:items-end">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="border-white/15"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            Details
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </Button>
          <Button type="button" size="sm" className="bg-[#7C3AED]" asChild>
            <Link href="/dashboard?connect=1" target="_blank" rel="noopener noreferrer">
              See in dashboard
            </Link>
          </Button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-black/25 px-4 py-3">
          <p className="font-mono text-[11px] break-all text-white/50">
            {event.anchored.solanaSignature}
          </p>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="mt-2 gap-1 text-[#22d3ee]"
            onClick={() =>
              window.open(solanaTxUrl(event.anchored.solanaSignature), "_blank")
            }
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Explorer ({env.solanaNetwork})
          </Button>
        </div>
      ) : null}
    </li>
  );
}
