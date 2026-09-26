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
    <section id={id} className="mx-auto max-w-6xl scroll-mt-28 px-5 py-20 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-muted">{description}</p>
        )}
        <div className="mt-6 h-px w-24 bg-gradient-to-r from-accent to-transparent" />
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
