"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize theme mode & handle scroll spy
  useEffect(() => {
    try {
      const savedMode = localStorage.getItem("portfolio-mode");
      if (savedMode === "light") {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      } else {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      }
    } catch {}

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleThemeMode = () => {
    setIsDarkMode((prev) => {
      const nextMode = !prev;
      if (typeof document !== "undefined") {
        if (nextMode) {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
          try {
            localStorage.setItem("portfolio-mode", "dark");
          } catch {}
        } else {
          document.documentElement.classList.add("light");
          document.documentElement.classList.remove("dark");
          try {
            localStorage.setItem("portfolio-mode", "light");
          } catch {}
        }
      }
      return nextMode;
    });
  };

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

        {/* Right Actions: Light / Dark Mode Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          
          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleThemeMode}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-slate-200 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-md select-none group"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle light and dark mode"
          >
            {isDarkMode ? (
              <>
                <Sun className="w-4 h-4 text-amber-300 transition-transform group-hover:rotate-45" />
                <span className="hidden sm:inline text-xs font-medium text-slate-300">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-cyan-500 transition-transform group-hover:-rotate-12" />
                <span className="hidden sm:inline text-xs font-medium text-slate-700">Dark</span>
              </>
            )}
          </button>

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

          {/* Mobile Appearance Toggle */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between px-1">
            <span className="text-xs font-medium text-slate-400">Appearance</span>
            <button
              type="button"
              onClick={() => {
                toggleThemeMode();
                setMobileMenuOpen(false);
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/15 bg-white/[0.05] text-xs font-semibold text-slate-200"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-300" />
                  <span>Switch to Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-cyan-500" />
                  <span>Switch to Dark</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
