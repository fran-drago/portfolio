"use client";

import Image from "next/image";
import { useContent } from "@/contexts/LanguageContext";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare02Icon } from "@hugeicons/core-free-icons";

export function Projects() {
  const { sections, projects } = useContent();

  return (
    <section id="proyectos" aria-labelledby="projects-heading" className="flex flex-col gap-[var(--spacing-16)] px-[var(--spacing-24)] py-[var(--spacing-32)]">
      <h2 id="projects-heading" className="type-label-section text-secondary-foreground" data-reveal>
        {sections.projects}
      </h2>

      <div className="flex flex-wrap gap-[var(--spacing-24)] items-start" data-reveal>
        {projects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-[1_0_0] flex-col gap-[var(--spacing-10)] items-start min-w-[246px] h-fit transition-transform duration-300 ease-out hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative aspect-[256/182] w-full overflow-hidden rounded-[var(--radius-16)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                unoptimized
              />
              {/* Shade overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {/* Link icon */}
              <div className="absolute bottom-3 left-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <HugeiconsIcon icon={LinkSquare02Icon} size={24} className="text-white" />
              </div>
            </div>

            {/* Content */}
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
