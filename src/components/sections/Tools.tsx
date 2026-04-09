"use client";

import { useContent } from "@/contexts/LanguageContext";
import { revealDelay } from "@/lib/utils";
import { ToolCategory } from "@/components/ToolCategory";

export function Tools() {
  const content = useContent();
  const { sections } = content;
  return (
    <section id="tools" aria-labelledby="tools-heading" className="w-full px-[var(--spacing-24)] py-[var(--spacing-32)]">
      <h2 id="tools-heading" className="type-label-section text-secondary-foreground mb-4" data-reveal>
        {sections.tools}
      </h2>

      <div className="flex flex-col gap-[var(--spacing-20)]">
        {content.tools.map((toolGroup, i) => (
          <div key={toolGroup.category} data-reveal style={revealDelay(i)}>
            <ToolCategory
              category={toolGroup.category}
              items={toolGroup.items}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
