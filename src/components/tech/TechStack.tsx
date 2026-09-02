"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { TechNetwork } from "./TechNetwork";

export function TechStack() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-bg-secondary/20 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="04"
          category="TECHNICAL TOOLKIT"
          title="Engineered for full-stack precision."
          subtitle="A comprehensive inventory of modern languages, libraries, databases, and infrastructure tools backed by 4 years of hands-on production code."
        />

        {/* Interactive Constellation Hub */}
        <TechNetwork />
      </div>
    </section>
  );
}
