import clips from "@/data/clips.json";
import { FeaturedClips } from "@/components/featured-clips";
import { HeroSection } from "@/components/hero-section";
import { SectionHeader } from "@/components/section-header";

export default function HomePage() {
  return (
    <div className="space-y-6 pb-28">
      <HeroSection />
      <section className="space-y-4">
        <SectionHeader
          eyebrow="Featured Shorts"
          title="Locked in for the long haul"
          description="A quick vertical reel of the moments that define the crew: late-night wipes, wild getaways, and absolute nonsense."
        />
        <FeaturedClips clips={clips.slice(0, 3)} />
      </section>
    </div>
  );
}
