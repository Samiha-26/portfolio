"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Mail, Send, CheckCircle2, Github, Linkedin, MapPin, AlertCircle, X, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [showToast, setShowToast] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setShowToast(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setStatus("idle");
        setShowToast(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none -z-10 theme-ambient-glow opacity-30 transition-all duration-700" />

      {/* Floating Animated Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 p-4 rounded-2xl bg-[#0a1224]/95 border border-emerald-500/40 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Message Sent Successfully!</p>
            <p className="text-[11px] text-slate-300">Thank you for reaching out, Samiha will get back to you soon.</p>
          </div>
          <button
            type="button"
            onClick={() => setShowToast(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm theme-pill transition-colors duration-500">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--theme-accent)" }} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            I am actively seeking web development opportunities, internships, and project collaborations.
          </p>
        </div>

        {/* Contact Grid: Direct Info Cards on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-2xl p-5 bg-[#0a1224]/80 backdrop-blur-xl border border-white/10 hover:border-[var(--theme-accent-border)] flex items-center gap-4 group transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 border"
                style={{
                  backgroundColor: "var(--theme-accent-bg)",
                  borderColor: "var(--theme-accent-border)",
                  color: "var(--theme-accent)",
                }}
              >
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Direct Email</p>
                <h4 className="text-sm sm:text-base font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                  {personalInfo.email}
                </h4>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl p-5 bg-[#0a1224]/80 backdrop-blur-xl border border-white/10 hover:border-purple-500/40 flex items-center gap-4 group transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">GitHub Profile</p>
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
              className="rounded-2xl p-5 bg-[#0a1224]/80 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 flex items-center gap-4 group transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">LinkedIn Network</p>
                <h4 className="text-sm sm:text-base font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors truncate">
                  samihaarahman
                </h4>
              </div>
            </a>

            {/* Location Card */}
            <div className="rounded-2xl p-5 bg-[#0a1224]/80 backdrop-blur-xl border border-white/10 flex items-center gap-4 shadow-lg">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Current Location</p>
                <h4 className="text-sm sm:text-base font-semibold text-slate-200">
                  {personalInfo.location}
                </h4>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 bg-[#0a1224]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Have an inquiry or internship opportunity? Drop a note below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="theme-text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#060913]/80 border text-white text-xs sm:text-sm transition-all focus:outline-none ${
                        errors.name
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-white/10 focus:border-[var(--theme-accent)]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email <span className="theme-text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#060913]/80 border text-white text-xs sm:text-sm transition-all focus:outline-none ${
                        errors.email
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-white/10 focus:border-[var(--theme-accent)]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Internship"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#060913]/80 border border-white/10 focus:border-[var(--theme-accent)] focus:outline-none text-white text-xs sm:text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="theme-text-accent">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#060913]/80 border text-white text-xs sm:text-sm transition-all focus:outline-none resize-none ${
                      errors.message
                        ? "border-rose-500 focus:border-rose-500"
                        : "border-white/10 focus:border-[var(--theme-accent)]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all theme-btn-primary cursor-pointer disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
