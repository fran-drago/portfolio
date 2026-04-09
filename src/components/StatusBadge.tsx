/**
 * StatusBadge — Availability indicator with a pulsing dot.
 * Pulse uses box-shadow method from portfolio-web (more elegant than opacity pulse).
 */

interface StatusBadgeProps {
  label: string;
}

export function StatusBadge({ label }: StatusBadgeProps) {
  return (
    <div
      className="inline-flex items-center gap-2 leading-none"
      role="status"
      aria-label={label}
    >
      {/* Pulsing dot — box-shadow ripple, matches portfolio-web dot-pulse */}
      <span
        className="animate-pulse-dot inline-flex h-2 w-2 rounded-full bg-positive"
        aria-hidden="true"
      />
      <span className="type-body-sm text-positive">
        {label}
      </span>
    </div>
  );
}
