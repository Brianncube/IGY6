import squad from "@/data/squad.json";
import { SectionHeader } from "@/components/section-header";
import { SquadGrid } from "@/components/squad-grid";

export default function SquadPage() {
  return (
    <div className="space-y-5 pb-28">
      <SectionHeader
        eyebrow="Squad Roster"
        title="Years deep and still queueing up"
        description="Tappable crew cards with roles, specialties, and the energy each player brings to the session."
      />
      <SquadGrid members={squad} />
    </div>
  );
}
