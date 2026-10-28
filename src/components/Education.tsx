import Image from "next/image";
import { Award, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { educationList } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-16 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Education &amp; Academic Qualifications"
          subtitle="Master of Computer Applications (MCA) &amp; B.Sc. from Osmania University"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu) => (
            <div
              key={edu.degree}
              className="compact-card p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                {/* College Logo Image & Title Row */}
                <div className="flex items-center gap-4 mb-3.5">
                  {edu.logoUrl && (
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white border border-slate-200 p-1 flex-shrink-0 flex items-center justify-center shadow-2xs">
                      <Image
                        src={edu.logoUrl}
                        alt={`${edu.institution} logo`}
                        width={52}
                        height={52}
                        className="object-contain"
                      />
                    </div>
                  )}

                  <div className="overflow-hidden">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-blue-700 mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      {edu.university}
                    </p>
                  </div>
                </div>

                {/* Score and Date Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1 shadow-2xs">
                    <Award size={12} /> {edu.cgpa}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-3 border-t border-slate-100 space-y-1">
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                    <BookOpen size={12} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
