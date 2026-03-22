"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SECRET = "CHACHI";
const DISPLAY_MS = 4600;
const CLICK_TRIGGER_COUNT = 5;
const CLICK_RESET_MS = 4000;
const HOLD_TRIGGER_MS = 1800;
const PAW_POSITIONS = [
  "left-[6%] top-[10%]",
  "right-[8%] top-[14%]",
  "left-[10%] top-[32%]",
  "right-[6%] top-[38%]",
  "left-[7%] bottom-[24%]",
  "right-[10%] bottom-[20%]",
  "left-[16%] bottom-[8%]",
  "right-[14%] bottom-[10%]"
];

export function ChachiEasterEgg() {
  const [active, setActive] = useState(false);
  const typedRef = useRef("");
  const clickCountRef = useRef(0);
  const hideTimeoutRef = useRef<number | null>(null);
  const clickResetTimeoutRef = useRef<number | null>(null);
  const holdTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const clearTimers = () => {
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }

      if (clickResetTimeoutRef.current) {
        window.clearTimeout(clickResetTimeoutRef.current);
      }

      if (holdTimeoutRef.current) {
        window.clearTimeout(holdTimeoutRef.current);
      }
    };

    const triggerTribute = () => {
      clearTimers();
      typedRef.current = "";
      setActive(true);
      hideTimeoutRef.current = window.setTimeout(() => {
        setActive(false);
      }, DISPLAY_MS);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const isTypingField =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;

      if (isTypingField || event.key.length !== 1) {
        return;
      }

      typedRef.current = `${typedRef.current}${event.key.toUpperCase()}`.slice(-SECRET.length);

      if (typedRef.current === SECRET) {
        triggerTribute();
      }
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target?.closest("[data-chachi-trigger]")) {
        return;
      }

      clickCountRef.current += 1;

      if (clickResetTimeoutRef.current) {
        window.clearTimeout(clickResetTimeoutRef.current);
      }

      clickResetTimeoutRef.current = window.setTimeout(() => {
        clickCountRef.current = 0;
      }, CLICK_RESET_MS);

      if (clickCountRef.current >= CLICK_TRIGGER_COUNT) {
        clickCountRef.current = 0;
        triggerTribute();
      }
    };

    const clearHold = () => {
      if (holdTimeoutRef.current) {
        window.clearTimeout(holdTimeoutRef.current);
        holdTimeoutRef.current = null;
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target?.closest("[data-chachi-hold]")) {
        return;
      }

      clearHold();
      holdTimeoutRef.current = window.setTimeout(() => {
        triggerTribute();
        holdTimeoutRef.current = null;
      }, HOLD_TRIGGER_MS);
    };

    const handlePointerUp = () => {
      clearHold();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleClick);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      clearTimers();
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="pointer-events-none fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-black px-5"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_28%,rgba(0,0,0,0.82)_100%)]" />
          {PAW_POSITIONS.map((position, index) => (
            <motion.div
              key={position}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.16, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.12 * index }}
              className={`absolute ${position} select-none text-3xl text-white/70 sm:text-4xl`}
            >
              🐾
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.06 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 4.5, ease: "easeOut" }}
            className="relative mx-auto flex w-full max-w-sm flex-col items-center text-center"
          >
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0 bg-black/15" />
              <Image
                src="/images/crew/Chachi.jpg"
                alt="Chachi tribute"
                width={900}
                height={1200}
                priority
                className="h-auto w-full object-cover opacity-85"
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="mt-6 whitespace-pre-line font-display text-2xl font-semibold leading-tight text-white sm:text-3xl"
            >
              {"Chachi\n4th member. Always IGY6."}
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
