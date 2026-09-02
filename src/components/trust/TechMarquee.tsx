"use client";

import React from "react";
import { siteConfig } from "@/data/site";

export function TechMarquee() {
  const items = siteConfig.marqueeTechnologies;

  return (
    <div className="relative w-full overflow-hidden py-5 border-y border-border bg-bg-secondary/40 select-none">
      {/* Side Vignette Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      {/* Ticker Content (Doubled for seamless infinite scroll) */}
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {[...items, ...items, ...items].map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex items-center space-x-8 text-xs sm:text-sm font-mono tracking-wider uppercase text-ink-muted/80 hover:text-ink transition-colors whitespace-nowrap"
          >
            <span className="font-medium">{tech}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
