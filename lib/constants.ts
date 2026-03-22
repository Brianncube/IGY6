import type { LucideIcon } from "lucide-react";
import { Clapperboard, Home, Radio, Shield, Users } from "lucide-react";

export type CrewMode = "igy6" | "gwar";

export const crewThemes: Record<
  CrewMode,
  {
    label: string;
    title: string;
    tagline: string;
    description: string;
    chip: string;
    logo: string;
  }
> = {
  igy6: {
    label: "IGY6",
    title: "I Got Your 6",
    tagline: "Tactical pressure. Locked comms. No one gets left behind.",
    description:
      "A disciplined Call of Duty squad built on trust, clean pushes, and years of late-night wins.",
    chip: "Tactical Mode",
    logo: "/images/crew/IGY6.png"
  },
  gwar: {
    label: "GWAR",
    title: "Guns Weed Alcohol Rage",
    tagline: "Glitchy nights, neon heat, and total open-world mayhem.",
    description:
      "A GTA crew that treats every session like a story worth retelling the next day.",
    chip: "Chaos Mode",
    logo: "/images/crew/GWAR.png"
  }
};

export const navItems: Array<{
  href: string;
  label: string;
  icon: LucideIcon;
}> = [
  { href: "/", label: "Home", icon: Home },
  { href: "/clips", label: "Clips", icon: Clapperboard },
  { href: "/squad", label: "Squad", icon: Users },
  { href: "/community", label: "Community", icon: Shield },
  { href: "/radar", label: "Radar", icon: Radio }
];

export const radarCities = [
  { city: "Los Angeles", offset: -7, vibe: "West coast cooldown" },
  { city: "Chicago", offset: -5, vibe: "Midnight lobby reset" },
  { city: "New York", offset: -4, vibe: "East side session" },
  { city: "London", offset: 0, vibe: "Tea then mayhem" },
  { city: "Johannesburg", offset: 2, vibe: "Local cannonball watch" },
  { city: "Tokyo", offset: 9, vibe: "Sunrise squad check-in" }
];
