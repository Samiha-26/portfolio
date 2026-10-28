"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Palette, Check, ChevronDown } from "lucide-react";

export interface ThemePreset {
  id: string;
  name: string;
  accent: string;
  light: string;
  dark: string;
  bg: string;
  border: string;
  glow: string;
  gradientStart: string;
  gradientMid: string;
  gradientEnd: string;
}

export const themes: ThemePreset[] = [
  {
    id: "cyan",
    name: "Cyan Neon",
    accent: "#22d3ee",
    light: "#67e8f9",
    dark: "#0891b2",
    bg: "rgba(6, 182, 212, 0.15)",
    border: "rgba(6, 182, 212, 0.4)",
    glow: "rgba(6, 182, 212, 0.35)",
    gradientStart: "#22d3ee",
    gradientMid: "#6366f1",
    gradientEnd: "#a855f7",
  },
  {
    id: "purple",
    name: "Electric Violet",
    accent: "#c084fc",
    light: "#e9d5ff",
    dark: "#9333ea",
    bg: "rgba(168, 85, 247, 0.15)",
    border: "rgba(168, 85, 247, 0.4)",
    glow: "rgba(168, 85, 247, 0.35)",
    gradientStart: "#c084fc",
    gradientMid: "#ec4899",
    gradientEnd: "#8b5cf6",
  },
  {
    id: "emerald",
    name: "Emerald Green",
    accent: "#34d399",
    light: "#a7f3d0",
    dark: "#059669",
    bg: "rgba(16, 185, 129, 0.15)",
    border: "rgba(16, 185, 129, 0.4)",
    glow: "rgba(16, 185, 129, 0.35)",
    gradientStart: "#34d399",
    gradientMid: "#06b6d4",
    gradientEnd: "#3b82f6",
  },
  {
    id: "rose",
    name: "Sunset Rose",
    accent: "#fb7185",
    light: "#fecdd3",
    dark: "#e11d48",
    bg: "rgba(244, 63, 94, 0.15)",
    border: "rgba(244, 63, 94, 0.4)",
    glow: "rgba(244, 63, 94, 0.35)",
    gradientStart: "#fb7185",
    gradientMid: "#f59e0b",
    gradientEnd: "#ec4899",
  },
  {
    id: "amber",
    name: "Golden Amber",
    accent: "#fbbf24",
    light: "#fde68a",
    dark: "#d97706",
    bg: "rgba(245, 158, 11, 0.15)",
    border: "rgba(245, 158, 11, 0.4)",
    glow: "rgba(245, 158, 11, 0.35)",
    gradientStart: "#fbbf24",
    gradientMid: "#f97316",
    gradientEnd: "#ef4444",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedTheme, setSelectedTheme] = useState<ThemePreset>(themes[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const applyTheme = (theme: ThemePreset) => {
    setSelectedTheme(theme);
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      root.setAttribute("data-theme", theme.id);
      root.style.setProperty("--theme-accent", theme.accent);
      root.style.setProperty("--theme-accent-light", theme.light);
      root.style.setProperty("--theme-accent-dark", theme.dark);
      root.style.setProperty("--theme-accent-bg", theme.bg);
      root.style.setProperty("--theme-accent-border", theme.border);
      root.style.setProperty("--theme-accent-glow", theme.glow);
      root.style.setProperty("--theme-gradient-start", theme.gradientStart);
      root.style.setProperty("--theme-gradient-mid", theme.gradientMid);
      root.style.setProperty("--theme-gradient-end", theme.gradientEnd);
      try {
        localStorage.setItem("portfolio-theme", theme.id);
      } catch {}
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["contact", "education", "certificates", "projects", "skills", "experience", "about", "hero"];
      const scrollY = window.scrollY;

      if (scrollY < 200) {
        setActiveSection("home");
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240 && rect.bottom >= 120) {
            setActiveSection(id === "hero" ? "home" : id);
            return;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved) {
        const found = themes.find((t) => t.id === saved.toLowerCase());
        if (found) {
          applyTheme(found);
        }
      }
    } catch {}

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-[#070d1c]/90 backdrop-blur-xl border border-white/10 rounded-full px-4 sm:px-6 py-2.5 shadow-2xl shadow-black/50 flex items-center justify-between transition-all">
        
        {/* Brand Title: Portfolio */}
        <a
          href="#"
          className="font-serif font-bold text-base sm:text-lg text-white tracking-wide transition-colors flex items-center gap-2"
        >
          <span>Portfolio</span>
        </a>

        {/* Desktop Navigation Links with Scroll Spy */}
        <nav className="hidden md:flex items-center gap-1">
          <a
            href="#"
            onClick={() => setActiveSection("home")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              activeSection === "home"
                ? "theme-btn-primary shadow-sm"
                : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            Home
          </a>
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(sectionId)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "theme-btn-primary shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Dropdown & Mobile Toggle */}
        <div className="flex items-center gap-2">
          
          {/* Anchored Theme Popover Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 hover:border-cyan-400/50 text-white text-xs font-semibold transition-all cursor-pointer shadow-md select-none"
              title="Click to open theme color options"
              aria-label="Theme options"
              aria-expanded={dropdownOpen}
            >
              <Palette
                className="w-4 h-4 transition-transform group-hover:rotate-45"
                style={{ color: selectedTheme.accent }}
              />
              <span className="hidden sm:inline font-medium text-slate-200">Theme</span>
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor: selectedTheme.accent,
                  boxShadow: `0 0 8px ${selectedTheme.glow}`,
                }}
              />
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180 text-white" : ""
                }`}
              />
            </button>

            {/* Pop-up Colors Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-3 w-72 sm:w-80 bg-[#0a1224] border-2 border-white/20 rounded-3xl p-4 shadow-2xl shadow-black/90 z-50 backdrop-blur-2xl">
                
                {/* Pop-up Header */}
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4" style={{ color: selectedTheme.accent }} />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">Theme Colors</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(false)}
                    className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Pop-up Options List */}
                <div className="space-y-1.5">
                  {themes.map((theme) => {
                    const isSelected = selectedTheme.id === theme.id;
                    return (
                      <button
                        key={theme.id}
                        type="button"
                        onClick={() => {
                          applyTheme(theme);
                          setDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer text-left ${
                          isSelected
                            ? "bg-white/10 border-white/30 shadow-md"
                            : "bg-white/[0.02] border-white/5 hover:bg-white/[0.08] hover:border-white/15"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="w-5 h-5 rounded-full shadow-md flex-shrink-0"
                            style={{
                              backgroundColor: theme.accent,
                              boxShadow: `0 0 10px ${theme.glow}`,
                            }}
                          />
                          <span className="text-xs sm:text-sm font-semibold text-slate-100">
                            {theme.name}
                          </span>
                        </div>

                        {isSelected ? (
                          <span
                            className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: theme.bg,
                              color: theme.accent,
                              border: `1px solid ${theme.border}`,
                            }}
                          >
                            <Check className="w-3 h-3" />
                            <span>Active</span>
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-400 font-medium">Select</span>
                        )}
                      </button>
                    );
                  })}
                </div>

              </div>
            )}
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 md:hidden transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="max-w-4xl mx-auto md:hidden bg-[#070d1c]/95 border border-white/10 backdrop-blur-2xl px-5 py-4 rounded-3xl space-y-2 mt-2 shadow-2xl shadow-black/60">
          <a
            href="#"
            onClick={() => {
              setActiveSection("home");
              setMobileMenuOpen(false);
            }}
            className={`block px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSection === "home"
                ? "theme-btn-primary"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Home
          </a>
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(sectionId);
                  setMobileMenuOpen(false);
                }}
                className={`block px-3.5 py-2 text-xs font-medium rounded-xl transition-all ${
                  isActive
                    ? "theme-btn-primary"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          {/* Mobile Theme Options */}
          <div className="pt-3 border-t border-white/10 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-1">
              Choose Theme Accent:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => {
                    applyTheme(theme);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 p-2 rounded-xl border text-left text-xs font-medium transition-all ${
                    selectedTheme.id === theme.id
                      ? "bg-white/15 border-white/30 text-white font-bold"
                      : "bg-white/[0.03] border-white/10 text-slate-300"
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: theme.accent }}
                  />
                  <span className="truncate">{theme.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
