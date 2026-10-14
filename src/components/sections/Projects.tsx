"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { useMemo, useState } from "react";
import Section from "@/components/Section";
import SmartImage from "@/components/SmartImage";
import SpotlightCard from "@/components/SpotlightCard";
import { projects, type Project } from "@/data/portfolio";

const filters = ["All", "DevOps", "Backend", "Full-Stack"] as const;

function ProjectCard({ project }: { project: Project }) {
  return (
    <SpotlightCard className="flex h-full flex-col overflow-hidden">
      <SmartImage
        src={project.image}
        alt={project.title}
        ratio="16/9"
        sizes="(max-width: 768px) 100vw, 33vw"
        className="border-b border-line bg-surface-2"
        imageClassName="transition-transform duration-300 group-hover:scale-[1.03]"
      />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-slate-700 dark:text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-2.5 pt-6">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-surface-2"
            >
              <GithubIcon size={14} />
              View code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-surface-2"
            >
              <ArrowUpRight size={14} />
              Live demo
            </a>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <Section
      id="projects"
      eyebrow="04 — Projects"
      title="Featured projects"
      description="Selected work across backend services, delivery automation, and full-stack products."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`relative rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
              filter === item ? "text-ink font-semibold" : "text-muted hover:text-ink"
            }`}
          >
            {filter === item && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 -z-10 rounded-lg border border-line bg-surface shadow-2xs"
                transition={{ type: "spring", stiffness: 360, damping: 30 }}
              />
            )}
            <span>{item}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <ProjectCard project={project} />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
