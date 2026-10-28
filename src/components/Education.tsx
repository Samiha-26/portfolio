import { educationData } from "@/data/portfolioData";
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Educational Qualification
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            My formal computer science and academic foundations.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/30 transition-all relative overflow-hidden"
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 to-indigo-600" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-2">
                    {edu.status}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 mt-1.5">
                    <span className="font-medium text-slate-200">{edu.institution}</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full shrink-0">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Details List */}
              <ul className="space-y-2 mt-4 pt-4 border-t border-white/5">
                {edu.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
