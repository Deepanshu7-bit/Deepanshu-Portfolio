"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { ArrowUp, Code2, Globe } from "lucide-react";

export function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Indian Standard Time (IST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-bg text-ink border-t border-border select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Brand & Location */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-mono font-bold text-xs">
                DD.
              </span>
              <span className="text-base font-bold text-ink font-display">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-ink-muted font-mono max-w-sm">
              Full Stack Developer crafting scalable, responsive, and high-performance digital experiences from Mohali, India.
            </p>
            {currentTime && (
              <div className="flex items-center gap-2 text-[11px] font-mono text-ink-muted">
                <Globe className="w-3.5 h-3.5 text-accent" />
                <span>Mohali Local Time (IST):</span>
                <span className="text-ink font-semibold">{currentTime}</span>
              </div>
            )}
          </div>

          {/* Quick Nav Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-ink-faint block mb-3">
                Navigation
              </span>
              <ul className="space-y-2">
                <li>
                  <a href="#work" className="text-ink-muted hover:text-accent transition-colors">
                    Selected Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-ink-muted hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#philosophy" className="text-ink-muted hover:text-accent transition-colors">
                    Philosophy
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-ink-muted hover:text-accent transition-colors">
                    Toolkit
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-ink-faint block mb-3">
                Overview
              </span>
              <ul className="space-y-2">
                <li>
                  <a href="#capabilities" className="text-ink-muted hover:text-accent transition-colors">
                    Capabilities
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-ink-muted hover:text-accent transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-ink-muted hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-ink-faint block mb-3">
                Direct
              </span>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                    Email Me
                  </a>
                </li>
                <li className="text-ink-muted">Available 2026</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tech Badges */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>

          {/* Animated Tech Pill Badge */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-bg-secondary text-[11px]">
            <Code2 className="w-3.5 h-3.5 text-accent" />
            <span>Built with React · Next.js · TypeScript · Tailwind CSS</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-ink transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <span className="w-6 h-6 rounded-full border border-border flex items-center justify-center group-hover:border-accent transition-colors">
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
