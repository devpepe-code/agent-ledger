import { env } from "@/lib/env";

/** Explorer link for a Solana transaction signature */
export function solanaTxUrl(signature: string): string {
  const cluster =
    env.solanaNetwork === "mainnet-beta" ? "" : `?cluster=${env.solanaNetwork}`;
  return `${env.solscanBase}/tx/${signature}${cluster}`;
}
