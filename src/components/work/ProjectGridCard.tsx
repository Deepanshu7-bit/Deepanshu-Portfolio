"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ProjectBrowserFrame } from "./ProjectBrowserFrame";

interface ProjectGridCardProps {
  project: Project;
  index: number;
}

export function ProjectGridCard({ project, index }: ProjectGridCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group flex flex-col justify-between rounded-3xl border border-border bg-bg-secondary/30 hover:border-accent/50 hover:bg-bg-secondary/60 transition-all duration-500 overflow-hidden shadow-lg p-5 sm:p-6"
    >
      {/* Top Browser Screenshot Viewport */}
      <div className="w-full h-64 sm:h-72 mb-6">
        <ProjectBrowserFrame project={project} />
      </div>

      {/* Card Content */}
      <div className="space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-accent tracking-widest">
              PROJECT {project.number}
            </span>
            <span className="text-[10px] font-mono text-ink-muted px-2 py-0.5 rounded-full border border-border bg-bg">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink font-editorial group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-ink-muted leading-relaxed line-clamp-3 font-light">
            {project.description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-mono text-ink-muted bg-bg border border-border"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-ink-faint">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Card Footer Link */}
        <div className="pt-3 border-t border-border flex items-center justify-between">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="project"
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase font-semibold text-accent hover:text-accent-hover group/link cursor-pointer"
          >
            <span>View Live Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>

          {project.metrics && project.metrics[0] && (
            <span className="text-[11px] font-mono font-bold text-ink">
              {project.metrics[0].value} <span className="text-[9px] text-ink-muted font-normal uppercase">{project.metrics[0].label}</span>
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
