import type {
  BehaviorEvent,
  BehaviorEventType,
  OwnerDashboardPayload,
} from "./types";

export type WellbeingLevel = "ok" | "attention";

/** High risk score = lower “confidence” in plain language */
export function confidenceFromRisk(riskScore: number): {
  label: string;
  pct: number;
} {
  const pct = Math.max(0, Math.min(100, 100 - riskScore));
  if (pct >= 70) return { label: "High confidence", pct };
  if (pct >= 40) return { label: "Medium confidence", pct };
  return { label: "Low confidence", pct };
}

export function humanEventKind(type: BehaviorEventType): string {
  const map: Record<BehaviorEventType, string> = {
    inference: "Agent made a judgment",
    tool_call: "Agent took an action",
    policy_decision: "Agent applied your rules",
    human_override: "Someone stepped in",
    safety_block: "Agent was blocked from doing something",
  };
  return map[type];
}

export function verificationHuman(
  status: BehaviorEvent["verificationStatus"],
): { label: string; variant: "success" | "secondary" | "destructive" } {
  switch (status) {
    case "verified":
      return { label: "Verified", variant: "success" };
    case "pending":
      return { label: "Checking", variant: "secondary" };
    case "challenge_open":
      return { label: "Under review", variant: "destructive" };
  }
}

export function relativeTime(ts: number): string {
  const now = Date.now() / 1000;
  const diff = Math.max(0, now - ts);
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86_400) return `${Math.floor(diff / 3600)} hours ago`;
  return `${Math.floor(diff / 86_400)} days ago`;
}

export function computeWellbeing(events: BehaviorEvent[]): WellbeingLevel {
  if (
    events.some(
      (e) =>
        e.verificationStatus === "challenge_open" ||
        e.verificationStatus === "pending",
    )
  ) {
    return "attention";
  }
  return "ok";
}

export function wellbeingCopy(level: WellbeingLevel): {
  headline: string;
  detail: string;
} {
  if (level === "attention") {
    return {
      headline: "Heads up — one thing needs you",
      detail:
        "Nothing is on fire. A decision or record still needs a quick human pass.",
    };
  }
  return {
    headline: "Everything looks okay",
    detail:
      "Your agents are operating within the boundaries you set. We’ll flag anything unusual.",
  };
}

export function buildHeroNarrative(data: OwnerDashboardPayload): {
  headline: string;
  tone: "calm" | "watch";
  highlight?: string;
} {
  const { agents, recentEvents, eventVolumeByDay } = data;
  const n = agents.length;
  const lastDay =
    eventVolumeByDay[eventVolumeByDay.length - 1]?.count ??
    recentEvents.length;

  const challenge = recentEvents.find(
    (e) => e.verificationStatus === "challenge_open",
  );
  if (challenge) {
    const name =
      agents.find((a) => a.id === challenge.agentId)?.displayName ?? "An agent";
    return {
      headline: `${name} has an approval under review — worth a two-minute look when you’re free.`,
      tone: "watch",
      highlight: "Open review",
    };
  }

  const pending = recentEvents.find((e) => e.verificationStatus === "pending");
  if (pending) {
    const name =
      agents.find((a) => a.id === pending.agentId)?.displayName ?? "An agent";
    return {
      headline: `${name} is still confirming a rules decision from earlier today.`,
      tone: "watch",
    };
  }

  const blocked = recentEvents.filter((e) => e.type === "safety_block").length;
  const blockPhrase =
    blocked > 0
      ? ` Your guardrails stopped ${blocked} risky ${blocked === 1 ? "step" : "steps"} before they reached the outside world.`
      : "";

  return {
    headline: `Your ${n} agents logged about ${lastDay.toLocaleString()} things in the last day — all inside the lines you drew.${blockPhrase} ✓`,
    tone: "calm",
  };
}
