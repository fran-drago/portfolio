"use client";

import { useContent } from "@/contexts/LanguageContext";
import { HugeiconsIcon } from "@hugeicons/react";
import { AlertCircleIcon } from "@hugeicons/core-free-icons";

export function Projects() {
  const { sections } = useContent();

  return (
    <section id="proyectos" aria-labelledby="projects-heading" className="w-full px-[var(--spacing-24)] py-[var(--spacing-32)]">
      <h2 id="projects-heading" className="type-label-section text-secondary-foreground mb-4" data-reveal>
        {sections.projects}
      </h2>

      <div
        className="flex w-full items-center justify-center gap-2 rounded-[var(--radius-12)] bg-secondary p-[var(--spacing-32)]"
        data-reveal
      >
        <HugeiconsIcon icon={AlertCircleIcon} size={20} className="shrink-0 text-muted-foreground" />
        <span className="type-body-base-medium text-muted-foreground">{sections.comingSoon}</span>
      </div>
    </section>
  );
}
