"use client";

import { useContent } from "@/contexts/LanguageContext";
import { revealDelay } from "@/lib/utils";

export function Languages() {
  const content = useContent();
  const { sections } = content;
  return (
    <section id="idiomas" aria-labelledby="languages-heading" className="w-full px-[var(--spacing-24)] py-[var(--spacing-32)]">
      <h2 id="languages-heading" className="type-label-section text-secondary-foreground mb-4" data-reveal>
        {sections.languages}
      </h2>

      <div className="flex flex-col gap-[var(--spacing-20)]">
        {content.languages.map((item, i) => (
          <div
            key={item.language}
            className="flex items-center gap-[var(--spacing-8)]"
            data-reveal
            style={revealDelay(i)}
          >
            <span className="type-body-base-medium text-foreground w-24 shrink-0">
              {item.language}
            </span>
            <span className="type-body-base text-secondary-foreground">
              {item.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
