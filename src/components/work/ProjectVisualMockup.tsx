"use client";

import React from "react";
import { Project } from "@/types";
import { ExternalLink, ShieldCheck, Compass, Sparkles, Hotel, HeartHandshake, Cloud, TrendingUp } from "lucide-react";

interface ProjectVisualMockupProps {
  project: Project;
}

export function ProjectVisualMockup({ project }: ProjectVisualMockupProps) {
  // Bespoke, lightweight UI mockups reflecting the authentic aesthetics of each site
  switch (project.id) {
    case "capgro-finex":
      return (
        <div className="w-full h-full bg-[#0d0f12] text-white p-6 sm:p-8 flex flex-col justify-between select-none relative overflow-hidden group/mock">
          {/* Subtle Financial Grid BG */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          {/* Mockup Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-[#CE1722] text-white flex items-center justify-center font-bold text-xs">
                C
              </span>
              <span className="font-bold text-sm tracking-tight">Cap<em className="text-[#CE1722] not-italic">Gro</em> FINEX</span>
            </div>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/10 text-stone-300">
              RBI DSA / LSP · CA
            </span>
          </div>

          {/* Interactive Calculator Graphic Preview */}
          <div className="relative z-10 my-6 bg-[#16191f] border border-white/10 rounded-xl p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase text-stone-400">Monthly EMI Estimate</div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-[#CE1722]">₹26,035<span className="text-xs text-stone-400 font-normal"> / mo</span></div>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#CE1722]/10 border border-[#CE1722]/30 flex items-center justify-center text-[#CE1722]">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-stone-300">
                <span>Principal: ₹30.0 L</span>
                <span>Interest: 8.5% (20 Yrs)</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden flex">
                <div className="w-[48%] bg-[#CE1722] h-full" />
                <div className="w-[52%] bg-amber-500 h-full" />
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-stone-400 border-t border-white/5 pt-3">
              <span>₹0 Fee to customer</span>
              <span className="text-emerald-400">Soft-pull Credit ✓</span>
            </div>
          </div>

          {/* Footer Highlights */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-stone-400">
            <span>HOME LOAN · LAP · MSME</span>
            <span className="text-[#CE1722] font-semibold flex items-center gap-1">
              LIVE PORTAL <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>
      );

    case "money-parking":
      return (
        <div className="w-full h-full bg-[#0a0f1d] text-[#f8fafc] p-6 sm:p-8 flex flex-col justify-between select-none relative overflow-hidden group/mock">
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15" />

          {/* Glowing accent backdrop */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                ₹
              </span>
              <div>
                <span className="font-display font-bold text-sm tracking-tight text-white lowercase">
                  money<span className="text-blue-400">parking</span>
                </span>
                <span className="hidden sm:inline-block ml-2 px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  Park it. Grow it.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Auto NAV Sync
              </span>
            </div>
          </div>

          {/* Wealthtech Dashboard Card */}
          <div className="relative z-10 my-auto py-4 space-y-3.5">
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                  Portfolio Analytics &amp; XIRR
                </span>
                <span className="text-emerald-400 font-mono text-[11px] font-semibold">Active Book</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white">
                  Mutual Fund Tracker
                </span>
                <span className="text-xs text-slate-400">Distributor Suite</span>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-white/[0.03] border border-white/5 rounded-lg p-2.5">
                <div className="text-[10px] text-slate-400 font-mono uppercase">Distributors</div>
                <div className="text-xs font-bold text-white mt-0.5">Portal Active</div>
              </div>
              <div className="bg-white/[0.03] border border-white/5 rounded-lg p-2.5">
                <div className="text-[10px] text-slate-400 font-mono uppercase">NAV Updates</div>
                <div className="text-xs font-bold text-white mt-0.5">Daily Sync</div>
              </div>
              <div className="bg-white/[0.03] border border-white/5 rounded-lg p-2.5">
                <div className="text-[10px] text-slate-400 font-mono uppercase">Verification</div>
                <div className="text-xs font-bold text-emerald-400 mt-0.5">ARN Ready</div>
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/10 pt-3">
            <span>MUTUAL FUND PLATFORM</span>
            <span className="text-blue-400 font-semibold flex items-center gap-1">
              LIVE PLATFORM <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>
      );

    case "arya-dental-care":
      return (
        <div className="w-full h-full bg-[#0f172a] text-white p-6 sm:p-8 flex flex-col justify-between select-none relative overflow-hidden group/mock">
          {/* Soft Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-teal-500/10 blur-[80px]" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-teal-500 text-white flex items-center justify-center font-bold text-xs">
                A
              </div>
              <div>
                <span className="font-semibold text-sm block">Arya Dental Care</span>
                <span className="text-[9px] text-teal-300 font-mono">Sector 20 Panchkula / Peer Muchalla</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-teal-500/20 text-teal-300 border border-teal-500/30">
              Verified Practice
            </span>
          </div>

          {/* Body Spotlight */}
          <div className="relative z-10 my-4 bg-slate-900/80 border border-white/10 rounded-xl p-5 space-y-3">
            <div className="text-xs font-mono text-teal-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SUPER-SPECIALITY PRACTICE</span>
            </div>
            <div className="text-lg sm:text-xl font-bold font-display leading-snug">
              Evidence-based clinical dentistry with digital appointment scheduling.
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-slate-300">
              <div className="p-2 rounded bg-white/5 border border-white/5">
                <span className="text-teal-400 font-mono block">Dr. (Col) P.K. Arya</span>
                <span className="text-[10px] text-slate-400">Army Dental Corps</span>
              </div>
              <div className="p-2 rounded bg-white/5 border border-white/5">
                <span className="text-teal-400 font-mono block">Dr. Anmol Arya</span>
                <span className="text-[10px] text-slate-400">MDS Orthodontist</span>
              </div>
            </div>
          </div>

          {/* Footer Badges */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/10 pt-3">
            <span>B-CLASS AUTOCLAVE HYGIENE</span>
            <span className="text-teal-400">BOOK VISIT →</span>
          </div>
        </div>
      );

    case "arrive-hotels":
      return (
        <div className="w-full h-full bg-[#18181b] text-white p-6 sm:p-8 flex flex-col justify-between select-none relative overflow-hidden group/mock">
          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Hotel className="w-4 h-4 text-[#c60000]" />
              <span className="font-serif tracking-widest text-sm font-bold uppercase">ARRIVE</span>
              <span className="text-[10px] text-stone-400 font-mono">by Palisociety</span>
            </div>
            <span className="text-[10px] font-mono uppercase text-[#c60000] tracking-wider">
              5 LOCATIONS
            </span>
          </div>

          {/* Hotel Cities Pill Matrix */}
          <div className="relative z-10 my-4 space-y-3">
            <div className="text-xl sm:text-2xl font-serif italic text-stone-200">
              In the heart of the neighborhood.
            </div>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Design-driven boutique hotels tailored to distinct urban surroundings: Palm Springs, Memphis, Austin, Wilmington, and Albuquerque.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {["Palm Springs", "Memphis", "Austin", "Wilmington", "Albuquerque"].map((city) => (
                <span key={city} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-stone-300">
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-stone-400 border-t border-white/10 pt-3">
            <span>LOWKEY LUXURIES · BESPOKE DESIGN</span>
            <span className="text-[#c60000] font-semibold">EXPLORE STAY ↗</span>
          </div>
        </div>
      );

    case "nugenatria":
      return (
        <div className="w-full h-full bg-[#111827] text-white p-6 sm:p-8 flex flex-col justify-between select-none relative overflow-hidden group/mock">
          {/* Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs">
                NA
              </div>
              <span className="font-semibold text-sm">Nugen Atria</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Hospitality OS
            </span>
          </div>

          {/* Dashboard Preview Graphic */}
          <div className="relative z-10 my-4 bg-gray-900/90 border border-indigo-500/30 rounded-xl p-5 shadow-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-mono text-gray-300">Live Hotel Operations</span>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Online Sync
              </span>
            </div>

            <div className="text-lg sm:text-xl font-bold font-display">
              Run your hotel. <span className="text-indigo-400">Not paperwork.</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 text-[10px] font-mono text-gray-400">
              <div className="p-2 rounded bg-black/40 border border-white/5">
                <span className="block text-white font-bold">Front Desk</span>
                <span>Instant Check-In</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-white/5">
                <span className="block text-white font-bold">Guest App</span>
                <span>In-Stay Mobile Ordering</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-gray-400 border-t border-white/10 pt-3">
            <span>MULTI-PROPERTY PMS</span>
            <span className="text-indigo-400 font-semibold">SAAS SUITE ↗</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
