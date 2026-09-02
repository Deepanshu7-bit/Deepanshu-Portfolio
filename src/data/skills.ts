import { SkillCategory, CapabilityItem } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Engineering",
    description: "Component-driven, accessible, and high-performance interfaces",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: "Expert", highlight: true },
      { name: "Next.js", level: "Expert", highlight: true },
      { name: "TypeScript", level: "Expert", highlight: true },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert", highlight: true },
      { name: "HTML5 & Semantic Web", level: "Advanced" },
      { name: "CSS3 & Modern Layouts", level: "Advanced" },
      { name: "Material UI", level: "Proficient" },
      { name: "SASS / SCSS", level: "Proficient" },
      { name: "Framer Motion", level: "Advanced", highlight: true },
    ],
  },
  {
    id: "backend",
    name: "Backend Architecture",
    description: "Robust APIs, microservices, and event-driven backends",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: "Expert", highlight: true },
      { name: "NestJS", level: "Advanced", highlight: true },
      { name: "Express.js", level: "Expert" },
      { name: "RESTful APIs", level: "Expert", highlight: true },
      { name: "WebSockets", level: "Advanced", highlight: true },
      { name: "JWT & Auth", level: "Advanced" },
      { name: "Event-Driven Architecture", level: "Advanced" },
      { name: "Microservices", level: "Proficient" },
    ],
  },
  {
    id: "databases",
    name: "Databases & ORM",
    description: "Relational and NoSQL schemas optimized for throughput",
    iconName: "Database",
    skills: [
      { name: "MongoDB", level: "Expert", highlight: true },
      { name: "PostgreSQL", level: "Advanced", highlight: true },
      { name: "SQL", level: "Advanced" },
      { name: "Mongoose", level: "Expert" },
      { name: "Prisma / TypeORM", level: "Proficient" },
      { name: "Redis Caching", level: "Proficient" },
    ],
  },
  {
    id: "state",
    name: "State & Data Management",
    description: "Predictable client-side state and caching workflows",
    iconName: "Layers",
    skills: [
      { name: "Redux Toolkit", level: "Expert", highlight: true },
      { name: "TanStack Query", level: "Advanced", highlight: true },
      { name: "Context API", level: "Expert" },
      { name: "Zustand", level: "Proficient" },
      { name: "Axios Interceptors", level: "Advanced" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    description: "Containerized deployments and continuous integration",
    iconName: "Cloud",
    skills: [
      { name: "Docker", level: "Advanced", highlight: true },
      { name: "AWS (EC2, S3, RDS)", level: "Advanced", highlight: true },
      { name: "Kubernetes", level: "Familiar" },
      { name: "CI/CD Pipelines", level: "Advanced", highlight: true },
      { name: "Vercel", level: "Expert" },
      { name: "Linux Administration", level: "Proficient" },
    ],
  },
  {
    id: "tools",
    name: "Development Tools & Flow",
    description: "Version control, API testing, and agile team workflows",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Expert", highlight: true },
      { name: "Bitbucket", level: "Advanced" },
      { name: "Postman", level: "Expert" },
      { name: "Jira / Agile", level: "Advanced" },
      { name: "VS Code / Neovim", level: "Expert" },
      { name: "Webpack / Turbopack", level: "Advanced" },
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
      "Crafting high-touch, responsive user interfaces that combine Apple-grade whitespace, fluid typography, and Awwwards-inspired micro-interactions without sacrificing rendering speed.",
    features: [
      "Responsive component design systems",
      "SSR / SSG / ISR Next.js architecture",
      "Tailored micro-interactions & fluid animations",
      "Cross-browser & mobile-first perfection",
    ],
    svgType: "product",
  },
  {
    id: "fullstack-systems",
    number: "02",
    title: "Full Stack Systems",
    subtitle: "End-to-End Cohesion",
    description:
      "Architecting complete web applications where the frontend and backend talk to each other in perfect harmony with end-to-end type safety, reliable data contracts, and unified error handling.",
    features: [
      "Next.js App Router + Node/NestJS services",
      "Full TypeScript typing across client & server",
      "Scalable folder hierarchies & domain isolation",
      "Production-ready authentication & sessions",
    ],
    svgType: "fullstack",
  },
  {
    id: "apis-integrations",
    number: "03",
    title: "APIs & Integrations",
    subtitle: "Data & Service Pipelines",
    description:
      "Engineering well-documented, clean RESTful APIs, third-party payment gateways, CRM integrations, and data ingestion funnels with robust validation and security.",
    features: [
      "RESTful API design with clean resource routing",
      "Third-party integrations (payments, CRMs, auth)",
      "Zod schema validation & payload sanitization",
      "Comprehensive Swagger / Postman testing",
    ],
    svgType: "api",
  },
  {
    id: "performance",
    number: "04",
    title: "Performance & SEO",
    subtitle: "Sub-Second Delivery",
    description:
      "Building lightning-fast web applications optimized for perfect Google Core Web Vitals, minimal JavaScript bundles, optimized image pipelines, and semantic search visibility.",
    features: [
      "Lighthouse 95+ performance optimization",
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
      "Deploying interactive real-time applications such as live status updates, instant order tracking, notifications, and bi-directional communications with WebSockets.",
    features: [
      "WebSocket / Socket.io state synchronization",
      "Event-driven architecture & queues",
      "Live order & booking notifications",
      "Optimistic UI updates for immediate feedback",
    ],
    svgType: "realtime",
  },
  {
    id: "cloud-deployment",
    number: "06",
    title: "Cloud & Deployment",
    subtitle: "Zero-Downtime Releases",
    description:
      "Containerizing applications with Docker, orchestrating environments on AWS, setting up automated CI/CD deployment pipelines, and managing seamless zero-downtime releases.",
    features: [
      "Docker containerization for dev & production",
      "AWS cloud provisioning (EC2, S3, RDS)",
      "Automated GitHub Actions CI/CD workflows",
      "Edge caching, Vercel deployments & CDN tuning",
    ],
    svgType: "cloud",
  },
];
