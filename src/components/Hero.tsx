"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";
import { ArrowRight, Github, Linkedin, MessageSquare, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Designation, Headline, CTAs, Socials */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Designation Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Full-Stack Web Developer & CSE Student</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.15]">
              Hi, I am{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                {personalInfo.name}
              </span>
            </h1>

            {/* Action Buttons: View Featured Projects & Get In Touch (No duplicate resume button) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5 transition-all"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 font-semibold text-sm sm:text-base transition-all hover:border-cyan-500/40"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Connect:
              </span>
              
              {/* GitHub */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition-all transform hover:scale-110"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-indigo-500/20 text-slate-300 hover:text-indigo-300 border border-white/10 hover:border-indigo-500/40 transition-all transform hover:scale-110"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/40 transition-all transform hover:scale-110"
                title="WhatsApp Direct Chat"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-full bg-white/5 hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 border border-white/10 hover:border-rose-500/40 transition-all transform hover:scale-110"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Circular Profile Photo with Glowing Ring & Floating Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              
              {/* Glowing Aura Background */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 shadow-2xl">
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

              {/* Floating Status Badge */}
              <div className="absolute -bottom-2 -left-2 bg-[#0c1427]/90 border border-white/10 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-semibold text-slate-200">
                  Open for Opportunities
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
