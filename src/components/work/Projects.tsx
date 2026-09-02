"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { ProjectGridCard } from "./ProjectGridCard";
import { LayoutGrid, LayoutList, SlidersHorizontal, Sparkles } from "lucide-react";

type ViewMode = "grid" | "listing";

interface FilterOption {
  id: string;
  label: string;
}

const FILTER_OPTIONS: FilterOption[] = [
  { id: "all", label: "All Projects" },
  { id: "fintech", label: "Fintech & Finance" },
  { id: "architecture", label: "Spatial & Architecture" },
  { id: "healthcare", label: "Healthcare & Clinics" },
  { id: "hospitality", label: "Hospitality & Hotels" },
  { id: "ecommerce", label: "E-Commerce & Commercial" },
  { id: "saas", label: "SaaS Operating Systems" },
];

export function Projects() {
  const [viewMode, setViewMode] = useState<ViewMode>("listing");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projectsData;
    return projectsData.filter((p) =>
      p.typeFilter ? p.typeFilter.includes(activeFilter) : true
    );
  }, [activeFilter]);

  // Counts for each filter
  const filterCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projectsData.length };
    FILTER_OPTIONS.forEach((opt) => {
      if (opt.id === "all") return;
      counts[opt.id] = projectsData.filter((p) =>
        p.typeFilter ? p.typeFilter.includes(opt.id) : false
      ).length;
    });
    return counts;
  }, []);

  return (
    <section id="work" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          category="SELECTED WORK"
          title="Digital experiences brought to life."
          subtitle="Real, production commercial platforms, spatial portfolios, clinical systems, and hospitality suites. Captured directly from live deployments."
        />

        {/* Controls Bar: View Toggle (Grid vs Listing) & Category Filters */}
        <div className="mb-12 space-y-6 pb-8 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* View Mode Toggle (Grid vs Listing) */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-muted hidden sm:inline mr-1">
                View Mode:
              </span>
              <div className="inline-flex p-1 rounded-xl border border-border bg-bg-secondary/60 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setViewMode("listing")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                    viewMode === "listing"
                      ? "bg-accent text-white font-semibold shadow-md"
                      : "text-ink-muted hover:text-ink"
                  }`}
                  aria-pressed={viewMode === "listing"}
                  aria-label="Switch to Listing View"
                >
                  <LayoutList className="w-3.5 h-3.5" />
                  <span>Listing</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-accent text-white font-semibold shadow-md"
                      : "text-ink-muted hover:text-ink"
                  }`}
                  aria-pressed={viewMode === "grid"}
                  aria-label="Switch to Grid View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Grid</span>
                </button>
              </div>
            </div>

            {/* Active Count Indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>
                Showing <strong className="text-ink">{filteredProjects.length}</strong> of {projectsData.length} Live Deployments
              </span>
            </div>
          </div>

          {/* Industry / Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-1.5 flex-shrink-0 text-ink-muted mr-1 text-xs font-mono">
              <SlidersHorizontal className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline">Filter:</span>
            </div>
            {FILTER_OPTIONS.map((filter) => {
              const isSelected = activeFilter === filter.id;
              const count = filterCounts[filter.id] ?? 0;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-300 ${
                    isSelected
                      ? "bg-ink text-bg font-semibold shadow-md scale-105"
                      : "border border-border bg-bg-secondary/40 text-ink-muted hover:text-ink hover:border-accent/40"
                  }`}
                >
                  <span>{filter.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-bg text-ink font-bold" : "bg-bg text-ink-muted"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Display: Listing View vs Grid View */}
        <AnimatePresence mode="wait">
          {viewMode === "listing" ? (
            /* Listing View: Deep Editorial Showcase Rows */
            <motion.div
              key={`listing-${activeFilter}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-16 sm:space-y-20"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            /* Grid View: Multi-Column Responsive Cards Grid */
            <motion.div
              key={`grid-${activeFilter}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectGridCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center space-y-3">
            <p className="text-base text-ink-muted font-mono">No projects found for this filter.</p>
            <button
              onClick={() => setActiveFilter("all")}
              className="text-xs font-mono uppercase tracking-wider text-accent underline"
            >
              Reset to All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
