import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

export default function GitHub() {
  return (
    <section id="github" className="section-pad bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max">
        <div className="text-center mb-10">
          <p className="text-brand-500 font-mono text-sm mb-2">github.getProfile()</p>
          <h2 className="text-3xl sm:text-4xl font-bold">GitHub</h2>
        </div>

        <div className="max-w-lg mx-auto p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 shadow-lg text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-900 dark:bg-gray-700 flex items-center justify-center">
              <Github className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="font-bold text-xl mb-1">{profile.github}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">Open source projects &amp; learning repositories</p>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 text-white rounded-lg font-semibold text-sm transition-colors"
          >
            <Github className="w-4 h-4" />
            View GitHub Profile
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>

          <p className="mt-4 text-xs text-gray-400 font-mono">
            💡 To show live GitHub stats, add your <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">GITHUB_TOKEN</code> in <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">.env.local</code>
          </p>
        </div>
      </div>
    </section>
  );
}
