"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/5" : "border border-transparent"
        }`}
      >
        <a href="#top" className="font-mono text-lg font-bold tracking-tight">
          <span className="gradient-text">MT</span>
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="relative block rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-ink"
              >
                {active === href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={active === href ? "text-ink" : undefined}>
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="glass grid size-10 place-items-center rounded-full md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
