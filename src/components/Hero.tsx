"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";
import { FileDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none -z-10 theme-ambient-glow opacity-60 transition-all duration-700" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Pill Badge, Greeting, Bold Name, CTAs, Connect */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">

            {/* Pill Badge matching reference */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 rounded-2xl sm:rounded-full text-[11px] sm:text-xs font-semibold tracking-wide shadow-sm theme-pill transition-colors duration-500 max-w-full text-center sm:text-left leading-snug">
              <span className="w-2 h-2 rounded-full animate-pulse shrink-0" style={{ backgroundColor: "var(--theme-accent)" }} />
              <span className="break-words">Aspiring Full-Stack Developer & 4th Year CSE Undergraduate Student</span>
            </div>

            {/* Headline matching reference: "Hi," + "I'm Samiha Rahman" */}
            <div className="space-y-1">
              <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl font-normal theme-text-accent transition-colors duration-500">
                Hi,
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                I'm <br />
                <span className="text-white">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            {/* Action Buttons: Download Resume (Theme primary) & GitHub Profile (Dark outline) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-3.5 pt-2">
              <a
                href={personalInfo.resumeUrl}
                onClick={(e) => {
                  if (personalInfo.resumeUrl === "#") {
                    e.preventDefault();
                    alert("Resume will be available soon!");
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm theme-btn-primary transition-all cursor-pointer shadow-md"
                title="Download Resume"
              >
                <span>Download Resume</span>
                <FileDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-black/40 hover:bg-white/10 border border-white/15 hover:border-[var(--theme-accent)] text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 theme-text-accent" />
              </a>
            </div>

            {/* Social Connect Row matching reference */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                CONNECT:
              </span>

              <div className="flex items-center gap-2.5">
                {/* GitHub */}
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-[var(--theme-accent-bg)] border border-white/10 hover:border-[var(--theme-accent-border)] text-slate-300 hover:text-[var(--theme-accent-light)] flex items-center justify-center transition-all transform hover:scale-105"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-indigo-300 flex items-center justify-center transition-all transform hover:scale-105"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/40 text-slate-300 hover:text-rose-300 flex items-center justify-center transition-all transform hover:scale-105"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Circular Profile Photo with Glowing Ring */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative group">

              {/* Ambient Glow */}
              <div className="absolute -inset-2 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 theme-ambient-glow" />

              {/* Circular Profile Image Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-1 theme-gradient-ring shadow-2xl transition-all duration-700">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a1020] relative">
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    priority
                    className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
