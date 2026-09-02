"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { HeroVisual } from "./HeroVisual";
import { MagneticButton } from "../ui/MagneticButton";

export function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("work");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] pt-32 sm:pt-40 pb-16 px-6 sm:px-8 lg:px-12 flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Strong Editorial Statement & CTAs */}
        <div className="lg:col-span-7 space-y-8">
          {/* Eyebrow / Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border bg-bg-secondary/70 backdrop-blur-md text-xs font-mono text-ink-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-ink font-medium">Deepanshu Dhingra</span>
            <span className="text-border">|</span>
            <div className="flex items-center gap-1 text-ink-muted">
              <MapPin className="w-3 h-3 text-accent" />
              <span>Mohali, India</span>
            </div>
            <span className="hidden sm:inline text-border">·</span>
            <span className="hidden sm:inline text-accent font-medium">Available</span>
          </motion.div>

          {/* Core Statement */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink font-editorial leading-[1.08]"
            >
              I build digital experiences{" "}
              <span className="text-accent italic font-normal underline decoration-accent/30 decoration-2 underline-offset-8">
                that feel as good
              </span>{" "}
              as they perform.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg md:text-xl text-ink-muted max-w-xl font-light leading-relaxed"
            >
              {siteConfig.hero.subtext}
            </motion.p>
          </div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton
              onClick={scrollToProjects}
              data-cursor="cta"
              className="px-7 py-4 rounded-full bg-accent text-white font-mono text-xs tracking-wider uppercase font-semibold hover:bg-accent-hover transition-all flex items-center gap-2.5 shadow-xl group cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>

            <MagneticButton
              onClick={scrollToContact}
              data-cursor="cta"
              className="px-7 py-4 rounded-full border border-border bg-bg-secondary hover:border-accent/60 text-ink font-mono text-xs tracking-wider uppercase font-medium transition-all flex items-center gap-2.5 shadow-sm group cursor-pointer"
            >
              <span>Let&apos;s Build Something</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-accent" />
            </MagneticButton>
          </motion.div>

          {/* Small Trust Micro-Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-2 flex items-center gap-6 text-xs font-mono text-ink-faint"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>4+ Years Production Experience</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Frontend · Backend · Cloud</span>
          </motion.div>
        </div>

        {/* Right Column: Sophisticated Interactive Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 w-full flex items-center justify-center"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="max-w-7xl mx-auto w-full pt-10 border-t border-border flex items-center justify-between text-xs font-mono text-ink-muted"
      >
        <div className="flex items-center gap-2">
          <span>BASED IN MOHALI, PUNJAB</span>
          <span className="text-border">/</span>
          <span>CHANDIGARH REGION</span>
        </div>

        <button
          onClick={scrollToProjects}
          className="flex items-center gap-2 hover:text-ink transition-colors group cursor-pointer"
        >
          <span className="hidden sm:inline">EXPLORE WORK</span>
          <span className="w-6 h-6 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
            <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
          </span>
        </button>
      </motion.div>
    </section>
  );
}
