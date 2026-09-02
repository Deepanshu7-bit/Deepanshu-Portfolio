"use client";

import React from "react";
import { motion } from "framer-motion";
import { philosophyData } from "@/data/philosophy";
import { SectionHeader } from "../ui/SectionHeader";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03"
          category="CORE PRINCIPLES"
          title="How I Think."
          subtitle="Four foundational engineering principles that guide every architecture decision, line of code, and interface interaction."
        />

        {/* Vertical Editorial Stack of Statements */}
        <div className="space-y-12 sm:space-y-16">
          {philosophyData.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group p-8 sm:p-12 rounded-3xl border border-border bg-bg-secondary/20 hover:border-accent/50 hover:bg-bg-secondary/50 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                {/* Number & Indicator */}
                <div className="lg:col-span-3 flex items-center lg:flex-col lg:items-start gap-4">
                  <span className="text-4xl sm:text-5xl font-mono font-extrabold text-accent">
                    {item.number}
                  </span>
                  <span className="h-px w-12 bg-border hidden lg:block" />
                  <span className="text-xs font-mono tracking-widest text-ink-muted uppercase">
                    PRINCIPLE {item.number}
                  </span>
                </div>

                {/* Core Title & Statement */}
                <div className="lg:col-span-9 space-y-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink font-editorial group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-lg sm:text-xl text-ink/90 font-serif italic leading-snug">
                    &ldquo;{item.statement}&rdquo;
                  </p>

                  <p className="text-sm sm:text-base text-ink-muted font-light leading-relaxed max-w-3xl pt-2">
                    {item.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
