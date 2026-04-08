"use client";

import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import {
  useEffect,
  useMemo,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { WagmiProvider } from "wagmi";

import { SolanaProviders } from "@/components/solana-providers";
import { Web3ReadyContext } from "@/components/web3-ready-context";
import { env } from "@/lib/env";
import { wagmiConfig } from "@/lib/wagmi";

import "@rainbow-me/rainbowkit/styles.css";
import "@solana/wallet-adapter-react-ui/styles.css";

export function Web3ProvidersInner({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 60_000 },
        },
      }),
  );
  const endpoint = useMemo(() => env.solanaRpcUrl, []);
  const wallets = useMemo(() => {
    if (!hydrated) return [];
    return [new PhantomWalletAdapter(), new SolflareWalletAdapter()];
  }, [hydrated]);

  return (
    <Web3ReadyContext.Provider value={true}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          <RainbowKitProvider
            theme={darkTheme({
              accentColor: "#7C3AED",
              accentColorForeground: "white",
              borderRadius: "medium",
              overlayBlur: "none",
            })}
          >
            <SolanaProviders
              endpoint={endpoint}
              wallets={wallets}
              autoConnect={hydrated}
            >
              {hydrated ? (
                children
              ) : (
                <div
                  className="flex min-h-screen items-center justify-center bg-[#0F0F1A] text-sm text-white/50"
                  role="status"
                  aria-live="polite"
                >
                  Loading workspace…
                </div>
              )}
            </SolanaProviders>
          </RainbowKitProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </Web3ReadyContext.Provider>
  );
}
