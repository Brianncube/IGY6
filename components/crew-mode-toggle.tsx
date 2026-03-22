"use client";

import { useThemeMode } from "@/components/theme-provider";
import { crewThemes } from "@/lib/constants";

export function CrewModeToggle() {
  const { mode, setMode } = useThemeMode();

  return (
    <div className="fixed right-3 top-[4.9rem] z-40 sm:right-5">
      <div className="glass-panel flex min-h-11 items-center gap-1 rounded-full p-1">
        {(["igy6", "gwar"] as const).map((value) => {
          const active = value === mode;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setMode(value)}
              className={`relative min-h-11 min-w-[88px] overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                active ? "bg-[var(--accent-soft)]" : ""
              }`}
            >
              <span>{crewThemes[value].label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
