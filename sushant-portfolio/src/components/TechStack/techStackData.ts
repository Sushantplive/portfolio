export type Proficiency = "Expert" | "Advanced" | "Proficient";

export interface TechSkill {
  name: string;
  icon: string;
  proficiency: Proficiency;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: TechSkill[];
}

export const primaryStack: TechSkill[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    proficiency: "Expert",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    proficiency: "Expert",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    proficiency: "Expert",
  },
  {
    name: "Highcharts",
    icon: "/icons/highcharts.svg",
    proficiency: "Expert",
  },
  {
    name: "D3.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg",
    proficiency: "Advanced",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    proficiency: "Advanced",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend & UI",
    skills: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        proficiency: "Advanced",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        proficiency: "Expert",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        proficiency: "Expert",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        proficiency: "Advanced",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        proficiency: "Advanced",
      },
      {
        name: "Styled Components",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg",
        proficiency: "Advanced",
      },
    ],
  },
  {
    id: "integration",
    title: "APIs & Integration",
    skills: [
      {
        name: "REST APIs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        proficiency: "Expert",
      },
      {
        name: "Apollo Client",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        proficiency: "Advanced",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        proficiency: "Proficient",
      },
    ],
  },
  {
    id: "workflow",
    title: "Tools & Delivery",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        proficiency: "Expert",
      },
      {
        name: "GitLab CI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        proficiency: "Advanced",
      },
      {
        name: "jQuery",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
        proficiency: "Proficient",
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
