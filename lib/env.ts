/**
 * Centralized public env with compile-time friendly access.
 * Do not put server-only secrets in NEXT_PUBLIC_* vars.
 */

const wc =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID?.trim() || "";

export const env = {
  walletConnectProjectId:
    wc.length > 0 ? wc : "00000000000000000000000000000000",
  appUrl: (
    process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://127.0.0.1:3000")
  ).replace(/\/$/, ""),
  appEnv: process.env.NEXT_PUBLIC_APP_ENV ?? "development",
  solanaRpcUrl:
    process.env.NEXT_PUBLIC_SOLANA_RPC_URL?.trim() ||
    "https://api.devnet.solana.com",
  solanaNetwork:
    (process.env.NEXT_PUBLIC_SOLANA_NETWORK?.trim() as
      | "devnet"
      | "mainnet-beta"
      | undefined) || "devnet",
  solscanBase:
    process.env.NEXT_PUBLIC_SOLSCAN_URL?.replace(/\/$/, "") ||
    "https://solscan.io",
  ipfsGateway:
    process.env.NEXT_PUBLIC_IPFS_GATEWAY?.replace(/\/$/, "") ||
    "https://ipfs.io/ipfs",
  demoMode: process.env.NEXT_PUBLIC_DEMO_MODE !== "false",
  realWalletEnabled: process.env.NEXT_PUBLIC_ENABLE_REAL_WALLET !== "false",
} as const;

export function isWalletConnectConfigured(): boolean {
  return (
    Boolean(process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID?.trim()) &&
    env.walletConnectProjectId !== "00000000000000000000000000000000"
  );
}

/** Non-throwing checklist for ops / health diagnostics */
export function getEnvIssues(): string[] {
  const issues: string[] = [];
  if (!isWalletConnectConfigured()) {
    issues.push(
      "NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is missing or placeholder — WalletConnect may not work in production.",
    );
  }
  if (!process.env.NEXT_PUBLIC_APP_URL?.trim() && !process.env.VERCEL_URL) {
    issues.push(
      "NEXT_PUBLIC_APP_URL unset and VERCEL_URL missing — Open Graph URLs may be wrong locally.",
    );
  }
  return issues;
}
