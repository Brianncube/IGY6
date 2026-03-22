"use client";

import { useEffect, useMemo, useState } from "react";
import { Clock3, Flame, MapPin, Sparkles } from "lucide-react";
import { radarCities } from "@/lib/constants";
import { formatTimeForOffset, getCountdownTo420 } from "@/lib/utils";

type RadarState = {
  city: string;
  localTime: string;
  countdown: string;
  deltaMs: number;
  vibe: string;
  isLive: boolean;
};

function buildRadarState(): RadarState[] {
  return radarCities.map((entry) => {
    const localDate = formatTimeForOffset(entry.offset);
    const countdown = getCountdownTo420(localDate);
    const isLive = localDate.getHours() === 16 && localDate.getMinutes() === 20;

    return {
      city: entry.city,
      localTime: localDate.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
      }),
      countdown: countdown.formatted,
      deltaMs: countdown.totalMs,
      vibe: entry.vibe,
      isLive
    };
  });
}

const DEFAULT_CANNONBALL_MESSAGE = "Time to roll into the next round. Cheers and queue up.";
const CHACHI_CANNONBALL_MESSAGE = "This one's for Chachi 🐾";

export function RadarBoard() {
  const [radar, setRadar] = useState<RadarState[]>(() => buildRadarState());
  const [showCannonball, setShowCannonball] = useState(false);
  const [cannonballMessage, setCannonballMessage] = useState(DEFAULT_CANNONBALL_MESSAGE);

  const triggerCannonball = () => {
    setCannonballMessage(
      Math.random() < 0.16 ? CHACHI_CANNONBALL_MESSAGE : DEFAULT_CANNONBALL_MESSAGE
    );
    setShowCannonball(true);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRadar(buildRadarState());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (radar.some((entry) => entry.isLive)) {
      triggerCannonball();
      const timeout = window.setTimeout(() => setShowCannonball(false), 3200);
      return () => window.clearTimeout(timeout);
    }
  }, [radar]);

  const closest = useMemo(() => {
    return [...radar].sort((a, b) => a.deltaMs - b.deltaMs)[0];
  }, [radar]);

  return (
    <>
      <div className="grid gap-4">
        <div className="glass-panel-strong rounded-[1.8rem] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)]">
              <Flame className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                Closest To 4:20
              </p>
              <h2 className="font-display text-3xl font-bold">{closest?.city ?? "Loading..."}</h2>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                <Clock3 className="h-4 w-4" />
                Local Time
              </p>
              <p className="mt-3 font-display text-3xl font-bold">{closest?.localTime}</p>
            </div>
            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                <Sparkles className="h-4 w-4" />
                Countdown
              </p>
              <p className="mt-3 font-display text-3xl font-bold">{closest?.countdown}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={triggerCannonball}
            className="accent-ring mt-4 flex min-h-12 w-full items-center justify-center rounded-[1.2rem] bg-[var(--accent-soft)] px-4 text-sm font-semibold"
          >
            CANNONBALL
          </button>
        </div>

        <div className="grid gap-3">
          {radar.map((entry) => {
            const highlighted = entry.city === closest?.city;
            return (
              <div
                key={entry.city}
                className={`glass-panel rounded-[1.45rem] p-4 ${highlighted ? "accent-ring" : ""}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="flex items-center gap-2 text-sm text-[var(--muted)]">
                      <MapPin className="h-4 w-4" />
                      {entry.city}
                    </p>
                    <p className="mt-2 font-display text-3xl font-bold">{entry.localTime}</p>
                    <p className="mt-2 text-sm text-[var(--muted)]">{entry.vibe}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-right">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                      Next 4:20
                    </p>
                    <p className="mt-1 font-display text-xl font-bold">{entry.countdown}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showCannonball ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-4 backdrop-blur-xl"
          onClick={() => setShowCannonball(false)}
        >
          <div className="glass-panel-strong w-full max-w-sm rounded-[2rem] p-6 text-center">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">420 Live</p>
            <h3 className="mt-3 font-display text-5xl font-bold">CANNONBALL</h3>
            <p className="mt-3 text-base text-[var(--muted)]">{cannonballMessage}</p>
            <div className="mt-5 text-4xl">Raise one up</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
