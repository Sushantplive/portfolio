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
    duration: "Jun 2021 – Present",
    isCurrent: true,
    summary:
      "Lead frontend delivery for analytics dashboards and enterprise product UIs at US Bank and HSBC — improved SonarQube compliance 25% and mentor a team of 7 engineers.",
    clients: [
      {
        client: "US Bank",
        duration: "Mar 2026 – Present",
        project: "Common Transactions · Teller Cash Recycler (TCR)",
        isCurrent: true,
        highlights: [
          "Architecting the TCR audit module that reconciles software transaction records against physical device responses for faster discrepancy investigation.",
          "Building Common Transactions UIs — Deposit, Multi-Deposit, Night Drop, Withdrawal, and Reversal — with GraphQL (Apollo) and REST integrations.",
          "Delivering these workflows under regulated-banking compliance standards with zero critical post-release defects.",
        ],
      },
      {
        client: "HSBC",
        duration: "Jun 2022 – Mar 2026",
        project: "OMNIA · GPS Insights",
        highlights: [
          "Led a 7-engineer frontend team building GPS Insights analytics dashboards.",
          "Delivered React/TypeScript dashboards integrating 30+ backend REST APIs.",
          "Optimized chart-heavy performance and shipped regulatory-compliant releases.",
        ],
      },
      {
        client: "HSBC",
        duration: "Jul 2021 – Apr 2022",
        project: "Global Trade and Receivables Finance (GTRF)",
        highlights: [
          "Delivered UIs for 5 core Accounts Receivable user stories in Release 9, including customer guarantee issuance, giving corporate clients real-time visibility into trade-finance transactions.",
          "Partnered directly with compliance teams to validate business-rule accuracy across high-volume, multi-system transaction data.",
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
    duration: "Apr 2018 – May 2021",
    summary: "Built React dashboards for HPE InfoSight infrastructure telemetry.",
    responsibilities: [
      "Built React dashboards surfacing real-time telemetry, system health, and predictive failure alerts for infrastructure hardware.",
      "Optimized concurrent handling of high-frequency telemetry data streams, improving dashboard responsiveness.",
      "Defined end-to-end testing strategy and automated integration workflows with backend and DevOps teams.",
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
