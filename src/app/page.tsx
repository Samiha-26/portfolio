import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060913] text-slate-100 relative selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Education />
    </main>
  );
}
