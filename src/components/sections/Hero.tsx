"use client";

import { motion } from "motion/react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { useEffect, useState } from "react";
import SmartImage from "@/components/SmartImage";
import { asset } from "@/lib/asset";
import { profile, stats } from "@/data/portfolio";

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((value) => (value + 1) % profile.roles.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden align-bottom">
      <motion.span
        key={profile.roles[index]}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono font-medium text-accent"
      >
        {profile.roles[index]}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center gap-12 px-5 pb-16 pt-32 lg:flex-row lg:items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-2xs dark:text-slate-300">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Open to internships & junior roles
        </span>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-xl text-muted sm:text-2xl">
          <RotatingRole />
        </p>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-surface shadow-xs transition-opacity hover:opacity-90"
          >
            <Mail size={16} />
            Get in touch
          </a>
          <a
            href={asset(profile.cv)}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink shadow-2xs transition-colors hover:bg-surface-2"
          >
            <Download size={16} />
            Download CV
          </a>
          <div className="flex items-center gap-2">
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

        <dl className="mt-12 grid max-w-xl grid-cols-2 gap-5 border-t border-line/80 pt-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.08, duration: 0.45 }}
            >
              <dt className="text-2xl font-bold tracking-tight text-ink">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </dl>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-[min(22rem,80vw)] lg:mx-0"
      >
        <div className="overflow-hidden rounded-2xl border border-line bg-surface p-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <SmartImage
            src={profile.avatar}
            alt={profile.name}
            ratio="4/5"
            priority
            sizes="(max-width: 1024px) 80vw, 22rem"
            className="relative overflow-hidden rounded-xl"
            imageClassName="transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 0.8 }, y: { repeat: Infinity, duration: 2.2 } }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-ink lg:block"
      >
        <ArrowDown size={19} />
      </motion.a>
    </section>
  );
}
