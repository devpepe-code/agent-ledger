"use client";

import { ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";
import { memo, useState, type ReactElement } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AgentProfile } from "@/lib/mock/types";

export function AgentGrid({
  agents,
}: {
  agents: AgentProfile[];
}): ReactElement {
  return (
    <div>
      <Card className="border-white/10 bg-gradient-to-br from-[#1A1A2E]/90 to-transparent">
        <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
          <div>
            <CardTitle className="text-base">Your agent team</CardTitle>
            <p className="text-sm text-white/50">
              How reliably each one has stayed inside the boundaries you set
            </p>
          </div>
          <Badge variant="secondary" className="shrink-0">
            {agents.length} active
          </Badge>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

const AgentCard = memo(function AgentCard({
  agent,
}: {
  agent: AgentProfile;
}): ReactElement {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-medium text-white">{agent.displayName}</p>
          <p className="mt-1 text-xs text-white/45">
            {agent.totalEvents.toLocaleString()} actions on record
          </p>
        </div>
        <Sparkles className="h-4 w-4 shrink-0 text-[#7C3AED]/80" />
      </div>
      <div className="mt-4 mb-1 flex items-center justify-between text-xs text-white/50">
        <span>Reliability</span>
        <span className="text-[#10B981]">{agent.trustScore}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]"
          style={{ width: `${agent.trustScore}%` }}
        />
      </div>
      <div className="mt-3 border-t border-white/5 pt-3">
        <div className="mb-2 flex gap-2">
          <Button
            type="button"
            size="sm"
            className="h-8 flex-1 bg-[#7C3AED]/80 text-xs hover:bg-[#6d31d4]"
            asChild
          >
            <Link href={`/agents/profile/${agent.id}`}>View profile</Link>
          </Button>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-8 w-full justify-between px-2 text-xs text-white/50 hover:text-white"
          onClick={() => setShowDetails((v) => !v)}
          aria-expanded={showDetails}
        >
          Technical details
          <span
            className={`inline-block transition-transform duration-200 ${showDetails ? "rotate-180" : ""}`}
          >
            <ChevronDown className="h-4 w-4" />
          </span>
        </Button>
        {showDetails ? (
          <div className="overflow-hidden">
            <p className="mt-2 font-mono text-[10px] leading-relaxed text-white/35">
              Policy pack{" "}
              {agent.policyVersion.match(/[\d.]+/)?.[0] ?? "—"}
              {agent.ledgerPda
                ? ` · internal id ${agent.ledgerPda.slice(0, 6)}…`
                : ""}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
});
