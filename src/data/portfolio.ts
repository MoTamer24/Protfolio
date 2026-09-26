export type Project = {
  title: string;
  tagline: string;
  category: "DevOps" | "Backend" | "Full-Stack";
  tech: string[];
  highlights: string[];
  repo?: string;
  demo?: string;
  image?: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  credential?: string;
  image?: string;
};

export const profile = {
  name: "Mohamed Tamer Abdo Farh",
  role: "Full-Stack & DevOps Engineer",
  roles: [
    "DevOps Engineer",
    "Backend Engineer",
    ".NET Core Developer",
    "Cloud & Kubernetes Enthusiast",
  ],
  summary:
    "I build scalable backend systems with .NET Core and ship them through automated, containerized delivery pipelines on the cloud.",
  about:
    "Strong foundation in software engineering principles, algorithm design (200+ LeetCode problems solved), and CI/CD automation. Adept at leveraging modern AI productivity workflows to build scalable software systems.",
  location: "Mansoura, Egypt",
  email: "motamerfarh@gmail.com",
  phone: "+201020930213",
  cv: "/Mohamed_Tamer_CV.docx",
  avatar: "/images/me.jpg",
  github: "https://github.com/MoTamer24",
  linkedin: "http://www.linkedin.com/in/mohamed-tamer-b0ab11244",
};

export const stats = [
  { value: "200+", label: "LeetCode problems" },
  { value: "2", label: "DEPI tracks completed" },
  { value: "10+", label: "Shipped projects" },
  { value: "2027", label: "Expected graduation" },
];

export const education = {
  school: "Mansoura University | Faculty of Engineering",
  degree: "B.Sc. in Computer & Control Systems Engineering",
  period: "Expected graduation 2027",
};

export const skillGroups = [
  {
    title: "Backend & Languages",
    items: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "SignalR",
      "Python",
      "NumPy",
      "Pandas",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      "Linux",
      "Ansible",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
      "GitHub Actions",
      "AWS",
      "Huawei Cloud",
      "Git",
    ],
  },
  {
    title: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5", "CSS3"],
  },
  {
    title: "Languages",
    items: ["Arabic (Native)", "English (Professional)"],
  },
];

export const experience = [
  {
    role: "DevOps Track Trainee",
    org: "DEPI (Digital Egypt Pioneers Initiative)",
    period: "2026",
    points: [
      "Automated Linux server configuration and environment provisioning using Ansible playbooks.",
      "Built and managed containerized application workflows using Docker and Kubernetes.",
      "Set up automated CI/CD pipelines for continuous testing, building, and deployment.",
    ],
  },
  {
    role: ".NET Web Development Trainee",
    org: "DEPI (Digital Egypt Pioneers Initiative)",
    period: "2024",
    points: [
      "Developed RESTful Web APIs using ASP.NET Core, adhering to SOLID principles and design patterns.",
      "Built frontend interfaces using JavaScript, HTML5, and CSS3 integrated with .NET backends.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    tagline:
      "Decoupled storefront and API built on Clean Architecture with JWT-secured endpoints.",
    category: "Full-Stack",
    tech: ["ASP.NET Core", "Clean Architecture", "JWT", "SQL Server", "Next.js"],
    highlights: [
      "Implemented a decoupled e-commerce system using Clean Architecture principles in ASP.NET Core.",
      "Secured API endpoints with JWT authentication and authorization handlers.",
      "Developed a responsive frontend application using Next.js and React.",
    ],
    repo: "https://github.com/MoTamer24/E-Commerece-Backend",
  },
  {
    title: "Multi-Container Task Manager",
    tagline:
      "Full-stack task management system delivered through Terraform and GitHub Actions.",
    category: "DevOps",
    tech: ["Docker", "Terraform", "GitHub Actions", "ASP.NET Core", "React"],
    highlights: [
      "Architected a multi-container task management system with an ASP.NET Core backend and React frontend.",
      "Provisioned cloud infrastructure using Terraform (Infrastructure as Code).",
      "Automated build, test, and container deployment workflows via GitHub Actions pipelines.",
    ],
  },
  {
    title: "Real-Time Multiplayer Platform",
    tagline:
      "Low-latency multiplayer experience powered by SignalR and OAuth 2.0 identity.",
    category: "Backend",
    tech: ["ASP.NET Core", "SignalR", "OAuth 2.0"],
    highlights: [
      "Engineered a real-time multiplayer application leveraging SignalR for bi-directional communication.",
      "Implemented secure user authentication and authorization using OAuth 2.0.",
    ],
  },
  {
    title: "URL Shortener",
    tagline: "Compact link shortening service with persistence and redirects.",
    category: "Backend",
    tech: ["C#", "ASP.NET Core", "SQL Server"],
    highlights: [
      "Generates collision-free short codes and resolves them through fast redirect endpoints.",
    ],
    repo: "https://github.com/MoTamer24/URL_Shortner",
  },
  {
    title: "Personal Blog",
    tagline: "Content-driven blog engine with CRUD authoring and clean routing.",
    category: "Full-Stack",
    tech: ["C#", "ASP.NET Core MVC", "Entity Framework Core"],
    highlights: [
      "Server-rendered blog with authoring workflow backed by EF Core migrations.",
    ],
    repo: "https://github.com/MoTamer24/PersonalBlog",
  },
  {
    title: "Jenkins Shared Library",
    tagline: "Reusable Groovy pipeline steps that standardize CI across projects.",
    category: "DevOps",
    tech: ["Groovy", "Jenkins", "CI/CD"],
    highlights: [
      "Centralizes build, test, and deploy stages so pipelines stay short and consistent.",
    ],
    repo: "https://github.com/MoTamer24/Jenkins_sharedlib",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Huawei Cloud Essentials",
    issuer: "Huawei",
    image: "/images/huawei.png",
    credential: "/images/huawei.png",
  },
  { title: "Cisco Networking Basics", issuer: "Cisco" },
  { title: "IBM AI Fundamentals", issuer: "IBM" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];
