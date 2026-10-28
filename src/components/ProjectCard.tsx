import Image from "next/image";
import { ExternalLink, CheckCircle2, Cpu } from "lucide-react";
import { Project } from "@/data/projects";
import { GitHubIcon } from "./Icons";
import { TechIcon } from "./TechIcons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="compact-card overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Project Image Banner */}
        {project.imageUrl && (
          <div className="relative w-full h-40 sm:h-48 overflow-hidden bg-slate-100 border-b border-slate-200">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            />
          </div>
        )}

        {/* Card Header */}
        <div className="p-5 pb-3">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 uppercase tracking-wider">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                Production
              </span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            {project.subtitle}
          </p>
        </div>

        {/* Card Body */}
        <div className="px-5 pb-5 space-y-3.5">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {project.overview}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-800 border border-slate-200"
              >
                <TechIcon name={tech} size={12} />
                <span>{tech}</span>
              </span>
            ))}
          </div>

          {/* Architecture / Solution */}
          {project.architecture && (
            <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-100 text-xs text-slate-700 space-y-0.5">
              <span className="font-bold text-blue-900 flex items-center gap-1 uppercase tracking-wider text-[10px]">
                <Cpu size={12} /> Architecture &amp; Implementation
              </span>
              <p className="leading-relaxed text-[11px] text-slate-700">{project.architecture}</p>
            </div>
          )}

          {/* Highlights */}
          <ul className="space-y-1 pt-1">
            {project.highlights.slice(0, 3).map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                <CheckCircle2 size={13} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer CTAs */}
      <div className="p-5 pt-3 border-t border-slate-100 bg-slate-50/40 flex flex-wrap items-center gap-2.5">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-2xs transition-all hover:-translate-y-0.5"
          >
            <ExternalLink size={13} />
            Explore Project
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs shadow-2xs transition-all hover:-translate-y-0.5"
          >
            <GitHubIcon size={13} />
            View on GitHub
          </a>
        )}
      </div>
    </article>
  );
}
