"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const isLight = document.documentElement.classList.contains("light");
      setIsDarkMode(!isLight);
    } catch {}
  }, []);

  const toggleThemeMode = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
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
  };

  // Render static placeholder with identical geometry during SSR to prevent layout shift
  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full bg-white/[0.08] border border-white/15 opacity-70 ${className}`} />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleThemeMode}
      className={`w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.18] border border-white/15 text-slate-200 hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-md select-none group active:scale-95 ${className}`}
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle light and dark mode"
    >
      {isDarkMode ? (
        <Sun className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 text-cyan-600 group-hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
}
