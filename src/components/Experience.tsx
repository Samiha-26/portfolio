"use client";

import { experienceData } from "@/data/portfolioData";
import { Briefcase, Calendar, CheckCircle2, Heart, Sparkles } from "lucide-react";

export default function Experience() {
  const exp = experienceData[0];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none -z-10 theme-ambient-glow opacity-30 transition-all duration-700" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm theme-pill transition-colors duration-500">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--theme-accent)" }} />
            <span>PRACTICAL LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Entrepreneurial Experience
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            Founding and managing Cozy Yarn — applying creative design, operations, and customer empathy alongside university studies.
          </p>
        </div>

        {/* Featured Experience Card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl p-7 sm:p-10 bg-[#0a1224]/85 backdrop-blur-xl border border-white/10 hover:border-pink-500/40 shadow-2xl shadow-black/60 transition-all duration-300 group hover:-translate-y-0.5">
            
            {/* Top Row: Role, Organization, Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl p-3.5 bg-pink-500/15 border border-pink-500/30 text-pink-400 shadow-inner flex-shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1.5 bg-pink-500/15 text-pink-300 border border-pink-500/30">
                    <Sparkles className="w-3 h-3" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-pink-300 mt-0.5">
                    {exp.organization}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 self-start sm:self-center">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Bullet Highlights */}
            <ul className="space-y-3.5 pt-6 pb-6 border-b border-white/10">
              {exp.description.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-pink-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Core Competencies Badges */}
            <div className="pt-6">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-3">
                Core Competencies & Skills Developed:
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-500/15 text-pink-300 border border-pink-500/30">
                  🧶 Custom Product Design
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  🎨 Brand Identity & Marketing
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium theme-pill">
                  ⏱️ Academic & Venture Time Management
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/10">
                  🤝 Direct Client Communication
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
