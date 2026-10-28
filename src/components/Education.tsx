import { educationData } from "@/data/portfolioData";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Educational Qualification
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            My formal computer science and higher secondary academic background.
          </p>
        </div>

        {/* Clean, Simple Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-7 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                {/* Status & Period Bar */}
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {edu.status}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </span>
                </div>

                {/* Degree & Institution */}
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="font-medium text-slate-200">{edu.institution}</span>
                    <span className="text-slate-500">•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Prominent Result Badge (GPA / CGPA) */}
              {edu.result && (
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Result</span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs sm:text-sm font-bold shadow-sm">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>{edu.result}</span>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
