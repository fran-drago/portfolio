export type CSSPropertiesWithVars = React.CSSProperties & Record<`--${string}`, string>;

export function revealDelay(index: number, interval = 60): CSSPropertiesWithVars {
  return { "--reveal-delay": `${index * interval}ms` };
}
