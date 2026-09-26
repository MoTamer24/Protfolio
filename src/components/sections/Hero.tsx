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
        className="font-mono text-accent-2"
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
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-12 px-5 pb-20 pt-32 lg:flex-row lg:items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          Open to internships & junior roles
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
          <span className="gradient-text">{profile.name}</span>
        </h1>

        <p className="mt-4 text-xl text-muted sm:text-2xl">
          <RotatingRole />
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.03]"
          >
            <Mail size={16} />
            Get in touch
          </a>
          <a
            href={asset(profile.cv)}
            download
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/50 hover:text-accent"
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
              className="glass grid size-11 place-items-center rounded-full transition-colors hover:border-accent/50 hover:text-accent"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass grid size-11 place-items-center rounded-full transition-colors hover:border-accent/50 hover:text-accent"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        <dl className="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.09, duration: 0.5 }}
            >
              <dt className="text-2xl font-bold text-ink">{stat.value}</dt>
              <dd className="text-xs uppercase tracking-wider text-muted">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </dl>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-[min(22rem,80vw)] lg:mx-0"
      >
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-accent/40 to-accent-2/40 blur-2xl" />
        <SmartImage
          src={profile.avatar}
          alt={profile.name}
          ratio="4/5"
          priority
          sizes="(max-width: 1024px) 80vw, 22rem"
          className="relative rounded-[2rem] border border-line shadow-2xl"
          imageClassName="hover:scale-[1.04]"
        />
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2.2 } }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted lg:block"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
