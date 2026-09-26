import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import SpotlightCard from "@/components/SpotlightCard";
import { education, profile } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A bit about me">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <SpotlightCard className="h-full p-8">
            <Sparkles className="text-accent" size={22} />
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {profile.about}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <MapPin size={15} className="text-accent-2" />
              {profile.location}
            </p>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={0.1}>
          <SpotlightCard className="h-full p-8">
            <GraduationCap className="text-accent-2" size={22} />
            <h3 className="mt-5 text-lg font-semibold">Education</h3>
            <p className="mt-3 font-medium">{education.school}</p>
            <p className="mt-1 text-sm text-muted">{education.degree}</p>
            <p className="mt-3 inline-flex rounded-full bg-surface-2 px-3 py-1 font-mono text-xs text-muted">
              {education.period}
            </p>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  );
}
