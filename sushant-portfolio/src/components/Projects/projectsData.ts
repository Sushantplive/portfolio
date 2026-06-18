export type ProjectCategory = "professional" | "personal";

export type MockupVariant =
  | "analytics-dashboard"
  | "transaction-workflow"
  | "trade-workflow"
  | "telemetry-dashboard";

export interface PerformanceMetric {
  label: string;
  before: string;
  after: string;
  note: string;
}

export interface ArchitectureLayer {
  title: string;
  detail: string;
}

export interface EnterpriseProof {
  ndaDisclaimer: string;
  mockupVariant: MockupVariant;
  architecture: ArchitectureLayer[];
  performance: PerformanceMetric[];
  deliverySignals: string[];
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface PersonalShowcase {
  intro: string;
  screenshots: ProjectScreenshot[];
  architecture: ArchitectureLayer[];
  deliverySignals: string[];
}

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
  enterpriseProof?: EnterpriseProof;
  personalShowcase?: PersonalShowcase;
}

export const projects: Project[] = [
  {
    name: "Common Transaction",
    company: "US Bank",
    category: "professional",
    desc: "Front-end development for the Common Transaction module within US Bank's Trade and Receivables Finance (TCR) platform — enabling standardized transaction processing, validation, and workflow management across trade finance operations.",
    impact:
      "Delivering the Common Transaction module within TCR to support standardized financial transaction flows for US Bank's trade and receivables operations.",
    role: "Technology Lead",
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "GraphQL",
      "Apollo Client",
      "TypeScript",
      "REST API Integration",
      "GitLab",
    ],
    highlights: [
      "Building React and Next.js front-end modules for the Common Transaction feature within the TCR platform.",
      "Engineering UIs for standardized transaction capture, validation, and processing workflows.",
      "Integrating GraphQL with Apollo Client and REST APIs to connect Common Transaction flows with backend TCR services.",
      "Managing the full feature lifecycle from development and testing through QA validation and production deployment.",
      "Working within GitLab-based workflows to maintain code quality, maintainability, and long-term engineering standards.",
    ],
    enterpriseProof: {
      ndaDisclaimer:
        "Representative workflow patterns only. Client branding, account data, and production screens are omitted under NDA.",
      mockupVariant: "transaction-workflow",
      architecture: [
        {
          title: "React / Next.js UI Modules",
          detail: "Form workflows, validation states, and reusable transaction components.",
        },
        {
          title: "Apollo Client + REST Integration",
          detail: "GraphQL queries and REST endpoints for capture, validation, and submission flows.",
        },
        {
          title: "TCR Platform Services",
          detail: "Backend trade finance services handling standardized transaction processing.",
        },
      ],
      performance: [
        {
          label: "Multi-step workflow render time",
          before: "~2.6s",
          after: "~1.0s",
          note: "Improved via code-splitting, memoized form sections, and lighter initial payloads.",
        },
        {
          label: "Validation feedback latency",
          before: "~1.4s",
          after: "~450ms",
          note: "Reduced round-trips with optimized API orchestration and cached reference data.",
        },
      ],
      deliverySignals: [
        "Technology Lead on active client engagement",
        "GraphQL + REST integration",
        "GitLab release workflow",
      ],
    },
  },
  {
    name: "OMNIA – GPS Insights Dashboard (HSBC)",
    company: "HSBC",
    category: "professional",
    desc: "Developed and enhanced the GPS Insights analytics dashboard within HSBC’s OMNIA platform, enabling internal banking teams to analyze portfolio balances, transaction volumes, billed revenue, and industry-level performance through interactive visualizations.",
    impact:
      "Led a team of 8 front-end engineers while delivering the GPS Insights dashboard used by internal banking teams for portfolio analytics.",
    role: "Technology Lead — Team of 8",
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
      "Led a front-end team of 8 engineers, guiding delivery, code reviews, technical direction, and mentoring while contributing hands-on to the codebase.",
      "Built interactive data visualization components including KPI cards, line/bar/multi-line trend charts, and analytical tables to represent high-volume financial data.",
      "Implemented dynamic filtering, date-range selection, and drill-down capabilities (Monthly / Daily / MTD / YTD) to deliver deeper, user-driven financial insights.",
      "Integrated multiple REST APIs to fetch and process large datasets for balances, transactions, and revenue analytics across global banking portfolios.",
      "Optimized chart-heavy dashboard performance using memoization, efficient state updates, and controlled re-renders for smoother user experience.",
      "Designed structured data tables and segmentation breakdowns (region, currency, industry) and collaborated with product, data, and backend teams to deliver scalable reporting solutions.",
      "Diagnosed and resolved critical 'cyberflow' issues while ensuring production stability and regulatory-compliant releases through debugging, code reviews, and controlled deployments.",
    ],
    enterpriseProof: {
      ndaDisclaimer:
        "Anonymized dashboard layout inspired by production GPS Insights modules. Financial values and client identifiers are intentionally redacted.",
      mockupVariant: "analytics-dashboard",
      architecture: [
        {
          title: "React + TypeScript Dashboard",
          detail: "KPI cards, trend charts, tables, filters, and drill-down views for portfolio analytics.",
        },
        {
          title: "REST API Integration Layer",
          detail: "Multiple services feeding balances, transactions, revenue, and segmentation datasets.",
        },
        {
          title: "OMNIA Platform Services",
          detail: "Internal banking analytics services powering GPS Insights reporting.",
        },
      ],
      performance: [
        {
          label: "Initial chart dashboard load",
          before: "~4.1s",
          after: "~1.5s",
          note: "Memoization, controlled re-renders, and optimized chart update paths.",
        },
        {
          label: "Filter-driven refresh cycle",
          before: "~2.3s",
          after: "~850ms",
          note: "Efficient state updates and reduced unnecessary component re-rendering.",
        },
        {
          label: "Large table interaction smoothness",
          before: "Janky scroll",
          after: "Stable UX",
          note: "Structured rendering patterns for high-volume financial datasets.",
        },
      ],
      deliverySignals: [
        "Led team of 8 frontend engineers",
        "MTD / YTD drill-down reporting",
        "Production support in regulated releases",
      ],
    },
  },
  {
    name: "Global Trade and Receivables Finance",
    company: "HSBC",
    category: "professional",
    desc: "Engineered key front-end modules for HSBC's Global Trade and Receivables Finance platform using ReactJS, facilitating the issuance of customer guarantees and streamlining internal operations across multiple releases.",
    impact:
      "Delivered critical financial modules for HSBC supporting customer guarantees and Accounts Receivable operations.",
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
      "Engineered key front-end modules for HSBC's Global Trade and Receivables Finance platform, including UIs for 5 core Accounts Receivable user stories in Release 9.",
      "Integrated RESTful APIs to enhance financial workflows and support customer guarantee issuance and streamlined internal operations.",
      "Managed the full feature lifecycle from development and testing through QA validation and production deployment.",
      "Addressed SonarQube issues to improve code quality, maintainability, and long-term engineering standards.",
    ],
    enterpriseProof: {
      ndaDisclaimer:
        "Redacted trade finance workflow mockup. Guarantee data, client names, and compliance details are not shown.",
      mockupVariant: "trade-workflow",
      architecture: [
        {
          title: "React UI Modules",
          detail: "Guarantee issuance screens, AR workflows, and operational reporting views.",
        },
        {
          title: "REST API Layer",
          detail: "Financial workflow APIs for guarantee lifecycle and receivables operations.",
        },
        {
          title: "GTRF Platform Services",
          detail: "Enterprise trade finance backend supporting multi-release delivery.",
        },
      ],
      performance: [
        {
          label: "SonarQube compliance score",
          before: "Baseline",
          after: "+25%",
          note: "Code quality uplift through structured reviews and remediation across modules.",
        },
        {
          label: "Release 9 AR story delivery",
          before: "5 pending modules",
          after: "5 shipped",
          note: "Full lifecycle delivery from development through QA and production.",
        },
      ],
      deliverySignals: [
        "5 core AR user stories in Release 9",
        "SonarQube quality improvements",
        "Jenkins CI/CD releases",
      ],
    },
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
    enterpriseProof: {
      ndaDisclaimer:
        "Telemetry dashboard pattern only. Infrastructure identifiers and customer telemetry values are anonymized.",
      mockupVariant: "telemetry-dashboard",
      architecture: [
        {
          title: "React Monitoring Dashboards",
          detail: "Reusable Highcharts components for health, performance, and alert visualizations.",
        },
        {
          title: "InfoSight REST APIs",
          detail: "Real-time and batch telemetry feeds from predictive analytics services.",
        },
        {
          title: "Enterprise Infrastructure Systems",
          detail: "Operational platforms consuming AI-driven monitoring insights.",
        },
      ],
      performance: [
        {
          label: "Large telemetry dataset render",
          before: "~3.8s",
          after: "~1.4s",
          note: "Optimized chart rendering and state handling for high-volume monitoring data.",
        },
        {
          label: "Concurrent API refresh handling",
          before: "Blocking UI",
          after: "Responsive UI",
          note: "Asynchronous data orchestration for smoother dashboard updates.",
        },
      ],
      deliverySignals: [
        "Reusable Highcharts component library",
        "Global telemetry visualization",
        "Cross-team API integration",
      ],
    },
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
    personalShowcase: {
      intro:
        "Full-stack job application CRM with real UI screenshots, live demo, and end-to-end architecture.",
      screenshots: [
        {
          src: "/applywise/applywise_login.png",
          alt: "ApplyWise India login screen",
          caption: "Authentication screen for secure access to the job tracker.",
        },
        {
          src: "/applywise/applywise_dashboard.png",
          alt: "ApplyWise India dashboard with application stats and charts",
          caption: "Dashboard with KPI cards, status charts, portal breakdown, and follow-up list.",
        },
        {
          src: "/applywise/applywise_jobs.png",
          alt: "ApplyWise India job application cards",
          caption: "Paginated job cards with status badges, sources, locations, and notes.",
        },
      ],
      architecture: [
        {
          title: "React Frontend",
          detail: "Dashboard UI, job tracking views, auth screens, and reusable components.",
        },
        {
          title: "Express REST API + JWT",
          detail: "Authenticated CRUD endpoints for applications, filters, and user sessions.",
        },
        {
          title: "MongoDB",
          detail: "Persistent storage for users, applications, and tracker metadata.",
        },
      ],
      deliverySignals: [
        "Full-stack solo build",
        "JWT authentication",
        "Live on Vercel",
        "Search, filter, and analytics UI",
      ],
    },
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
    personalShowcase: {
      intro:
        "Personal finance tracker with chart-driven UI, deployed live with MongoDB-backed APIs.",
      screenshots: [
        {
          src: "/expansetracker/expanse_tracker_login.png",
          alt: "BankDash login screen",
          caption: "Sign-in screen with branded auth flow for the finance dashboard.",
        },
        {
          src: "/expansetracker/expanse_tracker_dashboard.png",
          alt: "BankDash financial dashboard",
          caption: "Financial overview with balance cards, trend chart, account card, and recent activity.",
        },
        {
          src: "/expansetracker/expanse_tracker_transactions.png",
          alt: "BankDash transactions screen",
          caption: "Transaction history with debit/credit filters and categorized entries.",
        },
        {
          src: "/expansetracker/transfer_tracker_transactions.png",
          alt: "BankDash money transfer screen",
          caption: "Deposit and withdraw transfer flow with tabbed form UI.",
        },
      ],
      architecture: [
        {
          title: "React Frontend",
          detail: "Budget views, Chart.js visualizations, and transaction management UI.",
        },
        {
          title: "Node.js REST API",
          detail: "Backend services for income, expenses, categories, and summaries.",
        },
        {
          title: "MongoDB",
          detail: "Document storage for transactions, budgets, and user finance data.",
        },
      ],
      deliverySignals: [
        "Chart.js data visualization",
        "Budget and category tracking",
        "Live demo deployed",
        "Full-stack CRUD flows",
      ],
    },
  },
  {
    name: "Portfolio Website",
    company: "Personal Project",
    category: "personal",
    desc: "Personal portfolio site built with Vite and React to showcase enterprise experience, projects, skills, and recruiter-ready contact details.",
    impact:
      "Live portfolio at sushdream.in highlighting 8+ years of frontend leadership across US Bank, HSBC, and HPE engagements.",
    techStack: ["Vite", "React", "TypeScript", "Tailwind CSS", "react-tsparticles"],
    highlights: [
      "Built a responsive single-page portfolio with Vite, React, and TypeScript.",
      "Implemented mobile navigation, structured experience/projects sections, and SEO meta tags with Open Graph support.",
      "Designed interactive UI with particle backgrounds, custom styling, and accessibility-focused section navigation.",
    ],
    github: "https://github.com/Sushantplive/portfolio",
    live: "https://sushdream.in/",
    personalShowcase: {
      intro:
        "This portfolio itself — built with Vite and React, optimized for recruiters and mobile navigation.",
      screenshots: [
        {
          src: "/projects/portfolio/hero.png",
          alt: "Portfolio website hero section",
          caption: "Hero section with role positioning and call-to-action buttons.",
        },
        {
          src: "/projects/portfolio/projects-section.png",
          alt: "Portfolio projects section",
          caption: "Projects section with enterprise and personal delivery proof.",
        },
        {
          src: "/projects/portfolio/contact.png",
          alt: "Portfolio contact section",
          caption: "Contact section with email, phone, LinkedIn, and availability details.",
        },
      ],
      architecture: [
        {
          title: "Vite + React + TypeScript",
          detail: "Single-page portfolio with section navigation and responsive layouts.",
        },
        {
          title: "Tailwind CSS + Custom CSS",
          detail: "Component styling, animations, and recruiter-focused section design.",
        },
        {
          title: "Static Deployment",
          detail: "Production build deployed to sushdream.in with SEO and Open Graph metadata.",
        },
      ],
      deliverySignals: [
        "Mobile hamburger navigation",
        "SEO + Open Graph tags",
        "Enterprise delivery proof sections",
        "Live at sushdream.in",
      ],
    },
  },
];
