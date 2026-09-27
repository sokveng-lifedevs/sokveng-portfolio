export type Project = {
  title:        string;
  description:  string;
  longDesc?:    string;
  image:        string;
  technologies: string[];
  github:       string;
  demo:         string;
  status:       "Completed" | "In Progress" | "Planned";
  featured?:    boolean;
};

// ── Add your projects here ──────────────────────────────────
export const projects: Project[] = [
  {
    title:       "FastAPI E-Commerce Backend",
    description: "A production-ready backend API for an e-commerce platform built with Python and FastAPI.",
    longDesc:    "Includes user auth (JWT), product catalog, cart, orders, and payment-gateway integration hooks. Fully dockerized with PostgreSQL.",
    image:       "/projects/ecommerce.png",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "REST API"],
    github:      "https://github.com/sokveng-lifedevs/fastapi-ecommerce",
    demo:        "",
    status:      "Completed",
    featured:    true,
  },
  {
    title:       "Python Task Automation System",
    description: "A flexible automation framework for running scheduled Python tasks and workflows.",
    image:       "/projects/automation.png",
    technologies: ["Python", "Redis", "PostgreSQL", "Docker"],
    github:      "https://github.com/sokveng-lifedevs/python-automation",
    demo:        "",
    status:      "In Progress",
    featured:    true,
  },
  {
    title:       "Linux System Monitoring Dashboard",
    description: "A real-time server monitoring tool with custom alerting and a web dashboard.",
    image:       "/projects/monitoring.png",
    technologies: ["Python", "FastAPI", "Linux", "Redis"],
    github:      "https://github.com/sokveng-lifedevs/sys-monitor",
    demo:        "",
    status:      "Planned",
  },
];
