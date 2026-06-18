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
          Frontend tech lead with 8+ years shipping enterprise dashboards for global banking clients.
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
              I build React and TypeScript interfaces for data-heavy products — analytics dashboards,
              reusable component systems, and chart-driven UIs for US Bank, HSBC, and HPE. I use AI
              coding tools (Copilot, Cursor, Windsurf) to ship faster; architecture and reviews stay
              human-led.
            </p>

            <div className="about-education">
              <p className="about-education__label">Education</p>
              <div className="about-education__card">
                <h3 className="about-education__degree">Bachelor of Engineering (B.E.)</h3>
                <p className="about-education__field">Electronics &amp; Telecommunication Engineering</p>
                <p className="about-education__school">Babasaheb Naik College of Engineering</p>
                <p className="about-education__year">Class of 2014</p>
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
