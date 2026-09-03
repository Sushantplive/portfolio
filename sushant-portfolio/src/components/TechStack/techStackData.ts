export interface TechCategory {
  id: string;
  title: string;
  blurb: string;
  skills: string[];
}

/**
 * Primary keywords: most-used across client projects + high recruiter / JD demand.
 * Weighted toward professional work (US Bank, HSBC, HPE).
 */
export const primaryStack = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "GraphQL",
  "REST APIs",
  "Redux",
  "Highcharts",
  "D3.js",
  "Node.js",
] as const;

export const techStackCategories: TechCategory[] = [
  {
    id: "architecture",
    title: "Architecture",
    blurb: "System design for scale and reuse",
    skills: [
      "Microfrontend Architecture (Module Federation)",
      "Component-Based Architecture",
      "Design Systems",
      "Microservices-Consuming Architecture",
      "Redux Toolkit",
    ],
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    blurb: "Layout, styling, and component delivery",
    skills: [
      "HTML5",
      "CSS3",
      "AngularJS",
      "Tailwind CSS",
      "Styled Components",
      "Storybook",
      "Figma",
      "Accessibility (WCAG)",
      "Internationalization (i18n)",
    ],
  },
  {
    id: "data-viz",
    title: "Data Visualization",
    blurb: "Charts and large-scale telemetry UIs",
    skills: ["Highcharts", "D3.js", "Chart.js"],
  },
  {
    id: "apis-state",
    title: "APIs & State",
    blurb: "Data fetching and client state patterns",
    skills: ["Redux", "Apollo Client", "Context API", "WebSocket", "Java/Spring Boot Integration", "Postman", "Express.js", "MongoDB"],
  },
  {
    id: "cloud-deployment",
    title: "Cloud & Deployment",
    blurb: "Static hosting and delivery infrastructure",
    skills: ["AWS S3", "CloudFront", "CDN Concepts", "Environment Configuration Management"],
  },
  {
    id: "test-frameworks",
    title: "Test Frameworks",
    blurb: "Unit and component tests for React UIs",
    skills: ["Jest", "React Testing Library"],
  },
  {
    id: "build-tools",
    title: "Build Tools",
    blurb: "Bundling, tooling, and package workflows",
    skills: ["Vite", "Webpack", "npm"],
  },
  {
    id: "quality-delivery",
    title: "Delivery & CI",
    blurb: "Version control, CI, and delivery process",
    skills: [
      "Git",
      "GitLab CI",
      "Jenkins CI/CD",
      "SIT/UAT Deployment",
      "CyberFlow Security Validation",
      "Rollback Strategy",
      "Jira",
      "Agile",
    ],
  },
  {
    id: "ai-tools",
    title: "AI Tools",
    blurb: "Faster delivery, human-led reviews",
    skills: ["GitHub Copilot", "Cursor", "Claude"],
  },
];
