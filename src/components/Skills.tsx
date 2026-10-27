import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";
import { TechIcon } from "./TechIcons";

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-16 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Core programming languages, frameworks, database systems, integrations, and DevOps tools"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="compact-card p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-slate-900 tracking-tight pb-3 mb-4 border-b border-slate-100 flex items-center justify-between">
                  <span>{category.title}</span>
                  <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {category.skills.length} skills
                  </span>
                </h3>

                <div className="space-y-3.5">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <div className="flex items-center gap-2">
                          <TechIcon name={skill.iconName} size={15} />
                          <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-mono font-bold text-blue-700 bg-blue-50/80 px-1.5 py-0.5 rounded text-[11px]">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar with fill animation */}
                      <div
                        className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency level`}
                      >
                        <div
                          className="h-full rounded-full bg-blue-600 progress-fill transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
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
