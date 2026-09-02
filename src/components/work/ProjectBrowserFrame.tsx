"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/types";
import { ExternalLink, Lock } from "lucide-react";

interface ProjectBrowserFrameProps {
  project: Project;
  className?: string;
  aspect?: "auto" | "video" | "wide";
}

export function ProjectBrowserFrame({ project, className = "", aspect = "auto" }: ProjectBrowserFrameProps) {
  const displayUrl = project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  return (
    <div
      data-cursor="project"
      className={`relative w-full h-full rounded-2xl overflow-hidden border border-border bg-bg-secondary flex flex-col shadow-2xl group/frame ${className}`}
    >
      {/* Top Browser Header Bar */}
      <div className="h-9 px-4 border-b border-border/80 bg-bg-secondary/90 backdrop-blur-md flex items-center justify-between z-20 flex-shrink-0 select-none">
        {/* Mac-style Traffic Light Window Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>

        {/* Center URL Address Bar */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg/80 border border-border text-[11px] font-mono text-ink-muted max-w-[220px] sm:max-w-xs truncate">
          <Lock className="w-3 h-3 text-emerald-500 flex-shrink-0" />
          <span className="truncate">{displayUrl}</span>
        </div>

        {/* External Link Icon */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-muted hover:text-accent transition-colors"
          title={`Open ${project.title} live in new tab`}
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Real Website Screenshot Container */}
      <div className="relative w-full flex-1 min-h-[260px] sm:min-h-[340px] overflow-hidden bg-bg">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} live landing page capture`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover/frame:scale-105"
            priority={project.number === "01" || project.number === "02"}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs font-mono text-ink-muted">
            Live Preview Available
          </div>
        )}

        {/* Ambient Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
          <span className="text-xs font-mono tracking-widest text-white uppercase font-bold flex items-center gap-1.5 drop-shadow">
            <span>Explore {project.title}</span>
            <ExternalLink className="w-3.5 h-3.5 text-accent" />
          </span>
        </div>

        {/* Full Click Surface */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Open ${project.title} live`}
        />
      </div>
    </div>
  );
}
