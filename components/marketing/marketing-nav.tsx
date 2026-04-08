"use client";

import Link from "next/link";
import { Menu, Shield, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { DASHBOARD_LAUNCH_HREF } from "@/lib/auth";
import { cn } from "@/lib/utils";

const links = [
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/alerts", label: "Safety feed" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#pricing", label: "Pricing" },
] as const;

export function MarketingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-colors duration-300",
          scrolled
            ? "border-b border-white/10 bg-[#0F0F1A]/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] shadow-lg shadow-[#7C3AED]/20">
              <Shield className="h-4 w-4 text-white" aria-hidden />
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">
              AgentLedger
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md text-sm text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#7C3AED] shadow-md shadow-[#7C3AED]/30 hover:bg-[#6d31d4]"
            >
              <Link
                href={DASHBOARD_LAUNCH_HREF}
                prefetch={false}
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch App
              </Link>
            </Button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Button
              asChild
              size="sm"
              className="bg-[#7C3AED] hover:bg-[#6d31d4]"
            >
              <Link
                href={DASHBOARD_LAUNCH_HREF}
                prefetch={false}
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch App
              </Link>
            </Button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          role="presentation"
          aria-hidden
        />
      ) : null}

      {open ? (
        <nav
          className="fixed left-0 right-0 top-16 z-40 border-b border-white/10 bg-[#0F0F1A]/95 backdrop-blur-xl md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={DASHBOARD_LAUNCH_HREF}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-[#7C3AED] px-3 py-3 text-center text-sm font-semibold text-white hover:bg-[#6d31d4]"
              onClick={() => setOpen(false)}
            >
              Launch App
            </Link>
          </div>
        </nav>
      ) : null}
    </>
  );
}
