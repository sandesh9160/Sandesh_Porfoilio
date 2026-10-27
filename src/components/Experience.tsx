import { MapPin, Calendar, CheckCircle2, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Professional Experience"
          subtitle="Production software engineering experience at Techsprout AI Labs"
        />

        <div className="relative border-l-2 border-blue-500 ml-3 sm:ml-6 pl-5 sm:pl-8 space-y-8">
          {experiences.map((exp, index) => (
            <div key={`${exp.company}-${index}`} className="relative group">
              {/* Timeline Node */}
              <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-3 border-blue-600 flex items-center justify-center group-hover:scale-125 transition-transform shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>

              {/* Compact Card */}
              <div className="compact-card p-5 sm:p-6">
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                        {exp.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                        <MapPin size={11} className="text-blue-600" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-bold text-blue-700">
                      {exp.company}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700">
                    <Calendar size={12} className="text-blue-600" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed font-normal">
                  {exp.summary}
                </p>

                {/* Sub-projects */}
                <div className="space-y-4">
                  {exp.contributionGroups.map((group) => (
                    <div
                      key={group.project}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                          {group.project}
                        </h4>
                        {group.url && (
                          <a
                            href={group.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            <span>{group.url.replace("https://", "")}</span>
                            <ExternalLink size={11} />
                          </a>
                        )}
                      </div>

                      {/* Tech pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {group.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-1.5 pt-1">
                        {group.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                            <CheckCircle2 size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
