import React, { useMemo, useState } from "react";
import "./slider.css";

interface Project {
  name: string;
  company: string;
  desc: string;
  impact: string;
  tech: string[];
  highlights: string[];
  github?: string;
  live?: string;
}

const categoryOrder = [
  "Frontend",
  "State Management",
  "Testing",
  "APIs & Data",
  "DevOps",
  "Tooling",
  "Other",
] as const;

const detectTechCategory = (tech: string): (typeof categoryOrder)[number] => {
  const normalizedTech = tech.toLowerCase();

  if (normalizedTech.includes("jest") || normalizedTech.includes("testing")) {
    return "Testing";
  }

  if (
    normalizedTech.includes("redux") ||
    normalizedTech.includes("redux toolkit") ||
    normalizedTech.includes("context")
  ) {
    return "State Management";
  }

  if (
    normalizedTech.includes("react") ||
    normalizedTech.includes("typescript") ||
    normalizedTech.includes("javascript") ||
    normalizedTech.includes("d3") ||
    normalizedTech.includes("component") ||
    normalizedTech.includes("styled")
  ) {
    return "Frontend";
  }

  if (normalizedTech.includes("api") || normalizedTech.includes("analytics")) {
    return "APIs & Data";
  }

  if (normalizedTech.includes("jenkins") || normalizedTech.includes("ci/cd")) {
    return "DevOps";
  }

  if (
    normalizedTech.includes("git") ||
    normalizedTech.includes("webpack") ||
    normalizedTech.includes("jira") ||
    normalizedTech.includes("sonarqube")
  ) {
    return "Tooling";
  }

  return "Other";
};

const groupTechByCategory = (techList: string[]) => {
  const grouped = techList.reduce<Record<string, string[]>>((accumulator, tech) => {
    const category = detectTechCategory(tech);
    if (!accumulator[category]) {
      accumulator[category] = [];
    }
    accumulator[category].push(tech);
    return accumulator;
  }, {});

  return categoryOrder
    .filter((category) => grouped[category]?.length)
    .map((category) => ({
      category,
      items: grouped[category],
    }));
};

const projects: Project[] = [
  {
    name: "Omnia",
    company: "HSBC",
    desc: "Contributed to the development of OMNIA, a strategic analytics platform supporting HSBC's Commercial Banking operations across UK and Hong Kong markets. The platform provided unified client insights, enabling data-driven engagement strategies and improved investor transparency across global portfolios.",
    impact:
      "Delivered enterprise-grade analytics platform serving multiple markets",
    tech: [
      "React.js",
      "TypeScript",
      "D3.js",
      "Jest",
      "styled-components",
      "react-testing-library",
      "OMNIA-UI-Library",
      "React Context API",
      "Redux",
      "Git",
      "Webpack",
      "Jenkins CI/CD",
    ],
    highlights: [
      "Spearheaded end-to-end development of complex web application",
      "Engineered highly interactive data visualizations with D3.js",
      "Managed state efficiently using React Context API",
      "Owned complete feature delivery lifecycle (analysis -> deployment)",
      "Developed comprehensive unit tests with Jest framework",
      "Led frontend development team with technical mentorship",
      "Diagnosed and resolved critical 'cyberflow' issues",
      "Executed deployments across Dev, Staging, UAT, and Production",
    ],
    github: "#",
    live: "#",
  },
  {
    name: "Global Trade and Receivables Finance",
    company: "Synechron",
    desc: "Engineered key front-end modules for a mission-critical banking application using ReactJS, facilitating the issuance of customer guarantees and streamlining internal operations. Contributed to stability and performance through defect resolution and feature development across multiple releases.",
    impact:
      "Delivered critical financial modules supporting customer guarantees and AR operations",
    tech: [
      "React.js",
      "Javascript (ES6+)",
      "REST APIs",
      "Jest",
      "Jira",
      "SonarQube",
      "Jenkins CI/CD",
    ],
    highlights: [
      "Engineered key front-end modules for mission-critical banking application",
      "Identified and resolved complex defects for Release 8 ensuring high code quality",
      "Spearheaded development of UIs for 5 core Accounts Receivable user stories (Release 9)",
      "Integrated RESTful APIs enhancing system functionality for financial processes",
      "Managed full feature lifecycle: development, testing, QA, and deployment",
      "Addressed SonarQube issues improving code quality and maintainability",
      "Participated in deployment activities ensuring stable releases",
      "Facilitated issuance of customer guarantees streamlining internal operations",
    ],
    github: "#",
    live: "#",
  },
  {
    name: "InfoSight Integration",
    company: "HPE (Agiliad)",
    desc: "HPE's solution for managing infrastructure powered by artificial intelligence and capable of predicting potential problems. The predictive analytics platform processes millions of data points constantly from companies worldwide. InfoSight automatically predicts and resolves 86% of infrastructure issues, enabling increased application availability and reduced operational costs.",
    impact:
      "AI-driven platform automating 86% of infrastructure issue resolution globally",
    tech: [
      "React.js",
      "Javascript (ES6+)",
      "Component Libraries",
      "Jest",
      "react-testing-library",
      "Git",
      "Redux (State Management Library)",
      "REST APIs",
      "Predictive Analytics",
    ],
    highlights: [
      "Spearheaded development of AI-driven predictive analytics platform",
      "Engineered reusable components and front-end libraries",
      "Significantly improved development efficiency and project scalability",
      "Translated complex designs and wireframes into high-quality code",
      "Contributed to platform reliability and performance optimization",
      "Collaborated with cross-functional teams on feature definition and design",
      "Integrated user-facing elements with server-side logic seamlessly",
      "Stayed current with emerging technologies and industry trends",
    ],
    github: "#",
    live: "#",
  },
];

