import React from "react";
import TechStack from "./TechStack";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 bg-opacity-30 text-white min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
              &lt;About Me /&gt;
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a{" "}
              <span className="text-cyan-400 font-semibold">
                Senior Frontend Engineer
              </span>{" "}
              based in Pune, India, with over 8 years of experience building
              scalable and high-performance web applications. I specialize in
              modern JavaScript frameworks and clean UI architecture for
              enterprise-grade products.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I've worked on complex, business-critical applications and enjoy
              collaborating with cross-functional teams to transform ideas into
              reliable, user-centric solutions. My focus is always on
              performance, maintainability, and clean code.
            </p>

            <div className="pt-6 border-t border-gray-700">
              <p className="text-cyan-400 font-semibold text-lg mb-4">
                Where I've Worked:
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I've had the privilege of working with notable organizations
                such as
                <span className="text-cyan-400 font-semibold"> Agiliad</span>,
                <span className="text-cyan-400 font-semibold"> Synechron</span>,
                and
                <span className="text-cyan-400 font-semibold">
                  {" "}
                  Hong Kong & Shanghai Banking Corporation (HSBC)
                </span>
                , where I've contributed to building scalable solutions and
                driving innovation across diverse teams.
              </p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed pt-4">
              Outside of work, I enjoy exploring new frontend trends, improving
              my technical skills, and spending quality time away from screens.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end mt-20">
            <div className="w-full max-w-sm">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-auto rounded-lg shadow-lg border border-cyan-400 border-opacity-30"
              />
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <TechStack />
      </div>
    </section>
  );
};

export default About;
