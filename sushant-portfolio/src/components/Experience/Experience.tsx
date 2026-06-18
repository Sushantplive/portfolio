import React from "react";
import "./experience.css";

interface ClientEngagement {
  client: string;
  duration: string;
  project: string;
  highlights: string[];
  isCurrent?: boolean;
}

interface ExperienceEntry {
  id: string;
  company: string;
  initials: string;
  role: string;
  roleNote?: string;
  duration: string;
  summary: string;
  isCurrent?: boolean;
  responsibilities?: string[];
  clients?: ClientEngagement[];
}

const experiences: ExperienceEntry[] = [
  {
    id: "synechron",
    company: "Synechron",
    initials: "SY",
    role: "Technology Lead",
    roleNote: "Technology Lead — hands-on developer with team leadership on client engagements",
    duration: "Jul 2021 – Present",
    isCurrent: true,
    summary:
      "Employed by Synechron as a Technology Lead, delivering front-end solutions for global banking clients while leading and mentoring engineering teams on key engagements.",
    clients: [
      {
        client: "US Bank",
        duration: "Apr 2026 – Present",
        project: "Common Transaction",
        isCurrent: true,
        highlights: [
          "Building front-end modules for the Common Transaction feature within US Bank's Trade and Receivables Finance (TCR) platform.",
          "Engineering UIs for standardized transaction capture, validation, and processing workflows across trade finance operations.",
          "Integrating GraphQL with Apollo Client and REST APIs to connect Common Transaction flows with backend TCR services.",
          "Managing the full feature lifecycle from development and testing through QA validation and production deployment.",
          "Working within GitLab-based workflows to maintain code quality, maintainability, and long-term engineering standards.",
        ],
      },
      {
        client: "HSBC",
        duration: "Jan 2023 – Mar 31, 2026",
        project: "OMNIA – GPS Insights & Global Trade and Receivables Finance",
        highlights: [
          "Led a front-end team of 8 engineers on the GPS Insights engagement, guiding delivery, code quality, and technical direction while staying hands-on in development.",
          "Built and enhanced the GPS Insights analytics dashboard within HSBC's OMNIA platform for portfolio balances, transactions, and billed revenue.",
          "Engineered front-end modules for HSBC's Global Trade and Receivables Finance platform, including UIs for customer guarantees and Accounts Receivable operations.",
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
    initials: "AG",
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
  return (
    <section
      id="experience"
      className="experience-section site-section py-12 sm:py-20 text-white flex flex-col justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="experience-title text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          &lt;Experience /&gt;
        </h2>
        <p className="experience-intro text-lg mb-8 md:mb-10">
          A timeline of employers and client engagements across enterprise banking, analytics, and
          infrastructure monitoring.
        </p>

        <div className="experience-stats">
          <div className="experience-stat">
            <span className="experience-stat__value">8+</span>
            <span className="experience-stat__label">Years Experience</span>
          </div>
          <div className="experience-stat">
            <span className="experience-stat__value">2</span>
            <span className="experience-stat__label">Employers</span>
          </div>
          <div className="experience-stat">
            <span className="experience-stat__value">3</span>
            <span className="experience-stat__label">Global Clients</span>
          </div>
        </div>

        <div className="experience-timeline">
          {experiences.map((entry) => (
            <article
              key={entry.id}
              className={`experience-node ${entry.isCurrent ? "" : "experience-node--past"}`}
            >
              <span className="experience-node__dot" aria-hidden="true" />

              <div className="experience-employer-card">
                <div className="experience-employer-card__header">
                  <div className="experience-employer-card__identity">
                    <div className="experience-avatar" aria-hidden="true">
                      {entry.initials}
                    </div>
                    <div>
                      <h3 className="experience-company">{entry.company}</h3>
                      <p className="experience-role">{entry.role}</p>
                      {entry.roleNote ? (
                        <p className="experience-role-note">{entry.roleNote}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="experience-meta">
                    {entry.isCurrent ? (
                      <span className="experience-pill experience-pill--active">Current</span>
                    ) : null}
                    <span className="experience-pill experience-pill--duration">{entry.duration}</span>
                  </div>
                </div>

                <p className="experience-summary">{entry.summary}</p>

                {entry.clients ? (
                  <div className="experience-clients">
                    <p className="experience-clients__label">Client Engagements</p>
                    <div className="experience-client-grid">
                      {entry.clients.map((engagement) => (
                        <div
                          key={engagement.client}
                          className={`experience-client-card ${
                            engagement.isCurrent ? "experience-client-card--current" : ""
                          }`}
                        >
                          <div className="experience-client-card__top">
                            <h4 className="experience-client-name">{engagement.client}</h4>
                            {engagement.isCurrent ? (
                              <span className="experience-pill experience-pill--active">Active</span>
                            ) : null}
                          </div>
                          <p className="experience-client-project">{engagement.project}</p>
                          <p className="experience-client-duration">{engagement.duration}</p>
                          <ul className="experience-highlights mt-4">
                            {engagement.highlights.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <ul className="experience-highlights">
                    {entry.responsibilities?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
