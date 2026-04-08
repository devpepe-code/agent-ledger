"use client";

import { type ReactNode } from "react";

import { WalletSessionSync } from "@/components/auth/wallet-session-sync";
import { Web3ProvidersInner } from "@/components/web3-providers-inner";

/** Web3 + session sync for `/dashboard` and `/agents` only (see `app/(app)/layout.tsx`). */
export function AppWeb3Shell({ children }: { children: ReactNode }) {
  return (
    <Web3ProvidersInner>
      <WalletSessionSync />
      {children}
    </Web3ProvidersInner>
  );
}
