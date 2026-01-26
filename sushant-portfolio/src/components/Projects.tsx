import React from "react";

interface Project {
  name: string;
  desc: string;
  tech: string;
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    name: "React Dashboard",
    desc: "Enterprise-grade React dashboard with charts and responsive UI.",
    tech: "React, Tailwind, Redux",
    github: "#",
    live: "#",
  },
  {
    name: "E-commerce UI",
    desc: "Clean and modern e-commerce UI built with React and Tailwind.",
    tech: "React, Tailwind",
    github: "#",
    live: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 text-center px-4">
      <h2 className="text-3xl font-bold mb-12">🚀 Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="mt-2 text-gray-600">{proj.desc}</p>
            <p className="mt-2 text-sm font-mono">{proj.tech}</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
