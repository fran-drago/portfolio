/**
 * SectionLabel — Small uppercase tracking label used as section headers.
 * Intentionally quiet — lets the content carry visual weight.
 */

interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p
      className="type-label-section uppercase text-muted-foreground mb-6"
    >
      {children}
    </p>
  );
}
