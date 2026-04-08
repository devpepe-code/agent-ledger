"use client";

import { useEffect } from "react";

import { logger } from "@/lib/logger";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logger.error("[AgentLedger] route error:", error);
  }, [error]);

  return (
    <div
      className="flex min-h-screen flex-col gap-6 px-6 py-16 font-sans"
      style={{
        backgroundColor: "#0F0F1A",
        color: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1 className="text-xl font-semibold text-white">
        Something went wrong loading this page
      </h1>
      <p className="max-w-lg text-sm text-white/65">
        Try again, or run a clean dev server from the{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">
          agent-ledger
        </code>{" "}
        folder:{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">
          npm run dev:clean
        </code>
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="w-fit rounded-lg bg-[#7C3AED] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#6d31d4]"
      >
        Try again
      </button>
    </div>
  );
}
