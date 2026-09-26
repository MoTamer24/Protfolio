import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 — Experience" title="Where I've been">
      <ol className="relative border-l border-line pl-8">
        {experience.map((item, i) => (
          <Reveal as="li" key={`${item.org}-${item.period}`} delay={i * 0.1}>
            <div className="relative pb-12 last:pb-0">
              <span className="absolute -left-[2.3rem] top-1.5 grid size-4 place-items-center rounded-full bg-base ring-1 ring-line">
                <span className="size-2 rounded-full bg-gradient-to-r from-accent to-accent-2" />
              </span>
              <span className="font-mono text-xs text-accent">{item.period}</span>
              <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
              <p className="text-sm text-muted">{item.org}</p>
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-2" />
                    {point}
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
