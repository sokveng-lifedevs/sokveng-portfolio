"use client";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  brand:   "bg-brand-500/10   text-brand-500   border-brand-500/20",
  accent:  "bg-accent-500/10  text-accent-500  border-accent-500/20",
  emerald: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  orange:  "bg-orange-500/10  text-orange-500  border-orange-500/20",
  rose:    "bg-rose-500/10    text-rose-500    border-rose-500/20",
  yellow:  "bg-yellow-500/10  text-yellow-500  border-yellow-500/20",
};

const headerMap: Record<string, string> = {
  brand:   "text-brand-500",
  accent:  "text-accent-500",
  emerald: "text-emerald-500",
  orange:  "text-orange-500",
  rose:    "text-rose-500",
  yellow:  "text-yellow-500",
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="text-brand-500 font-mono text-sm mb-2">technologies.map(skill)</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Skills &amp; Technologies</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            Technologies I work with and continue to develop expertise in.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ category, color, skills }) => (
            <div
              key={category}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:shadow-lg transition-shadow"
            >
              <h3 className={cn("font-semibold text-sm mb-4 font-mono", headerMap[color] ?? "text-gray-500")}>
                {"// "}{category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(({ name }) => (
                  <span
                    key={name}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-sm font-medium border transition-transform hover:scale-105",
                      colorMap[color] ?? "bg-gray-100 text-gray-600"
                    )}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
