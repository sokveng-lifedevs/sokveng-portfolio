export type Skill = { name: string; icon?: string };
export type SkillCategory = { category: string; color: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    color: "brand",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    category: "Backend",
    color: "accent",
    skills: [
      { name: "FastAPI" },
      { name: "REST API" },
      { name: "Authentication" },
      { name: "API Development" },
    ],
  },
  {
    category: "Frontend",
    color: "emerald",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Database",
    color: "orange",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "Redis" },
    ],
  },
  {
    category: "DevOps / System",
    color: "rose",
    skills: [
      { name: "Linux" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "CI/CD" },
    ],
  },
  {
    category: "Tools",
    color: "yellow",
    skills: [
      { name: "VS Code" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
    ],
  },
];
