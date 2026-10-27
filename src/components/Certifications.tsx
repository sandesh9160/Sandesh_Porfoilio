import { Award, ExternalLink, CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/profile";

export default function Certifications() {
  return (
    <section id="certifications" className="py-14 sm:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Professional Certifications"
          subtitle="Industry-verified credentials in Python, SQL, and Full-Stack Engineering"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="compact-card p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Award size={20} />
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1 shadow-2xs">
                    <CheckCircle size={11} /> Verified
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-0.5">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold text-blue-700 mb-2.5">
                  Issued by {cert.issuer}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
