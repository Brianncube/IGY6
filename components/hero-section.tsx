"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gamepad2, PlayCircle, Zap } from "lucide-react";
import { useThemeMode } from "@/components/theme-provider";
import { crewThemes } from "@/lib/constants";

export function HeroSection() {
  const { mode } = useThemeMode();
  const copy = crewThemes[mode];

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4 shadow-glow sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%)]" />
      <div className="relative grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <div className="inline-flex min-h-11 items-center rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 text-xs uppercase tracking-[0.28em] text-[var(--text)]">
            {copy.chip}
          </div>
          <div className="space-y-3">
            <h1 className="max-w-xl font-display text-[2.35rem] font-bold leading-[0.95] sm:text-6xl">
              {copy.label}
            </h1>
            <p className="max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              {copy.tagline}
            </p>
            <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">{copy.description}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/clips"
              className="accent-ring flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[var(--accent-soft)] px-5 text-sm font-semibold"
            >
              <PlayCircle className="h-4 w-4" />
              Watch Clips
            </Link>
            <Link
              href="/community"
              className="flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-5 text-sm font-semibold"
            >
              Join the Crew
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <div className="glass-panel overflow-hidden rounded-[1.5rem] p-3 sm:col-span-3 lg:col-span-1">
            <div className="relative flex min-h-[180px] items-center justify-center rounded-[1.2rem] bg-black/20 p-4">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] via-transparent to-transparent" />
              <Image
                src={copy.logo}
                alt={`${copy.label} crew logo`}
                width={520}
                height={520}
                className="relative z-10 h-auto max-h-[180px] w-auto max-w-full object-contain"
                priority
              />
            </div>
          </div>
          {[
            { label: "7+ Years", detail: "Squad history", icon: Gamepad2 },
            { label: "Cross-title", detail: "COD and GTA sessions", icon: Zap },
            { label: "Mobile-first", detail: "Quick clips, fast check-ins", icon: PlayCircle }
          ].map(({ label, detail, icon: Icon }, index) => (
            <div key={label} className="glass-panel min-h-[120px] rounded-[1.5rem] p-4">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)]">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-display text-2xl font-bold">{label}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
