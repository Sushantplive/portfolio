import React from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "HSBC",
      duration: "Jan 2023 - Present",
      responsibilities: [
        "Developed and maintained enterprise-grade web applications.",
        "Collaborated with cross-functional teams to deliver high-quality solutions.",
        "Implemented responsive designs and optimized performance."
      ]
    },
    {
      role: "Software Engineer",
      company: "Synechron",
      duration: "Jul 2020 - Dec 2022",
      responsibilities: [
        "Designed and developed scalable front-end solutions.",
        "Enhanced user experience through innovative UI/UX designs.",
        "Conducted code reviews and ensured best practices."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-900 bg-opacity-30 text-white min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">&lt;Experience /&gt;</h2>
        <p className="text-gray-400 text-lg mb-12">Professional roles and contributions</p>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="p-8 bg-gray-800 bg-opacity-50 rounded-lg border border-cyan-400 border-opacity-30 hover:border-opacity-60 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
            >
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">{exp.role}</h3>
              <p className="text-gray-300 text-lg font-semibold">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;