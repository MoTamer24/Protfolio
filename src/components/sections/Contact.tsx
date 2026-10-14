import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-8 py-14 text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] sm:px-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            06 — Contact
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-surface shadow-xs transition-opacity hover:opacity-90"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink shadow-2xs transition-colors hover:bg-surface-2"
            >
              <Phone size={16} />
              {profile.phone}
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-xl border border-line bg-surface text-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-xl border border-line bg-surface text-muted transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
