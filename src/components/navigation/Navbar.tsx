"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { MagneticButton } from "../ui/MagneticButton";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Skills", href: "#skills" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active link spy
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-bg/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center font-mono font-bold text-xs tracking-tighter shadow-md group-hover:scale-105 transition-transform">
              DD.
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-ink font-display group-hover:text-accent transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-ink-muted uppercase">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-border bg-bg-secondary/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 relative ${
                    isActive
                      ? "text-ink font-semibold"
                      : "text-ink-muted hover:text-ink hover:bg-bg/50"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-accent rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <MagneticButton
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              data-cursor="cta"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-bg text-xs font-mono tracking-wider uppercase font-semibold hover:bg-accent hover:text-white transition-all shadow-md group cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticButton>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-xl border border-border text-ink hover:bg-bg-secondary transition-colors"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
