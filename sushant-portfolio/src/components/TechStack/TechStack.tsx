import React from "react";
import { techStackList } from "./techStackData";
import "./techStack.css";

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="tech-stack-section" aria-labelledby="tech-stack-title">
      <header className="tech-stack-header">
        <h3 id="tech-stack-title" className="tech-stack-title">
          &lt;Skills &amp; Tech Stack /&gt;
        </h3>
      </header>

      <div className="tech-stack-quick">
        <ul className="tech-stack-quick__list">
          {techStackList.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
