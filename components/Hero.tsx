"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Download, Terminal, ChevronRight } from "lucide-react";
import { profile } from "@/data/profile";

const TYPING_STRINGS = [
  "Software Engineer",
  "Python Developer",
  "Backend Developer",
  "System Administrator",
];

function useTypingEffect(strings: string[]) {
  const [text, setText] = useState("");
  const [idx, setIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx % strings.length];
    const speed   = deleting ? 40 : 80;
    const pause   = 1500;

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), pause);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIdx(i => i + 1);
      } else {
        setText(t => deleting ? t.slice(0, -1) : current.slice(0, t.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, idx, strings]);

  return text;
}

const TERMINAL_LINES = [
  { cmd: "whoami",  out: "sokveng" },
  { cmd: "role",    out: "Software Engineer" },
  { cmd: "skills",  out: "Python · FastAPI · Linux · Docker · Git" },
  { cmd: "status",  out: "Building real-world projects... 🚀" },
];

function MiniTerminal() {
  const [lineIdx, setLineIdx] = useState(0);
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    if (lineIdx >= TERMINAL_LINES.length) return;
    const t = setTimeout(() => {
      setVisible(v => [...v, lineIdx]);
      setLineIdx(i => i + 1);
    }, 700 + lineIdx * 600);
    return () => clearTimeout(t);
  }, [lineIdx]);

  return (
    <div className="rounded-xl border border-gray-700/50 bg-gray-900/90 overflow-hidden font-mono text-sm shadow-2xl w-full max-w-sm">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-700/50 bg-gray-800/60">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-gray-500">terminal — sokveng@portfolio</span>
      </div>
      <div className="p-4 space-y-2 min-h-[140px]">
        {TERMINAL_LINES.map((line, i) =>
          visible.includes(i) ? (
            <div key={i} className="space-y-0.5">
              <div className="flex items-center gap-2 text-green-400">
                <ChevronRight className="w-3 h-3 text-brand-400 shrink-0" />
                <span className="text-gray-400">$</span>
                <span className="text-white">{line.cmd}</span>
              </div>
              <div className="pl-5 text-gray-300">{line.out}</div>
            </div>
          ) : null
        )}
        <span className="inline-block w-2 h-4 bg-brand-400 animate-pulse" aria-hidden />
      </div>
    </div>
  );
}

export default function Hero() {
  const typedText = useTypingEffect(TYPING_STRINGS);
  const hasResume = true; // toggle if you haven't added resume.pdf yet

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-950"
      aria-label="Hero"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none"
        aria-hidden
      />
      {/* Gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl pointer-events-none" aria-hidden />

      <div className="container-max relative z-10 section-pad w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-mono">
              <Terminal className="w-3.5 h-3.5" />
              <span>Available for work</span>
            </div>

            <div>
              <p className="text-gray-400 mb-2 font-mono text-sm">Hi, I&apos;m</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
                {profile.name}
              </h1>
              <div className="h-10 flex items-center">
                <span className="text-2xl sm:text-3xl font-semibold gradient-text">
                  {typedText}
                  <span className="ml-0.5 inline-block w-0.5 h-7 bg-brand-400 align-middle animate-pulse" aria-hidden />
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              I build reliable software, backend systems, APIs, and developer-focused
              solutions using modern technologies.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-600 hover:border-brand-500 text-gray-300 hover:text-white rounded-lg font-semibold transition-all hover:-translate-y-0.5"
              >
                Contact Me
              </a>
              {hasResume && (
                <a
                  href={profile.resume}
                  download
                  className="flex items-center gap-2 px-5 py-3 border border-gray-700 hover:border-accent-500 text-gray-400 hover:text-accent-400 rounded-lg font-medium transition-all hover:-translate-y-0.5 text-sm"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              )}
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Python", "FastAPI", "PostgreSQL", "Linux", "Docker"].map(t => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-gray-800/80 text-gray-400 text-xs font-mono border border-gray-700/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center gap-8">
            {/* Profile photo */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity" aria-hidden />
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden ring-4 ring-brand-500/30 ring-offset-4 ring-offset-gray-950">
                <Image
                  src={profile.image}
                  alt={`${profile.name} — ${profile.title}`}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    // Fallback avatar
                    (e.target as HTMLImageElement).src =
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=0ea5e9&color=fff&size=224`;
                  }}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-900 border border-gray-700 shadow-lg whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-gray-300 font-medium">Open to work</span>
              </div>
            </div>

            <MiniTerminal />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 animate-bounce">
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
