"use client";

import Image from "next/image";
import { useContent } from "@/contexts/LanguageContext";

export function Projects() {
  const { sections, projects } = useContent();

  return (
    <section id="proyectos" aria-labelledby="projects-heading" className="flex flex-col gap-[var(--spacing-16)] px-[var(--spacing-24)] py-[var(--spacing-32)]">
      <h2 id="projects-heading" className="type-label-section text-secondary-foreground" data-reveal>
        {sections.projects}
      </h2>

      <div className="flex flex-wrap gap-[var(--spacing-16)] items-start" data-reveal>
        {projects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-[1_0_0] flex-col gap-[var(--spacing-10)] items-start min-w-[250px]"
          >
            <div className="relative aspect-[256/182] w-full overflow-hidden rounded-[var(--radius-16)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-[var(--spacing-2)] w-full">
              <p className="type-body-base-medium text-foreground">{project.title}</p>
              <p className="type-body-base text-secondary-foreground">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
