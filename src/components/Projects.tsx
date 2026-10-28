"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/portfolioData";
import { Project } from "@/types";
import ProjectModal from "./ProjectModal";
import { ExternalLink, Github, Info, Sparkles } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matching the Reference Photo) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-sm">
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Here are some personal projects
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Deployed, production-grade applications built with modern JavaScript backends, clean databases, and AI integration.
          </p>
        </div>

        {/* Project Cards Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#0b1220]/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-1"
            >
              <div>
                {/* Screenshot & Top Floating Badge Container */}
                <div className="relative w-full h-52 sm:h-56 bg-slate-900 overflow-hidden border-b border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Pill Status Badge (Just like in the reference photo) */}
                  <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-[#060913]/85 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-slate-200 tracking-wide shadow-lg">
                    {project.badge}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 space-y-4">
                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-cyan-950/40 text-cyan-300 border border-cyan-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Buttons Row: Live Demo + GitHub Repo */}
              <div className="p-6 pt-2 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {/* Live Demo Button (Cyan Filled) */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20 active:scale-95"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* GitHub Repo Button (Dark Outline) */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 font-semibold text-xs sm:text-sm transition-all active:scale-95"
                  >
                    <span>GitHub Repo</span>
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* View Details / Challenges Button (Requirement #9) */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full text-center py-1.5 text-xs text-slate-400 hover:text-cyan-300 flex items-center justify-center gap-1.5 transition-colors font-medium"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>View Details & Challenges</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
