import React from "react";
import TechStack from "../TechStack/TechStack";
import "./about.css";

const About: React.FC = () => {
  return (
  <section id="about" className="about-section pt-12 sm:pt-20 bg-gray-900 text-white min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.2fr_0.95fr] gap-8 lg:gap-10 items-start">
          {/* Left Content */}
          <div className="space-y-4 about-copy-panel">
            <h2 className="about-title text-4xl md:text-5xl font-bold text-cyan-400">
              &lt;About Me /&gt;
            </h2>
            <p className="about-paragraph text-gray-300 text-lg leading-relaxed">
              Hi, I'm Sushant, a <span className="about-highlight">Senior Frontend Engineer</span> based in <span className="about-highlight-soft">Pune, India</span>. I build scalable, high-performance web applications and intuitive data experiences for enterprise teams.
            </p>

            <p className="about-paragraph text-gray-300 text-lg leading-relaxed">
              I specialize in developing <span className="about-highlight-soft">data-driven platforms</span> and analytics dashboards using <span className="about-highlight">React</span>, <span className="about-highlight">TypeScript</span>, <span className="about-highlight">Highcharts</span>, and modern frontend architectures. I focus on turning complex datasets into polished, interactive interfaces that support smarter business decisions.
            </p>

            <p className="about-paragraph text-gray-300 text-lg leading-relaxed">
              My background includes contributing to large-scale systems for global teams, with a focus on reliability, performance, and maintainable user experiences in enterprise products.
            </p>

            <p className="about-paragraph text-gray-300 text-lg leading-relaxed">
              I enjoy designing <span className="about-highlight-soft">clean UI architectures</span>, <span className="about-highlight-soft">reusable component systems</span>, and optimized frontend solutions that simplify complex workflows while keeping the interface accessible and engaging.
            </p>

            <div className="about-subsection pt-4 border-t border-gray-700">
              <p className="text-cyan-400 font-semibold text-lg mb-3">
                Where I've Worked:
              </p>
              <p className="about-paragraph text-gray-300 text-lg leading-relaxed">
                I have contributed to enterprise systems at <span className="about-highlight-soft">Agiliad</span>, <span className="about-highlight-soft">Synechron</span>, and <span className="about-highlight-soft">HSBC</span>, building applications used by global teams for analytics, monitoring, and business decision-making.
              </p>
            </div>

            {/* <div className="about-subsection pt-2">
              <p className="text-cyan-400 font-semibold text-lg mb-4">Beyond Work</p>
              <p className="about-paragraph text-gray-300 text-lg leading-relaxed">
                Outside of work, I enjoy exploring new frontend technologies, improving my technical skills, and learning about <span className="about-highlight-soft">system design</span> and <span className="about-highlight-soft">performance engineering</span>. I also enjoy movies, nature, and spending time away from screens to recharge and stay creative.
              </p>
            </div> */}
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-center mt-8 md:mt-2">
            <div className="about-image-wrap w-full max-w-md">
              <img
                src="/profile3.jpeg"
                alt="Profile"
                className="about-image w-full h-auto rounded-lg shadow-lg border border-cyan-400 border-opacity-30 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-cyan-300"
              />
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-20 md:mt-40 lg:mt-56">
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default About;
