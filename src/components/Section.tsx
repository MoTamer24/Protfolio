import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16 sm:py-24">
      <Reveal>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
