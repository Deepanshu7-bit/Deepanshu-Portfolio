"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Database, Globe, Layers, Server, Shield, Terminal } from "lucide-react";
import { useTheme } from "../theme/ThemeProvider";

export function HeroVisual() {
  const { config } = useTheme();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nodes = [
    { label: "Next.js 15", icon: Globe, x: "20%", y: "18%", color: "text-blue-500", delay: 0 },
    { label: "React 19", icon: Layers, x: "78%", y: "15%", color: "text-cyan-400", delay: 0.1 },
    { label: "TypeScript", icon: Code2, x: "12%", y: "65%", color: "text-sky-500", delay: 0.2 },
    { label: "Node / NestJS", icon: Server, x: "82%", y: "68%", color: "text-emerald-400", delay: 0.3 },
    { label: "PostgreSQL & Mongo", icon: Database, x: "32%", y: "82%", color: "text-amber-400", delay: 0.4 },
    { label: "Docker & AWS", icon: Cpu, x: "68%", y: "84%", color: "text-purple-400", delay: 0.5 },
  ];

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center select-none overflow-visible">
      {/* Background Radial Glow */}
      <div
        className="absolute w-72 h-72 rounded-full blur-[90px] opacity-40 transition-colors pointer-events-none"
        style={{ backgroundColor: "var(--accent-glow)" }}
      />

      {/* SVG Connecting Network Web */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none stroke-border opacity-60"
        viewBox="0 0 500 400"
        preserveAspectRatio="xMidYMid meet"
      >
        <line x1="100" y1="80" x2="250" y2="200" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="390" y1="70" x2="250" y2="200" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="60" y1="260" x2="250" y2="200" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="410" y1="270" x2="250" y2="200" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="160" y1="330" x2="250" y2="200" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="340" y1="335" x2="250" y2="200" strokeWidth="1" strokeDasharray="3 3" />

        <circle cx="250" cy="200" r="120" fill="none" stroke="var(--border-subtle)" strokeWidth="0.75" />
        <circle cx="250" cy="200" r="170" fill="none" stroke="var(--border-subtle)" strokeWidth="0.5" strokeDasharray="5 5" />
      </svg>

      {/* Floating Center Core Card */}
      <motion.div
        animate={
          isMobile
            ? {}
            : {
                x: mouseOffset.x * 0.7,
                y: mouseOffset.y * 0.7,
              }
        }
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        className="relative z-20 p-6 sm:p-7 rounded-2xl glass-panel shadow-2xl border border-accent/40 max-w-[280px] sm:max-w-[320px] text-center"
      >
        <div className="w-12 h-12 mx-auto rounded-xl bg-accent-subtle flex items-center justify-center text-accent mb-3 shadow-inner">
          <Terminal className="w-6 h-6" />
        </div>
        <div className="text-xs font-mono uppercase tracking-widest text-accent font-semibold mb-1">
          Full Stack Architecture
        </div>
        <div className="text-base sm:text-lg font-bold text-ink font-display">
          Deepanshu Dhingra
        </div>
        <p className="text-[11px] text-ink-muted mt-1 leading-relaxed">
          4 Years of resilient frontend interfaces, scalable backend systems &amp; cloud automation.
        </p>
        <div className="mt-4 pt-3 border-t border-border flex items-center justify-center gap-2 text-[10px] font-mono text-ink-faint">
          <Shield className="w-3 h-3 text-accent" />
          <span>Production Ready · Type Safe</span>
        </div>
      </motion.div>

      {/* Orbiting Satellite Tech Nodes */}
      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            style={{ left: node.x, top: node.y }}
            animate={
              isMobile
                ? { y: [0, -8, 0] }
                : {
                    x: mouseOffset.x * (1 + (i % 3) * 0.25),
                    y: mouseOffset.y * (1 + (i % 2) * 0.25) + (Math.sin(i) * 6),
                  }
            }
            transition={
              isMobile
                ? { duration: 3 + i, repeat: Infinity, ease: "easeInOut" }
                : { type: "spring", damping: 25, stiffness: 180 }
            }
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel border border-border/80 shadow-lg hover:border-accent/60 hover:scale-105 transition-all group cursor-default">
              <Icon className={`w-3.5 h-3.5 ${node.color}`} />
              <span className="text-[11px] font-mono font-medium text-ink tracking-tight whitespace-nowrap">
                {node.label}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Floating Code Fragment Badge */}
      <motion.div
        animate={
          isMobile
            ? {}
            : {
                x: mouseOffset.x * -0.6,
                y: mouseOffset.y * -0.6,
              }
        }
        transition={{ type: "spring", damping: 24, stiffness: 200 }}
        className="hidden sm:block absolute top-[28%] right-[10%] z-20 px-3.5 py-2 rounded-xl bg-bg-secondary/90 border border-border shadow-xl font-mono text-[10px] text-ink-muted"
      >
        <span className="text-accent">const</span> stack = [<span className="text-emerald-400">&apos;Next.js&apos;</span>, <span className="text-blue-400">&apos;TypeScript&apos;</span>, <span className="text-purple-400">&apos;Node.js&apos;</span>];
      </motion.div>

      {/* Floating Status Pill */}
      <motion.div
        animate={
          isMobile
            ? {}
            : {
                x: mouseOffset.x * -0.4,
                y: mouseOffset.y * -0.4,
              }
        }
        transition={{ type: "spring", damping: 24, stiffness: 200 }}
        className="hidden sm:block absolute bottom-[25%] left-[8%] z-20 px-3 py-1.5 rounded-full glass-panel border border-border text-[10px] font-mono text-ink flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Deployed across 6 Verticals</span>
      </motion.div>
    </div>
  );
}
