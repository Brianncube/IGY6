"use client";

import type clips from "@/data/clips.json";
import { ClipCard } from "@/components/clip-card";

type Clip = (typeof clips)[number];

export function ClipsFeed({ clips }: { clips: Clip[] }) {
  return (
    <>
      <div className="clip-snap no-scrollbar grid gap-4 md:hidden">
        {clips.map((clip) => (
          <div key={clip.id} className="min-h-[78svh]">
            <ClipCard clip={clip} />
          </div>
        ))}
      </div>
      <div className="hidden gap-5 md:grid lg:grid-cols-2">
        {clips.map((clip) => (
          <ClipCard key={clip.id} clip={clip} compact />
        ))}
      </div>
    </>
  );
}
