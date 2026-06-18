import React from "react";
import {
  primaryStack,
  professionalStrengths,
  roleFitTags,
  skillCategories,
  type Proficiency,
  type TechSkill,
} from "./techStackData";
import "./techStack.css";

const proficiencyLabel: Record<Proficiency, string> = {
  Expert: "Expert — production-ready, daily use",
  Advanced: "Advanced — strong hands-on experience",
  Proficient: "Proficient — comfortable in team delivery",
};

const SkillCard: React.FC<{ skill: TechSkill; featured?: boolean }> = ({
  skill,
  featured = false,
}) => (
  <article
    className={`tech-skill-card ${featured ? "tech-skill-card--featured" : ""}`}
    title={proficiencyLabel[skill.proficiency]}
  >
    <img src={skill.icon} alt="" className="tech-skill-card__icon" aria-hidden="true" />
    <div className="tech-skill-card__body">
      <h4 className="tech-skill-card__name">{skill.name}</h4>
      <span className={`tech-skill-card__level tech-skill-card__level--${skill.proficiency.toLowerCase()}`}>
        {skill.proficiency}
      </span>
    </div>
  </article>
);

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="tech-stack-section" aria-labelledby="tech-stack-title">
      <header className="tech-stack-header">
        <h3 id="tech-stack-title" className="tech-stack-title">
          &lt;Skills &amp; Tech Stack /&gt;
        </h3>
        <p className="tech-stack-intro">
          Production technologies used across enterprise banking, analytics dashboards, and
          global delivery teams — structured for quick review by recruiters and hiring managers.
        </p>
      </header>

      <div className="tech-stack-role-fit" aria-label="Role fit keywords">
        {roleFitTags.map((tag) => (
          <span key={tag} className="tech-stack-role-fit__tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="tech-stack-primary">
        <p className="tech-stack-primary__label">Primary Stack</p>
        <div className="tech-stack-primary__grid">
          {primaryStack.map((skill) => (
            <SkillCard key={skill.name} skill={skill} featured />
          ))}
        </div>
      </div>

      <div className="tech-stack-categories">
        {skillCategories.map((category) => (
          <div key={category.id} className="tech-stack-category">
            <h4 className="tech-stack-category__title">{category.title}</h4>
            <div className="tech-stack-category__grid">
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tech-stack-strengths">
        <div className="tech-stack-strengths__panel">
          <h4 className="tech-stack-strengths__title">Professional Strengths</h4>
          <p className="tech-stack-strengths__note">
            Soft skills and delivery traits valued in senior frontend and tech-lead roles worldwide.
          </p>
          <ul className="tech-stack-strengths__list">
            {professionalStrengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </div>

        <div className="tech-stack-legend" aria-label="Proficiency legend">
          <h4 className="tech-stack-legend__title">Proficiency Guide</h4>
          <ul className="tech-stack-legend__list">
            <li>
              <span className="tech-skill-card__level tech-skill-card__level--expert">Expert</span>
              Daily production use, architecture ownership
            </li>
            <li>
              <span className="tech-skill-card__level tech-skill-card__level--advanced">Advanced</span>
              Strong delivery experience on real projects
            </li>
            <li>
              <span className="tech-skill-card__level tech-skill-card__level--proficient">Proficient</span>
              Solid contributor in team environments
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
