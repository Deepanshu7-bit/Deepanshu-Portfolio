import { Project } from "@/types";

export interface ProjectWithFilter extends Project {
  image: string;
  typeFilter: string[];
}

export const projectsData: ProjectWithFilter[] = [
  {
    id: "capgro-finex",
    number: "01",
    title: "CapGro Finex",
    category: "Fintech & Loan Distribution",
    role: "Frontend Architecture & UI Engineering",
    year: "2025",
    url: "https://www.capgrofinex.com/",
    tagline: "Transparent financial distribution with zero customer fees",
    description:
      "A comprehensive multi-vertical financial platform distributing RBI-regulated loans, mutual funds, and insurance across India. Built with transparent lender comparisons, interactive EMI engines, soft-pull credit check workflows, and consent-logged application funnels.",
    deliverables: [
      "Multi-lender loan comparison engine",
      "Interactive real-time EMI calculators",
      "Free soft-pull credit score integration",
      "Consent-logged application workflows",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Financial APIs", "Lucide Icons"],
    layoutType: "split-preview",
    metrics: [
      { label: "Category", value: "Fintech" },
      { label: "Stack", value: "Next.js 15" },
      { label: "UI", value: "Tailwind CSS" },
    ],
    accentHighlight: "#CE1722",
    image: "/images/projects/capgro.png",
    typeFilter: ["fintech", "commercial"],
  },
  {
    id: "money-parking",
    number: "02",
    title: "Money Parking",
    category: "Mutual Fund & Wealthtech Platform",
    role: "Frontend Web Engineering",
    year: "2025",
    url: "http://moneyparking.in/",
    tagline: "Mutual fund distributor dashboard and portfolio tracking platform",
    description:
      "A responsive web platform built for Indian mutual fund distributors. Features client management workflows, real-time XIRR calculations, automated NAV data synchronization, and clean investor-ready reporting.",
    deliverables: [
      "Client management & automated portfolio sync",
      "Real-time XIRR calculations & NAV auto-sync",
      "ARN verification & distributor admin approval workflows",
      "Investor login portal with live performance tracking",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Financial APIs"],
    layoutType: "reverse-split",
    metrics: [
      { label: "Category", value: "Wealthtech" },
      { label: "Stack", value: "React & TS" },
      { label: "Interface", value: "Dashboard UI" },
    ],
    accentHighlight: "#059669",
    image: "/images/projects/moneyparking.png",
    typeFilter: ["fintech", "commercial"],
  },
  {
    id: "arya-dental-care",
    number: "03",
    title: "Arya Dental Care",
    category: "Super-Speciality Healthcare",
    role: "Frontend Web Engineering",
    year: "2025",
    url: "https://arya-dental-care-nine.vercel.app/",
    tagline: "Clinical healthcare portal with digital appointment scheduling",
    description:
      "A patient-focused clinic web application for a super-speciality dental practice adjoining Sector 20 Panchkula. Incorporates digital appointment scheduling, treatment category breakdowns, patient reviews, and accessibility-first responsive design.",
    deliverables: [
      "Digital appointment booking flow with service selector",
      "Comprehensive treatment directory (aligners, implants, rotary endo)",
      "Transparent pricing & membership plan breakdowns",
      "Real-time location, office hours, and emergency contact",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Accessible Forms", "SEO Metadata"],
    layoutType: "panoramic",
    metrics: [
      { label: "Category", value: "Healthcare" },
      { label: "Stack", value: "Next.js & Tailwind" },
      { label: "Feature", value: "Online Booking" },
    ],
    accentHighlight: "#0d9488",
    image: "/images/projects/aryadental.png",
    typeFilter: ["healthcare", "commercial"],
  },
  {
    id: "arrive-hotels",
    number: "04",
    title: "Arrive Hotels",
    category: "Boutique Hospitality (Palisociety)",
    role: "Frontend Experience & Creative UI",
    year: "2024",
    url: "https://www.arrivehotels.com/",
    tagline: "Distinctive neighborhood boutique hotels across the US",
    description:
      "A high-performing boutique hotel destination platform for ARRIVE by Palisociety (Memphis, Palm Springs, Austin, Wilmington, Albuquerque). Architected with headless CMS integration, multi-property routing, high-resolution imagery rendering, and seamless booking reservation flows.",
    deliverables: [
      "Dynamic location-specific content and property navigation",
      "Design-driven room galleries and neighborhood dining guides",
      "Integrated booking reservation modal workflows",
      "High-performance media caching and optimized delivery",
    ],
    techStack: ["Next.js", "Headless CMS", "Swiper", "TypeScript", "Tailwind CSS"],
    layoutType: "spec-focus",
    metrics: [
      { label: "Category", value: "Hospitality" },
      { label: "Stack", value: "Next.js & Swiper" },
      { label: "Design", value: "Multi-Property" },
    ],
    accentHighlight: "#c60000",
    image: "/images/projects/arrivehotels.png",
    typeFilter: ["hospitality", "ecommerce"],
  },
  {
    id: "nugenatria",
    number: "05",
    title: "Nugen Atria",
    category: "Hospitality Operating System (SaaS)",
    role: "Frontend SaaS Architecture",
    year: "2024",
    url: "https://nugenatria.com/",
    tagline: "Cloud PMS and in-stay guest experience on autopilot",
    description:
      "A cloud-native hospitality operating platform empowering hoteliers across India to run operations without paperwork. Features digital front-desk check-in, real-time room inventory management, and mobile guest ordering for room service, housekeeping, and spa amenities.",
    deliverables: [
      "Unified hotel administration dashboard & multi-property support",
      "Guest mobile interface for in-stay room service & housekeeping requests",
      "Real-time reservation synchronization and front desk check-in",
      "Scalable frontend architecture with event-driven updates",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSockets"],
    layoutType: "saas-spotlight",
    metrics: [
      { label: "Category", value: "SaaS Portal" },
      { label: "Stack", value: "React & Next.js" },
      { label: "Scope", value: "Admin & Guest UI" },
    ],
    accentHighlight: "#4f46e5",
    image: "/images/projects/nugenatria.png",
    typeFilter: ["saas", "hospitality", "ecommerce"],
  },
];
