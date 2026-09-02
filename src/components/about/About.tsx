"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { CheckCircle2, Code, Cpu, Globe, Rocket, Shield, Terminal } from "lucide-react";

export function About() {
  const focusAreas = [
    { label: "Scalable Frontend Applications", icon: Globe, desc: "React, Next.js App Router, SSR/ISR architectures" },
    { label: "High-Throughput Backend APIs", icon: Terminal, desc: "Node.js, NestJS, REST endpoints, WebSockets" },
    { label: "Responsive Interfaces & Design Systems", icon: Code, desc: "Fluid typography, Tailwind CSS, micro-interactions" },
    { label: "Data Modeling & Persistence", icon: Cpu, desc: "PostgreSQL, MongoDB, Redis caching, ORMs" },
    { label: "Performance & Web Vitals", icon: Rocket, desc: "Sub-second load times, code-splitting, image optimization" },
    { label: "Cloud & Production CI/CD", icon: Shield, desc: "Docker containers, AWS provisioning, automated releases" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-bg-secondary/30 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          category="BACKGROUND &amp; IDENTITY"
          title="More than just a developer."
          subtitle="Engineering with an editorial eye, systems thinking, and relentless attention to subtle details."
        />

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-base sm:text-lg text-ink-muted font-light leading-relaxed"
          >
            <p className="text-xl sm:text-2xl text-ink font-normal leading-snug">
              Based in Mohali, Punjab, I bring <span className="text-accent font-semibold">4 years of professional experience</span> building software that balances high aesthetic ambition with bulletproof reliability.
            </p>

            <p>
              Too often, software suffers from a divide: creative teams make designs that break under real-world data loads, while engineering teams deliver functional tools that feel rigid and uninspired. I work at the intersection of both.
            </p>

            <p>
              Whether it is orchestrating multi-property reservation engines in hospitality, designing zero-fee loan comparison portals in fintech, or crafting bespoke vector experiences for architectural studios, I treat every codebase as a living craft.
            </p>

            <div className="p-6 rounded-2xl border border-border bg-bg/80 space-y-3 pt-4">
              <div className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                Quick Profile Snapshot
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-ink-muted block">Location:</span>
                  <span className="text-ink font-medium">Mohali, Punjab, India</span>
                </div>
                <div>
                  <span className="text-ink-muted block">Experience:</span>
                  <span className="text-ink font-medium">4 Years Professional</span>
                </div>
                <div>
                  <span className="text-ink-muted block">Primary Stack:</span>
                  <span className="text-ink font-medium">Next.js · TS · Node · SQL</span>
                </div>
                <div>
                  <span className="text-ink-muted block">Availability:</span>
                  <span className="text-emerald-500 font-medium">Selected Projects</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Focus Areas Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-5 rounded-2xl border border-border bg-bg/60 hover:border-accent/50 hover:bg-bg transition-all group"
                >
                  <div className="w-8 h-8 rounded-xl bg-accent-subtle flex items-center justify-center text-accent mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-ink font-display group-hover:text-accent transition-colors">
                    {area.label}
                  </h4>
                  <p className="text-xs text-ink-muted mt-1.5 leading-relaxed font-light">
                    {area.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
