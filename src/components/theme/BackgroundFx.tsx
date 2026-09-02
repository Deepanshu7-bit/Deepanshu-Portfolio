"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

export function BackgroundFx() {
  const { config } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Dynamic Ambient Radial Light */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[140px] transition-colors duration-700 pointer-events-none"
        style={{
          background:
            config.mode === "obsidian"
              ? "radial-gradient(circle, var(--accent-glow) 0%, rgba(0,0,0,0) 70%)"
              : "radial-gradient(circle, var(--accent-glow) 0%, rgba(250,248,245,0) 70%)",
          opacity: config.mode === "obsidian" ? 0.35 : 0.25,
        }}
      />

      <div
        className="absolute bottom-1/4 right-0 w-[600px] h-[500px] rounded-full blur-[120px] transition-colors duration-700 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          opacity: 0.18,
        }}
      />

      {/* Analog Noise Texture if chosen */}
      {config.background === "grain" && (
        <div
          className="absolute inset-0 bg-grain-pattern pointer-events-none"
          style={{ opacity: "var(--theme-grain-opacity)" }}
        />
      )}

      {/* Precision Grid Pattern if chosen */}
      {config.background === "grid" && (
        <div
          className="absolute inset-0 bg-grid-pattern pointer-events-none"
          style={{ opacity: "var(--theme-grid-opacity)" }}
        />
      )}
    </div>
  );
}
