"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ProjectBrowserFrame } from "./ProjectBrowserFrame";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="group relative rounded-3xl border border-border bg-bg-secondary/30 overflow-hidden hover:border-accent/50 transition-all duration-500 shadow-xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-6 sm:p-8 lg:p-10">
        {/* Project Content Column */}
        <div
          className={`flex flex-col justify-between space-y-6 ${
            isReversed ? "lg:col-span-5 lg:order-2" : "lg:col-span-5"
          }`}
        >
          {/* Header Metadata */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-accent tracking-widest">
                PROJECT {project.number}
              </span>
              <span className="text-[11px] font-mono text-ink-muted px-2.5 py-0.5 rounded-full border border-border bg-bg">
                {project.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink font-editorial group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-xs font-mono text-ink-muted uppercase tracking-wider">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-light">
            {project.description}
          </p>

          {/* Key Deliverables */}
          <div className="space-y-2 pt-2 border-t border-border/60">
            <div className="text-[11px] font-mono uppercase tracking-wider text-ink-muted font-semibold">
              Key Engineering Highlights:
            </div>
            <ul className="space-y-1.5">
              {project.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-ink/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono text-ink-muted bg-bg border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Live Action Link & Metrics */}
          <div className="pt-4 border-t border-border flex items-center justify-between">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="project"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold text-accent hover:text-accent-hover group/link cursor-pointer"
            >
              <span>View Live Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>

            {project.metrics && (
              <div className="flex items-center gap-3">
                {project.metrics.slice(0, 2).map((m) => (
                  <div key={m.label} className="text-right">
                    <span className="block text-xs font-mono font-bold text-ink">{m.value}</span>
                    <span className="block text-[9px] font-mono text-ink-muted uppercase">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Visual Preview / Real Browser Screenshot Column */}
        <div
          className={`lg:col-span-7 min-h-[340px] sm:min-h-[440px] flex items-center ${
            isReversed ? "lg:order-1" : ""
          }`}
        >
          <ProjectBrowserFrame project={project} className="h-full" />
        </div>
      </div>
    </motion.article>
  );
}
