"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CrewMode } from "@/lib/constants";

type ThemeContextValue = {
  mode: CrewMode;
  toggleMode: () => void;
  setMode: (mode: CrewMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<CrewMode>("igy6");

  useEffect(() => {
    const stored = window.localStorage.getItem("crew-mode") as CrewMode | null;
    if (stored === "igy6" || stored === "gwar") {
      setMode(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    window.localStorage.setItem("crew-mode", mode);
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      setMode,
      toggleMode: () => setMode((current) => (current === "igy6" ? "gwar" : "igy6"))
    }),
    [mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeMode() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeMode must be used within ThemeProvider");
  }

  return context;
}
