"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { SectionHeader } from "../ui/SectionHeader";
import { Briefcase, CheckCircle2, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-bg-secondary/20 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="06"
          category="CAREER TRAJECTORY"
          title="Experience &amp; Industry Impact."
          subtitle="4 years of full-stack engineering delivering real commercial systems across hospitality, fintech, healthcare, and SaaS."
        />

        {/* Editorial Scroll-Progressive Timeline */}
        <div className="space-y-12 sm:space-y-16">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 sm:p-12 rounded-3xl border border-border bg-bg/70 hover:border-accent/50 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Period & Context Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-bg-secondary text-xs font-mono text-accent">
                    <Briefcase className="w-3 h-3" />
                    <span>{item.period}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-editorial">
                    {item.role}
                  </h3>

                  <div className="space-y-1 text-xs font-mono text-ink-muted">
                    <p className="font-semibold text-ink">{item.companyOrScope}</p>
                    <p className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-accent" />
                      <span>{item.location}</span>
                    </p>
                    <p className="text-accent pt-1">Vertically focused in {item.industry}</p>
                  </div>
                </div>

                {/* Right Achievements Column */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-base sm:text-lg text-ink font-light leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-ink-muted font-semibold">
                      Engineering Milestones:
                    </div>
                    <ul className="space-y-2.5">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-ink-muted leading-relaxed font-light">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used in this Era */}
                  <div className="pt-4 border-t border-border flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-ink-muted uppercase mr-1">Stack:</span>
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono text-ink bg-bg-secondary border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
