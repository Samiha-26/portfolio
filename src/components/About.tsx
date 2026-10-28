import { personalInfo } from "@/data/portfolioData";
import { Sparkles, Code2, Heart, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            My Journey, Passion & Creativity
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering intuitive web applications by day, handcrafting crochet creations by night.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <Code2 className="w-6 h-6 text-cyan-400" />
                <span>The Programming Journey</span>
              </h3>
              
              <div className="space-y-3.5 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I'm currently in my 3rd year studying Computer Science and Engineering at <strong className="text-white">Metropolitan University, Sylhet</strong>. My journey started with curiosity about how the web works and quickly transformed into a passion for building full-stack applications that solve practical everyday needs.
                </p>
                <p>
                  I love turning complex requirements into clean, user-friendly digital tools. Whether developing <strong className="text-cyan-300">Bazar Dor</strong> to simplify daily market prices in Bengali, crafting <strong className="text-cyan-300">Dev Stack</strong> for interactive tech discovery, or engineering <strong className="text-cyan-300">FoodBridge</strong> to fight community hunger with real-time food donations, I focus on accessible, responsive, and performance-driven code.
                </p>
                <p>
                  I am actively expanding my full-stack expertise across Next.js, Node.js, Express, MongoDB, RESTful APIs, and modern authentication workflows.
                </p>
              </div>
            </div>

            {/* Cozy Yarn & Hobbies Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border-purple-500/20 bg-gradient-to-br from-purple-900/10 via-slate-900/40 to-slate-950/40 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <Heart className="w-6 h-6 text-pink-400" />
                <span>Beyond Code: Cozy Yarn & Hobbies</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Outside the world of code, I am the founder of <strong className="text-pink-300">Cozy Yarn</strong>, my small handmade crochet venture. Crocheting is where my patience, pattern design, and artistic eye flourish. Managing Cozy Yarn has taught me authentic customer communication, disciplined time management, and the beauty of building things carefully from scratch.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-500/10 text-pink-300 border border-pink-500/20">
                  🧶 Crochet Artistry
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  🎨 UI & Aesthetics
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  ✨ Small Business Leadership
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  📚 Research & Continuous Learning
                </span>
              </div>
            </div>
          </div>

          {/* Right Highlights & Metrics */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Education</p>
                <h4 className="text-base font-bold text-white">B.Sc. in Computer Science (3rd Year)</h4>
                <p className="text-xs text-slate-400">Metropolitan University, Sylhet</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Core Stack</p>
                <h4 className="text-base font-bold text-white">React, Next.js & TypeScript</h4>
                <p className="text-xs text-slate-400">Tailwind CSS, Node.js, MongoDB</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Featured Work</p>
                <h4 className="text-base font-bold text-white">3+ Production Deployed Projects</h4>
                <p className="text-xs text-slate-400">Live on Vercel & Netlify</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Entrepreneurship</p>
                <h4 className="text-base font-bold text-white">Founder @ Cozy Yarn</h4>
                <p className="text-xs text-slate-400">Handmade crochet & creative design</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
