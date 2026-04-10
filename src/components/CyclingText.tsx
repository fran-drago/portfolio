"use client";

/**
 * CyclingText — Cycles between phrases with a smooth fade+slide or scramble effect.
 * Renders inline — no forced line breaks.
 * Respects prefers-reduced-motion.
 */

import { useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const SCRAMBLE_DURATION = 600;

interface CyclingTextProps {
  phrases: readonly string[];
  interval?: number;
  scramble?: boolean;
  className?: string;
}

export function CyclingText({
  phrases,
  interval = 3000,
  scramble = false,
  className,
}: CyclingTextProps) {
  const [displayed, setDisplayed] = useState(phrases[0]);
  const [visible, setVisible] = useState(true);
  const reducedMotion = useRef(false);
  const rafRef = useRef<number | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    setDisplayed(phrases[0]);
    indexRef.current = 0;
  }, [phrases]);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % phrases.length;
      indexRef.current = nextIndex;
      const target = phrases[nextIndex];

      if (scramble) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        if (reducedMotion.current) {
          setDisplayed(target);
          return;
        }

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / SCRAMBLE_DURATION, 1);
          const revealed = Math.floor(target.length * progress);
          setDisplayed(
            target
              .split("")
              .map((char, i) =>
                i < revealed
                  ? char
                  : SCRAMBLE_CHARS[
                      Math.floor(Math.random() * SCRAMBLE_CHARS.length)
                    ]
              )
              .join("")
          );
          if (progress < 1) {
            rafRef.current = requestAnimationFrame(tick);
          }
        };
        rafRef.current = requestAnimationFrame(tick);
      } else {
        if (reducedMotion.current) {
          setDisplayed(target);
        } else {
          setVisible(false);
          setTimeout(() => {
            setDisplayed(target);
            setVisible(true);
          }, 350);
        }
      }
    }, interval);

    return () => {
      clearInterval(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [phrases, interval, scramble]);

  return (
    <span
      className={className}
      style={
        scramble
          ? undefined
          : {
              display: "inline",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
              willChange: "opacity, transform",
            }
      }
      aria-live="polite"
      aria-atomic="true"
    >
      {displayed}
    </span>
  );
}
