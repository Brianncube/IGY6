"use client";

import { ArrowUpRight, MessageCircleMore, Users } from "lucide-react";

export function CommunityHero() {
  return (
    <section className="space-y-4">
      <div className="glass-panel-strong overflow-hidden rounded-[2rem] p-5 sm:p-6">
        <div className="space-y-4">
          <div className="inline-flex min-h-11 items-center rounded-full bg-[var(--accent-soft)] px-4 text-xs uppercase tracking-[0.28em]">
            Crew Community
          </div>
          <div className="space-y-3">
            <h1 className="max-w-lg font-display text-4xl font-bold leading-none sm:text-6xl">
              Pull up, squad up, stay in rotation
            </h1>
            <p className="max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              A simple landing space for the crew and anyone invited into the circle. Quick to scan on mobile, clear to act on, and built around one tap.
            </p>
          </div>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="accent-ring flex min-h-14 w-full items-center justify-center gap-2 rounded-[1.35rem] bg-[var(--accent-soft)] px-5 text-base font-semibold sm:w-fit sm:min-w-[240px]"
          >
            Join Community
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Live Hangouts",
            icon: MessageCircleMore,
            text: "Share clips, callouts, memes, and jump-in invites without digging through clutter."
          },
          {
            title: "Crew Energy",
            icon: Users,
            text: "Built for longtime teammates and new recruits who fit the vibe."
          }
        ].map(({ title, icon: Icon, text }) => (
          <div key={title} className="glass-panel rounded-[1.6rem] p-4">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)]">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="font-display text-2xl font-bold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
