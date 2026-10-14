import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SpotlightCard from "@/components/SpotlightCard";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Technologies I work with"
      description="From API design and data modelling to the pipelines and clusters that run them."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <SpotlightCard className="h-full p-6 sm:p-7">
              <h3 className="text-base font-semibold text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 font-mono text-xs text-slate-700 transition-colors hover:border-slate-300 hover:text-ink dark:text-slate-300 dark:hover:border-slate-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
