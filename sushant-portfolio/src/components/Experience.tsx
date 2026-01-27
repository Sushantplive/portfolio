import React, { useState } from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      id: "hsbc",
      company: "HSBC",
      role: "Frontend Lead",
      duration: "Jan 2023 - Present",
      responsibilities: [
        "Developed and maintained enterprise-grade web applications.",
        "Collaborated with cross-functional teams to deliver high-quality solutions.",
        "Implemented responsive designs and optimized performance."
      ]
    },
    {
      id: "synechron",
      company: "Synechron",
      role: "Software Engineer",
      duration: "Jul 2021 - Present",
      responsibilities: [
        "Designed and developed scalable front-end solutions.",
        "Enhanced user experience through innovative UI/UX designs.",
        "Conducted code reviews and ensured best practices."
      ]
    },
    {
      id: "agiliad",
      company: "Agiliad",
      role: "Software Engineer",
      duration: "Jul 2018 - Jun 2021",
      responsibilities: [
        "Developed scalable front-end solutions for enterprise applications.",
        "Collaborated with cross-functional teams to deliver high-quality software.",
        "Enhanced application performance and user experience."
      ]
    }
  ];

  const [selectedCompany, setSelectedCompany] = useState(experiences[0]);

  return (
    <section id="experience" className="py-16 bg-gray-900 bg-opacity-30 text-white min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">&lt;Experience /&gt;</h2>
        <p className="text-gray-400 text-lg mb-12">Professional roles and contributions</p>

        <div className="relative flex items-start space-x-8">
          {/* Left Side: Company Names */}
          <div className="w-1/4 flex flex-col space-y-4">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedCompany(exp)}
                className={`text-left px-4 py-2 font-semibold transition-all duration-300 rounded-lg border-l-4 shadow-md ${
                  selectedCompany.id === exp.id
                    ? "border-cyan-400 text-cyan-400 bg-gradient-to-r from-gray-800 to-gray-700"
                    : "border-transparent text-gray-400 hover:text-cyan-400 hover:bg-gray-800"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Right Side: Company Details */}
          <div className="relative w-3/4 p-8 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-lg border border-cyan-400 border-opacity-30 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 rounded-l-lg"></div>
            <h3 className="text-4xl font-extrabold text-cyan-400 mb-4">{selectedCompany.company}</h3>
            <p className="text-gray-300 text-xl font-semibold mb-2">{selectedCompany.role}</p>
            <p className="text-gray-400 text-sm mb-6 italic">{selectedCompany.duration}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              {selectedCompany.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">➤</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;