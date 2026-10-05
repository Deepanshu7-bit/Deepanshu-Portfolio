import { SkillCategory, CapabilityItem } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend & UI",
    description: "Component-driven, accessible, responsive & animated interfaces",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true },
      { name: "Next.js", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "GSAP (GreenSock)", level: "Advanced", highlight: true },
      { name: "ScrollTrigger", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "Material UI (MUI)", level: "Proficient", highlight: true },
      { name: "SASS / SCSS", level: "Proficient" },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "Responsive Design", level: "Advanced" },
    ],
  },
  {
    id: "state-data",
    name: "State & Data Fetching",
    description: "Client state, server cache synchronization & form architecture",
    iconName: "Layers",
    skills: [
      { name: "Redux Toolkit", level: "Advanced", highlight: true },
      { name: "TanStack Query", level: "Advanced", highlight: true },
      { name: "Context API", level: "Advanced" },
      { name: "Formik", level: "Advanced", highlight: true },
      { name: "React Hook Form", level: "Advanced", highlight: true },
      { name: "Zod Schema Validation", level: "Advanced", highlight: true },
    ],
  },
  {
    id: "apis-services",
    name: "APIs & Communication",
    description: "Network communication, asynchronous streams & headless services",
    iconName: "Server",
    skills: [
      { name: "REST APIs", level: "Advanced", highlight: true },
      { name: "GraphQL", level: "Advanced", highlight: true },
      { name: "WebSockets", level: "Proficient", highlight: true },
      { name: "Postman", level: "Advanced", highlight: true },
      { name: "DatoCMS (Headless)", level: "Proficient" },
      { name: "API Consumption", level: "Advanced" },
    ],
  },
  {
    id: "tools-workflow",
    name: "Build Tools & Environment",
    description: "Version control, build automation, bundling & modern hosting",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Advanced", highlight: true },
      { name: "AI Dev Tooling (LLMs / Agents)", level: "Advanced", highlight: true },
      { name: "Vite", level: "Advanced", highlight: true },
      { name: "Webpack", level: "Proficient" },
      { name: "Vercel", level: "Advanced", highlight: true },
      { name: "Figma (UI/UX Handoff)", level: "Proficient", highlight: true },
      { name: "VS Code", level: "Advanced" },
    ],
  },
];

export const capabilitiesData: CapabilityItem[] = [
  {
    id: "product-experiences",
    number: "01",
    title: "Product Experiences",
    subtitle: "Frontend Excellence",
    description:
      "Crafting clean, accessible, and responsive user interfaces with thoughtful spacing, typography, and fluid transitions without sacrificing performance.",
    features: [
      "Responsive component design systems",
      "SSR / SSG / ISR Next.js architecture",
      "Tailored micro-interactions with Framer Motion",
      "Cross-browser & mobile-first responsiveness",
    ],
    svgType: "product",
  },
  {
    id: "fullstack-systems",
    number: "02",
    title: "Modern Frontend Architecture",
    subtitle: "Component Systems & State",
    description:
      "Architecting modular, maintainable web applications with end-to-end type safety, atomic component hierarchies, clean state isolation, and seamless API integration.",
    features: [
      "Next.js App Router & React Server Components",
      "Full TypeScript typing across components & props",
      "Scalable folder hierarchies & design token isolation",
      "Production-ready authentication & state flows",
    ],
    svgType: "fullstack",
  },
  {
    id: "apis-integrations",
    number: "03",
    title: "APIs & Integrations",
    subtitle: "Data & Service Pipelines",
    description:
      "Integrating RESTful endpoints, third-party authentication services, payment gateways, and data streams with robust client validation and error handling.",
    features: [
      "RESTful API integration with type-safe clients",
      "Third-party integrations (payments, auth, maps)",
      "Zod schema validation & payload sanitization",
      "Clean asynchronous error boundary handling",
    ],
    svgType: "api",
  },
  {
    id: "performance",
    number: "04",
    title: "Performance & SEO",
    subtitle: "Fast Delivery",
    description:
      "Building fast web applications optimized for Google Core Web Vitals, minimal JavaScript bundles, optimized image delivery, and semantic search visibility.",
    features: [
      "Core Web Vitals & bundle optimization",
      "Tree-shaking & code splitting strategies",
      "Next/Image modern WebP/AVIF transformations",
      "Dynamic Open Graph, JSON-LD schemas & meta tags",
    ],
    svgType: "performance",
  },
  {
    id: "realtime-systems",
    number: "05",
    title: "Real-Time Systems",
    subtitle: "Event-Driven Reactivity",
    description:
      "Deploying interactive real-time interfaces such as live status updates, notifications, and bi-directional communications with WebSockets.",
    features: [
      "WebSocket client state synchronization",
      "Real-time event handling & subscriptions",
      "Live order & booking notifications",
      "Optimistic UI updates for immediate feedback",
    ],
    svgType: "realtime",
  },
  {
    id: "cloud-deployment",
    number: "06",
    title: "Deployment & Delivery",
    subtitle: "Reliable Releases",
    description:
      "Deploying modern frontend applications with automated CI/CD workflows, edge hosting on Vercel, and containerized development setups.",
    features: [
      "Vercel edge hosting & custom domain setup",
      "Automated GitHub Actions CI/CD workflows",
      "Docker environments for local reproducibility",
      "Environment variables & secret management",
    ],
    svgType: "cloud",
  },
];
