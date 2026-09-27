import { Server, Zap, Database, Terminal, GitBranch, Wrench } from "lucide-react";

const services = [
  { icon: Server,     title: "Backend APIs",        desc: "Scalable REST APIs using FastAPI, with clean architecture and proper authentication." },
  { icon: Zap,        title: "Python Applications", desc: "Automation scripts, data processing pipelines, and Python tools for real-world problems." },
  { icon: Database,   title: "Database Systems",    desc: "Relational and NoSQL database design, optimization, and integration." },
  { icon: Terminal,   title: "Linux / SysAdmin",    desc: "Linux server setup, configuration management, and system administration." },
  { icon: GitBranch,  title: "CI/CD & DevOps",      desc: "Docker containerization, GitHub Actions pipelines, and automated deployment workflows." },
  { icon: Wrench,     title: "Developer Tools",     desc: "Custom tooling, CLI applications, and productivity utilities built for developers." },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white dark:bg-gray-950">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="text-brand-500 font-mono text-sm mb-2">services.forEach(build)</p>
          <h2 className="text-3xl sm:text-4xl font-bold">What I Can Build</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            Real, practical solutions for software engineering challenges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-brand-500/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                <Icon className="w-5 h-5 text-brand-500" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
