/**
 * Shapes mirror what a production Solana program + IPFS / DA pipeline would return.
 */

export interface AnchoredAttestation {
  /** Base58-encoded Solana transaction signature */
  solanaSignature: string;
  slot: number;
  blockTimeUnix: number;
  /** Program that wrote the attestation log */
  programId: string;
  /** IPFS CIDv1 (or CAR root) for the canonical payload */
  ipfsCid: string;
  /** Optional SPL memo or program-specific commitment */
  merkleRoot?: string;
}

export type BehaviorEventType =
  | "inference"
  | "tool_call"
  | "policy_decision"
  | "human_override"
  | "safety_block";

export interface BehaviorEvent {
  id: string;
  agentId: string;
  timestampUnix: number;
  type: BehaviorEventType;
  summary: string;
  payloadCid: string;
  /** Model- or policy-derived risk estimate, 0–100 */
  riskScore: number;
  anchored: AnchoredAttestation;
  verificationStatus: "verified" | "pending" | "challenge_open";
}

export interface AgentProfile {
  id: string;
  displayName: string;
  /** Optional UI avatar (URI or data URL) */
  avatarUri?: string;
  /** Owner wallet (Base58 public key) */
  ownerWallet: string;
  /** Optional PDA derived from program seeds */
  ledgerPda?: string;
  modelFingerprint: string;
  policyManifestCid: string;
  policyVersion: string;
  createdAtUnix: number;
  lastAnchoredAtUnix: number;
  totalEvents: number;
  /** Composite trust score 0–100 from attestations + challenges */
  trustScore: number;
}

export interface OwnerDashboardPayload {
  ownerWallet: string;
  agents: AgentProfile[];
  recentEvents: BehaviorEvent[];
  /** Daily rollup for charts (unix day start, count) */
  eventVolumeByDay: { dayStartUnix: number; count: number }[];
}
