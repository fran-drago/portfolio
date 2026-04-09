/**
 * ExperienceRow — A single work experience entry.
 * Layout: role bold + period right-aligned (primary row), company muted below, then body.
 * Figma: role is the primary identifier; company is secondary context.
 */

interface ExperienceRowProps {
  company: string;
  role: string;
  period: string;
  description: string;
  bullets: readonly string[];
}

export function ExperienceRow({
  company,
  role,
  period,
  description,
  bullets,
}: ExperienceRowProps) {
  return (
    <div>
      {/* Role + period (primary row) */}
      <div className="flex items-baseline justify-between gap-4">
        <span className="type-body-base-medium text-foreground">
          {role}
        </span>
        <span className="type-body-base shrink-0 text-muted-foreground tabular-nums">
          {period}
        </span>
      </div>

      {/* Company (secondary context) */}
      <p className="mt-0.5 type-body-sm text-muted-foreground">{company}</p>

      {/* Context description */}
      <p className="mt-4 type-body-base leading-relaxed text-secondary-foreground">
        {description}
      </p>

      {/* Bullets */}
      <ul className="mt-4 space-y-4" role="list">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 type-body-base leading-relaxed text-secondary-foreground"
          >
            <span className="mt-0.5 shrink-0 text-secondary-foreground" aria-hidden="true">
              ·
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
