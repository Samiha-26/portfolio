import { Sparkles, Code2, Heart, GraduationCap, Compass, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Who I Am & What Drives Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A quick glimpse into my academic journey, passion for code, and life outside tech.
          </p>
        </div>

        {/* Two Balanced Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Programming Journey */}
          <div className="rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-[#0c162c] via-[#091122] to-[#060b17] border border-cyan-500/20 hover:border-cyan-400/40 shadow-xl shadow-black/40 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner p-3 w-fit">
                <Code2 className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                The Coding Journey
              </h3>

              <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I'm currently in my 3rd year studying Computer Science and Engineering at <strong className="text-white font-semibold">Metropolitan University, Sylhet</strong>.
                </p>
                <p>
                  I love web development because it bridges logic and design. There is something deeply satisfying about taking an idea from a blank screen to a functional, responsive application that users can interact with seamlessly.
                </p>
                <p>
                  My core technical focus centers on <span className="text-cyan-300 font-medium">HTML5, CSS3, JavaScript, React, Next.js, TypeScript</span>, and <span className="text-cyan-300 font-medium">Tailwind CSS</span>. I enjoy turning design concepts into fluid, responsive interfaces while steadily growing my full-stack and backend fundamentals.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-slate-400">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Dedicated to continuous learning & clean code</span>
            </div>
          </div>

          {/* Card 2: Cozy Yarn & Creativity */}
          <div className="rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-[#1a0e1e] via-[#100a18] to-[#070710] border border-pink-500/25 hover:border-pink-400/50 shadow-xl shadow-black/40 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 shadow-inner p-3 w-fit">
                <Heart className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-white tracking-tight group-hover:text-pink-300 transition-colors">
                Beyond the Screen: Cozy Yarn
              </h3>

              <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
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
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-pink-500/15 text-pink-300 border border-pink-500/30">
                🧶 Handcrafted Crochet
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                🎨 Creative Aesthetics
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                ⏳ Time Management
              </span>
            </div>
          </div>

        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="rounded-2xl p-4 bg-[#0a1122]/90 border border-cyan-500/20 hover:border-cyan-400/40 transition-colors text-center shadow-md">
            <GraduationCap className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
            <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Education</p>
            <p className="text-xs sm:text-sm font-bold text-white mt-0.5">3rd Year CSE</p>
          </div>

          <div className="rounded-2xl p-4 bg-[#0a1122]/90 border border-indigo-500/20 hover:border-indigo-400/40 transition-colors text-center shadow-md">
            <Code2 className="w-5 h-5 text-indigo-400 mx-auto mb-1.5" />
            <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Focus Stack</p>
            <p className="text-xs sm:text-sm font-bold text-white mt-0.5">Frontend & UI</p>
            <p className="text-[10px] text-indigo-300/80 mt-0.5">React • Next • Tailwind</p>
          </div>

          <div className="rounded-2xl p-4 bg-[#0a1122]/90 border border-pink-500/20 hover:border-pink-400/40 transition-colors text-center shadow-md">
            <Heart className="w-5 h-5 text-pink-400 mx-auto mb-1.5" />
            <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Venture</p>
            <p className="text-xs sm:text-sm font-bold text-white mt-0.5">Founder @ Cozy Yarn</p>
          </div>

          <div className="rounded-2xl p-4 bg-[#0a1122]/90 border border-emerald-500/20 hover:border-emerald-400/40 transition-colors text-center shadow-md">
            <Briefcase className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
            <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Status</p>
            <p className="text-xs sm:text-sm font-bold text-white mt-0.5">Open for Internships</p>
          </div>
        </div>

      </div>
    </section>
  );
}
