"use client";

import { useContent } from "@/contexts/LanguageContext";

export function Footer() {
  const { name, footer } = useContent();

  return (
    <footer className="w-full px-[var(--spacing-24)] py-[var(--spacing-32)]">
      <p className="type-body-xs text-muted-foreground">
        {footer.tagline} {name} © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
