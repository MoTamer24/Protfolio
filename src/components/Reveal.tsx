"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header" | "footer";
};

const variants: Variants = {
  hidden: (y: number) => ({ opacity: 0, y, filter: "blur(6px)" }),
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      custom={y}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
