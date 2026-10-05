"use client";

import React from "react";
import { motion } from "framer-motion";
import { philosophyData } from "@/data/philosophy";
import { SectionHeader } from "../ui/SectionHeader";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-14 sm:py-18 px-6 sm:px-8 lg:px-12 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03"
          category="CORE PRINCIPLES"
          title="How I Think."
          subtitle="Engineering principles that guide every architectural decision, line of code, and user interaction."
        />

        {/* Compact 2x2 Grid of Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {philosophyData.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group p-6 sm:p-7 rounded-2xl border border-border bg-bg-secondary/30 hover:border-accent/40 hover:bg-bg-secondary/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-mono font-extrabold text-accent">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase">
                    PRINCIPLE {item.number}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink font-display group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-ink/90 font-serif italic leading-snug">
                  &ldquo;{item.statement}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