const Projects: React.FC = () => {
  const [selectedProjectName, setSelectedProjectName] = useState(
    projects[0]?.name ?? ""
  );

  const selectedProject = useMemo(
    () =>
      projects.find((project) => project.name === selectedProjectName) ?? projects[0],
    [selectedProjectName]
  );

  if (!selectedProject) {
    return null;
  }

  return (
    <section
      id="projects"
      className="projects-section py-2 pt-12 sm:pt-20 bg-gray-900 text-white min-h-screen flex flex-col justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-4">
          &lt;Projects /&gt;
        </h2>
        <p className="text-cyan-100/80 text-lg mb-10 max-w-2xl">
          A curated view of enterprise projects, their business impact, and the
          technologies used to ship reliable products.
        </p>

        <div className="projects-layout">
          <aside className="projects-list" aria-label="Project list">
            {projects.map((project) => {
              const isActive = project.name === selectedProject.name;

              return (
                <button
                  key={project.name}
                  type="button"
                  className={`project-list-item ${
                    isActive ? "project-list-item--active" : ""
                  }`}
                  onClick={() => setSelectedProjectName(project.name)}
                  aria-pressed={isActive}
                >
                  <p className="project-list-item__name">{project.name}</p>
                  <p className="project-list-item__company">{project.company}</p>
                  <p className="project-list-item__impact">{project.impact}</p>
                </button>
              );
            })}
          </aside>

          <article className="project-detail-card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
              <div>
                <p className="project-detail-card__eyebrow">Selected Project</p>
                <h3 className="text-3xl font-bold text-cyan-200 mb-2">
                  {selectedProject.name}
                </h3>
                <p className="text-cyan-50/90 text-lg font-semibold">
                  {selectedProject.company}
                </p>
              </div>
              <span className="project-pill">Enterprise Delivery</span>
            </div>

            <p className="text-cyan-50/90 text-base leading-relaxed mb-6">
              {selectedProject.desc}
            </p>

            <div className="project-impact">
              <p className="project-impact__label">Impact</p>
              <p className="project-impact__text">{selectedProject.impact}</p>
            </div>

            <div className="mb-6">
              <p className="project-subtitle">Highlights</p>
              <ul className="project-highlights" role="list">
                {selectedProject.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="project-subtitle">Technologies</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {groupTechByCategory(selectedProject.tech).map(({ category, items }) => (
                  <div
                    key={category}
                    className="rounded-lg border border-cyan-400/20 bg-gradient-to-br from-cyan-900/25 to-blue-900/20 px-4 py-3"
                  >
                    <p className="text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1">
                      {category}
                    </p>
                    <p className="text-cyan-50/90 text-sm leading-relaxed">
                      {items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
