export type ProjectCategory = "professional" | "personal";

export interface Project {
  name: string;
  company: string;
  category: ProjectCategory;
  desc: string;
  impact: string;
  role?: string;
  techStack: string[];
  highlights: string[];
  labels?: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    name: "OMNIA – GPS Insights Dashboard (HSBC)",
    company: "HSBC",
    category: "professional",
    desc: "Developed and enhanced the GPS Insights analytics dashboard within HSBC’s OMNIA platform, enabling internal banking teams to analyze portfolio balances, transaction volumes, billed revenue, and industry-level performance through interactive visualizations.",
    impact:
      "The GPS Insights dashboard provides internal banking teams with a centralized view of portfolio analytics such as balances, transactions, and billed revenue.",
    techStack: [
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
  },
  {
    name: "Global Trade and Receivables Finance",
    company: "Synechron",
    category: "professional",
    desc: "Engineered key front-end modules for a mission-critical banking application using ReactJS, facilitating the issuance of customer guarantees and streamlining internal operations. Contributed to stability and performance through defect resolution and feature development across multiple releases.",
    impact:
      "Delivered critical financial modules supporting customer guarantees and AR operations",
    techStack: [
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
  },
  {
    name: "InfoSight Integration",
    company: "HPE (Agiliad)",
    category: "professional",
    desc: "HPE's solution for managing infrastructure powered by artificial intelligence and capable of predicting potential problems. The predictive analytics platform processes millions of data points constantly from companies worldwide. InfoSight automatically predicts and resolves 86% of infrastructure issues, enabling increased application availability and reduced operational costs.",
    impact:
      "Built React-based dashboards integrating HPE InfoSight predictive analytics, enabling visualization of infrastructure telemetry data used in automated issue detection and resolution across global systems.",
    techStack: [
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
  },
  {
    name: "ApplyWise AI – Job Application CRM",
    company: "Personal Project",
    category: "personal",
    desc: "AI-powered job application tracking system that helps users manage applications, track progress, and get smart insights for interview readiness.",
    impact: "AI-powered job application tracking system that helps users manage applications, track progress, and get smart insights for interview readiness.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "REST APIs"],
    highlights: [
      "Built a full-stack job tracker with search, filtering, and analytics dashboards.",
      "Implemented authentication and persistent application state.",
      "Designed an intuitive UI with reusable components and responsive layouts.",
    ],
    github: "https://github.com/Sushantplive/applywise-job-tracker",
    live: "https://applywise-job-tracker.vercel.app/",
  },
  {
    name: "Expense Tracker",
    company: "Personal Project",
    category: "personal",
    desc: "Track income, expenses, and budgets with insightful charts and smart categorization.",
    impact: "Track income, expenses, and budgets with insightful charts and smart categorization.",
    techStack: ["React.js", "Node.js", "MongoDB", "Chart.js"],
    highlights: [
      "Built expense tracking UI with interactive charts and budget summaries.",
      "Added smart categorization and filtering for transaction management.",
    ],
    github: "https://github.com/Sushantplive/ct-client.git",
    live: "https://ct-client-khaki.vercel.app/",
  },
  {
    name: "Portfolio Website",
    company: "Personal Project",
    category: "personal",
    desc: "My personal portfolio website to showcase projects, skills, and experience.",
    impact: "My personal portfolio website to showcase projects, skills, and experience.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Designed a modern marketing site with polished animations.",
      "Built responsive layouts and accessibility-first interactions.",
    ],
    github: "#",
    live: "#",
  },
];
