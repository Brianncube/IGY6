"use client";

import { ExternalLink, Play } from "lucide-react";

type Clip = {
  id: string;
  title: string;
  game: string;
  description: string;
  youtubeId: string;
  duration: string;
  ownerTag?: string;
};

export function ClipCard({ clip, compact = false }: { clip: Clip; compact?: boolean }) {
  const youtubeUrl = `https://www.youtube.com/watch?v=${clip.youtubeId}`;

  return (
    <article className="clip-card glass-panel-strong overflow-hidden rounded-[1.75rem] transition-transform duration-150 active:scale-[0.98]">
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${clip.youtubeId}?rel=0&modestbranding=1&playsinline=1`}
          title={clip.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.2em]">
            <Play className="h-3 w-3" />
            {clip.game}
          </div>
          <div className="flex items-end justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-bold">{clip.title}</h3>
              <p className="mt-1 max-w-[18rem] text-sm text-white/75">{clip.description}</p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs">
              {clip.duration}
            </div>
          </div>
        </div>
      </div>
      {!compact ? null : (
        <div className="flex items-center justify-between px-4 py-3 text-xs text-[var(--muted)]">
          <span>{clip.ownerTag ? `By ${clip.ownerTag}` : "Responsive Shorts embed"}</span>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[var(--accent)]"
          >
            Open
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </article>
  );
}
