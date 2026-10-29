import { skillsData } from "@/data/portfolioData";
import { Cpu, CheckCircle2 } from "lucide-react";

// Dedicated, authentic tech icons for every skill
function TechIcon({ name }: { name: string }) {
  const n = name.toLowerCase().trim();

  // 1. C
  if (n === "c") {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#00599C]/20 border border-[#00599C]/40 text-[#659AD2] flex items-center justify-center font-mono font-bold text-sm shadow-sm group-hover:border-[#659AD2] transition-colors">
        C
      </div>
    );
  }

  // 2. C++
  if (n === "c++" || n.includes("cpp")) {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#00599C]/20 border border-[#00599C]/40 text-[#659AD2] flex items-center justify-center font-mono font-bold text-xs shadow-sm group-hover:border-[#659AD2] transition-colors">
        C++
      </div>
    );
  }

  // 3. Java
  if (n === "java") {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
        <path d="M8.85 16.82c0 .03-.02.04-.04.05-1.07.49-1.93.92-1.93 1.54 0 .76 1.48 1.14 3.73 1.14 2.37 0 4.1-.38 4.1-1.14 0-.6-1.12-1.05-2.22-1.55-.02-.01-.03-.03-.03-.05 0-.02.01-.04.03-.04 1.34.42 3.23 1.05 3.23 2.01 0 1.52-3.14 2.18-5.83 2.18-2.6 0-5.46-.66-5.46-2.18 0-.96 1.56-1.55 2.94-1.99.02-.01.04 0 .04.03z" fill="#E76F00"/>
        <path d="M12.9 14.86c2.4-.29 4.35-1.4 4.35-2.3 0-.15-.05-.29-.15-.43-.24-.34-.84-.5-1.6-.54-.15-.01-.22-.17-.11-.26.83-.67 1.83-.98 1.83-1.63 0-.41-.44-.75-1.12-.96-.13-.04-.15-.22-.03-.28.84-.45 1.4-.95 1.4-1.51 0-1.16-2.09-1.74-4.81-1.74-1.87 0-3.66.27-4.48.74-.08.05-.18.01-.21-.08-.07-.22-.24-.39-.46-.49-.24-.11-.29-.41-.09-.57 1.37-1.07 3.39-1.39 5.86-1.39 3.53 0 6.13 1.04 6.13 2.76 0 .9-.74 1.62-1.94 2.13 1.1.41 1.76 1.05 1.76 1.82 0 .6-.42 1.15-1.17 1.62.99.4 1.57.98 1.57 1.69 0 1.93-3.18 2.95-6.84 3.07-.15.01-.23-.17-.11-.26.47-.32.96-.58 1.58-.75.03-.01.07.01.07.05z" fill="#5382A1"/>
        <path d="M10.15 11.58c-.02.02-.05.02-.07.01-.89-.48-1.52-.92-1.52-1.45 0-.67 1.09-1.06 2.82-1.11.13 0 .2-.16.11-.25-.49-.5-1.06-.88-1.06-1.41 0-.67.92-.99 2.18-1.05.13-.01.2-.17.11-.26-.71-.72-1.52-1.25-1.52-1.95 0-.97 1.59-1.47 3.75-1.47 1.74 0 3.27.32 3.99.79.08.05.06.18-.03.2-1.2.33-2.31.78-2.31 1.41 0 .61.94.94 2.11 1.05.13.01.2.17.11.26-.71.69-1.46 1.17-1.46 1.77 0 .58.8 1.01 1.96 1.12.14.01.21.18.11.27-.69.66-1.39 1.17-1.39 1.87 0 .84 1.18 1.25 2.76 1.34.15.01.22.18.1.27-.99.78-2.58 1.15-4.43 1.15-2.28 0-4.04-.59-4.04-1.72 0-.68.79-1.29 2.08-1.78.02-.01.04.01.02.04z" fill="#E76F00"/>
      </svg>
    );
  }

  // 4. JavaScript
  if (n.includes("javascript")) {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F7DF1E] text-black flex items-center justify-center font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
        <span className="font-mono font-black text-xs">JS</span>
      </div>
    );
  }

  // 5. TypeScript
  if (n.includes("typescript")) {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#3178C6] text-white flex items-center justify-center font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
        <span className="font-mono font-black text-xs">TS</span>
      </div>
    );
  }

  // 6. Python
  if (n.includes("python")) {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24">
        <path d="M11.91 2C6.9 2 7.21 4.17 7.21 4.17l.01 2.25h4.78v.68H5.16S2 6.74 2 11.77c0 5.04 2.76 4.87 2.76 4.87h1.64v-2.32s-.09-2.76 2.72-2.76h4.69s2.63.04 2.63-2.58V4.65S16.92 2 11.91 2zm-1.33 1.45c.45 0 .81.36.81.81 0 .45-.36.81-.81.81-.45 0-.81-.36-.81-.81 0-.45.36-.81.81-.81z" fill="#3776AB"/>
        <path d="M12.09 22c5.01 0 4.7-2.17 4.7-2.17l-.01-2.25h-4.78v-.68h6.84S22 17.26 22 12.23c0-5.04-2.76-4.87-2.76-4.87h-1.64v2.32s.09 2.76-2.72 2.76h-4.69s-2.63-.04-2.63 2.58v4.32S7.08 22 12.09 22zm1.33-1.45c-.45 0-.81-.36-.81-.81 0-.45.36-.81.81-.81.45 0 .81.36.81.81 0 .45-.36.81-.81.81z" fill="#FFD438"/>
      </svg>
    );
  }

  // 7. React
  if (n.includes("react")) {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#61DAFB] group-hover:rotate-180 transition-transform duration-700" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-7c-5.33 0-8 3.58-8 7.5 0 2.37 1 4.5 2.66 6.01C4.85 16.92 4 19 4 19s2.08-.85 3.49-2.66C8.5 17 9.63 17 12 17c5.33 0 8-3.58 8-7.5S17.33 2 12 2zm0 13c-2.03 0-3.5-.66-4.59-1.53.94-.78 2.32-1.47 4.59-1.47s3.65.69 4.59 1.47C15.5 14.34 14.03 15 12 15z" />
      </svg>
    );
  }

  // 8. Next.js
  if (n.includes("next")) {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.32 14.5l-4.74-6.83v6.83H9.2v-9h1.38l4.74 6.83V7.5h1.38v9h-1.38z" />
      </svg>
    );
  }

  // 9. Tailwind CSS
  if (n.includes("tailwind")) {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    );
  }

  // 10. HTML5
  if (n.includes("html")) {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.9 4.3H4.6l.4 4.5h13.9l-.4 4.5-4 1.1-4-1.1-.3-2.3H6.1l.5 4.5 5.4 1.5 5.4-1.5 1-10.7z"/>
      </svg>
    );
  }

  // 11. CSS3
  if (n.includes("css")) {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm16.5 4.3H6l.3 3.6h9.7l-.4 3.7-3.6 1-3.6-1-.2-2H4.6l.4 4.2 7 1.9 7-1.9 1-9.5z"/>
      </svg>
    );
  }

  // 12. DaisyUI
  if (n.includes("daisy")) {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1AD1A5]/20 border border-[#1AD1A5]/40 text-[#1AD1A5] flex items-center justify-center text-base shadow-sm">
        🌼
      </div>
    );
  }

  // 13. Node.js
  if (n.includes("node")) {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#5FA04E]/20 text-[#5FA04E] border border-[#5FA04E]/40 flex items-center justify-center font-bold text-xs shadow-sm">
        <span className="font-mono font-bold text-[11px]">Node</span>
      </div>
    );
  }

  // 14. Express.js
  if (n.includes("express")) {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-500/20 text-slate-200 border border-slate-500/30 flex items-center justify-center font-mono font-bold text-xs shadow-sm">
        ex
      </div>
    );
  }

  // 15. MongoDB
  if (n.includes("mongo") && !n.includes("mongoose")) {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C11.8 0 11.2.6 11 .8 7.4 4.6 5.8 8.4 6 12.8c.2 4.4 2.8 7.6 5.8 11.2h.4c3-3.6 5.6-6.8 5.8-11.2.2-4.4-1.4-8.2-5-12-.2-.2-.8-.8-1-.8zm0 2.4c.2.2.4.4.6.7 2.8 3.2 4.2 6.4 4 10-.2 3.6-2.4 6.2-4.6 9.1-2.2-2.9-4.4-5.5-4.6-9.1-.2-3.6 1.2-6.8 4-10 .2-.3.4-.5.6-.7z"/>
      </svg>
    );
  }

  // 16. Mongoose
  if (n.includes("mongoose")) {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#880000]/20 text-[#E53E3E] border border-[#E53E3E]/40 flex items-center justify-center font-mono font-bold text-[11px] shadow-sm">
        MDB
      </div>
    );
  }

  // 17. REST APIs
  if (n.includes("api") || n.includes("rest")) {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#06B6D4]/20 text-[#22D3EE] border border-[#06B6D4]/40 flex items-center justify-center font-mono font-bold text-[11px] shadow-sm">
        API
      </div>
    );
  }

  // 18. JWT Auth
  if (n.includes("jwt")) {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#D63AFF]/20 text-[#D63AFF] border border-[#D63AFF]/40 flex items-center justify-center font-mono font-bold text-[11px] shadow-sm">
        JWT
      </div>
    );
  }

  // 19. Git
  if (n === "git") {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.54 11.19L12.81.46c-.61-.61-1.6-.61-2.22 0L8.4 2.65l3.22 3.22c.65-.22 1.41-.07 1.93.45.52.52.67 1.28.45 1.93l3.1 3.1c.65-.22 1.41-.07 1.93.45.73.73.73 1.91 0 2.64-.73.73-1.91.73-2.64 0-.54-.54-.68-1.33-.42-2l-2.88-2.88v7.05c.2.11.39.26.54.41.73.73.73 1.91 0 2.64-.73.73-1.91.73-2.64 0-.73-.73-.73-1.91 0-2.64.2-.2.44-.34.7-.42v-7.1c-.26-.08-.5-.22-.7-.42-.55-.55-.69-1.37-.41-2.04L7.38 5.68.46 12.6c-.61.61-.61 1.6 0 2.22l10.73 10.73c.61.61 1.6.61 2.22 0l10.13-10.14c.61-.61.61-1.6 0-2.22z"/>
      </svg>
    );
  }

  // 20. GitHub
  if (n.includes("github")) {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    );
  }

  // 21. VS Code
  if (n.includes("vs code") || n.includes("vscode") || n === "code") {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.65.45c-.47-.28-1.07-.2-1.47.19L8.43 8.01 4.54 5.05c-.38-.29-.9-.31-1.3-.06l-2.42 1.5c-.5.31-.69.93-.44 1.45L4.02 12 .38 16.06c-.25.52-.06 1.14.44 1.45l2.42 1.5c.4.25.92.23 1.3-.06l3.89-2.96 7.75 7.37c.4.39 1 .47 1.47.19l6.98-4.14c.48-.28.77-.8.77-1.36V1.95c0-.56-.29-1.08-.77-1.36L17.65.45zM17 17.8l-6.52-5.8L17 6.2v11.6z"/>
      </svg>
    );
  }

  // 22. Vite
  if (n.includes("vite")) {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
        <path d="M21.57 3.65l-9.35 17.5a.6.6 0 01-1.06 0L1.81 3.65a.6.6 0 01.53-.88h18.7a.6.6 0 01.53.88z" fill="url(#vite-grad)"/>
        <path d="M13.2 2.77L6.5 14.1h4.94l-1.33 6.9 7.64-11.23h-4.94l.39-7z" fill="#FFD62E"/>
        <defs>
          <linearGradient id="vite-grad" x1="1.81" y1="2.77" x2="21.57" y2="21.15" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF"/>
            <stop offset="1" stopColor="#BD34FE"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 23. Vercel
  if (n.includes("vercel")) {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0L12 1z"/>
      </svg>
    );
  }

  // 24. Netlify
  if (n.includes("netlify")) {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#00C7B7]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.15 8.7L12.9.22a.58.58 0 00-1.03 0L7.62 8.7a.57.57 0 00.28.76l4.25 2.13a.58.58 0 00.52 0l4.25-2.13a.57.57 0 00.23-.76zM.22 11.87l8.48 4.25a.58.58 0 00.76-.28l2.13-4.25a.58.58 0 000-.52L3.11 6.82a.58.58 0 00-.76.28L.22 11.35a.57.57 0 000 .52zm11.37 3.47l-2.13 4.25a.57.57 0 00.28.76l8.48 4.25a.57.57 0 00.76-.28l2.13-4.25a.58.58 0 00-.28-.76l-8.48-4.25a.58.58 0 00-.76.28zM23.78 12.13l-4.25-2.13a.58.58 0 00-.76.28l-2.13 4.25a.58.58 0 000 .52l8.48 4.25a.58.58 0 00.76-.28l-2.1-6.89z"/>
      </svg>
    );
  }

  // 25. Socket.io
  if (n.includes("socket")) {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-500/20 text-slate-200 border border-slate-500/40 flex items-center justify-center font-bold text-xs shadow-sm">
        <span className="font-mono font-bold text-[10px]">SIO</span>
      </div>
    );
  }

  // 26. Leaflet Maps
  if (n.includes("leaflet") || n.includes("map")) {
    return (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#199900]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
      </svg>
    );
  }

  // Default fallback badge
  return (
    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center font-bold text-xs shadow-sm">
      {name.substring(0, 2).toUpperCase()}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[11px] font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Core programming languages, frameworks, databases, and deployment platforms I use to engineer robust full-stack applications.
          </p>
        </div>

        {/* 2x2 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 sm:pb-4 mb-3.5 sm:mb-4 border-b border-white/10">
                  <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <span className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10 font-medium">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skill Icon Cards: Skill Icon on top, Skill Name below */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`group p-2 sm:p-3.5 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center text-center gap-1.5 sm:gap-2 hover:-translate-y-1 hover:shadow-lg ${
                        skill.highlight
                          ? "bg-white/[0.04] border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/[0.08]"
                          : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <TechIcon name={skill.name} />
                      </div>
                      <span className="text-[10.5px] sm:text-xs font-medium text-slate-200 group-hover:text-white transition-colors text-center leading-tight break-words max-w-full">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3.5 sm:pt-4 mt-4 sm:mt-5 border-t border-white/5 flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">Hands-on project & academic experience</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}