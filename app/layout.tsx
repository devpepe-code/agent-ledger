import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactElement, ReactNode } from "react";

import "./globals.css";

import { env } from "@/lib/env";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.appUrl),
  title: {
    default: "AgentLedger — Proof for every AI agent action",
    template: "%s | AgentLedger",
  },
  description:
    "Permanent, tamper-proof records of what your AI agents do — anchored on Solana.",
  keywords: [
    "AI agents",
    "AI governance",
    "agent monitoring",
    "Solana",
    "audit trail",
    "EU AI Act",
  ],
  authors: [{ name: "AgentLedger" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: env.appUrl,
    siteName: "AgentLedger",
    title: "AgentLedger — Proof for every AI agent action",
    description:
      "Know what your AI agents did — with tamper-proof records anchored on Solana.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentLedger — Proof for every AI agent action",
    description:
      "Permanent records of AI agent actions — anchored on Solana.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return (
    <html
      lang="en"
      className={`dark ${sans.variable} ${mono.variable}`}
      style={{ backgroundColor: "#0F0F1A", minHeight: "100%" }}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#0F0F1A] font-sans antialiased"
        style={{
          backgroundColor: "#0F0F1A",
          color: "#f8fafc",
          minHeight: "100vh",
          fontFamily:
            "var(--font-sans), ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
