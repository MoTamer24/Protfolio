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
        className="border-b border-line"
        imageClassName="group-hover:scale-105"
      />

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.tagline}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm text-muted">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-3 pt-6">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-semibold transition-colors hover:border-accent/60 hover:text-accent"
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
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-semibold transition-colors hover:border-accent-2/60 hover:text-accent-2"
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
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className="relative rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-ink"
          >
            {filter === item && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 -z-10 rounded-full border border-line bg-surface-2"
                transition={{ type: "spring", stiffness: 360, damping: 30 }}
              />
            )}
            <span className={filter === item ? "text-ink" : undefined}>{item}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
