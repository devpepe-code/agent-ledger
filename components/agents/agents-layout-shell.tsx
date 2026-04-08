"use client";

import type { ReactNode } from "react";

import { SiteHeader, type DashboardSessionKind } from "@/components/dashboard/site-header";

export function AgentsLayoutShell({
  sessionKind,
  children,
}: {
  sessionKind: DashboardSessionKind;
  children: ReactNode;
}) {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0F0F1A] via-[#0D1117] to-[#0F0F1A] text-white"
      style={{
        backgroundColor: "#0F0F1A",
        color: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 58, 237, 0.22), transparent),
            radial-gradient(ellipse 60% 40% at 100% 0%, rgba(6, 182, 212, 0.12), transparent),
            linear-gradient(to bottom, transparent, #0F0F1A)
          `,
        }}
      />
      <SiteHeader sessionKind={sessionKind} />
      <main className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
