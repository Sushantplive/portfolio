import React, { useMemo } from "react";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import { projects } from "../Projects/projectsData";
import "./frontLine.css";

const heroStats = [
  { value: "8+", label: "Years Experience" },
  { value: "7", label: "Engineers Led" },
  { value: "3", label: "Global Clients" },
];

const heroStack = [
  "React",
  "TypeScript",
  "Next.js",
  "GraphQL",
  "Highcharts",
  "D3.js",
];

const FrontLine: React.FC = () => {
  const projectStats = useMemo(() => {
    const personalCount = projects.filter((project) => project.category === "personal").length;
    return [
      { value: String(projects.length), label: "Total Projects" },
      { value: String(personalCount), label: "Personal Projects" },
    ];
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg" aria-hidden="true">
        <ParticleBackground />
        <div className="hero-bg__orbs" />
        <div className="hero-bg__shine" />
        <div className="hero-bg__overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow">
              <span className="hero-eyebrow__dot" aria-hidden="true" />
              Technology Lead · Pune, India
            </p>

            <h1 className="hero-title">
              <span className="hero-title__greeting">
                <span className="hero-title__word">
                  <span
                    className="hero-title__word-inner"
                    style={{ "--reveal-delay": "40ms" } as React.CSSProperties}
                  >
                    Hello,
                  </span>
                </span>
                <span className="hero-title__word">
                  <span
                    className="hero-title__word-inner"
                    style={{ "--reveal-delay": "130ms" } as React.CSSProperties}
                  >
                    I&apos;m
                  </span>
                </span>
              </span>
              <span className="hero-title__name">
                <span className="hero-title__word hero-title__word--name">
                  <span
                    className="hero-title__word-inner hero-title__word-inner--name"
                    style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
                  >
                    Sushant.
                  </span>
                </span>
              </span>
            </h1>

            <p className="hero-tagline">
              I build React &amp; TypeScript dashboards for data-heavy products.
            </p>

            <p className="hero-human">
              Analytics UIs, chart-heavy platforms, and reusable component systems — trusted by
              teams at <span className="hero-client-name">US Bank</span>,{" "}
              <span className="hero-client-name">HSBC</span>, and{" "}
              <span className="hero-client-name">HPE</span>.
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
                href="/Sushant_Paikarao_Frontend_Engineer.pdf"
                download="Sushant_Paikarao_Frontend_Engineer.pdf"
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

            <div className="hero-panel__stats hero-panel__stats--projects">
              {projectStats.map((stat) => (
                <a key={stat.label} href="#projects" className="hero-stat hero-stat--link">
                  <span className="hero-stat__value">{stat.value}</span>
                  <span className="hero-stat__label">{stat.label}</span>
                </a>
              ))}
            </div>

            <div className="hero-panel__clients">
              <p className="hero-panel__clients-label">Recent clients</p>
              <div className="hero-panel__clients-tags">
                <span className="hero-panel__clients-tag">US Bank</span>
                <span className="hero-panel__clients-tag">HSBC</span>
                <span className="hero-panel__clients-tag">HPE</span>
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
