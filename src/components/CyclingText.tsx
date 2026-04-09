"use client";

/**
 * CyclingText — Cycles between phrases with a smooth fade+slide.
 * Renders inline — no forced line breaks.
 * Respects prefers-reduced-motion.
 */

import { useEffect, useRef, useState } from "react";

interface CyclingTextProps {
  phrases: readonly string[];
  interval?: number;
  className?: string;
}

export function CyclingText({
  phrases,
  interval = 3000,
  className,
}: CyclingTextProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const timer = setInterval(() => {
      if (reducedMotion.current) {
        setIndex((i) => (i + 1) % phrases.length);
        return;
      }

      setVisible(false);
      timeoutId = setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, 350);
    }, interval);

    return () => {
      clearInterval(timer);
      clearTimeout(timeoutId);
    };
  }, [phrases, interval]);

  return (
    <span
      className={className}
      style={{
        display: "inline",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(6px)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
        willChange: "opacity, transform",
      }}
      aria-live="polite"
      aria-atomic="true"
    >
      {phrases[index]}
    </span>
  );
}
