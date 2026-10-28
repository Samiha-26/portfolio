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
            Bootcamps & Technical Qualifications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Recognitions from web development bootcamps, student research conferences, and technical seminars.
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
                {/* Certificate Preview Image */}
                {cert.image && (
                  <div
                    onClick={() => setActiveCert(cert)}
                    className="relative w-full h-48 bg-slate-900 cursor-pointer overflow-hidden border-b border-white/10 group-hover:opacity-95 transition-opacity"
                    title="Click to view full certificate"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
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

              {/* Date & Verified Badge (Clean footer, no View Image button) */}
              <div className="p-6 pt-3 pb-5 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-medium text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{cert.date}</span>
                </span>
                <span className="text-[11px] text-amber-400/90 font-medium px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                  Verified Credential
                </span>
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
