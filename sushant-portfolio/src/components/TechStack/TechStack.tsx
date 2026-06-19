import React from "react";
import { primaryStack, techStackCategories } from "./techStackData";
import "./techStack.css";

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="tech-stack-section" aria-labelledby="tech-stack-title">
      <header className="tech-stack-header">
        <h3 id="tech-stack-title" className="tech-stack-title">
          &lt;Skills &amp; Tech Stack /&gt;
        </h3>
        <p className="tech-stack-intro">
          Technologies I use in production for enterprise dashboards and analytics platforms.
        </p>
      </header>

      <div className="tech-stack-panel">
        <div className="tech-stack-row tech-stack-row--primary">
          <p className="tech-stack-row__label">Primary stack</p>
          <ul className="tech-stack-row__skills" aria-label="Primary stack">
            {primaryStack.map((skill) => (
              <li key={skill}>
                <span className="tech-stack-chip tech-stack-chip--primary">{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {techStackCategories.map((category) => (
          <div key={category.id} className="tech-stack-row">
            <p className="tech-stack-row__label">{category.title}</p>
            <ul className="tech-stack-row__skills" aria-label={category.title}>
              {category.skills.map((skill) => (
                <li key={skill}>
                  <span className="tech-stack-chip">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="tech-stack-panel__note">
          AI tools speed delivery — architecture and code review stay human-led.
        </p>
      </div>
    </section>
  );
};

export default TechStack;
