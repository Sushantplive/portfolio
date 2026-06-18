import React, { useState } from "react";

interface ClientEngagement {
  client: string;
  duration: string;
  project: string;
  highlights: string[];
}

interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  roleNote?: string;
  duration: string;
  summary: string;
  responsibilities?: string[];
  clients?: ClientEngagement[];
}

const experiences: ExperienceEntry[] = [
  {
    id: "synechron",
    company: "Synechron",
    role: "Technology Lead",
    roleNote: "Individual contributor — hands-on developer on client engagements",
    duration: "Jul 2021 – Present",
    summary:
      "Employed by Synechron as a Technology Lead, delivering front-end solutions as an individual contributor for global banking clients.",
    clients: [
      {
        client: "US Bank",
        duration: "Apr 2026 – Present",
        project: "Global Trade and Receivables Finance",
        highlights: [
          "Engineered front-end modules for a mission-critical banking application supporting customer guarantees and Accounts Receivable operations.",
          "Delivered UIs for core Accounts Receivable user stories and integrated RESTful APIs to streamline financial workflows.",
          "Managed the full feature lifecycle from development and testing through QA validation and production deployment.",
          "Addressed SonarQube issues to improve code quality, maintainability, and long-term engineering standards.",
        ],
      },
      {
        client: "HSBC",
        duration: "Jan 2023 – Mar 31, 2026",
        project: "OMNIA – GPS Insights Dashboard",
        highlights: [
          "Built and enhanced the GPS Insights analytics dashboard within HSBC's OMNIA platform for portfolio balances, transactions, and billed revenue.",
          "Developed interactive KPI cards, trend charts, and analytical tables with drill-down filtering (Monthly / Daily / MTD / YTD).",
          "Integrated multiple REST APIs and optimized chart-heavy dashboard performance using memoization and controlled re-renders.",
          "Collaborated with product, data, and backend teams to deliver scalable reporting solutions across global banking portfolios.",
          "Resolved critical production issues and ensured regulatory-compliant releases through debugging, code reviews, and controlled deployments.",
        ],
      },
    ],
  },
  {
    id: "agiliad",
    company: "Agiliad",
    role: "Software Engineer",
    duration: "Jul 2018 – Jun 2021",
    summary:
      "Built enterprise front-end solutions for HPE InfoSight, a predictive analytics platform for global infrastructure monitoring.",
    responsibilities: [
      "Built React-based dashboards integrating HPE InfoSight predictive analytics for infrastructure telemetry and system health monitoring.",
      "Developed reusable Highcharts components including line, bar, and trend visualizations for large-scale telemetry datasets.",
      "Integrated REST APIs to fetch real-time monitoring data and optimized rendering for smooth dashboard performance.",
      "Collaborated with backend and DevOps teams to ensure reliable data visualization workflows across global systems.",
    ],
  },
];

const Experience: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState(experiences[0]);

  return (
    <section
      id="experience"
      className="py-12 sm:py-20 bg-gray-900 bg-opacity-30 text-white min-h-screen flex flex-col justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">&lt;Experience /&gt;</h2>
        <p className="text-gray-400 text-lg mb-8 md:mb-12">
          Employers and client engagements across enterprise banking and analytics
        </p>

        <div className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
          <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-2 md:gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                type="button"
                onClick={() => setSelectedCompany(exp)}
                className={`text-left px-4 py-2 font-semibold transition-all duration-300 rounded-lg border-l-4 shadow-md whitespace-nowrap md:whitespace-normal flex-shrink-0 md:flex-shrink ${
                  selectedCompany.id === exp.id
                    ? "border-cyan-400 text-cyan-400 bg-gradient-to-r from-gray-800 to-gray-700"
                    : "border-transparent text-gray-400 hover:text-cyan-400 hover:bg-gray-800"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-3/4 p-6 md:p-8 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-lg border border-cyan-400 border-opacity-30 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 rounded-l-lg" />
            <h3 className="text-2xl md:text-4xl font-extrabold text-cyan-400 mb-2 md:mb-4">
              {selectedCompany.company}
            </h3>
            <p className="text-gray-300 text-lg md:text-xl font-semibold mb-1">
              {selectedCompany.role}
            </p>
            {selectedCompany.roleNote ? (
              <p className="text-cyan-200/80 text-sm mb-2 italic">{selectedCompany.roleNote}</p>
            ) : null}
            <p className="text-gray-400 text-sm mb-4 italic">{selectedCompany.duration}</p>
            <p className="text-gray-300 leading-relaxed mb-6">{selectedCompany.summary}</p>

            {selectedCompany.clients ? (
              <div className="space-y-5">
                <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
                  Client Engagements
                </p>
                {selectedCompany.clients.map((engagement) => (
                  <div
                    key={engagement.client}
                    className="rounded-lg border border-cyan-400/20 bg-gray-900/40 p-5"
                  >
                    <div className="mb-3">
                      <p className="text-xl font-bold text-cyan-200">{engagement.client}</p>
                      <p className="text-gray-400 text-sm italic mt-1">{engagement.duration}</p>
                      <p className="text-gray-300 text-sm font-medium mt-2">{engagement.project}</p>
                    </div>
                    <ul className="text-gray-300 space-y-2.5">
                      {engagement.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold mt-0.5 flex-shrink-0">➤</span>
                          <span className="leading-relaxed text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="text-gray-300 space-y-3">
                {selectedCompany.responsibilities?.map((resp) => (
                  <li key={resp} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold mt-0.5 flex-shrink-0">➤</span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
