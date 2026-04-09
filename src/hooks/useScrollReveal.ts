"use client";

/**
 * useScrollReveal — Bidirectional scroll reveal.
 *
 * Watches all [data-reveal] elements via IntersectionObserver.
 * Elements reveal when entering the viewport and re-hide when leaving,
 * so the animation replays on every scroll pass.
 *
 * Stagger is handled purely in CSS via `--reveal-delay` set inline on each element.
 *
 * Config: threshold: 0.08, rootMargin: "0px 0px -32px 0px"
 */

import { useEffect } from "react";
import type { Locale } from "@/lib/content";

export function useScrollReveal(lang: Locale) {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (reducedMotion || !revealEls.length) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    requestAnimationFrame(() => {
      revealEls.forEach((el) => observer.observe(el));
    });

    return () => observer.disconnect();
  }, [lang]);
}
