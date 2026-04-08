export type LeaderboardRow = {
  rank: number;
  org: string;
  industry: string;
  trustScore: number;
  verifiedActions: number;
  change: string;
};

/** Public demo leaderboard — not a live backend. */
export const MOCK_LEADERBOARD: LeaderboardRow[] = [
  {
    rank: 1,
    org: "Northwind Ledger Ops",
    industry: "Fintech",
    trustScore: 99,
    verifiedActions: 2_410_000,
    change: "+0.4",
  },
  {
    rank: 2,
    org: "Helix Bio Analytics",
    industry: "Healthcare",
    trustScore: 98,
    verifiedActions: 890_200,
    change: "+0.2",
  },
  {
    rank: 3,
    org: "AgentLedger (demo workspace)",
    industry: "Enterprise AI",
    trustScore: 96,
    verifiedActions: 156_000,
    change: "—",
  },
  {
    rank: 4,
    org: "Kestrel Freight",
    industry: "Logistics",
    trustScore: 94,
    verifiedActions: 402_800,
    change: "-0.1",
  },
  {
    rank: 5,
    org: "Parcel & Co.",
    industry: "Retail",
    trustScore: 92,
    verifiedActions: 118_400,
    change: "+0.5",
  },
  {
    rank: 6,
    org: "BlueTile Support AI",
    industry: "CX",
    trustScore: 91,
    verifiedActions: 2_050_900,
    change: "+0.1",
  },
  {
    rank: 7,
    org: "Vanta SOC Labs",
    industry: "Security",
    trustScore: 90,
    verifiedActions: 55_000,
    change: "—",
  },
];
