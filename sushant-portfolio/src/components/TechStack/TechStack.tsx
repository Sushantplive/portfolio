import React from "react";
import { primaryStack, techStackCategories } from "./techStackData";
import "./techStack.css";

const TechStack: React.FC = () => {
  return (
    <section
      id="tech-stack"
      className="tech-stack-section site-section py-12 sm:py-20 text-theme"
      aria-labelledby="tech-stack-title"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <header className="tech-stack-header">
          <h2 id="tech-stack-title" className="tech-stack-title">
            &lt;Skills &amp; Tech Stack /&gt;
          </h2>
          <p className="tech-stack-intro">
            Primary stack reflects what I use most on client projects — plus skills recruiters
            search for. Complementary skills are grouped below.
          </p>
        </header>

        <div className="tech-stack-primary" aria-labelledby="tech-stack-primary-heading">
          <div className="tech-stack-primary__header">
            <p id="tech-stack-primary-heading" className="tech-stack-primary__eyebrow">
              Primary tech stack
            </p>
            <p className="tech-stack-primary__blurb">
              Day-to-day stack for enterprise dashboards and analytics products — strong fit for
              product, SaaS, and enterprise frontend roles.
            </p>
          </div>
          <ul className="tech-stack-primary__list" aria-label="Primary tech stack">
            {primaryStack.map((skill) => (
              <li key={skill}>
                <span className="tech-stack-chip tech-stack-chip--primary">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="tech-stack-groups">
          <p className="tech-stack-groups__heading">Skill groups</p>
          <div className="tech-stack-groups__grid">
            {techStackCategories.map((category) => (
              <article
                key={category.id}
                className="tech-stack-group"
                aria-labelledby={`tech-group-${category.id}`}
              >
                <header className="tech-stack-group__header">
                  <h3 id={`tech-group-${category.id}`} className="tech-stack-group__title">
                    {category.title}
                  </h3>
                  <p className="tech-stack-group__blurb">{category.blurb}</p>
                </header>
                <ul className="tech-stack-group__skills" aria-label={category.title}>
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <span className="tech-stack-chip">{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <p className="tech-stack-note">
          AI tools speed delivery — architecture and code review stay human-led.
        </p>
      </div>
    </section>
  );
};

export default TechStack;
