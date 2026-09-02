"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Layers, Server, Database, Cloud, Wrench, Sparkles } from "lucide-react";

export function TechNetwork() {
  const [selectedCategory, setSelectedCategory] = useState<string>("frontend");

  const icons: Record<string, React.ElementType> = {
    frontend: Layers,
    backend: Server,
    databases: Database,
    cloud: Cloud,
    state: Layers,
    tools: Wrench,
  };

  const activeCategoryData = skillCategories.find((c) => c.id === selectedCategory) || skillCategories[0];

  return (
    <div className="rounded-3xl border border-border bg-bg-secondary/40 p-6 sm:p-10 lg:p-12 space-y-10">
      {/* Top Controller: Central Node + Category Orbit Buttons */}
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-bg text-[11px] font-mono text-accent uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Constellation</span>
        </div>

        {/* Central Full Stack Core Indicator */}
        <div className="relative flex items-center justify-center">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-accent/40 bg-bg flex flex-col items-center justify-center p-2 shadow-2xl z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping mb-1" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-ink">
              FULL STACK
            </span>
            <span className="text-[9px] font-mono text-ink-muted uppercase">Core Kernel</span>
          </div>

          {/* SVG Orbit Pulse Circles */}
          <svg className="absolute w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] pointer-events-none stroke-accent/20 animate-spin-slow">
            <circle cx="50%" cy="50%" r="48%" fill="none" strokeWidth="1" strokeDasharray="6 6" />
          </svg>
        </div>

        {/* Orbit Category Selector Pills */}
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl pt-2">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const Icon = icons[cat.id] || Layers;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? "bg-accent text-white font-semibold shadow-lg scale-105"
                    : "border border-border bg-bg text-ink-muted hover:text-ink hover:border-accent/50"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Animated Node Drawer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategoryData.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="bg-bg rounded-2xl border border-border p-6 sm:p-8 space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 gap-2">
            <div>
              <h3 className="text-xl font-bold text-ink font-display">
                {activeCategoryData.name}
              </h3>
              <p className="text-xs text-ink-muted mt-0.5">{activeCategoryData.description}</p>
            </div>
            <span className="text-xs font-mono text-accent font-semibold">
              {activeCategoryData.skills.length} TECHNOLOGIES LOADED
            </span>
          </div>

          {/* Grid of Technologies */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {activeCategoryData.skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  skill.highlight
                    ? "border-accent/40 bg-accent-subtle/30 shadow-sm"
                    : "border-border bg-bg-secondary/40 hover:border-ink-muted/40"
                }`}
              >
                <div className="text-xs sm:text-sm font-semibold text-ink font-display flex items-center justify-between">
                  <span>{skill.name}</span>
                  {skill.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  )}
                </div>
                <div className="text-[10px] font-mono text-ink-muted mt-1 uppercase">
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
