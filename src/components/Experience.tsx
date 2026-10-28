"use client";

import { experienceData } from "@/data/portfolioData";
import { Briefcase, Calendar, CheckCircle2, Code2, Sparkles } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none -z-10 theme-ambient-glow opacity-30 transition-all duration-700" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm theme-pill transition-colors duration-500">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--theme-accent)" }} />
            <span>PRACTICAL MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Experience & Journey
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            Hands-on software development, open-source initiatives, and creative entrepreneurial leadership.
          </p>
        </div>

        {/* Timeline Cards Container */}
        <div className="relative max-w-4xl mx-auto space-y-8">
          
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute top-6 bottom-6 left-8 w-0.5 bg-gradient-to-b from-cyan-500/40 via-indigo-500/20 to-transparent" />

          {experienceData.map((exp, idx) => {
            const isDeveloper = exp.role.includes("Developer");
            return (
              <div
                key={idx}
                className="relative md:pl-20 group"
              >
                {/* Timeline node icon */}
                <div
                  className="hidden md:flex absolute left-4 -translate-x-1/2 top-6 w-9 h-9 rounded-full border-2 border-white/20 items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-10"
                  style={{
                    backgroundColor: "#080e1e",
                    borderColor: isDeveloper ? "var(--theme-accent)" : "#f43f5e",
                  }}
                >
                  {isDeveloper ? (
                    <Code2 className="w-4 h-4" style={{ color: "var(--theme-accent)" }} />
                  ) : (
                    <Sparkles className="w-4 h-4 text-rose-400" />
                  )}
                </div>

                {/* Milestone Glass Card */}
                <div className="rounded-3xl p-6 sm:p-8 bg-[#0a1224]/85 backdrop-blur-xl border border-white/10 hover:border-white/25 transition-all duration-300 shadow-xl shadow-black/50 group-hover:shadow-2xl hover:-translate-y-0.5">
                  
                  {/* Top Row: Role, Organization, Period Pill */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2"
                        style={{
                          backgroundColor: isDeveloper ? "var(--theme-accent-bg)" : "rgba(244, 63, 94, 0.15)",
                          color: isDeveloper ? "var(--theme-accent-light)" : "#fda4af",
                          border: `1px solid ${isDeveloper ? "var(--theme-accent-border)" : "rgba(244, 63, 94, 0.3)"}`,
                        }}
                      >
                        <Briefcase className="w-3 h-3" />
                        <span>{exp.type}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-slate-300 mt-0.5">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-3 pt-5">
                    {exp.description.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: isDeveloper ? "var(--theme-accent)" : "#fb7185" }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
