"use client";

import type { ComponentType, ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
  type ConnectionProviderProps,
  type WalletProviderProps,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

const SolanaConnection = ConnectionProvider as ComponentType<
  ConnectionProviderProps
>;
const SolanaWallet = WalletProvider as ComponentType<WalletProviderProps>;

export function SolanaProviders({
  endpoint,
  wallets,
  autoConnect = true,
  children,
}: {
  endpoint: string;
  wallets: WalletProviderProps["wallets"];
  /** False until client hydration so server + first paint match with `wallets=[]`. */
  autoConnect?: boolean;
  children: ReactNode;
}) {
  return (
    <SolanaConnection endpoint={endpoint}>
      <SolanaWallet wallets={wallets} autoConnect={autoConnect}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </SolanaWallet>
    </SolanaConnection>
  );
}
