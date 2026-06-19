export interface TechCategory {
  id: string;
  title: string;
  skills: string[];
}

/** Top keywords recruiters filter on first — mirrors resume summary line. */
export const primaryStack = ["React", "TypeScript", "Highcharts", "GraphQL"];

export const techStackCategories: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Styled Components"],
  },
  {
    id: "data-viz",
    title: "Data & Visualization",
    skills: ["D3.js"],
  },
  {
    id: "apis-state",
    title: "APIs & State",
    skills: ["REST APIs", "Apollo Client", "Redux", "Node.js"],
  },
  {
    id: "delivery",
    title: "Tools & Delivery",
    skills: ["Git", "GitLab CI"],
  },
  {
    id: "ai-tools",
    title: "AI Tools",
    skills: ["GitHub Copilot", "Cursor", "Windsurf", "Devin AI"],
  },
];
