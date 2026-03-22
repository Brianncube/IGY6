import type { CrewMode } from "./constants";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function getThemeCopy(mode: CrewMode) {
  return mode === "igy6"
    ? {
        panel: "from-emerald-400/20 via-white/5 to-transparent",
        accent: "text-emerald-300"
      }
    : {
        panel: "from-fuchsia-500/20 via-lime-300/10 to-transparent",
        accent: "text-lime-300"
      };
}

export function formatTimeForOffset(offset: number) {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60_000;
  return new Date(utc + offset * 60 * 60_000);
}

export function getCountdownTo420(date: Date) {
  const target = new Date(date);
  target.setHours(16, 20, 0, 0);

  if (date.getTime() > target.getTime()) {
    target.setDate(target.getDate() + 1);
  }

  const diff = Math.max(target.getTime() - date.getTime(), 0);
  const hours = Math.floor(diff / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);

  return {
    totalMs: diff,
    formatted: `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  };
}
