import type { BehaviorEvent, OwnerDashboardPayload } from "./types";

const OWNER = "8zFZHuSRAJB9PqF9rPG6R6qJb2CkefnZ7X9WvN2mKpQr";

/** Static templates; timestamps refreshed in cloneOwnerDashboard so the UI always feels “now”. */
const agentsTemplate = [
  {
    id: "agt_support_l3",
    displayName: "Harbor — B2B support L3",
    ownerWallet: OWNER,
    ledgerPda: "Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS",
    modelFingerprint: "sha256:4a2f1c9e8b7d6a5342910fedcba9876543210abcdef",
    policyManifestCid: "bafybeigdyrzt6x7q7q7q7q7q7q7q7q7q7q7q7q7q7q7q7q7q7q7q7q7qr",
    policyVersion: "manifest@v3.2.1+cx-retention",
    createdAtUnix: 1712188800,
    lastAnchoredAtUnix: 1712448000,
    totalEvents: 12847,
    trustScore: 94,
  },
  {
    id: "agt_fin_ap",
    displayName: "Ledgerline — AP & vendor desk",
    ownerWallet: OWNER,
    ledgerPda: "9WzDXwBbmkg8zYkSQof8YZq3qYqYqYqYqYqYqYqYqYqYqYq",
    modelFingerprint: "sha256:deadbeefcafebabe0123456789abcdef0123456789ab",
    policyManifestCid: "QmNZrYXNhwN6Wbi3SRwFT5S6P5zPf8Xq4sK5qK5qK5qK5qK",
    policyVersion: "manifest@v2.9.0+sox-controls",
    createdAtUnix: 1704067200,
    lastAnchoredAtUnix: 1712433600,
    totalEvents: 45290,
    trustScore: 88,
  },
  {
    id: "agt_sec_soc",
    displayName: "Pulse — SOC triage copilot",
    ownerWallet: OWNER,
    modelFingerprint: "sha256:a1b2c3d4e5f6789012345678abcdef0123456789abcdef0123456789abcd",
    policyManifestCid: "bafkreibh5fsvx2q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5q5qqq",
    policyVersion: "manifest@v1.4.2+sec-no-exfil",
    createdAtUnix: 1706745600,
    lastAnchoredAtUnix: 1712400000,
    totalEvents: 2103,
    trustScore: 97,
  },
] as const satisfies OwnerDashboardPayload["agents"];

