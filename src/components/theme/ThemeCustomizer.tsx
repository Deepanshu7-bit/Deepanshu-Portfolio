"use client";

import React, { useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Sliders, X, RotateCcw, Check, Sparkles, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AccentColor, BackgroundPattern, CursorMode, MotionMode, ThemeMode } from "@/types";

export function ThemeCustomizer() {
  const {
    config,
    setTheme,
    setAccent,
    setMotion,
    setBackground,
    setCursor,
    resetTheme,
    isCustomizerOpen,
    setIsCustomizerOpen,
  } = useTheme();

  // Close with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCustomizerOpen) {
        setIsCustomizerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCustomizerOpen, setIsCustomizerOpen]);

  const accents: { id: AccentColor; name: string; hex: string }[] = [
    { id: "blue", name: "Electric Blue", hex: config.mode === "obsidian" ? "#3b82f6" : "#1d4ed8" },
    { id: "violet", name: "Royal Violet", hex: config.mode === "obsidian" ? "#8b5cf6" : "#6d28d9" },
    { id: "orange", name: "Warm Amber", hex: config.mode === "obsidian" ? "#f97316" : "#c2410c" },
    { id: "green", name: "Emerald", hex: config.mode === "obsidian" ? "#10b981" : "#047857" },
  ];

  const motionOptions: { id: MotionMode; label: string; desc: string }[] = [
    { id: "full", label: "Full Motion", desc: "Awwwards-grade physics & micro-animations" },
    { id: "balanced", label: "Balanced", desc: "Essential reveals & smooth transitions" },
    { id: "minimal", label: "Minimal", desc: "Snappy, reduced-motion accessibility" },
  ];

  const backgroundOptions: { id: BackgroundPattern; label: string; desc: string }[] = [
    { id: "grain", label: "Analog Grain", desc: "Subtle film noise texture" },
    { id: "grid", label: "Precision Grid", desc: "Technical architectural canvas" },
    { id: "solid", label: "Pure Minimal", desc: "Clean solid color canvas" },
  ];

  const cursorOptions: { id: CursorMode; label: string; desc: string }[] = [
    { id: "interactive", label: "Interactive", desc: "Dynamic scale & project preview tag" },
    { id: "default", label: "Standard", desc: "System default browser pointer" },
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        id="customize-theme-btn"
        onClick={() => setIsCustomizerOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full glass-panel shadow-2xl hover:border-accent transition-all duration-300 group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Theme Customizer"
        aria-expanded={isCustomizerOpen}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
        </span>
        <Sliders className="w-4 h-4 text-ink group-hover:rotate-45 transition-transform duration-300" />
        <span className="text-xs font-mono tracking-wider uppercase text-ink font-medium hidden sm:inline">
          Customize Theme
        </span>
      </motion.button>

      {/* Drawer Overlay & Panel */}
      <AnimatePresence>
        {isCustomizerOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsCustomizerOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-over Drawer Panel */}
            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="w-screen max-w-md bg-bg border-l border-border shadow-2xl flex flex-col justify-between overflow-y-auto"
                role="dialog"
                aria-modal="true"
                aria-labelledby="theme-customizer-title"
              >
                {/* Drawer Header */}
                <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-bg/95 backdrop-blur-md z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center text-accent">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 id="theme-customizer-title" className="text-base font-semibold text-ink font-display">
                        Theme Customizer
                      </h2>
                      <p className="text-xs text-ink-muted">Personalize Deepanshu&apos;s digital experience</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsCustomizerOpen(false)}
                    className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-bg-secondary transition-colors"
                    aria-label="Close customizer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Body */}
                <div className="p-6 space-y-8 flex-1">
                  {/* 1. Visual Direction / Theme */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                        01 // Visual Direction
                      </label>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-bg-secondary text-accent font-semibold">
                        {config.mode === "obsidian" ? "Creative Dark" : "Minimal Premium"}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {/* Obsidian Card */}
                      <button
                        type="button"
                        onClick={() => setTheme("obsidian")}
                        className={`relative p-4 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between h-28 ${
                          config.mode === "obsidian"
                            ? "border-accent bg-[#121216] shadow-lg ring-2 ring-accent/30"
                            : "border-border bg-bg-secondary hover:border-ink-muted/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="w-7 h-7 rounded-lg bg-[#1f1f27] flex items-center justify-center text-[#f4f4f7]">
                            <Moon className="w-4 h-4" />
                          </div>
                          {config.mode === "obsidian" && (
                            <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white">
                              <Check className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#f4f4f7]">Obsidian</div>
                          <div className="text-[11px] text-[#9ea1af]">Creative Dark Agency</div>
                        </div>
                      </button>

                      {/* Ivory Card */}
                      <button
                        type="button"
                        onClick={() => setTheme("ivory")}
                        className={`relative p-4 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between h-28 ${
                          config.mode === "ivory"
                            ? "border-accent bg-[#faf8f5] shadow-lg ring-2 ring-accent/30"
                            : "border-border bg-bg-secondary hover:border-ink-muted/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="w-7 h-7 rounded-lg bg-[#e8e2d7] flex items-center justify-center text-[#121214]">
                            <Sun className="w-4 h-4" />
                          </div>
                          {config.mode === "ivory" && (
                            <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white">
                              <Check className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#121214]">Ivory</div>
                          <div className="text-[11px] text-[#52525c]">Minimal Luxury Studio</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* 2. Accent Color */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono uppercase tracking-widest text-ink-muted block">
                      02 // Accent Color
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {accents.map((accent) => {
                        const isSelected = config.accent === accent.id;
                        return (
                          <button
                            key={accent.id}
                            type="button"
                            onClick={() => setAccent(accent.id)}
                            className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                              isSelected
                                ? "border-accent bg-accent-subtle/50 ring-1 ring-accent"
                                : "border-border bg-bg-secondary hover:border-ink-muted/50"
                            }`}
                          >
                            <span
                              className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm"
                              style={{ backgroundColor: accent.hex }}
                            />
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-medium text-ink truncate">{accent.name}</div>
                            </div>
                            {isSelected && <Check className="w-3.5 h-3.5 text-accent ml-auto" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Motion Intensity */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono uppercase tracking-widest text-ink-muted block">
                      03 // Motion &amp; Interaction Physics
                    </label>
                    <div className="space-y-2">
                      {motionOptions.map((opt) => {
                        const isSelected = config.motion === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setMotion(opt.id)}
                            className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                              isSelected
                                ? "border-accent bg-accent-subtle/40 ring-1 ring-accent"
                                : "border-border bg-bg-secondary hover:border-ink-muted/50"
                            }`}
                          >
                            <div>
                              <div className="text-xs font-semibold text-ink">{opt.label}</div>
                              <div className="text-[11px] text-ink-muted mt-0.5">{opt.desc}</div>
                            </div>
                            {isSelected && <Check className="w-4 h-4 text-accent flex-shrink-0 ml-2" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4. Canvas Background Texture */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono uppercase tracking-widest text-ink-muted block">
                      04 // Canvas Texture
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {backgroundOptions.map((bg) => {
                        const isSelected = config.background === bg.id;
                        return (
                          <button
                            key={bg.id}
                            type="button"
                            onClick={() => setBackground(bg.id)}
                            className={`p-2.5 rounded-xl border text-center transition-all ${
                              isSelected
                                ? "border-accent bg-accent-subtle/50 ring-1 ring-accent"
                                : "border-border bg-bg-secondary hover:border-ink-muted/50"
                            }`}
                          >
                            <div className="text-xs font-medium text-ink">{bg.label}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 5. Cursor Mode (Desktop) */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                        05 // Custom Cursor (Desktop)
                      </label>
                      <span className="text-[10px] text-ink-faint font-mono">Touch disabled automatically</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {cursorOptions.map((cur) => {
                        const isSelected = config.cursor === cur.id;
                        return (
                          <button
                            key={cur.id}
                            type="button"
                            onClick={() => setCursor(cur.id)}
                            className={`p-3 rounded-xl border text-left transition-all ${
                              isSelected
                                ? "border-accent bg-accent-subtle/50 ring-1 ring-accent"
                                : "border-border bg-bg-secondary hover:border-ink-muted/50"
                            }`}
                          >
                            <div className="text-xs font-medium text-ink">{cur.label}</div>
                            <div className="text-[10px] text-ink-muted mt-0.5">{cur.desc}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Drawer Footer / Reset */}
                <div className="p-6 border-t border-border bg-bg/95 backdrop-blur-md flex items-center justify-between gap-3 sticky bottom-0 z-10">
                  <button
                    type="button"
                    onClick={resetTheme}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-ink-muted hover:text-ink hover:bg-bg-secondary text-xs font-mono tracking-wider uppercase transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset Theme
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsCustomizerOpen(false)}
                    className="px-5 py-2.5 rounded-lg bg-accent text-white hover:bg-accent-hover text-xs font-mono tracking-wider uppercase font-semibold transition-all shadow-md"
                  >
                    Apply &amp; Close
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
