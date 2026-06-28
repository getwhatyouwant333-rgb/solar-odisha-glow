import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-12`}>
      {eyebrow && (
        <div
          className={`text-xs font-semibold uppercase tracking-[0.25em] mb-3 ${
            light ? "text-[var(--amber-brand)]" : "text-[var(--amber-brand-deep)]"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display text-3xl md:text-5xl font-semibold leading-tight ${
          light ? "text-white" : "text-[var(--navy-deep)]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
