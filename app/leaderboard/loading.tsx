import type { ReactElement } from "react";

export default function LeaderboardLoading(): ReactElement {
  return (
    <div
      className="flex min-h-[50vh] flex-col items-center justify-center gap-3 bg-[#0F0F1A] px-4"
      aria-busy
      aria-label="Loading leaderboard"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-[#7C3AED]" />
      <p className="text-sm text-white/50">Loading leaderboard…</p>
    </div>
  );
}
