import React from "react";
import {
  professionalStrengths,
  roleFitTags,
  skillTiers,
  type TechSkill,
} from "./techStackData";
import "./techStack.css";

const SkillCard: React.FC<{ skill: TechSkill; featured?: boolean }> = ({
  skill,
  featured = false,
}) => (
  <article className={`tech-skill-card ${featured ? "tech-skill-card--featured" : ""}`}>
    <img src={skill.icon} alt="" className="tech-skill-card__icon" aria-hidden="true" />
    <div className="tech-skill-card__body">
      <h4 className="tech-skill-card__name">{skill.name}</h4>
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
          Technologies grouped by how they show up across my career — from daily production work to
          enterprise client delivery — so recruiters can quickly see where I spend most of my time.
        </p>
      </header>

      <div className="tech-stack-role-fit" aria-label="Role fit keywords">
        {roleFitTags.map((tag) => (
          <span key={tag} className="tech-stack-role-fit__tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="tech-stack-tiers">
        {skillTiers.map((tier) => (
          <div
            key={tier.id}
            className={`tech-stack-tier ${tier.featured ? "tech-stack-tier--featured" : ""}`}
          >
            <div className="tech-stack-tier__header">
              <h4 className="tech-stack-tier__title">{tier.title}</h4>
              <p className="tech-stack-tier__description">{tier.description}</p>
            </div>
            <div
              className={`tech-stack-tier__grid ${
                tier.featured ? "tech-stack-tier__grid--featured" : ""
              }`}
            >
              {tier.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} featured={tier.featured} />
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
      </div>
    </section>
  );
};

export default TechStack;
