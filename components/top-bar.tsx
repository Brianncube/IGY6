"use client";

import Image from "next/image";
import Link from "next/link";
import { useThemeMode } from "@/components/theme-provider";
import { crewThemes } from "@/lib/constants";

export function TopBar() {
  const { mode } = useThemeMode();
  const copy = crewThemes[mode];

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5">
      <div className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-colors duration-300">
        <Link href="/" className="flex items-center gap-3">
          <div
            data-chachi-hold
            className="accent-ring flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[var(--accent-soft)]"
          >
            <Image
              src={copy.logo}
              alt={`${copy.label} logo`}
              width={44}
              height={44}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="min-w-0">
            <p className="font-display text-base font-semibold leading-none">{copy.title}</p>
            <p className="truncate text-xs text-[var(--muted)]">{copy.chip}</p>
          </div>
        </Link>
        <div
          data-chachi-trigger
          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]"
        >
          Xbox Crew
        </div>
      </div>
    </header>
  );
}
