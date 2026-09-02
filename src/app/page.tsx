import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { TrustStrip } from "@/components/trust/TrustStrip";
import { Projects } from "@/components/work/Projects";
import { About } from "@/components/about/About";
import { Philosophy } from "@/components/philosophy/Philosophy";
import { TechStack } from "@/components/tech/TechStack";
import { Capabilities } from "@/components/capabilities/Capabilities";
import { Experience } from "@/components/experience/Experience";
import { ResumeCTA } from "@/components/resume/ResumeCTA";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink relative">
      {/* Skip to Main Content Link for Screen Readers & Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent text-white rounded-md font-mono text-xs"
      >
        Skip to main content
      </a>

      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustStrip />
        <Projects />
        <About />
        <Philosophy />
        <TechStack />
        <Capabilities />
        <Experience />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
}
