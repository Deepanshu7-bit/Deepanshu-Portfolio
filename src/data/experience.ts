import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2023 — Present",
    role: "Senior Full Stack Developer",
    companyOrScope: "High-Growth Product Development & Client Architecture",
    location: "Mohali, Punjab, India",
    industry: "Hospitality, SaaS, Fintech",
    summary:
      "Leading full-stack application architecture and end-to-end delivery for high-traffic client platforms, hotel management operating systems, and regulated financial portals.",
    highlights: [
      "Architected and deployed responsive Next.js applications with Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR), boosting page speeds significantly.",
      "Engineered high-throughput NestJS and Express REST APIs with PostgreSQL and MongoDB database persistence.",
      "Implemented live event-driven WebSocket channels for real-time room status updates and in-stay hospitality service orders.",
      "Containerized microservices using Docker and established automated CI/CD deployment pipelines on AWS and Vercel.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: "exp-2",
    period: "2021 — 2023",
    role: "Full Stack Developer",
    companyOrScope: "Product Engineering & Enterprise Applications",
    location: "Mohali / Chandigarh Region, India",
    industry: "Healthcare, Insurance & Spatial Tech",
    summary:
      "Engineered specialized web solutions ranging from healthcare patient management funnels to high-precision architectural showcases and insurance distribution portals.",
    highlights: [
      "Built resilient, accessibility-compliant user interfaces with React, Tailwind CSS, and custom Framer Motion animations.",
      "Integrated third-party authentication protocols, role-based access control (RBAC), and JWT token refresh flows.",
      "Optimized frontend bundle sizes, asset delivery pipelines, and Core Web Vitals to achieve sub-second load times.",
      "Collaborated closely with designers, product managers, and QA teams in fast-paced Agile sprint cycles.",
    ],
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
  },
];
