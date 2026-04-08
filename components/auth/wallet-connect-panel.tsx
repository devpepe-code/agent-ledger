"use client";

import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useConnectModal } from "@rainbow-me/rainbowkit";

import { Button } from "@/components/ui/button";

/**
 * Opens RainbowKit / Solana modal flows with plain buttons so connect UI stays
 * visible even when third-party widget styles fail to paint.
 */
export function WalletConnectPanel({ compact }: { compact?: boolean }) {
  const { openConnectModal } = useConnectModal();
  const { setVisible } = useWalletModal();

  const openEvm = () => {
    openConnectModal?.();
  };

  const openSol = () => {
    setVisible(true);
  };

  if (compact) {
    return (
      <div className="flex max-w-[min(85vw,26rem)] flex-wrap items-center justify-end gap-1.5 sm:max-w-none">
        <Button
          type="button"
          size="sm"
          className="h-9 shrink-0 border-0 bg-[#7C3AED] px-3 text-xs font-semibold text-white shadow-sm hover:bg-[#6d31d4]"
          disabled={!openConnectModal}
          onClick={openEvm}
        >
          Connect EVM
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="h-9 shrink-0 border-white/20 bg-white/10 px-3 text-xs font-semibold text-white hover:bg-white/15"
          onClick={openSol}
        >
          Solana
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <Button
        type="button"
        className="h-12 w-full border-0 bg-[#7C3AED] text-base font-semibold text-white shadow-lg shadow-[#7C3AED]/30 hover:bg-[#6d31d4]"
        disabled={!openConnectModal}
        onClick={openEvm}
      >
        Connect Ethereum wallet
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-12 w-full border-white/20 bg-white/5 text-base font-semibold text-white hover:bg-white/10"
        onClick={openSol}
      >
        Connect Solana wallet
      </Button>
    </div>
  );
}
