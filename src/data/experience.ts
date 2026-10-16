import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "1.5+ Years Total Experience",
    role: "Frontend Developer",
    companyOrScope: "Product Engineering & Commercial Platforms",
    location: "Mohali, Punjab, India",
    industry: "Fintech, Hospitality & SaaS Domains",
    summary:
      "Developed and maintained modern, responsive frontend web applications across fintech, hospitality, and SaaS domains. Focused on building reusable UI component libraries with React.js, Next.js, and TypeScript, implementing interactive UI features with GSAP and CSS, managing client state with Zustand, and connecting frontend views with backend REST/GraphQL APIs.",
    highlights: [
      "Built reusable, accessible UI component hierarchies in React.js, Next.js, and TypeScript using Tailwind CSS for scalable design systems.",
      "Structured lightweight client-side state architecture using Zustand, eliminating redundant re-renders and improving overall screen responsiveness.",
      "Integrated backend REST and GraphQL APIs with robust client validation, handling real-time WebSocket feeds and error boundary safeguards.",
      "Collaborated with design teams via Figma to translate complex interactive wireframes into pixel-perfect, mobile-first web applications.",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "GSAP", "REST APIs", "GraphQL", "WebSockets", "Figma"],
  },
];
