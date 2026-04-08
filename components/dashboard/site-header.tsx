"use client";

import { Activity, LogOut, Shield, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { WalletConnectPanel } from "@/components/auth/wallet-connect-panel";
import { cn } from "@/lib/utils";

export type DashboardSessionKind = "simulated" | "wallet" | "none";

async function postLogout() {
  await fetch("/api/auth/logout", { method: "POST" });
}

export function SiteHeader({
  sessionKind,
}: {
  sessionKind: DashboardSessionKind;
}) {
  const pathname = usePathname();
  const onDashboard =
    pathname === "/dashboard" || pathname.startsWith("/dashboard/");
  const onAgents = pathname === "/agents" || pathname.startsWith("/agents/");

  async function clearSessionAndExit() {
    await postLogout();
    window.location.href = "/";
  }

  return (
    <header
      className="sticky top-0 z-40 border-b border-white/10 bg-[#0F0F1A]/92"
      style={{ backgroundColor: "rgba(15, 15, 26, 0.96)" }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] shadow-lg shadow-[#7C3AED]/25 sm:h-10 sm:w-10">
            <Shield className="h-4 w-4 text-white sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-medium uppercase leading-tight tracking-[0.18em] text-[#06B6D4]/90 sm:text-xs sm:tracking-[0.2em]">
              AgentLedger
            </p>
            <p className="truncate text-xs text-white/50 sm:text-sm">
              Proof for what your agents did
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-5 md:flex lg:gap-6"
          aria-label="Product"
        >
          <Link
            href="/dashboard"
            aria-current={onDashboard ? "page" : undefined}
            className={cn(
              "text-sm transition-colors",
              onDashboard
                ? "font-medium text-white"
                : "text-white/55 hover:text-white",
            )}
          >
            Dashboard
          </Link>
          <Link
            href="/agents"
            aria-current={onAgents ? "page" : undefined}
            className={cn(
              "text-sm transition-colors",
              onAgents
                ? "font-medium text-white"
                : "text-white/55 hover:text-white",
            )}
          >
            Agents
          </Link>
          <Link
            href="/alerts"
            className={cn(
              "text-sm transition-colors",
              pathname === "/alerts" || pathname.startsWith("/alerts/")
                ? "font-medium text-white"
                : "text-white/55 hover:text-white",
            )}
          >
            Activity
          </Link>
        </nav>

        <div className="flex min-w-0 flex-shrink-0 items-center gap-1.5 sm:gap-3">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-9 gap-0 px-2 text-white/60 hover:text-white sm:gap-2 sm:px-3"
            aria-label="Sign out and return to marketing site"
            onClick={() => void clearSessionAndExit()}
          >
            <LogOut className="h-3.5 w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">Sign out</span>
          </Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden h-9 w-9 sm:flex"
                aria-label="Anchoring status (mock)"
              >
                <Activity className="h-4 w-4 text-[#06B6D4]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Live anchoring health (mock)</TooltipContent>
          </Tooltip>
          {sessionKind === "wallet" ? (
            <span className="inline-flex h-9 max-w-[7.5rem] items-center gap-1 truncate rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-2 text-[11px] text-emerald-200/90 sm:max-w-[11rem] sm:px-3 sm:text-xs">
              <Wallet className="h-3 w-3 shrink-0 text-emerald-300" aria-hidden />
              <span className="truncate" title="Wallet connected">
                Wallet connected
              </span>
            </span>
          ) : (
            <div className="flex max-w-[min(90vw,28rem)] flex-wrap items-center justify-end gap-1.5 sm:max-w-none sm:gap-2">
              {sessionKind === "simulated" ? (
                <span className="hidden rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white/50 sm:inline">
                  Demo
                </span>
              ) : null}
              <WalletConnectPanel compact />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
