import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samiha Rahman | Full-Stack Web Developer Portfolio",
  description: "Computer Science & Engineering student at Metropolitan University, Sylhet. Aspiring Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web applications.",
  keywords: ["Samiha Rahman", "Full-Stack Developer", "Next.js", "React", "TypeScript", "Tailwind CSS", "Portfolio", "Bangladesh"],
  authors: [{ name: "Samiha Rahman", url: "https://github.com/Samiha-26" }],
  openGraph: {
    title: "Samiha Rahman | Full-Stack Web Developer",
    description: "Portfolio of Samiha Rahman — CSE student & Full-Stack Developer showcasing projects, skills, and certifications.",
    url: "https://github.com/Samiha-26",
    siteName: "Samiha Rahman Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#060913] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
