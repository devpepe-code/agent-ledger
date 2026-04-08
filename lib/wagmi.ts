import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "wagmi/chains";

import { env, isWalletConnectConfigured } from "@/lib/env";

if (
  process.env.NODE_ENV === "production" &&
  !isWalletConnectConfigured()
) {
  console.warn(
    "[AgentLedger] NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is not set. WalletConnect may not work.",
  );
}

export const wagmiConfig = getDefaultConfig({
  appName: "AgentLedger",
  projectId: env.walletConnectProjectId,
  chains: [mainnet, sepolia],
  ssr: false,
});
