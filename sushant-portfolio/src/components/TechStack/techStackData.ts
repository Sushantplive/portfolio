export interface TechSkill {
  name: string;
  icon: string;
}

export interface SkillTier {
  id: string;
  title: string;
  description: string;
  skills: TechSkill[];
  featured?: boolean;
}

export const skillTiers: SkillTier[] = [
  {
    id: "core-frontend",
    title: "Core Frontend",
    description:
      "Day-to-day UI stack for type-safe, responsive enterprise and product interfaces.",
    featured: true,
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    id: "data-visualization",
    title: "Data Visualization",
    description:
      "Charting libraries used across banking dashboards, analytics modules, and KPI reporting.",
    skills: [
      {
        name: "Highcharts",
        icon: "/icons/highcharts.svg",
      },
      {
        name: "D3.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg",
      },
    ],
  },
  {
    id: "apis-integration",
    title: "APIs, State & Full-Stack",
    description:
      "Client integration, application state, SSR patterns, and Node.js-backed APIs on enterprise and personal builds.",
    skills: [
      {
        name: "REST APIs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
      {
        name: "Apollo Client",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Styled Components",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
    ],
  },
  {
    id: "devops",
    title: "Version Control & CI/CD",
    description:
      "Source control workflows, merge reviews, and pipeline-driven releases.",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitLab CI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      },
    ],
  },
  {
    id: "ai-assisted",
    title: "AI-Assisted Development",
    description:
      "Coding assistants for faster implementation, tests, and refactors — with architecture and reviews human-led.",
    skills: [
      {
        name: "GitHub Copilot",
        icon: "/icons/github-copilot.svg",
      },
      {
        name: "Cursor",
        icon: "/icons/cursor-ai.svg",
      },
      {
        name: "Windsurf",
        icon: "/icons/windsurf-ai.svg",
      },
      {
        name: "Devin AI",
        icon: "/icons/devin-ai.svg",
      },
    ],
  },
];

export const professionalStrengths: string[] = [
  "Team Leadership",
  "Cross-functional Communication",
  "Agile Delivery",
  "Code Reviews",
  "Production Support",
  "Mentoring",
  "Stakeholder Alignment",
  "Problem Solving",
];

export const roleFitTags: string[] = [
  "Senior Frontend Engineer",
  "React Developer",
  "Data Visualization",
  "Enterprise Dashboards",
  "Remote-friendly",
  "Global Teams",
];
