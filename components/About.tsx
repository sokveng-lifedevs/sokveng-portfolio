"use client";
import Image from "next/image";
import { MapPin, Mail, Github } from "lucide-react";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section-pad bg-white dark:bg-gray-950">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="text-brand-500 font-mono text-sm mb-2">get_to_know(me)</p>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700 shadow-xl">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=0ea5e9&color=fff&size=320`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">{profile.name}</p>
                <p className="text-sm text-gray-300">{profile.title}</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{profile.bio}</p>

            <div className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-500" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-500" />
                <a href={`mailto:${profile.email}`} className="hover:text-brand-500 transition-colors">{profile.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-brand-500" />
                <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-500 transition-colors">
                  github.com/{profile.github}
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {profile.stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 text-center"
                >
                  <p className="text-2xl font-bold gradient-text">{value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
