import { skillsData } from "@/data/portfolioData";
import { Cpu, CheckCircle2 } from "lucide-react";

// Tech icon SVGs
function TechIcon({ name }: { name: string }) {
  const normalized = name.toLowerCase();

  if (normalized.includes("react")) {
    return (
      <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-7c-5.33 0-8 3.58-8 7.5 0 2.37 1 4.5 2.66 6.01C4.85 16.92 4 19 4 19s2.08-.85 3.49-2.66C8.5 17 9.63 17 12 17c5.33 0 8-3.58 8-7.5S17.33 2 12 2zm0 13c-2.03 0-3.5-.66-4.59-1.53.94-.78 2.32-1.47 4.59-1.47s3.65.69 4.59 1.47C15.5 14.34 14.03 15 12 15z" />
      </svg>
    );
  }
  if (normalized.includes("next")) {
    return (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.32 14.5l-4.74-6.83v6.83H9.2v-9h1.38l4.74 6.83V7.5h1.38v9h-1.38z" />
      </svg>
    );
  }
  if (normalized.includes("typescript")) {
    return (
      <div className="w-7 h-7 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
        TS
      </div>
    );
  }
  if (normalized.includes("javascript")) {
    return (
      <div className="w-7 h-7 rounded bg-amber-400 text-black flex items-center justify-center font-bold text-xs">
        JS
      </div>
    );
  }
  if (normalized.includes("tailwind")) {
    return (
      <svg className="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    );
  }
  if (normalized.includes("node")) {
    return (
      <div className="w-7 h-7 rounded bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs">
        Node
      </div>
    );
  }
  if (normalized.includes("mongo")) {
    return (
      <div className="w-7 h-7 rounded bg-green-600/20 text-green-400 border border-green-500/30 flex items-center justify-center font-bold text-xs">
        MDB
      </div>
    );
  }
  if (normalized.includes("git")) {
    return (
      <div className="w-7 h-7 rounded bg-orange-600/20 text-orange-400 border border-orange-500/30 flex items-center justify-center font-bold text-xs">
        Git
      </div>
    );
  }

  // Fallback badge
  return (
    <div className="w-7 h-7 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center font-bold text-xs">
      {name.substring(0, 2).toUpperCase()}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Modern tools, languages, and frameworks I use to engineer full-stack web applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skill Icon Badges */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`group p-3 rounded-2xl border transition-all flex items-center gap-3 ${
                        skill.highlight
                          ? "bg-white/[0.04] border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/[0.08]"
                          : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      <TechIcon name={skill.name} />
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Hands-on project experience</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
