import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 — Experience" title="Where I've been">
      <ol className="relative border-l border-line pl-8 sm:pl-10">
        {experience.map((item, i) => (
          <Reveal as="li" key={`${item.org}-${item.period}`} delay={i * 0.1}>
            <div className="relative pb-12 last:pb-0">
              <span className="absolute -left-[2.35rem] sm:-left-[2.85rem] top-1.5 grid size-4 place-items-center rounded-full border border-line bg-surface shadow-2xs">
                <span className="size-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs font-semibold text-accent">{item.period}</span>
              <h3 className="mt-1 text-lg font-semibold text-ink">{item.role}</h3>
              <p className="text-sm font-medium text-muted">{item.org}</p>
              <ul className="mt-3 space-y-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
