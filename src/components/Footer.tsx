"use client";

import { personalInfo } from "@/data/portfolioData";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      const topElem = document.getElementById("top") || document.getElementById("hero");
      if (topElem) {
        topElem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch {
      // Fallback natively to href="#top"
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#04070e] text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Description */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-cyan-500/20">
              SR
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {personalInfo.name}
              </p>
              <p className="text-xs text-slate-400">
                Full-Stack Developer & 4th Year CSE Undergraduate Student
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2.5 sm:gap-4 text-center sm:text-right">
            <p className="text-xs text-slate-400">
              Built with Next.js, Tailwind & TypeScript
            </p>
            <a
              href="#hero"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer active:scale-95 group flex items-center justify-center shrink-0"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
