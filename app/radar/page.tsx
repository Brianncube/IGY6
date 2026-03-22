import { RadarBoard } from "@/components/radar-board";
import { SectionHeader } from "@/components/section-header";

export default function RadarPage() {
  return (
    <div className="space-y-5 pb-28">
      <SectionHeader
        eyebrow="420 Radar"
        title="Who is closest to 4:20 right now?"
        description="Track the next city to hit 4:20, watch the countdown, and fire the Cannonball overlay when the moment lands."
      />
      <div className="glass-panel mx-1 rounded-[1.5rem] px-4 py-3 text-center">
        <p className="font-display text-lg italic text-[var(--text)] sm:text-xl">
          &quot;It&apos;s 4:20 somewhere in the world.&quot;
        </p>
      </div>
      <RadarBoard />
    </div>
  );
}
