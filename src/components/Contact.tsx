"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Mail, Send, CheckCircle2, Github, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            Let's Connect & Build Together
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            I am actively seeking web development opportunities. Feel free to reach out directly or send a message.
          </p>
        </div>

        {/* Contact Grid: Direct Info Cards on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards (Sleek Professional Scale) */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 flex items-center gap-3.5 group transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-medium">Email</p>
                <h4 className="text-sm sm:text-base font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                  {personalInfo.email}
                </h4>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-purple-500/40 flex items-center gap-3.5 group transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform shrink-0">
                <Github className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-medium">GitHub</p>
                <h4 className="text-sm sm:text-base font-semibold text-slate-200 group-hover:text-purple-300 transition-colors truncate">
                  Samiha-26
                </h4>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-blue-500/40 flex items-center gap-3.5 group transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-medium">LinkedIn</p>
                <h4 className="text-sm sm:text-base font-semibold text-slate-200 group-hover:text-blue-300 transition-colors truncate">
                  samihaarahman
                </h4>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-medium">Location</p>
                <h4 className="text-sm sm:text-base font-semibold text-slate-200">
                  {personalInfo.location}
                </h4>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (Refined Professional Scale) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10">
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Have an inquiry or project opportunity? Leave a note below.
              </p>

              {status === "success" && (
                <div className="mb-5 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#060913]/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#060913]/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#060913]/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#060913]/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs sm:text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
