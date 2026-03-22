"use client";

import { ExternalLink } from "lucide-react";

type SquadMember = {
  id: string;
  gamerTag: string;
  role: string;
  specialty: string;
  avatar: string;
  crew: string;
  youtubeChannelUrl?: string;
  youtubeLabel?: string;
};

export function SquadGrid({ members }: { members: SquadMember[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {members.map((member) => (
        <article
          key={member.id}
          className="glass-panel rounded-[1.75rem] p-4 transition-transform duration-150 active:scale-[0.98]"
        >
          <div className="flex items-start gap-4">
            <div className="accent-ring flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] font-display text-xl font-bold">
              {member.avatar}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-display text-2xl font-bold">{member.gamerTag}</h2>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  {member.crew}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-[var(--accent)]">{member.role}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{member.specialty}</p>
              {member.youtubeChannelUrl ? (
                <a
                  href={member.youtubeChannelUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-[var(--text)]"
                >
                  {member.youtubeLabel || "YouTube Channel"}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <div className="mt-4 inline-flex min-h-11 items-center rounded-xl border border-dashed border-white/10 px-4 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  Add YouTube Link
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
