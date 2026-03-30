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

const projects: Project[] = [
  {
    name: "OMNIA – GPS Insights Dashboard (HSBC)",
    company: "HSBC",
    desc: "Developed and enhanced the GPS Insights analytics dashboard within HSBC’s OMNIA platform, enabling internal banking teams to analyze portfolio balances, transaction volumes, billed revenue, and industry-level performance through interactive visualizations.",
    impact:
      "The GPS Insights dashboard provides internal banking teams with a centralized view of portfolio analytics such as balances, transactions, and billed revenue.",
    tech: [
      "React.js",
      "TypeScript",
      "d3",
      "Jest",
      "styled-components",
      "react-testing-library",
      "OMNIA-UI-Library",
      "React Context API",
      "Redux",
      "Context API",
      "Git",
      "Webpack",
      "Jenkins CI/CD",
      "Component Architecture",
    ],
    highlights: [
      "Built interactive data visualization components including KPI cards, line/bar/multi-line trend charts, and analytical tables to represent high-volume financial data.",
      "Implemented dynamic filtering, date-range selection, and drill-down capabilities (Monthly / Daily / MTD / YTD) to deliver deeper, user-driven financial insights.",
      "Integrated multiple REST APIs to fetch and process large datasets for balances, transactions, and revenue analytics across global banking portfolios.",
      "Optimized chart-heavy dashboard performance using memoization, efficient state updates, and controlled re-renders for smoother user experience.",
      "Designed structured data tables and segmentation breakdowns (region, currency, industry) and collaborated with product, data, and backend teams to deliver scalable reporting solutions.",
      "Diagnosed and resolved critical 'cyberflow' issues while ensuring production stability and regulatory-compliant releases through debugging, code reviews, and controlled deployments.",
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
      "Engineered key front-end modules for a mission-critical banking application, including UIs for 5 core Accounts Receivable user stories in Release 9.",
      "Integrated RESTful APIs to enhance financial workflows and support customer guarantee issuance and streamlined internal operations.",
      "Managed the full feature lifecycle from development and testing through QA validation and production deployment.",
      "Addressed SonarQube issues to improve code quality, maintainability, and long-term engineering standards.",
    ],
    github: "#",
    live: "#",
  },
  {
    name: "InfoSight Integration",
    company: "HPE (Agiliad)",
    desc: "HPE's solution for managing infrastructure powered by artificial intelligence and capable of predicting potential problems. The predictive analytics platform processes millions of data points constantly from companies worldwide. InfoSight automatically predicts and resolves 86% of infrastructure issues, enabling increased application availability and reduced operational costs.",
    impact:
    //   "AI-driven platform automating 86% of infrastructure issue resolution globally",
    // "Improved infrastructure observability by developing analytics dashboards that visualize telemetry data and performance trends from HPE InfoSight services",
    "Built React-based dashboards integrating HPE InfoSight predictive analytics, enabling visualization of infrastructure telemetry data used in automated issue detection and resolution across global systems.",
    tech: [
      "React.js",
      "Javascript (ES6+)",
      "Highcharts",
      "Component Libraries",
      "Jest",
      "react-testing-library",
      "Git",
      "Redux (State Management Library)",
      "REST APIs",
    ],
    highlights: [
      "Built interactive data visualization dashboards using React.js and Highcharts to display infrastructure performance metrics and system health insights.",
      "Developed reusable Highcharts-based components including line charts, bar charts, and trend visualizations for telemetry analytics.",
      "Integrated REST APIs to fetch real-time infrastructure monitoring data from HPE InfoSight services.",
      "Optimized rendering of large telemetry datasets to ensure smooth performance of monitoring dashboards.",
      "Collaborated with backend and DevOps teams to integrate InfoSight APIs and ensure reliable data visualization workflows.",
    ],
    github: "#",
    live: "#",
  },
];

const Projects: React.FC = () => {
  const [selectedProjectName, setSelectedProjectName] = useState(
    projects[0]?.name ?? "",
  );

  const selectedProject = useMemo(
    () =>
      projects.find((project) => project.name === selectedProjectName) ??
      projects[0],
    [selectedProjectName],
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
        <h2 className="projects-title text-4xl md:text-5xl font-extrabold text-cyan-300 mb-4">
          &lt;Projects /&gt;
        </h2>
        <p className="text-cyan-100/80 text-lg mb-10 max-w-2xl">
          A showcase of enterprise platforms, analytics dashboards, and data-driven applications I’ve built, highlighting their business impact and the technologies behind them
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
                  <p className="project-list-item__company">
                    {project.company}
                  </p>
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
              <span className="project-pill">Enterprise Analytics</span>
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
              <ul className="flex flex-wrap gap-2" role="list">
                {selectedProject.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-cyan-400/30 bg-cyan-950/35 px-3 py-1 text-xs font-medium text-cyan-100"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