const recentEventsTemplate: BehaviorEvent[] = [
  {
    id: "evt_doc_leak_block",
    agentId: "agt_support_l3",
    timestampUnix: 1712450400,
    type: "safety_block",
    summary:
      "Stopped draft reply that would have pasted an internal Postgres connection string into a customer-visible email thread.",
    payloadCid: "bafybeihdwdcefgh4dqkjv67uzcmw7yy72374xxxx",
    riskScore: 82,
    anchored: {
      solanaSignature:
        "3zZ8vKpR7nQs2FyL5xJc9HvWm1T4uE8oA6bD0gN3sPqRyUxIwEvNtAsMkLoJpHgF",
      slot: 278_431_992,
      blockTimeUnix: 1712450405,
      programId: "ALedgxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      ipfsCid: "bafybeihdwdcefgh4dqkjv67uzcmw7yy72374mo7ouuax2lrmqopudjpe",
      merkleRoot:
        "7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d906",
    },
    verificationStatus: "verified",
  },
  {
    id: "evt_crm_lookup",
    agentId: "agt_support_l3",
    timestampUnix: 1712449800,
    type: "tool_call",
    summary:
      "Pulled 22 Zendesk tickets (read-only); names and emails redacted at the edge per HIPAA-friendly CX policy.",
    payloadCid: "QmXoypizjWbcWGWZzz8puBz6T8G6zqJY8qK9kK9kK9kK9kK",
    riskScore: 8,
    anchored: {
      solanaSignature:
        "5HxYqZ2vKpR7nQs4FyL1xJc9HvWm2T4uE8oA6bD0gN3sPqRyUxIwEvNtAsMkLoJp",
      slot: 278_431_801,
      blockTimeUnix: 1712449804,
      programId: "ALedgxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      ipfsCid: "bafybeigdyrzt5zefsuyxnnbpwxexlf7b2thl7ss5q5q5q5q5q5q5q5q5q",
    },
    verificationStatus: "verified",
  },
  {
    id: "evt_vendor_ranking",
    agentId: "agt_fin_ap",
    timestampUnix: 1712449200,
    type: "inference",
    summary:
      "Compared six vendor Master Services Agreements; flagged one for a liability cap below your $10M floor and escalated to legal queue.",
    payloadCid: "bafybeiczsssss5ssssssssssssssssssssssssssssssssssssssssssss",
    riskScore: 24,
    anchored: {
      solanaSignature:
        "2WpYqZ2vKpR7nQs4FyL1xJc9HvWm2T4uE8oA6bD0gN3sPqRyUxIwNtAsMkLoJp",
      slot: 278_431_610,
      blockTimeUnix: 1712449202,
      programId: "ALedgxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      ipfsCid: "QmYwAPJzv5CZsnA6258sbjzGbwr5xLHuh1Qacxz6f5esj",
      merkleRoot:
        "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    },
    verificationStatus: "verified",
  },
  {
    id: "evt_wire_override",
    agentId: "agt_fin_ap",
    timestampUnix: 1712448600,
    type: "human_override",
    summary:
      "Treasury approved same-day $47,200 wire to verified supplier #8811; dual-control was recorded and bound to this ledger entry.",
    payloadCid: "bafkreibme22gw2h7y2y7y2y7y2y7y2y7y2y7y2y7y2y7y2y7y2y7y2y7yy",
    riskScore: 38,
    anchored: {
      solanaSignature:
        "4HxYqZ2vKpR7nQs4FyL1xJc9HvWm2T4uE8oA6bD0gN3sPqRyUxIwEvNtMkLoJp",
      slot: 278_431_420,
      blockTimeUnix: 1712448601,
      programId: "ALedgxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      ipfsCid: "bafybeigdyrztgq7fq7fq7fq7fq7fq7fq7fq7fq7fq7fq7fq7fq7fq7fq7f",
    },
    verificationStatus: "challenge_open",
  },
  {
    id: "evt_eu_residency",
    agentId: "agt_sec_soc",
    timestampUnix: 1712448000,
    type: "policy_decision",
    summary:
      "Routed German customer artifacts to the EU-only retention bucket and attached the DPA version in force for audit.",
    payloadCid: "QmYwAPJzv5CZsnA6158sbjzGbwr5xLHuh1Qacxz6f5esj",
    riskScore: 19,
    anchored: {
      solanaSignature:
        "67HxYqZ2vKpR7nQs4FyL1xJc9HvWm2T4uE8oA6bD0gN3sPqRyUxIwEvNtAsMk",
      slot: 278_431_230,
      blockTimeUnix: 1712448003,
      programId: "ALedgxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      ipfsCid: "bafybeihfjfjfh4dklfsfh4dklfsfh4dklfsfh4dklfsfh4dklfsfh4dklf",
    },
    verificationStatus: "pending",
  },
  {
    id: "evt_slack_exfil_block",
    agentId: "agt_sec_soc",
    timestampUnix: 1712447400,
    type: "safety_block",
    summary:
      "Blocked Slack automation that would have posted raw JWT refresh tokens from an alert payload into a public channel.",
    payloadCid: "bafybeigdyrzt6x8r8r8r8r8r8r8r8r8r8r8r8r8r8r8r8r8r8r8r8r8r",
    riskScore: 91,
    anchored: {
      solanaSignature:
        "8JxYqZ2vKpR7nQs4FyL1xJc9HvWm2T4uE8oA6bD0gN3sPqRyUxIwEvNtAsMkL",
      slot: 278_431_100,
      blockTimeUnix: 1712447402,
      programId: "ALedgxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      ipfsCid: "bafybeigdyrzt6x9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q9q",
      merkleRoot:
        "a1b2c3d4e5f6789012345678abcdef0123456789abcdef0123456789abcdef0",
    },
    verificationStatus: "verified",
  },
];

function buildVolume(): OwnerDashboardPayload["eventVolumeByDay"] {
  const now = Math.floor(Date.now() / 1000);
  const day = 86_400;
  return Array.from({ length: 14 }, (_, i) => {
    const dayStart = now - (13 - i) * day;
    const dayStartUnix = Math.floor(dayStart / day) * day;
    return {
      dayStartUnix,
      count: 820 + Math.round(380 * Math.sin(i * 0.55) + i * 42),
    };
  });
}

export const mockOwnerDashboard: OwnerDashboardPayload = {
  ownerWallet: OWNER,
  agents: [...agentsTemplate],
  recentEvents: recentEventsTemplate.map((e) => ({ ...e })),
  eventVolumeByDay: buildVolume(),
};

function shiftEventTimes(
  events: BehaviorEvent[],
  nowUnix: number,
): BehaviorEvent[] {
  const sorted = [...events].sort((a, b) => b.timestampUnix - a.timestampUnix);
  return sorted.map((e, i) => {
    const ts = nowUnix - (i + 1) * 2400;
    const prevTs = e.timestampUnix;
    const blockDelta = e.anchored.blockTimeUnix - prevTs;
    return {
      ...e,
      timestampUnix: ts,
      anchored: {
        ...e.anchored,
        blockTimeUnix: ts + blockDelta,
      },
    };
  });
}

/** Deep copy for passing mock data from the server into client components. */
export function cloneOwnerDashboard(): OwnerDashboardPayload {
  const now = Math.floor(Date.now() / 1000);
  return {
    ...mockOwnerDashboard,
    agents: mockOwnerDashboard.agents.map((a) => ({ ...a })),
    recentEvents: shiftEventTimes(mockOwnerDashboard.recentEvents, now),
    eventVolumeByDay: buildVolume(),
  };
}

export function findAgentProfile(
  payload: OwnerDashboardPayload,
  agentId: string,
): (typeof payload.agents)[number] | undefined {
  return payload.agents.find((a) => a.id === agentId);
}

export function eventsForAgent(
  payload: OwnerDashboardPayload,
  agentId: string,
): BehaviorEvent[] {
  return payload.recentEvents.filter((e) => e.agentId === agentId);
}
