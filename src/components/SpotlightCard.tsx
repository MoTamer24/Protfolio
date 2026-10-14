"use client";

import type { ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export default function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  return (
    <div
      className={`rounded-2xl border border-line bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:hover:border-slate-700 ${className}`}
    >
      {children}
    </div>
  );
}
