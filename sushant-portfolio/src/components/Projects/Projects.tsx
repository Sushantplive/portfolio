import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; // Custom styles for arrows

interface Project {
  name: string;
  company: string;
  desc: string;
  impact: string;
  tech: string[];
  highlights: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    name: "Omnia",
    company: "HSBC",
    desc: "A strategic platform designed to provide client analytics for HSBC's Commercial Banking operations (CIB, UK, HK). Key functions included understanding client value, informing client engagement, and aiding investor disclosure through a unified view of domestic and global client relationships.",
    impact:
      "Delivered enterprise-grade analytics platform serving multiple markets",
    tech: [
      "React.js",
      "TypeScript",
      "D3.js",
      "Jest",
      "styled-components",
      "react-testing-library",
      "OMNIA-UI-Library",
      "React Context API",
      "Git",
      "Webpack",
      "Jenkins CI/CD",
    ],
    highlights: [
      "Spearheaded end-to-end development of complex web application",
      "Engineered highly interactive data visualizations with D3.js",
      "Managed state efficiently using React Context API",
      "Owned complete feature delivery lifecycle (analysis → deployment)",
      "Developed comprehensive unit tests with Jest framework",
      "Led frontend development team with technical mentorship",
      "Diagnosed and resolved critical 'cyberflow' issues",
      "Executed deployments across Dev, Staging, UAT, and Production",
    ],
    github: "#",
    live: "#",
  },
  {
    name: "Global Trade and Receivables Finance",
    company: "Synechron",
    desc: "Engineered key front-end modules for a mission-critical banking application using ReactJS, facilitating the issuance of customer guarantees and streamlining internal operations. Contributed to stability and performance through defect resolution and feature development across multiple releases.",
    impact:
      "Delivered critical financial modules supporting customer guarantees and AR operations",
    tech: [
      "React.js",
      "Javascript (ES6+)",
      "REST APIs",
      "Jest",
      "Jira",
      "SonarQube",
      "Jenkins CI/CD",
    ],
    highlights: [
      "Engineered key front-end modules for mission-critical banking application",
      "Identified and resolved complex defects for Release 8 ensuring high code quality",
      "Spearheaded development of UIs for 5 core Accounts Receivable user stories (Release 9)",
      "Integrated RESTful APIs enhancing system functionality for financial processes",
      "Managed full feature lifecycle: development, testing, QA, and deployment",
      "Addressed SonarQube issues improving code quality and maintainability",
      "Participated in deployment activities ensuring stable releases",
      "Facilitated issuance of customer guarantees streamlining internal operations",
    ],
    github: "#",
    live: "#",
  },
  {
    name: "InfoSight Integration",
    company: "HPE (Agiliad)",
    desc: "HPE's solution for managing infrastructure powered by artificial intelligence and capable of predicting potential problems. The predictive analytics platform processes millions of data points constantly from companies worldwide. InfoSight automatically predicts and resolves 86% of infrastructure issues, enabling increased application availability and reduced operational costs.",
    impact:
      "AI-driven platform automating 86% of infrastructure issue resolution globally",
    tech: [
      "React.js",
      "Javascript (ES6+)",
      "Component Libraries",
      "Jest",
      "react-testing-library",
      "Git",
      "Redux",
      "REST APIs",
      "Predictive Analytics",
    ],
    highlights: [
      "Spearheaded development of AI-driven predictive analytics platform",
      "Engineered reusable components and front-end libraries",
      "Significantly improved development efficiency and project scalability",
      "Translated complex designs and wireframes into high-quality code",
      "Contributed to platform reliability and performance optimization",
      "Collaborated with cross-functional teams on feature definition and design",
      "Integrated user-facing elements with server-side logic seamlessly",
      "Stayed current with emerging technologies and industry trends",
    ],
    github: "#",
    live: "#",
  },
];

const Projects: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section
      id="projects"
      className="py-2 pt-12 sm:pt-20 bg-gray-900 bg-opacity-30 text-white min-h-screen flex flex-col justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4">
          &lt;Projects /&gt;
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Featured works and impactful solutions
        </p>

        <Slider {...sliderSettings}>
          {projects.map((proj, i) => (
            <div
              key={i}
              className="p-8 bg-gray-800 bg-opacity-50 rounded-lg border border-cyan-400 border-opacity-30 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400 mb-2">
                    {proj.name}
                  </h3>
                  <p className="text-gray-300 text-lg font-semibold">
                    {proj.company}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {proj.desc}
              </p>

              <div className="mb-6 p-6 bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-20 border-l-8 border-cyan-400 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="text-cyan-100 font-bold text-sm uppercase tracking-wider mb-2">
                  Impact
                </p>
                <p className="text-white text-lg font-medium leading-relaxed">
                  {proj.impact}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-cyan-300 rounded-full text-sm font-mono border border-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
