"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Mail, Phone, Send, CheckCircle2, MapPin, AlertCircle, X, Loader2, Copy, Check } from "lucide-react";

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
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => {
        setCopiedField(null);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

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
            
            {/* Email Card with Copy Option */}
            <div className="rounded-2xl p-4 sm:p-5 bg-[#0a1224]/80 backdrop-blur-xl border border-white/10 hover:border-[var(--theme-accent-border)] flex items-center justify-between gap-3 group transition-all duration-300 shadow-lg hover:-translate-y-0.5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3.5 min-w-0 flex-1"
                title="Send email"
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
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Direct Email</p>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                    {personalInfo.email}
                  </h4>
                </div>
              </a>

              {/* Copy Email Button (Icon only) */}
              <button
                type="button"
                onClick={(e) => handleCopy(personalInfo.email, "email", e)}
                className="p-2 sm:p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-slate-300 hover:text-white transition-all flex items-center justify-center shrink-0 cursor-pointer select-none group/copy"
                title="Copy Email"
                aria-label="Copy Email address"
              >
                {copiedField === "email" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-400 group-hover/copy:text-slate-200 transition-colors" />
                )}
              </button>
            </div>

            {/* Phone Number Card with Copy Option */}
            <div className="rounded-2xl p-4 sm:p-5 bg-[#0a1224]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 flex items-center justify-between gap-3 group transition-all duration-300 shadow-lg hover:-translate-y-0.5">
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3.5 min-w-0 flex-1"
                title="Call phone number"
              >
                <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Phone Number</p>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                    {personalInfo.phone}
                  </h4>
                </div>
              </a>

              {/* Copy Phone Button (Icon only) */}
              <button
                type="button"
                onClick={(e) => handleCopy(personalInfo.phone, "phone", e)}
                className="p-2 sm:p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-slate-300 hover:text-white transition-all flex items-center justify-center shrink-0 cursor-pointer select-none group/copy"
                title="Copy Phone Number"
                aria-label="Copy phone number"
              >
                {copiedField === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-400 group-hover/copy:text-slate-200 transition-colors" />
                )}
              </button>
            </div>

            {/* WhatsApp Card with Copy Option */}
            <div className="rounded-2xl p-4 sm:p-5 bg-[#0a1224]/80 backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 flex items-center justify-between gap-3 group transition-all duration-300 shadow-lg hover:-translate-y-0.5">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 min-w-0 flex-1"
                title="Chat on WhatsApp"
              >
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.67 20.16 9.32 19.82 8.13 19.11L7.85 18.94L4.72 19.76L5.56 16.71L5.38 16.41C4.6 15.17 4.19 13.56 4.19 11.91C4.19 7.37 7.89 3.67 12.05 3.67ZM9.03 7.5C8.87 7.5 8.61 7.56 8.39 7.8C8.17 8.04 7.55 8.62 7.55 9.8C7.55 10.98 8.41 12.11 8.53 12.27C8.65 12.43 10.22 14.85 12.63 15.89C14.63 16.75 15.04 16.58 15.48 16.54C15.92 16.5 16.9 15.96 17.1 15.39C17.3 14.82 17.3 14.33 17.24 14.23C17.18 14.13 17.02 14.07 16.78 13.95C16.54 13.83 15.36 13.25 15.14 13.17C14.92 13.09 14.76 13.05 14.6 13.29C14.44 13.53 13.98 14.07 13.84 14.23C13.7 14.39 13.56 14.41 13.32 14.29C13.08 14.17 12.31 13.92 11.39 13.1C10.67 12.46 10.18 11.67 10.04 11.43C9.9 11.19 10.03 11.06 10.15 10.94C10.26 10.83 10.4 10.65 10.52 10.51C10.64 10.37 10.68 10.27 10.76 10.11C10.84 9.95 10.8 9.81 10.74 9.69C10.68 9.57 10.22 8.44 10.02 7.97C9.83 7.51 9.63 7.57 9.48 7.56C9.34 7.55 9.18 7.5 9.03 7.5Z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">WhatsApp</p>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors truncate">
                    {personalInfo.phone}
                  </h4>
                </div>
              </a>

              {/* Copy WhatsApp Button (Icon only) */}
              <button
                type="button"
                onClick={(e) => handleCopy(personalInfo.phone, "whatsapp", e)}
                className="p-2 sm:p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-slate-300 hover:text-white transition-all flex items-center justify-center shrink-0 cursor-pointer select-none group/copy"
                title="Copy WhatsApp Number"
                aria-label="Copy WhatsApp number"
              >
                {copiedField === "whatsapp" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-400 group-hover/copy:text-slate-200 transition-colors" />
                )}
              </button>
            </div>

            {/* Location Card with Copy Option */}
            <div className="rounded-2xl p-4 sm:p-5 bg-[#0a1224]/80 backdrop-blur-xl border border-white/10 flex items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Current Location</p>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-200">
                    {personalInfo.location}
                  </h4>
                </div>
              </div>

              {/* Copy Location Button (Icon only) */}
              <button
                type="button"
                onClick={(e) => handleCopy(personalInfo.location, "location", e)}
                className="p-2 sm:p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-slate-300 hover:text-white transition-all flex items-center justify-center shrink-0 cursor-pointer select-none group/copy"
                title="Copy Location"
                aria-label="Copy location"
              >
                {copiedField === "location" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-400 group-hover/copy:text-slate-200 transition-colors" />
                )}
              </button>
            </div>

            {/* Social Network Quick Links */}
            <div className="pt-2 flex items-center justify-between px-2 text-xs text-slate-400">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Also available on:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  title="GitHub Profile"
                >
                  GitHub ↗
                </a>
                <span className="text-slate-600">•</span>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-indigo-300 transition-colors"
                  title="LinkedIn Profile"
                >
                  LinkedIn ↗
                </a>
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
