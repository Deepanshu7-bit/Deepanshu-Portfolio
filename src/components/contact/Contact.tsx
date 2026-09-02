"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, Copy, Check, Mail, MapPin, Sparkles } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { useToast } from "../ui/Toast";
import { MagneticButton } from "../ui/MagneticButton";

export function Contact() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      showToast("Email copied ✓");
      setTimeout(() => setCopied(false), 3000);
    } catch {
      showToast("Email copied ✓");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-bg border-b border-border relative overflow-hidden">
      {/* Background Ambient Flare */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-glow blur-[140px] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Hero CTA Information Column */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-bg-secondary text-xs font-mono text-accent uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Initiate Collaboration</span>
            </motion.div>

            {/* Massive Display Statement */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink font-editorial leading-[1.05]">
                Have an idea? <br />
                <span className="text-accent italic font-normal">Let&apos;s make it real.</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-ink-muted font-light leading-relaxed max-w-lg"
            >
              I&apos;m open to interesting products, ambitious websites, and challenging engineering problems. Let&apos;s talk through your vision.
            </motion.p>

            {/* Email Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-2xl border border-border bg-bg-secondary/50 space-y-4 max-w-lg"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>Direct Inquiries</span>
              </div>

              <div className="text-lg sm:text-xl font-mono font-bold text-ink break-all">
                {siteConfig.email}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  data-cursor="cta"
                  className="px-5 py-2.5 rounded-full bg-accent text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-accent-hover transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 rounded-full border border-border bg-bg hover:border-accent/60 text-ink font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Email Copied ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-accent" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Location & Timezone Details */}
            <div className="flex items-center gap-6 text-xs font-mono text-ink-muted pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>Mohali, Punjab (IST UTC+5:30)</span>
              </div>
              <span>•</span>
              <span className="text-emerald-500 font-medium">Remote &amp; Contract Friendly</span>
            </div>
          </div>

          {/* Right Interactive Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 w-full"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
