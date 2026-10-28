import { profile } from "@/data/profile";
import { Download, Mail } from "lucide-react";
import { TechIcon } from "./TechIcons";

const corePills = [
  { name: "Python", icon: "python" },
  { name: "Laravel 12", icon: "laravel" },
  { name: "Django", icon: "django" },
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "PHP", icon: "php" },
  { name: "JavaScript", icon: "javascript" },
  { name: "MySQL", icon: "mysql" },
  { name: "REST APIs", icon: "api" },
  { name: "Flutter", icon: "flutter" },
  { name: "Razorpay", icon: "payment" },
  { name: "OpenAI API", icon: "ai" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Linux / VPS", icon: "linux" },
  { name: "Git", icon: "git" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-10 sm:pt-14 pb-12 sm:pb-14 px-4 sm:px-6 text-center hero-gradient border-b border-slate-200 overflow-hidden"
      aria-label="Introduction"
    >
      <div className="max-w-4xl mx-auto">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-emerald-300 text-emerald-800 text-xs font-semibold mb-4 shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for SDE / Full-Stack Opportunities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-2">
          <span className="block">{profile.name}</span>
          <span className="block text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mt-2">
            Python Full Stack Developer &amp; Software Engineer
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
          Software Developer with an MCA and production experience at Techsprout AI Labs building recruitment and startup platforms, scalable REST APIs with Laravel 12, Django, Next.js, and MySQL.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#contact"
            className="btn-coral px-6 py-2.5 rounded-lg text-base font-bold shadow-sm inline-flex items-center gap-2"
          >
            <Mail size={18} />
            Get in Touch
          </a>

          <a
            href={`/${profile.resumeFilename}`}
            download
            className="px-6 py-2.5 rounded-lg text-base font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 shadow-2xs inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
          >
            <Download size={18} className="text-blue-600" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Auto-scrolling Core Technologies pills */}
      <div className="max-w-6xl mx-auto mt-4 pt-4 border-t border-slate-200/60">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Core Technologies:
          </span>
        </div>

        <div className="marquee-container py-1">
          <div className="marquee-track gap-3">
            {/* First sequence */}
            {corePills.map((tech) => (
              <div
                key={`p1-${tech.name}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 shadow-2xs text-xs font-semibold whitespace-nowrap hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                <TechIcon name={tech.icon} size={15} />
                <span>{tech.name}</span>
              </div>
            ))}
            {/* Duplicate sequence for seamless loop */}
            {corePills.map((tech) => (
              <div
                key={`p2-${tech.name}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 shadow-2xs text-xs font-semibold whitespace-nowrap hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                <TechIcon name={tech.icon} size={15} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
