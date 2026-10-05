"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, FileText, X, CheckCircle, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";
import { MagneticButton } from "../ui/MagneticButton";

export function ResumeCTA() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Prevent background scrolling when quick view modal is open
  useEffect(() => {
    if (isPreviewOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isPreviewOpen]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isPreviewOpen) {
        setIsPreviewOpen(false);
      }
    };
    if (isPreviewOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Deepanshu_Dhingra_Resume.pdf";
    link.download = "Deepanshu_Dhingra_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-bg border-b border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-14 rounded-3xl border border-border bg-gradient-to-br from-bg-secondary/60 to-bg-secondary/20 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Accent Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent-glow blur-[90px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-bg text-xs font-mono text-accent uppercase tracking-widest">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink font-editorial">
                Want the detailed resume?
              </h2>

              <p className="text-base sm:text-lg text-ink-muted font-light leading-relaxed">
                Download my official resume featuring technical competencies, project deliverables with GSAP &amp; Next.js, and professional experience.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              <a
                href="/Deepanshu_Dhingra_Resume.pdf"
                download="Deepanshu_Dhingra_Resume.pdf"
                data-cursor="cta"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-accent text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent-hover transition-all flex items-center justify-center gap-2 shadow-lg group cursor-pointer"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume (PDF)</span>
              </a>

              <MagneticButton
                onClick={() => setIsPreviewOpen(true)}
                data-cursor="cta"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-border bg-bg hover:border-accent/60 text-ink font-mono text-xs uppercase tracking-wider font-medium transition-all flex items-center justify-center gap-2 shadow-sm group cursor-pointer"
              >
                <Eye className="w-4 h-4 text-accent" />
                <span>Quick View</span>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl rounded-3xl bg-bg border border-border p-6 sm:p-10 shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-accent" />
                  <div>
                    <h3 className="text-base font-bold text-ink font-display">Deepanshu Dhingra</h3>
                    <p className="text-xs text-ink-muted">Frontend Developer · 2+ Years Experience</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-2 rounded-full border border-border text-ink hover:bg-bg-secondary"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Resume Overview Content */}
              <div className="space-y-6 text-xs sm:text-sm font-sans text-ink leading-relaxed">
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase text-accent tracking-wider mb-2">
                    Professional Summary
                  </h4>
                  <p className="text-ink-muted">
                    Frontend Developer based in Mohali, Punjab with 2+ years of hands-on experience building fast, scalable, and responsive web applications. Specialized in React.js, Next.js, TypeScript, GSAP animations, Tailwind CSS, and robust state management.
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase text-accent tracking-wider mb-2">
                    Core Technical Competencies
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-ink-muted">
                    <div className="p-3 rounded-lg bg-bg-secondary border border-border">
                      <span className="font-semibold text-ink block mb-1">Frontend &amp; UI:</span>
                      React.js, Next.js, TypeScript, JavaScript (ES6+), GSAP &amp; ScrollTrigger, Tailwind CSS, Material UI, SASS
                    </div>
                    <div className="p-3 rounded-lg bg-bg-secondary border border-border">
                      <span className="font-semibold text-ink block mb-1">State &amp; Architecture:</span>
                      Redux Toolkit, TanStack Query, Context API, Formik, React Hook Form, Zod, REST APIs, GraphQL, WebSockets
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase text-accent tracking-wider mb-2">
                    Featured Commercial Projects
                  </h4>
                  <ul className="space-y-2.5 text-xs text-ink-muted">
                    <li>• <strong>NuGen Atria</strong>: Hospitality SaaS admin dashboard &amp; guest portal with WebSocket feeds and real-time room status.</li>
                    <li>• <strong>Arrive Hotels</strong>: Luxury hospitality platform (Palisociety) with Next.js, GSAP animations, and GraphQL / REST APIs.</li>
                    <li>• <strong>CapGro Finex</strong>: Fintech platform with interactive EMI calculators, GSAP ScrollTrigger reveals, and Formik/Zod validation.</li>
                    <li>• <strong>Money Parking (FundPilot)</strong>: Mutual fund tracking platform featuring real-time XIRR calculations, interactive tables, and Redux Toolkit.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase text-accent tracking-wider mb-2">
                    Education
                  </h4>
                  <p className="text-xs text-ink-muted font-mono">
                    Bachelor of Computer Applications (BCA)
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-mono text-ink-muted">{siteConfig.email}</span>
                  <a
                    href="/Deepanshu_Dhingra_Resume.pdf"
                    download="Deepanshu_Dhingra_Resume.pdf"
                    className="px-4 py-2 rounded-lg bg-accent text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-accent-hover transition-colors"
                  >
                    Download Copy
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
