import type clips from "@/data/clips.json";
import { ClipCard } from "@/components/clip-card";

type Clip = (typeof clips)[number];

export function FeaturedClips({ clips }: { clips: Clip[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {clips.map((clip) => (
        <ClipCard key={clip.id} clip={clip} compact />
      ))}
    </div>
  );
}
