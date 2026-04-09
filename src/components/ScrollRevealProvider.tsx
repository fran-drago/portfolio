"use client";

/**
 * ScrollRevealProvider — Client boundary that activates useScrollReveal.
 * Re-runs reveal when language changes so new content is visible.
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ScrollRevealProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { lang } = useLanguage();
  useScrollReveal(lang);
  return <>{children}</>;
}
