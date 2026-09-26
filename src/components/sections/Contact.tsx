import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-20 sm:py-28">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl" />
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            06 — Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            <span className="gradient-text">Let&apos;s build something</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.03]"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
            >
              <Phone size={16} />
              {profile.phone}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-accent/60 hover:text-accent"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-accent/60 hover:text-accent"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
