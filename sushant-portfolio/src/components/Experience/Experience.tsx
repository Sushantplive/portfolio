import React from "react";
import "./experience.css";

const MAX_BULLETS = 3;

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
    duration: "Jul 2021 – Present",
    isCurrent: true,
    summary:
      "Lead frontend delivery for analytics dashboards and enterprise product UIs at US Bank and HSBC.",
    clients: [
      {
        client: "US Bank",
        duration: "Apr 2026 – Present",
        project: "Common Transactions · Teller Cash Recycler (TCR)",
        isCurrent: true,
        highlights: [
          "Building Common Transactions UIs for teller operations — Deposit, Multi-Deposit, Night Drop, Withdrawal, and Reversal.",
          "Integrating GraphQL (Apollo) and REST APIs, handling TCR device responses and transaction statuses.",
          "Owning feature delivery through QA and production in GitLab workflows.",
        ],
      },
      {
        client: "HSBC",
        duration: "Jan 2023 – Mar 2026",
        project: "OMNIA · GPS Insights",
        highlights: [
          "Led an 8-engineer frontend team on GPS Insights analytics dashboards.",
          "Delivered KPI cards, trend charts, and drill-down reporting (MTD / YTD).",
          "Optimized chart-heavy performance and shipped regulatory-compliant releases.",
        ],
      },
      {
        client: "HSBC",
        duration: "Apr 2022 – Dec 2022",
        project: "Global Trade and Receivables Finance (GTRF)",
        highlights: [
          "Delivered UIs for 5 core Accounts Receivable user stories in Release 9, including customer guarantee issuance.",
          "Integrated RESTful APIs to support financial workflows and streamline internal operations.",
          "Improved code quality and maintainability through SonarQube remediation across modules.",
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
    summary: "Built React dashboards for HPE InfoSight infrastructure telemetry.",
    responsibilities: [
      "Developed Highcharts-based telemetry dashboards for large-scale datasets.",
      "Integrated REST APIs for real-time monitoring and optimized render performance.",
      "Collaborated with backend and DevOps on reliable visualization workflows.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="experience-section site-section py-12 sm:py-20 text-theme flex flex-col justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="experience-title text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          &lt;Experience /&gt;
        </h2>
        <p className="experience-intro text-lg mb-8 md:mb-10">
          Employers and client engagements across enterprise platforms, analytics products, and
          infrastructure monitoring.
        </p>

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
                          key={`${engagement.client}-${engagement.project}`}
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
                            {engagement.highlights.slice(0, MAX_BULLETS).map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <ul className="experience-highlights">
                    {entry.responsibilities?.slice(0, MAX_BULLETS).map((item) => (
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
