import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";
import { TechIcon } from "./TechIcons";

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-16 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Technical Skills &amp; Full Stack Technologies"
          subtitle="Core expertise in Python, Laravel 12, Django, Next.js, MySQL, and REST APIs"
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

                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-500 text-slate-800 text-xs font-semibold hover:border-blue-600 hover:text-blue-600 transition-all group"
                    >
                      <TechIcon name={skill.iconName} size={15} />
                      <span>{skill.name}</span>
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
