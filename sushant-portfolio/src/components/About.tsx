import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 bg-opacity-30 text-white px-4 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
              &lt;About Me /&gt;
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a <span className="text-cyan-400 font-semibold">Senior Frontend Engineer</span> based in Pune, India, with
              over 9 years of experience building scalable and high-performance web
              applications. I specialize in modern JavaScript frameworks and clean
              UI architecture for enterprise-grade products.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I've worked on complex, business-critical applications and enjoy
              collaborating with cross-functional teams to transform ideas into
              reliable, user-centric solutions. My focus is always on performance,
              maintainability, and clean code.
            </p>

            <p className="text-cyan-400 font-semibold text-lg pt-4">
              Here are some technologies I've been working with:
            </p>

            <ul className="grid grid-cols-2 gap-3 text-gray-300">
              <li className="text-lg">▸ JavaScript (ES6+)</li>
              <li className="text-lg">▸ TypeScript</li>
              <li className="text-lg">▸ React.js</li>
              <li className="text-lg">▸ Next.js</li>
              <li className="text-lg">▸ Redux / Zustand</li>
              <li className="text-lg">▸ Tailwind CSS</li>
              <li className="text-lg">▸ Styled Components</li>
              <li className="text-lg">▸ REST APIs</li>
              <li className="text-lg">▸ Git & CI/CD</li>
            </ul>

            <p className="text-gray-300 text-lg leading-relaxed pt-4">
              Outside of work, I enjoy exploring new frontend trends, improving my
              technical skills, and spending quality time away from screens.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-auto rounded-lg shadow-lg border border-cyan-400 border-opacity-30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
