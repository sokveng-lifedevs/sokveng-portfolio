"use client";
import Image from "next/image";
import { Github, ExternalLink, Tag } from "lucide-react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const statusColors: Record<string, string> = {
  "Completed":   "bg-green-500/10  text-green-500  border-green-500/20",
  "In Progress": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  "Planned":     "bg-gray-500/10   text-gray-500   border-gray-500/20",
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-white dark:bg-gray-950">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="text-brand-500 font-mono text-sm mb-2">projects.filter(featured)</p>
          <h2 className="text-3xl sm:text-4xl font-bold">My Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            Real-world projects I&apos;ve built to learn and apply my skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Tag className="w-12 h-12 text-gray-700" />
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium border", statusColors[project.status])}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-brand-500/10 text-brand-500 text-xs font-mono border border-brand-500/20">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-500 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-500 transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={`https://github.com/sokveng-lifedevs`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-brand-500 dark:hover:border-brand-500 rounded-lg font-medium text-sm transition-colors"
          >
            <Github className="w-4 h-4" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
