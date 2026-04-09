"use client";

import { useContent } from "@/contexts/LanguageContext";
import { revealDelay } from "@/lib/utils";
import { ExperienceRow } from "@/components/ExperienceRow";

export function Experience() {
  const content = useContent();
  const { sections } = content;
  return (
    <section id="experiencia" aria-labelledby="experience-heading" className="w-full px-[var(--spacing-24)] py-[var(--spacing-32)]">
      <h2 id="experience-heading" className="type-label-section text-secondary-foreground mb-4" data-reveal>
        {sections.experience}
      </h2>

      <div className="space-y-8">
        {content.experience.map((job, i) => (
          <div key={job.company} data-reveal style={revealDelay(i, 80)}>
            <ExperienceRow
              company={job.company}
              role={job.role}
              period={job.period}
              description={job.description}
              bullets={job.bullets}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
