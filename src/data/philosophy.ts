import { PhilosophyItem } from "@/types";

export const philosophyData: PhilosophyItem[] = [
  {
    number: "01",
    title: "Start with the user.",
    statement: "Great engineering means little if the experience isn't intuitive.",
    detail:
      "A codebase full of clever patterns is useless if the end product confuses real people. I design architecture around user flows, cognitive load, and human feedback loops first, then build rock-solid systems underneath.",
  },
  {
    number: "02",
    title: "Make it fast.",
    statement: "Performance isn't an afterthought — it is a foundational feature.",
    detail:
      "Every millisecond of latency costs attention and credibility. By treating bundle size, critical rendering paths, server-side caching, and asset optimization as non-negotiable requirements, every product feels snappy and alive.",
  },
  {
    number: "03",
    title: "Build for scale.",
    statement: "Good architecture should make tomorrow easier, not heavier.",
    detail:
      "Clean modular boundaries, strict TypeScript contracts, predictable state management, and containerized deployment workflows ensure that when features multiply or traffic surges, the team builds faster rather than firefighting technical debt.",
  },
  {
    number: "04",
    title: "Details matter.",
    statement: "The smallest interaction can change how a digital product feels.",
    detail:
      "The exact curve of an easing transition, subtle button feedback, accessible keyboard navigation, and pixel-precise layout rhythm transform a routine website into an expensive, unforgettable digital experience.",
  },
];
