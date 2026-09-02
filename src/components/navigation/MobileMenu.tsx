"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useTheme } from "../theme/ThemeProvider";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const { config, setTheme, setIsCustomizerOpen } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-bg/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 md:hidden overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-mono font-bold text-xs">
                DD.
              </span>
              <span className="text-sm font-semibold tracking-tight text-ink font-display">
                {siteConfig.name}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full border border-border text-ink hover:bg-bg-secondary transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links (Large Staggered Typography) */}
          <nav className="my-auto py-8 space-y-4">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
              >
                <a
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center justify-between py-2 text-3xl font-bold tracking-tight text-ink font-editorial hover:text-accent transition-colors"
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    {link.name}
                  </span>
                  <span className="text-xs font-mono text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity">
                    0{i + 1} ↗
                  </span>
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Quick Actions & Metadata */}
          <div className="border-t border-border pt-6 space-y-5">
            <div className="flex items-center justify-between">
              {/* Theme Quick Toggle */}
              <button
                type="button"
                onClick={() => setTheme(config.mode === "obsidian" ? "ivory" : "obsidian")}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-bg-secondary text-xs font-mono uppercase tracking-wider text-ink"
              >
                <span>Theme: {config.mode === "obsidian" ? "Obsidian 🌙" : "Ivory ☀️"}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  setIsCustomizerOpen(true);
                }}
                className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent font-semibold"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Customize
              </button>
            </div>

            <div className="space-y-1.5 text-xs text-ink-muted font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-ink underline">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-white font-mono text-xs uppercase tracking-widest font-semibold shadow-lg"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
