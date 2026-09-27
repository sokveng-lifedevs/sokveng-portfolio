"use client";
import { Briefcase, BookOpen } from "lucide-react";
import { experience, learning } from "@/data/experience";
import type { TimelineItem } from "@/data/experience";

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Line */}
      <div className="absolute left-3 top-2 bottom-0 w-px bg-gray-200 dark:bg-gray-700 last:hidden" aria-hidden />
      {/* Dot */}
      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-brand-500/10 border-2 border-brand-500 flex items-center justify-center" aria-hidden>
        <div className="w-2 h-2 rounded-full bg-brand-500" />
      </div>

      <div className="p-5 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-shadow">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-brand-500 text-sm font-medium">{item.organization}</p>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-mono whitespace-nowrap">{item.period}</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{item.description}</p>
        {item.technologies && (
          <div className="flex flex-wrap gap-1.5">
            {item.technologies.map(t => (
              <span key={t} className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-mono">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="text-brand-500 font-mono text-sm mb-2">experience.map(role)</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Experience &amp; Learning</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-brand-500" />
              <h3 className="font-semibold text-lg">Work Experience</h3>
            </div>
            {experience.length > 0 ? (
              experience.map((item, i) => <TimelineCard key={i} item={item} />)
            ) : (
              <p className="text-gray-400 text-sm italic pl-8">No work experience added yet. Edit <code className="font-mono">data/experience.ts</code>.</p>
            )}
          </div>

          {/* Learning */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-accent-500" />
              <h3 className="font-semibold text-lg">My Learning Journey</h3>
            </div>
            {learning.map((item, i) => <TimelineCard key={i} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
