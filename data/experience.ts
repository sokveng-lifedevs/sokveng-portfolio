export type TimelineItem = {
  type:         "work" | "education";
  title:        string;
  organization: string;
  period:       string;
  description:  string;
  technologies?: string[];
};

// ── Replace placeholders with your real experience ──────────
export const experience: TimelineItem[] = [
  {
    type:         "work",
    title:        "Software Engineer (Freelance)",
    organization: "Self-Employed",
    period:       "2023 – Present",
    description:  "Building backend APIs, automation scripts, and developer tools for clients. Specializing in Python / FastAPI solutions.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
  },
  // Add more roles here
];

export const learning: TimelineItem[] = [
  {
    type:         "education",
    title:        "Software Engineering — Self-Taught",
    organization: "Online Resources / Open Source",
    period:       "2021 – Present",
    description:  "Systematic self-study covering Python, backend development, Linux system administration, DevOps, and modern software engineering practices.",
    technologies: ["Python", "Linux", "Git", "Docker"],
  },
  {
    type:         "education",
    title:        "Backend Development",
    organization: "Project-Based Learning",
    period:       "2022 – Present",
    description:  "Built multiple real-world backend projects to understand API design, authentication, database modeling, and system architecture.",
    technologies: ["FastAPI", "PostgreSQL", "REST API"],
  },
  {
    type:         "education",
    title:        "DevOps & System Administration",
    organization: "Linux & Cloud Self-Study",
    period:       "2023 – Present",
    description:  "Hands-on experience with Linux server management, Docker containerization, CI/CD pipelines, and deployment workflows.",
    technologies: ["Linux", "Docker", "GitHub Actions", "CI/CD"],
  },
];
