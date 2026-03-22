import clips from "@/data/clips.json";
import { ClipsFeed } from "@/components/clips-feed";
import { SectionHeader } from "@/components/section-header";

export default function ClipsPage() {
  return (
    <div className="space-y-5 pb-28">
      <SectionHeader
        eyebrow="Clips Feed"
        title="The best chaos, one swipe at a time"
        description="Built for phones first. On mobile, each clip takes over the screen like a vertical feed. On larger screens, it opens into a grid."
      />
      <ClipsFeed clips={clips} />
    </div>
  );
}
