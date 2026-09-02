"use client";

import React from "react";
import { motion } from "framer-motion";
import { capabilitiesData } from "@/data/skills";
import { SectionHeader } from "../ui/SectionHeader";
import { Check } from "lucide-react";

export function Capabilities() {
  const renderVectorArt = (type: string) => {
    switch (type) {
      case "product":
        return (
          <svg className="w-full h-28 stroke-accent/40 fill-none" viewBox="0 0 240 100">
            <rect x="20" y="15" width="200" height="70" rx="6" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="40" cy="30" r="3" fill="var(--accent-current)" />
            <circle cx="52" cy="30" r="3" fill="var(--border-strong)" />
            <circle cx="64" cy="30" r="3" fill="var(--border-strong)" />
            <line x1="20" y1="42" x2="220" y2="42" strokeWidth="0.75" />
            <rect x="35" y="52" width="70" height="20" rx="3" strokeWidth="0.75" />
            <line x1="120" y1="56" x2="205" y2="56" strokeWidth="0.75" />
            <line x1="120" y1="66" x2="185" y2="66" strokeWidth="0.75" />
          </svg>
        );
      case "fullstack":
        return (
          <svg className="w-full h-28 stroke-accent/40 fill-none" viewBox="0 0 240 100">
            <rect x="25" y="15" width="80" height="70" rx="6" strokeWidth="1" />
            <rect x="135" y="15" width="80" height="70" rx="6" strokeWidth="1" />
            <path d="M 105 40 L 135 40" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 135 60 L 105 60" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="120" cy="50" r="8" strokeWidth="0.75" fill="var(--bg)" />
            <text x="65" y="55" fill="var(--text-secondary)" fontSize="9" fontFamily="monospace" textAnchor="middle">UI</text>
            <text x="175" y="55" fill="var(--text-secondary)" fontSize="9" fontFamily="monospace" textAnchor="middle">API</text>
          </svg>
        );
      case "api":
        return (
          <svg className="w-full h-28 stroke-accent/40 fill-none" viewBox="0 0 240 100">
            <circle cx="45" cy="50" r="22" strokeWidth="1" />
            <circle cx="120" cy="50" r="22" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="195" cy="50" r="22" strokeWidth="1" />
            <line x1="67" y1="50" x2="98" y2="50" strokeWidth="1" />
            <line x1="142" y1="50" x2="173" y2="50" strokeWidth="1" />
            <circle cx="120" cy="50" r="4" fill="var(--accent-current)" />
          </svg>
        );
      case "performance":
        return (
          <svg className="w-full h-28 stroke-accent/40 fill-none" viewBox="0 0 240 100">
            <path d="M 30 75 Q 120 15 210 75" strokeWidth="1.2" />
            <line x1="120" y1="25" x2="120" y2="75" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="120" cy="75" r="4" fill="var(--accent-current)" />
            <text x="120" y="90" fill="var(--text-secondary)" fontSize="9" fontFamily="monospace" textAnchor="middle">0.4s FCP</text>
          </svg>
        );
      case "realtime":
        return (
          <svg className="w-full h-28 stroke-accent/40 fill-none" viewBox="0 0 240 100">
            <circle cx="120" cy="50" r="38" strokeWidth="0.5" strokeDasharray="5 5" />
            <circle cx="120" cy="50" r="24" strokeWidth="0.75" />
            <circle cx="120" cy="50" r="8" fill="var(--accent-current)" />
            <path d="M 80 50 Q 100 20 120 50 T 160 50" strokeWidth="1" />
          </svg>
        );
      case "cloud":
        return (
          <svg className="w-full h-28 stroke-accent/40 fill-none" viewBox="0 0 240 100">
            <rect x="40" y="20" width="40" height="24" rx="3" strokeWidth="0.75" />
            <rect x="100" y="20" width="40" height="24" rx="3" strokeWidth="0.75" />
            <rect x="160" y="20" width="40" height="24" rx="3" strokeWidth="0.75" />
            <rect x="70" y="55" width="100" height="28" rx="4" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="60" y1="44" x2="90" y2="55" strokeWidth="0.75" />
            <line x1="120" y1="44" x2="120" y2="55" strokeWidth="0.75" />
            <line x1="180" y1="44" x2="150" y2="55" strokeWidth="0.75" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="capabilities" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="05"
          category="ENGINEERING CAPABILITIES"
          title="What I Can Build."
          subtitle="From zero-to-one digital products to enterprise-scale refactors, here is how I deliver tangible business and technical value."
        />

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilitiesData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-7 sm:p-8 rounded-3xl border border-border bg-bg-secondary/30 hover:border-accent/50 hover:bg-bg-secondary/60 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Card Top Metadata */}
                <div className="flex items-center justify-between text-xs font-mono text-ink-muted mb-4">
                  <span className="text-accent font-bold">{item.number}</span>
                  <span className="uppercase tracking-wider">{item.subtitle}</span>
                </div>

                {/* Abstract Vector Illustration */}
                <div className="my-2 p-2 rounded-xl bg-bg/50 border border-border/50 group-hover:border-accent/30 transition-colors">
                  {renderVectorArt(item.svgType)}
                </div>

                {/* Card Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink font-display mt-6 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-ink-muted mt-2.5 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="pt-6 mt-6 border-t border-border/60 space-y-2">
                {item.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs text-ink/80">
                    <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
