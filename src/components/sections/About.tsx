import { GraduationCap, MapPin, User } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SpotlightCard from "@/components/SpotlightCard";
import { education, profile } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A bit about me">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <SpotlightCard className="h-full p-7 sm:p-8">
            <div className="inline-flex size-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent">
              <User size={20} />
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {profile.about}
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              <MapPin size={16} className="text-accent" />
              {profile.location}
            </p>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.1}>
          <SpotlightCard className="h-full p-7 sm:p-8">
            <div className="inline-flex size-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent">
              <GraduationCap size={20} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Education</h3>
            <p className="mt-3 font-medium text-ink">{education.school}</p>
            <p className="mt-1 text-sm text-muted">{education.degree}</p>
            <p className="mt-4 inline-flex rounded-lg border border-line bg-surface-2 px-3 py-1 font-mono text-xs text-muted">
              {education.period}
            </p>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  );
}
