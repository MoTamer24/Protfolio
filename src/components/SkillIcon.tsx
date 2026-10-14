import type { ComponentType, SVGProps } from "react";
import {
  SiDotnet,
  SiPython,
  SiNumpy,
  SiPandas,
  SiLinux,
  SiAnsible,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
  SiGithubactions,
  SiHuawei,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiApachegroovy,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaAws, FaCss3Alt } from "react-icons/fa6";
import { DiMsqlServer } from "react-icons/di";
import { TbDatabase, TbBroadcast, TbCode } from "react-icons/tb";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

export function CsharpIcon({
  size = 16,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zM115 62h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6H94v-5h3.5l.9-4H94v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zm-12.7 4h3.8l.9-4h-3.8z" />
    </svg>
  );
}

export function EgyptFlag({
  size = 16,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 16"
      className={`rounded-[2px] shadow-2xs ${className ?? ""}`}
      aria-hidden="true"
      {...props}
    >
      <rect width="24" height="16" fill="#111827" />
      <rect width="24" height="10.66" fill="#FFFFFF" />
      <rect width="24" height="5.33" fill="#CE1126" />
      <circle cx="12" cy="8" r="1.3" fill="#C09300" />
    </svg>
  );
}

export function UKFlag({
  size = 16,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 16"
      className={`rounded-[2px] shadow-2xs ${className ?? ""}`}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <clipPath id="uk-flag-clip">
          <rect width="24" height="16" rx="2" />
        </clipPath>
      </defs>
      <g clipPath="url(#uk-flag-clip)">
        <rect width="24" height="16" fill="#012169" />
        <path d="M0 0 L24 16 M24 0 L0 16" stroke="#FFFFFF" strokeWidth="2.8" />
        <path d="M0 0 L24 16 M24 0 L0 16" stroke="#C8102E" strokeWidth="1.4" />
        <path d="M12 0 V16 M0 8 H24" stroke="#FFFFFF" strokeWidth="4.5" />
        <path d="M12 0 V16 M0 8 H24" stroke="#C8102E" strokeWidth="2.8" />
      </g>
    </svg>
  );
}

interface SkillMeta {
  icon: IconComponent;
  colorClass: string;
}

const skillMap: Record<string, SkillMeta> = {
  // Backend & Languages
  "C#": {
    icon: CsharpIcon,
    colorClass: "text-[#9B4993] dark:text-[#C084FC]",
  },
  "ASP.NET Core": {
    icon: SiDotnet,
    colorClass: "text-[#512BD4] dark:text-[#A78BFA]",
  },
  "Entity Framework Core": {
    icon: TbDatabase,
    colorClass: "text-[#6D28D9] dark:text-[#C4B5FD]",
  },
  "SQL Server": {
    icon: DiMsqlServer,
    colorClass: "text-[#CC292B] dark:text-[#F87171]",
  },
  SignalR: {
    icon: TbBroadcast,
    colorClass: "text-[#0284C7] dark:text-[#38BDF8]",
  },
  Python: {
    icon: SiPython,
    colorClass: "text-[#3776AB] dark:text-[#38BDF8]",
  },
  NumPy: {
    icon: SiNumpy,
    colorClass: "text-[#0284C7] dark:text-[#38BDF8]",
  },
  Pandas: {
    icon: SiPandas,
    colorClass: "text-[#150458] dark:text-[#F472B6]",
  },

  // DevOps & Infrastructure
  Linux: {
    icon: SiLinux,
    colorClass: "text-[#D97706] dark:text-[#FBBF24]",
  },
  Ansible: {
    icon: SiAnsible,
    colorClass: "text-[#EE0000] dark:text-[#F87171]",
  },
  Docker: {
    icon: SiDocker,
    colorClass: "text-[#0284C7] dark:text-[#38BDF8]",
  },
  Kubernetes: {
    icon: SiKubernetes,
    colorClass: "text-[#326CE5] dark:text-[#60A5FA]",
  },
  Jenkins: {
    icon: SiJenkins,
    colorClass: "text-[#D24939] dark:text-[#F87171]",
  },
  Terraform: {
    icon: SiTerraform,
    colorClass: "text-[#844FBA] dark:text-[#C084FC]",
  },
  "GitHub Actions": {
    icon: SiGithubactions,
    colorClass: "text-[#2088FF] dark:text-[#60A5FA]",
  },
  AWS: {
    icon: FaAws,
    colorClass: "text-[#D97706] dark:text-[#FBBF24]",
  },
  "Huawei Cloud": {
    icon: SiHuawei,
    colorClass: "text-[#E60012] dark:text-[#F87171]",
  },
  Git: {
    icon: SiGit,
    colorClass: "text-[#F05032] dark:text-[#FB923C]",
  },

  // Frontend
  JavaScript: {
    icon: SiJavascript,
    colorClass: "text-[#CA8A04] dark:text-[#FACC15]",
  },
  TypeScript: {
    icon: SiTypescript,
    colorClass: "text-[#3178C6] dark:text-[#60A5FA]",
  },
  React: {
    icon: SiReact,
    colorClass: "text-[#0284C7] dark:text-[#61DAFB]",
  },
  "Next.js": {
    icon: SiNextdotjs,
    colorClass: "text-slate-900 dark:text-slate-100",
  },
  HTML5: {
    icon: SiHtml5,
    colorClass: "text-[#E34F26] dark:text-[#FB923C]",
  },
  CSS3: {
    icon: FaCss3Alt,
    colorClass: "text-[#1572B6] dark:text-[#60A5FA]",
  },

  // Languages (Natural)
  "Arabic (Native)": {
    icon: EgyptFlag,
    colorClass: "",
  },
  "English (Professional)": {
    icon: UKFlag,
    colorClass: "",
  },

  // Bonus for tech tags
  Groovy: {
    icon: SiApachegroovy,
    colorClass: "text-[#4298B8] dark:text-[#38BDF8]",
  },
  JWT: {
    icon: SiJsonwebtokens,
    colorClass: "text-[#E54833] dark:text-[#F87171]",
  },
};

export interface SkillIconProps extends SVGProps<SVGSVGElement> {
  name: string;
  size?: number | string;
  className?: string;
}

export function SkillIcon({ name, size = 16, className = "", ...props }: SkillIconProps) {
  const meta = skillMap[name];

  if (!meta) {
    return <TbCode size={size} className={`shrink-0 ${className}`} {...props} />;
  }

  const Icon = meta.icon;
  const mergedClass = `${meta.colorClass} shrink-0 ${className}`.trim();

  return <Icon size={size} className={mergedClass} {...props} />;
}
