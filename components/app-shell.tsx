"use client";

import { BottomNav } from "@/components/bottom-nav";
import { CrewModeToggle } from "@/components/crew-mode-toggle";
import { TopBar } from "@/components/top-bar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:28px_28px] opacity-[0.06]" />
      <div className="pointer-events-none absolute inset-x-0 top-[-8rem] h-72 rounded-full bg-[var(--glow)] blur-3xl" />
      <TopBar />
      <CrewModeToggle />
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-3 pb-24 pt-20 sm:px-5">
        <div>{children}</div>
      </main>
      <BottomNav />
    </div>
  );
}
