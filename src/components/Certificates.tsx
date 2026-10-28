"use client";

import { useState } from "react";
import Image from "next/image";
import { certificatesData } from "@/data/portfolioData";
import { Certificate } from "@/types";
import { Award, ExternalLink, X, Calendar, Building2 } from "lucide-react";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Certifications & Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Research Conferences & Bootcamps
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Recognitions from student research conferences, web development bootcamps, and technical seminars.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Certificate Preview Image or Stylized Badge */}
                {cert.image ? (
                  <div
                    onClick={() => setActiveCert(cert)}
                    className="relative w-full h-48 bg-slate-900 cursor-pointer overflow-hidden border-b border-white/10 group-hover:opacity-95 transition-opacity"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-white border border-white/20">
                        Click to Zoom
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-[#060913] border-b border-white/10 flex flex-col items-center justify-center p-6 text-center space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                      Official Seminar Participation
                    </span>
                    <span className="text-[11px] text-slate-400">
                      BSMRAAU Avionics & Robotics Club
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-amber-300 font-medium">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                    {cert.title}
                  </h3>

                  {cert.theme && (
                    <p className="text-xs text-slate-400 italic">
                      "{cert.theme}"
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Date & Zoom Button */}
              <div className="p-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{cert.date}</span>
                </span>
                {cert.image && (
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
                  >
                    <span>View Image</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Certificate Preview */}
      {activeCert && activeCert.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0b1222] border border-white/15 rounded-3xl p-4 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white truncate pr-4">
                {activeCert.title}
              </h3>
              <button
                onClick={() => setActiveCert(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden bg-slate-950">
              <Image
                src={activeCert.image}
                alt={activeCert.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
