"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, FileText, X, CheckCircle, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";
import { MagneticButton } from "../ui/MagneticButton";

export function ResumeCTA() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDownload = () => {
    // Generate a clean text/pdf download or open data URI
    const resumeText = `Deepanshu Dhingra — Full Stack Developer
Location: Mohali, Punjab, India
Email: dhingradeepanshu400@gmail.com
Experience: 4 Years

Summary:
Full Stack Developer crafting scalable, responsive, and high-performance web applications with React, Next.js, TypeScript, Node.js, and modern cloud ecosystems.

Selected Projects Delivered:
1. Capgro Finex (Fintech & Loan Distribution) — https://www.capgrofinex.com/
2. Prime Arc Studio (Spatial Architecture & Interiors) — https://prime-arc-mauve.vercel.app/
3. Arya Dental Care (Super-Speciality Healthcare) — https://arya-dental-care-nine.vercel.app/
4. Arrive Hotels (Boutique Hospitality by Palisociety) — https://www.arrivehotels.com/
5. Supreet Insurance (Insurance & Wealth Advisory) — https://supreetinsurnace.com/
6. Nugen Atria (Hospitality Operating System SaaS) — https://nugenatria.com/

Technical Core:
- Frontend: React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, SASS, Framer Motion
- Backend: Node.js, NestJS, Express.js, REST APIs, WebSockets, JWT, Event-driven architecture
- Databases: MongoDB, PostgreSQL, SQL, Mongoose
- State & Data: Redux Toolkit, TanStack Query
- Cloud & Tools: AWS, Docker, CI/CD, Git, GitHub, Postman, Jira
`;

    const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Deepanshu_Dhingra_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-bg border-b border-border">
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
                Want the detailed version?
              </h2>

              <p className="text-base sm:text-lg text-ink-muted font-light leading-relaxed">
                Download my resume for a closer look at my professional trajectory, technology competencies, and architectural track record.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              <MagneticButton
                onClick={handleDownload}
                data-cursor="cta"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-accent text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent-hover transition-all flex items-center justify-center gap-2 shadow-lg group cursor-pointer"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </MagneticButton>

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
                    <p className="text-xs text-ink-muted">Full Stack Developer · 4 Years Experience</p>
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
                    Full Stack Developer based in Mohali, Punjab with 4 years of proven hands-on experience building high-performance web applications. Specialized in scalable React and Next.js architectures, secure Node.js/NestJS REST backends, real-time WebSockets, and modern containerized deployment pipelines.
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase text-accent tracking-wider mb-2">
                    Core Technical Competencies
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono text-ink-muted">
                    <div className="p-3 rounded-lg bg-bg-secondary border border-border">
                      <span className="font-semibold text-ink block mb-1">Frontend:</span>
                      React.js, Next.js, TypeScript, Tailwind CSS, Material UI, Framer Motion
                    </div>
                    <div className="p-3 rounded-lg bg-bg-secondary border border-border">
                      <span className="font-semibold text-ink block mb-1">Backend &amp; DB:</span>
                      Node.js, NestJS, Express, REST APIs, WebSockets, PostgreSQL, MongoDB
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase text-accent tracking-wider mb-2">
                    Featured Project Portfolio
                  </h4>
                  <ul className="space-y-2 text-xs text-ink-muted">
                    <li>• <strong>CapGro Finex</strong>: Fintech loan comparison platform with zero-fee disclosures</li>
                    <li>• <strong>Prime Arc Studio</strong>: Interior spatial design digital editorial experience</li>
                    <li>• <strong>Arya Dental Care</strong>: Super-speciality clinical patient platform with online booking</li>
                    <li>• <strong>Arrive Hotels</strong>: Multi-city boutique hotel platform by Palisociety</li>
                    <li>• <strong>Supreet Insurance</strong>: Canadian insurance &amp; registered wealth advisory</li>
                    <li>• <strong>Nugen Atria</strong>: Cloud-native hotel management system &amp; guest ordering SaaS</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-mono text-ink-muted">{siteConfig.email}</span>
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 rounded-lg bg-accent text-white text-xs font-mono uppercase tracking-wider font-semibold"
                  >
                    Download Copy
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
