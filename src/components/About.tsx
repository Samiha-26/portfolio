import { Sparkles, Code2, Heart, GraduationCap, Compass, Briefcase, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none -z-10 theme-ambient-glow opacity-40 transition-all duration-700" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm theme-pill transition-colors duration-500">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--theme-accent)" }} />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Who I Am & What Drives Me
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            A glimpse into my academic journey, passion for code, and life outside tech.
          </p>
        </div>

        {/* Two Balanced Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">

          {/* Card 1: Programming Journey */}
          <div className="rounded-3xl p-5 sm:p-7 md:p-9 bg-[#0a1224]/85 backdrop-blur-xl border border-white/10 hover:border-[var(--theme-accent-border)] shadow-xl shadow-black/50 transition-all duration-300 flex flex-col justify-between space-y-5 sm:space-y-6 group hover:shadow-2xl hover:shadow-[var(--theme-accent-glow)]">
            <div className="space-y-4">
              <div
                className="rounded-2xl p-3 w-fit shadow-md border transition-all"
                style={{
                  backgroundColor: "var(--theme-accent-bg)",
                  borderColor: "var(--theme-accent-border)",
                  color: "var(--theme-accent)",
                }}
              >
                <Code2 className="w-5 h-5" />
              </div>

              <h3 className="text-lg sm:text-2xl font-serif font-bold text-white tracking-tight group-hover:text-[var(--theme-accent-light)] transition-colors">
                My Coding Journey
              </h3>

              <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                <p>
                  I'm currently in my 4th year studying Computer Science and Engineering at <strong className="text-white font-semibold">Metropolitan University, Sylhet</strong>.
                </p>
                <p>
                  I love web development because it bridges logic and design. There is something deeply satisfying about taking an idea from a blank screen to a functional, responsive application that users can interact with seamlessly.
                </p>
                <p>
                  My core technical stack centers on <span className="theme-text-accent font-semibold">React, Next.js, TypeScript, Node.js, Express, MongoDB</span>, and <span className="theme-text-accent font-semibold">Tailwind CSS</span>. I enjoy engineering complete, responsive full-stack web applications from sleek UI components to scalable backend APIs.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-slate-400">
              <Compass className="w-4 h-4 theme-text-accent" />
              <span>Dedicated to continuous learning & clean code</span>
            </div>
          </div>

          {/* Card 2: Cozy Yarn & Creativity */}
          <div className="rounded-3xl p-5 sm:p-7 md:p-9 bg-[#110e1c]/85 backdrop-blur-xl border border-pink-500/20 hover:border-pink-400/50 shadow-xl shadow-black/50 transition-all duration-300 flex flex-col justify-between space-y-5 sm:space-y-6 group hover:shadow-2xl hover:shadow-pink-500/20">
            <div className="space-y-4">
              <div className="rounded-2xl p-3 w-fit shadow-md border border-pink-500/30 bg-pink-500/15 text-pink-400">
                <Heart className="w-5 h-5" />
              </div>

              <h3 className="text-lg sm:text-2xl font-serif font-bold text-white tracking-tight group-hover:text-pink-300 transition-colors">
                Beyond the Screen: Cozy Yarn
              </h3>

              <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                <p>
                  When I'm not writing code, you'll usually find me crocheting. I run <strong className="text-pink-300 font-semibold">Cozy Yarn</strong>, my small handmade crochet venture where I design and craft custom pieces.
                </p>
                <p>
                  Crochet taught me that great things take patience, precision, and attention to small details — lessons that naturally shape how I approach building smooth UI components and debugging complex problems.
                </p>
                <p>
                  Balancing entrepreneurship with my engineering degree keeps my creativity sharp, disciplined, and deeply in tune with customer empathy.
                </p>
              </div>
            </div>

            {/* Aesthetic Tag Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-white/10">
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-pink-500/15 text-pink-300 border border-pink-500/30">
                🧶 Handcrafted Crochet
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-purple-500/15 text-purple-300 border border-purple-500/30">
                🎨 Creative Aesthetics
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium theme-pill">
                ⏳ Detail & Discipline
              </span>
            </div>
          </div>

        </div>

        {/* Quick Highlights Bar: 5 Balanced Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5 mt-6 sm:mt-8">
          
          {/* 1. Education */}
          <div className="rounded-2xl p-3 sm:p-4 md:p-5 bg-[#0a1224]/80 backdrop-blur-lg border border-white/10 hover:border-[var(--theme-accent-border)] transition-all text-center shadow-lg group hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <GraduationCap className="w-5 h-5 theme-text-accent mx-auto mb-1.5 sm:mb-2 transition-transform group-hover:scale-110" />
              <p className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Education</p>
              <p className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">4th Year Undergraduate Student</p>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400 mt-2">Metropolitan Univ.</p>
          </div>

          {/* 2. Current CGPA (Between Education and Stack) */}
          <div className="rounded-2xl p-3 sm:p-4 md:p-5 bg-[#0a1224]/80 backdrop-blur-lg border border-white/10 hover:border-emerald-500/40 transition-all text-center shadow-lg group hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <Award className="w-5 h-5 text-emerald-400 mx-auto mb-1.5 sm:mb-2 transition-transform group-hover:scale-110" />
              <p className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Current CGPA</p>
              <p className="text-xs sm:text-sm font-bold text-emerald-300 mt-1">3.76 / 4.00</p>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400 mt-2">Academic Standing</p>
          </div>

          {/* 3. Focus Stack */}
          <div className="rounded-2xl p-3 sm:p-4 md:p-5 bg-[#0a1224]/80 backdrop-blur-lg border border-white/10 hover:border-[var(--theme-accent-border)] transition-all text-center shadow-lg group hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <Code2 className="w-5 h-5 theme-text-accent mx-auto mb-1.5 sm:mb-2 transition-transform group-hover:scale-110" />
              <p className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Focus Stack</p>
              <p className="text-xs sm:text-sm font-bold text-white mt-1">Full Stack</p>
            </div>
            <p className="text-[10px] sm:text-[11px] theme-text-accent mt-2 truncate">MERN • Next.js • TS</p>
          </div>

          {/* 4. Venture */}
          <div className="rounded-2xl p-3 sm:p-4 md:p-5 bg-[#0a1224]/80 backdrop-blur-lg border border-white/10 hover:border-pink-500/40 transition-all text-center shadow-lg group hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <Heart className="w-5 h-5 text-pink-400 mx-auto mb-1.5 sm:mb-2 transition-transform group-hover:scale-110" />
              <p className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Venture</p>
              <p className="text-xs sm:text-sm font-bold text-white mt-1">Cozy Yarn</p>
            </div>
            <p className="text-[10px] sm:text-[11px] text-pink-300 mt-2">Handcrafted Founder</p>
          </div>

          {/* 5. Status */}
          <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 rounded-2xl p-3 sm:p-4 md:p-5 bg-[#0a1224]/80 backdrop-blur-lg border border-white/10 hover:border-indigo-500/40 transition-all text-center shadow-lg group hover:-translate-y-0.5 flex flex-col justify-between">
            <div>
              <Briefcase className="w-5 h-5 text-indigo-400 mx-auto mb-1.5 sm:mb-2 transition-transform group-hover:scale-110" />
              <p className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Status</p>
              <p className="text-xs sm:text-sm font-bold text-white mt-1">Open for Opportunities</p>
            </div>
            <p className="text-[10px] sm:text-[11px] text-indigo-300 mt-2">Full-Time & Internships</p>
          </div>

        </div>

      </div>
    </section>
  );
}
