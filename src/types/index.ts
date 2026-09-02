export type ThemeMode = "obsidian" | "ivory";
export type AccentColor = "blue" | "violet" | "orange" | "green";
export type MotionMode = "full" | "balanced" | "minimal";
export type BackgroundPattern = "solid" | "grain" | "grid";
export type CursorMode = "default" | "interactive";

export interface ThemeConfig {
  mode: ThemeMode;
  accent: AccentColor;
  motion: MotionMode;
  background: BackgroundPattern;
  cursor: CursorMode;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  role: string;
  year: string;
  url: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  layoutType: "split-preview" | "reverse-split" | "panoramic" | "spec-focus" | "minimalist" | "saas-spotlight";
  metrics?: { label: string; value: string }[];
  accentHighlight: string;
  aspectRatio?: string;
  image?: string;
  typeFilter?: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
    note?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  companyOrScope: string;
  location: string;
  industry: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface PhilosophyItem {
  number: string;
  title: string;
  statement: string;
  detail: string;
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  svgType: "product" | "fullstack" | "api" | "performance" | "realtime" | "cloud";
}
