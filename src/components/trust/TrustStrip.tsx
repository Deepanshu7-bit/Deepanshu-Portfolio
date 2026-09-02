"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { TechMarquee } from "./TechMarquee";
import { Award, CheckCircle, Layers, TrendingUp } from "lucide-react";

export function TrustStrip() {
  const icons = [Award, Layers, TrendingUp, CheckCircle];

  return (
    <section className="py-12 sm:py-16 bg-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-border gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Proven Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink font-editorial">
              4+ Years Building For The Modern Web
            </h2>
          </div>
          <p className="text-sm text-ink-muted max-w-md font-light leading-relaxed">
            Delivering production-grade applications that blend creative agency visual polish with scalable backend engineering.
          </p>
        </div>

        {/* Animated Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
          {siteConfig.stats.map((stat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-bg-secondary/40 hover:border-accent/40 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-ink font-mono tracking-tight text-gradient-accent">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-ink mt-1 font-display">
                  {stat.label}
                </div>
                <div className="text-xs text-ink-muted mt-1 leading-relaxed">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Infinite Horizontal Technology Marquee */}
      <TechMarquee />
    </section>
  );
}
