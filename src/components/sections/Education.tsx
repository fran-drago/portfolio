"use client";

import { useContent } from "@/contexts/LanguageContext";
import { revealDelay } from "@/lib/utils";
import { Badge } from "@/components/Badge";

export function Education() {
  const { education, sections } = useContent();

  return (
    <section id="educacion" aria-labelledby="education-heading" className="w-full px-[var(--spacing-24)] py-[var(--spacing-32)]">
      <h2 id="education-heading" className="type-label-section text-secondary-foreground mb-4" data-reveal>
        {sections.education}
      </h2>

      <div className="flex flex-col gap-[var(--spacing-20)] w-full">
        {education.programs.map((program, i) => (
          <div
            key={program.name}
            className="flex flex-col gap-[var(--spacing-4)] w-full"
            data-reveal
            style={revealDelay(i, 50)}
          >
            <div className="flex items-center justify-between w-full overflow-hidden type-body-base">
              <div className="flex items-center gap-[var(--spacing-8)] overflow-hidden shrink-0">
                <span className="type-body-base-medium text-foreground">
                  {program.name}
                </span>
                {program.badge && <Badge label={program.badge} />}
              </div>
              <span className="type-body-base text-muted-foreground tabular-nums shrink-0">
                {program.year}
              </span>
            </div>
            <span className="type-body-sm text-muted-foreground">
              {education.institution}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
