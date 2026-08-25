import React from "react";
import "./about.css";

const focusAreas = [
  "Enterprise Dashboards",
  "Data Visualization",
  "Product & SaaS UIs",
  "Frontend Leadership",
  "Component Systems",
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="about-section site-section py-12 sm:py-20 text-theme flex flex-col justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="about-title text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          &lt;About Me /&gt;
        </h2>
        <p className="about-intro text-lg mb-8 md:mb-10">
          I lead frontend architecture and delivery — mentoring engineers while still shipping the
          critical path myself.
        </p>

        <div className="about-layout">
          <div className="about-profile">
            <figure className="about-portrait">
              <div className="about-image-wrap">
                <img
                  src="/profile.png"
                  alt="Sushant Paikarao, Technology Lead"
                  className="about-image"
                  width={1024}
                  height={1024}
                  decoding="async"
                  fetchPriority="low"
                />
              </div>
              <figcaption className="about-profile-card">
                <p className="about-profile-card__name">Sushant Paikarao</p>
                <p className="about-profile-card__role">Technology Lead · Synechron</p>
                <p className="about-profile-card__location">
                  Based in Pune, India · Open to remote, hybrid, or on-site
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="about-copy-panel">
            <p className="about-lede">
              I build with{" "}
              <span className="about-highlight">React</span> and{" "}
              <span className="about-highlight">TypeScript</span>: analytics dashboards,
              chart-driven UIs, and reusable component systems that scale across product, SaaS, and
              enterprise teams.
            </p>

            <p className="about-paragraph">
              Across 8+ years at{" "}
              <span className="about-highlight">US Bank</span>,{" "}
              <span className="about-highlight">HSBC</span>, and{" "}
              <span className="about-highlight">HPE</span>, I&apos;ve shipped teller workflows, GPS
              Insights analytics (led a team of 8), and Highcharts telemetry dashboards. That
              experience transfers cleanly to any team that needs performant, reliable frontends.
            </p>

            <p className="about-paragraph about-paragraph--muted">
              I use AI coding tools (Copilot, Cursor, Windsurf) to move faster — architecture and
              code review stay human-led.
            </p>

            <div className="about-education">
              <p className="about-education__label">Education</p>
              <div className="about-education__card">
                <div className="about-education__main">
                  <h3 className="about-education__degree">Bachelor of Engineering (B.E.)</h3>
                  <p className="about-education__field">
                    Electronics &amp; Telecommunication Engineering
                  </p>
                  <p className="about-education__school">Babasaheb Naik College of Engineering</p>
                </div>
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
      </div>
    </section>
  );
};

export default About;
