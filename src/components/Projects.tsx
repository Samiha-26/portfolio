"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[11px] font-semibold uppercase tracking-wider shadow-sm">
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            Here are some personal projects
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Deployed, production-grade applications built with modern JavaScript backends, clean databases, and AI integration.
          </p>
        </div>

        {/* Project Cards Grid (2x2 Balanced Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#0b1220]/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-1"
            >
              <div>
                {/* Screenshot & Top Floating Badge Container (Clickable Link) */}
                <Link 
                  href={`/projects/${project.id}`}
                  className="block relative w-full h-48 sm:h-56 md:h-60 bg-slate-900 overflow-hidden border-b border-white/10 group-hover:opacity-95 transition-opacity"
                  title="Click to view details and challenges"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Pill Status Badge */}
                  <div className="absolute top-2.5 right-2.5 z-10 px-2.5 py-0.5 rounded-full bg-[#060913]/85 backdrop-blur-md border border-white/15 text-[10px] font-medium text-slate-200 tracking-wide shadow-lg max-w-[75%] truncate">
                    {project.badge}
                  </div>
                </Link>

                {/* Content Block */}
                <div className="p-4 sm:p-5 space-y-3">
                  {/* Title & Subtitle */}
                  <div>
                    <Link href={`/projects/${project.id}`}>
                      <h3 className="text-base sm:text-lg font-heading font-bold text-white hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="project-tech-badge px-2 py-0.5 rounded-md text-[11px] font-medium bg-cyan-950/40 text-cyan-200 border border-cyan-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Buttons Row: Live Demo + GitHub Repo */}
              <div className="p-4 sm:p-5 pt-1 space-y-2 sm:space-y-2.5">
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {/* Live Demo Button (Cyan Filled) */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20 active:scale-95"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>

                  {/* GitHub Repo Button (Dark Outline) */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 font-medium text-xs transition-all active:scale-95"
                  >
                    <span>GitHub Repo</span>
                    <Github className="w-3 h-3 shrink-0" />
                  </a>
                </div>

                {/* View Details Page Link */}
                <Link
                  href={`/projects/${project.id}`}
                  className="w-full text-center py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-cyan-300 flex items-center justify-center gap-1.5 transition-all font-medium group/btn shadow-sm"
                >
                  <Info className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:scale-110 transition-transform shrink-0" />
                  <span>View Details & Challenges ↗</span>
                </Link>
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
