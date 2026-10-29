import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/portfolioData";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, AlertTriangle, Rocket, Sparkles } from "lucide-react";
import TechMiniIcon from "@/components/TechMiniIcon";
import ThemeToggle from "@/components/ThemeToggle";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 py-12 md:py-20 relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Navigation Row: Back Link + Theme Toggle */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-cyan-300 text-xs sm:text-sm font-medium transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <ThemeToggle />
        </div>

        {/* Project Header */}
        <div className="space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[11px] font-semibold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            <span>{project.badge}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-400">
            {project.subtitle}
          </p>

          {/* Action Buttons: Live Demo + GitHub Client */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all"
            >
              <span>Live Project Demo</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-xs transition-all"
            >
              <span>GitHub Repository</span>
              <Github className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </div>

        {/* Project Screenshot Showcase */}
        <div className="relative w-full h-48 sm:h-80 md:h-[380px] rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl mb-8 sm:mb-10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Detailed Content Grid */}
        <div className="space-y-5 sm:space-y-8">

          {/* Overview Description */}
          <div className="rounded-2xl p-4 sm:p-7 bg-[#0b1220]/80 border border-white/10 space-y-3">
            <h2 className="text-base sm:text-lg font-heading font-bold text-white tracking-tight">
              Project Description
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Main Technology Stack Used */}
          <div className="rounded-2xl p-4 sm:p-7 bg-[#0b1220]/80 border border-white/10 space-y-4">
            <h2 className="text-base sm:text-lg font-heading font-bold text-white tracking-tight">
              Main Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="project-tech-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-950/40 text-cyan-200 border border-cyan-800/40 shadow-sm transition-all hover:scale-105"
                >
                  <TechMiniIcon name={tag} />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {project.keyFeatures && (
            <div className="rounded-2xl p-4 sm:p-7 bg-[#0b1220]/80 border border-white/10 space-y-3">
              <h2 className="text-base sm:text-lg font-heading font-bold text-white tracking-tight">
                Key Features & Capabilities
              </h2>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges Faced While Developing (Requirement #9) */}
          <div className="rounded-2xl p-4 sm:p-7 bg-amber-950/15 border border-amber-500/25 space-y-3">
            <div className="flex items-center gap-2 text-amber-300">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h2 className="text-base sm:text-lg font-heading font-bold tracking-tight">
                Challenges Faced While Developing
              </h2>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.challenges}
            </p>
          </div>

          {/* Potential Improvements & Future Plans (Requirement #9) */}
          <div className="rounded-2xl p-4 sm:p-7 bg-indigo-950/15 border border-indigo-500/25 space-y-3">
            <div className="flex items-center gap-2 text-indigo-300">
              <Rocket className="w-4 h-4 text-indigo-400" />
              <h2 className="text-base sm:text-lg font-heading font-bold tracking-tight">
                Potential Improvements & Future Plans
              </h2>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.futurePlans}
            </p>
          </div>

          {/* Bottom Back Button */}
          <div className="pt-4 text-center">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-xs sm:text-sm transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Projects</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
