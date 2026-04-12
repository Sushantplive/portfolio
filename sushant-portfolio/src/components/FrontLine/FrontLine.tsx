import React from "react";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import "./frontLine.css";

const FrontLine: React.FC = () => {
  // const [text, setText] = useState("");
  // const fullText = "hello, I’m Sushant.";

  // useEffect(() => {
  //   let index = 0;
  //   const typingInterval = setInterval(() => {
  //     if (index < fullText.length) {
  //       setText(fullText.slice(0, index + 1));
  //       index++;
  //     } else {
  //       clearInterval(typingInterval);
  //     }
  //   }, 150); // Adjust typing speed here

  //   return () => clearInterval(typingInterval);
  // }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen h-screen py-0 pt-0 flex flex-col justify-center items-center text-center text-white bg-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 -z-0" aria-hidden="true">
        <ParticleBackground />
      </div>
      <div className="relative z-10 hero-section">
        <h1 className="hero-title mb-4 sm:mb-6">
          hello, I’m <span className="text-cyan-400 font-bold">Sushant.</span>
        </h1>
        <p className="hero-desc hero-tagline mb-3 sm:mb-4 text-cyan-300 font-semibold text-xl">
          Senior Frontend Engineer specializing in React and Data Visualization
        </p>
        <p className="hero-desc mb-4 sm:mb-6">
          I build enterprise-grade analytics products with modern frontend stacks, helping teams turn complex data into clear, actionable insights.
        </p>
        <p className="hero-desc mb-4 sm:mb-6">
          Focused on <span className="text-cyan-400 font-semibold">React, TypeScript, Highcharts, and D3.js</span>, I design fast, scalable interfaces and reusable component systems for performance-critical applications.
        </p>
        <div className="hero-skill-badges mb-6" aria-label="Core highlights">
          <span>8 Years Experience</span>
          <span>Enterprise Dashboards</span>
          <span>Data Visualization</span>
        </div>
        <div className="hero-cta-group">
          <a
            href="/Sushant_Paikarao_Frontend_dev.pdf"
            download="Sushant_Paikarao_Resume.pdf"
            className="hero-link-secondary text-base sm:text-lg"
          >
            💼 Download Resume
          </a>
          <a
            href="#contact"
            className="hero-link-secondary text-base sm:text-lg"
          >
            📫 Let’s Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default FrontLine;
