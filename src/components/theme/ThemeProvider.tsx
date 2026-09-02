"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeConfig, ThemeMode, AccentColor, MotionMode, BackgroundPattern, CursorMode } from "@/types";

interface ThemeContextType {
  config: ThemeConfig;
  setTheme: (mode: ThemeMode) => void;
  setAccent: (accent: AccentColor) => void;
  setMotion: (motion: MotionMode) => void;
  setBackground: (background: BackgroundPattern) => void;
  setCursor: (cursor: CursorMode) => void;
  resetTheme: () => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
}

const DEFAULT_CONFIG: ThemeConfig = {
  mode: "obsidian",
  accent: "blue",
  motion: "full",
  background: "grain",
  cursor: "interactive",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<ThemeConfig>(DEFAULT_CONFIG);
  const [mounted, setMounted] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Initialize from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("dd_portfolio_theme");
      if (saved) {
        const parsed = JSON.parse(saved);
        setConfig((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // Ignore localStorage errors
    }
    setMounted(true);
  }, []);

  // Update DOM attributes whenever config changes
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.setAttribute("data-theme", config.mode);
    root.setAttribute("data-accent", config.accent);
    root.setAttribute("data-motion", config.motion);
    root.setAttribute("data-background", config.background);

    if (config.mode === "obsidian") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    try {
      localStorage.setItem("dd_portfolio_theme", JSON.stringify(config));
    } catch {
      // Ignore quota errors
    }
  }, [config, mounted]);

  const setTheme = (mode: ThemeMode) => setConfig((prev) => ({ ...prev, mode }));
  const setAccent = (accent: AccentColor) => setConfig((prev) => ({ ...prev, accent }));
  const setMotion = (motion: MotionMode) => setConfig((prev) => ({ ...prev, motion }));
  const setBackground = (background: BackgroundPattern) => setConfig((prev) => ({ ...prev, background }));
  const setCursor = (cursor: CursorMode) => setConfig((prev) => ({ ...prev, cursor }));
  const resetTheme = () => setConfig(DEFAULT_CONFIG);

  return (
    <ThemeContext.Provider
      value={{
        config,
        setTheme,
        setAccent,
        setMotion,
        setBackground,
        setCursor,
        resetTheme,
        isCustomizerOpen,
        setIsCustomizerOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
