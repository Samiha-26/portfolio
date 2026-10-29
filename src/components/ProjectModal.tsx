"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { X, ExternalLink, Github, AlertTriangle, Rocket, CheckCircle2 } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-[#0b1222] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-4 sm:my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-white/[0.02]">
          <div className="pr-3">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
              Project Details & Architecture
            </span>
            <h3 className="text-base sm:text-xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-7 space-y-4 sm:space-y-5 max-h-[70vh] sm:max-h-[75vh] overflow-y-auto">
          
          {/* Image Preview */}
          <div className="relative w-full h-40 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Overview
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.keyFeatures && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Key Features
              </h4>
              <ul className="space-y-1.5">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack Badges */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges Faced (Requirement #9) */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>Challenges Faced & Overcome</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.challenges || "Architecting responsive data flows, optimizing API payload responses, and ensuring reliable error-handling across dynamic state mutations."}
            </p>
          </div>

          {/* Future Plans (Requirement #9) */}
          <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
              <Rocket className="w-3.5 h-3.5 text-indigo-400" />
              <span>Future Improvements & Roadmap</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.futurePlans || "Expanding automated test suites, integrating analytics dashboards, and adding progressive web app (PWA) offline support."}
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 border-t border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
            >
              <span>Live Preview</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs transition-all"
            >
              <span>GitHub Client</span>
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-1.5 text-xs text-slate-400 hover:text-white transition-colors text-center"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
