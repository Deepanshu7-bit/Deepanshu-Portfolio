"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useToast } from "../ui/Toast";

export function ContactForm() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full Stack Web Application",
    budget: "$2,000 — $5,000",
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: typeof errors = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "Please share a few details about your project";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate responsive submission delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    showToast("Inquiry sent successfully! Deepanshu will respond shortly.");
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl border border-accent/40 bg-accent-subtle/30 text-center space-y-4 shadow-xl">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-accent text-white flex items-center justify-center shadow-lg">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-ink font-editorial">
          Message Received.
        </h3>
        <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-ink">{formData.name}</span>. I have received your project inquiry and will reply to <span className="font-semibold text-ink">{formData.email}</span> within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              projectType: "Full Stack Web Application",
              budget: "$2,000 — $5,000",
              message: "",
            });
          }}
          className="mt-4 px-6 py-2.5 rounded-full border border-border bg-bg text-ink font-mono text-xs uppercase tracking-wider hover:border-accent transition-colors"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-8 sm:p-10 rounded-3xl border border-border bg-bg-secondary/40 shadow-xl space-y-6"
    >
      <div className="space-y-1">
        <h3 className="text-xl sm:text-2xl font-bold text-ink font-display">
          Project Inquiry Form
        </h3>
        <p className="text-xs text-ink-muted">
          Tell me about your timeline, scope, and engineering ambitions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name Field */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-ink-muted">
            Your Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Alex Rivera"
            className={`w-full px-4 py-3 rounded-xl border bg-bg text-ink text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.name ? "border-red-500" : "border-border"
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-500 font-mono">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-ink-muted">
            Your Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="alex@company.com"
            className={`w-full px-4 py-3 rounded-xl border bg-bg text-ink text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.email ? "border-red-500" : "border-border"
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-500 font-mono">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Project Type */}
        <div className="space-y-1.5">
          <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-ink-muted">
            Project Scope
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-ink text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option>Full Stack Web Application</option>
            <option>Next.js Frontend &amp; Creative UI</option>
            <option>Backend Architecture &amp; REST APIs</option>
            <option>MVP Build from Zero to One</option>
            <option>Technical Consultation &amp; Audit</option>
          </select>
        </div>

        {/* Budget */}
        <div className="space-y-1.5">
          <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-ink-muted">
            Estimated Budget
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-ink text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option>$1,000 — $2,500</option>
            <option>$2,500 — $5,000</option>
            <option>$5,000 — $10,000</option>
            <option>$10,000+</option>
            <option>Flexible / To Be Discussed</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-ink-muted">
          Project Brief / Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe what you want to build, key goals, timeline constraints, or technical specifications..."
          className={`w-full px-4 py-3 rounded-xl border bg-bg text-ink text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent resize-none ${
            errors.message ? "border-red-500" : "border-border"
          }`}
        />
        {errors.message && <p className="text-[11px] text-red-500 font-mono">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        data-cursor="cta"
        className="w-full py-4 rounded-xl bg-accent text-white font-mono text-xs uppercase tracking-widest font-semibold hover:bg-accent-hover transition-all flex items-center justify-center gap-2 shadow-xl disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Inquiry...</span>
          </>
        ) : (
          <>
            <span>Send Inquiry</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
