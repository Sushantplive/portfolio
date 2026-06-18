import React from "react";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import "./frontLine.css";

const heroStats = [
  { value: "8+", label: "Years Experience" },
  { value: "3", label: "Global Clients" },
  { value: "Banking", label: "Enterprise Focus" },
];

const heroStack = ["React", "TypeScript", "Highcharts", "D3.js", "GraphQL"];

const FrontLine: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg" aria-hidden="true">
        <ParticleBackground />
        <div className="hero-bg__overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow">
              <span className="hero-eyebrow__dot" aria-hidden="true" />
              Technology Lead · Hands-on Frontend Engineer · Pune, India
            </p>

            <h1 className="hero-title">
              Hello, I&apos;m{" "}
              <span className="hero-title__name">Sushant.</span>
            </h1>

            <p className="hero-headline">
              I write production code and lead frontend delivery for enterprise analytics
              and banking platforms.
            </p>

            <p className="hero-summary">
              I build with React, TypeScript, and chart-heavy dashboards while guiding
              teams, code reviews, and technical direction on client engagements.
            </p>

            <div className="hero-stack" aria-label="Core technologies">
              {heroStack.map((tech) => (
                <span key={tech} className="hero-stack__tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a
                href="/Sushant_Paikarao_Frontend_dev.pdf"
                download="Sushant_Paikarao_Resume.pdf"
                className="hero-btn hero-btn--primary"
              >
                Download Resume
              </a>
              <a href="#experience" className="hero-btn hero-btn--secondary">
                View Experience
              </a>
              <a href="#contact" className="hero-btn hero-btn--ghost">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Professional highlights">
            <div className="hero-panel__header">
              <p className="hero-panel__label">At a Glance</p>
              <p className="hero-panel__role">Technology Lead · Synechron</p>
            </div>

            <div className="hero-panel__stats">
              {heroStats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <span className="hero-stat__value">{stat.value}</span>
                  <span className="hero-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-panel__block">
              <p className="hero-panel__block-title">Enterprise Domains</p>
              <ul className="hero-panel__list">
                <li>Trade &amp; Receivables Finance (US Bank, HSBC)</li>
                <li>Analytics Dashboards &amp; KPI Reporting</li>
                <li>Infrastructure Monitoring (HPE InfoSight)</li>
              </ul>
            </div>

            <div className="hero-panel__availability">
              <span className="hero-panel__availability-dot" aria-hidden="true" />
              <div>
                <p className="hero-panel__availability-title">Open to Opportunities</p>
                <p className="hero-panel__availability-note">
                  Remote-friendly · Global teams · 3-month notice (negotiable)
                </p>
                <p className="hero-panel__availability-note hero-panel__availability-note--secondary">
                  Immediate joiner / notice buyout open to discussion
                </p>
              </div>
            </div>
          </aside>
        </div>

        <a href="#about" className="hero-scroll" aria-label="Scroll to About section">
          <span className="hero-scroll__label">Explore</span>
          <span className="hero-scroll__icon" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default FrontLine;
