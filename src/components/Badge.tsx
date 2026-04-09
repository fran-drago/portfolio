interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <span className="type-body-base-medium tracking-wide uppercase text-primary">
      {label}
    </span>
  );
}
