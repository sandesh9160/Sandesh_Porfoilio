import Image from "next/image";
import { Download, GraduationCap, Briefcase, Award } from "lucide-react";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Profile Image Column */}
          <div className="md:col-span-4 text-center flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-xl border-4 border-slate-100 hover:scale-105 transition-transform duration-300">
              <Image
                src="/profile.jpg"
                alt="Sandesh Kenchugundi - Python Full Stack Developer"
                width={224}
                height={224}
                priority
                className="w-full h-full object-cover"
                sizes="(max-width: 640px) 192px, 224px"
              />
            </div>
          </div>

          {/* About Narrative Column */}
          <div className="md:col-span-8 space-y-4 text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                About Sandesh Kenchugundi | Python Full Stack Developer
              </h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full mt-1.5" />
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Python Full Stack Developer with an MCA from <strong className="text-blue-700 font-semibold">University College of Science, Saifabad (Osmania University)</strong> and 7 months of professional software engineering experience at <strong className="text-slate-900 font-semibold">Techsprout AI Labs</strong>, contributing to production web and mobile applications.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Skilled in Python, PHP, Laravel 12, Django, Next.js, Flutter, MySQL, and REST APIs, with hands-on experience in backend development, API integration, authentication, RBAC, payment workflows, and database-driven applications. Experienced in developing and maintaining recruitment and startup-focused platforms, implementing technical SEO, third-party API integrations, responsive interfaces, deployment, and production debugging.
            </p>

            {/* Compact Credential Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                <GraduationCap className="mx-auto text-blue-600 mb-1" size={18} />
                <span className="text-xs font-bold text-slate-800 block">MCA (8.0 CGPA)</span>
                <span className="text-[10px] text-slate-500">Saifabad, OU</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                <Briefcase className="mx-auto text-indigo-600 mb-1" size={18} />
                <span className="text-xs font-bold text-slate-800 block">Techsprout AI Labs</span>
                <span className="text-[10px] text-slate-500 font-medium">Software Developer Intern</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                <Award className="mx-auto text-emerald-600 mb-1" size={18} />
                <span className="text-xs font-bold text-slate-800 block">Full-Stack Core</span>
                <span className="text-[10px] text-slate-500">Laravel, Django, Next.js</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`/${profile.resumeFilename}`}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all hover:scale-105"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
