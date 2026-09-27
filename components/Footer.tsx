import { Code2, Heart, Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-10 px-4">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-brand-500" />
          <span className="font-bold gradient-text">{profile.brand}</span>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
          Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> by {profile.name} &copy; {year}
        </p>

        <div className="flex items-center gap-4">
          <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-brand-500 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-gray-400 hover:text-brand-500 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
