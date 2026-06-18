import React from "react";
import TechStack from "../TechStack/TechStack";
import "./about.css";

const focusAreas = [
  "React & TypeScript",
  "Data Visualization",
  "Enterprise Dashboards",
  "Component Systems",
  "Performance",
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="about-section site-section py-12 sm:py-20 text-white flex flex-col justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="about-title text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          &lt;About Me /&gt;
        </h2>
        <p className="about-intro text-lg mb-8 md:mb-10">
          A snapshot of who I am, what I build, and how I approach frontend engineering for
          enterprise teams.
        </p>

        <div className="about-layout">
          <div className="about-profile">
            <div className="about-image-wrap">
              <img
                src="/profile3.jpeg"
                alt="Sushant Paikarao"
                className="about-image"
              />
            </div>
            <div className="about-profile-card">
              <p className="about-profile-card__name">Sushant Paikarao</p>
              <p className="about-profile-card__role">Technology Lead</p>
              <p className="about-profile-card__location">Pune, India</p>
            </div>
          </div>

          <div className="about-copy-panel">
            <p className="about-paragraph">
              I build scalable, high-performance web applications and intuitive data experiences
              for enterprise teams — turning complex datasets into polished, interactive interfaces
              that support smarter business decisions.
            </p>

            <p className="about-paragraph">
              My work spans analytics dashboards, reusable component systems, and performance-critical
              UIs using <span className="about-highlight">React</span>,{" "}
              <span className="about-highlight">TypeScript</span>, and{" "}
              <span className="about-highlight">Highcharts</span>. I care about clean architecture,
              maintainable code, and interfaces that stay fast under real-world data loads.
            </p>

            <div className="about-facts">
              <div className="about-fact">
                <span className="about-fact__value">8+</span>
                <span className="about-fact__label">Years Experience</span>
              </div>
              <div className="about-fact">
                <span className="about-fact__value">B.E.</span>
                <span className="about-fact__label">Electronics &amp; Telecom</span>
              </div>
              <div className="about-fact">
                <span className="about-fact__value">3</span>
                <span className="about-fact__label">Global Clients</span>
              </div>
            </div>

            <div className="about-focus">
              <p className="about-focus__label">Core Focus</p>
              <div className="about-focus__tags">
                {focusAreas.map((area) => (
                  <span key={area} className="about-focus__tag">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <p className="about-experience-link">
              For employers, clients, and project details, see the{" "}
              <a href="#experience" className="about-inline-link">
                Experience section
              </a>
              .
            </p>
          </div>
        </div>

        <div className="about-tech-stack">
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default About;
