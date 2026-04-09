/**
 * ToolCategory — A row in the Tools section.
 * Category label on the left, dot-separated items on the right.
 * Matches the CV's own formatting structure.
 */

interface ToolCategoryProps {
  category: string;
  items: readonly string[];
}

export function ToolCategory({ category, items }: ToolCategoryProps) {
  return (
    <div className="flex flex-col gap-[var(--spacing-4)] sm:flex-row sm:gap-[var(--spacing-8)]">
      {/* Category label — fixed width on desktop, full width on mobile */}
      <span className="sm:w-24 sm:shrink-0 type-body-base-medium text-foreground">
        {category}
      </span>

      {/* Items — dot-separated, subtle visual rhythm */}
      <p className="type-body-base text-secondary-foreground leading-relaxed">
        {items.join(" · ")}
      </p>
    </div>
  );
}
