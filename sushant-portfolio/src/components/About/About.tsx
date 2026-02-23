import React from "react";
import TechStack from "../TechStack/TechStack";

const About: React.FC = () => {
  return (
  <section id="about" className="pt-12 sm:pt-20 bg-gray-900 text-gray-900 min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
              &lt;About Me /&gt;
            </h2>

            {/* <p className="text-gray-300 text-lg leading-relaxed">
              Hi, I'm a passionate <span className="text-cyan-400 font-semibold">Senior Frontend Engineer</span> from Pune, India.<br />
              I thrive on crafting visually stunning, lightning-fast web experiences that delight users and drive business success.<br />
              My expertise lies in modern JavaScript frameworks and building clean, scalable UI architectures for enterprise-grade products.<br />
              Let's turn ideas into impactful digital solutions together!
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I've worked on complex, business-critical applications and enjoy collaborating with cross-functional teams<br />
              to transform ideas into reliable, user-centric solutions. My focus is always on performance,<br />
              maintainability, and clean code.
            </p> */}
            <p className="text-gray-300 text-lg leading-relaxed">
              Hi, I'm a <span className="text-cyan-400 font-semibold">Lead Software Engineer</span> from Pune, India,
              specializing in building scalable, high-performance web applications for enterprise environments.
              I design maintainable UI architectures that support long-term product growth, with a strong focus on
              performance optimization, clean code practices, and delivering seamless user experiences across complex systems.
              I collaborate closely with cross-functional teams to translate business requirements into reliable, production-ready solutions.
            </p>
{/* 
            I’m a Senior Frontend Engineer based in Pune, India, specializing in building scalable, high-performance web applications for enterprise environments.

My expertise lies in React and modern JavaScript ecosystems, where I design maintainable UI architectures that support long-term product growth. I focus on performance optimization, clean code practices, and delivering seamless user experiences across complex systems.

I collaborate closely with cross-functional teams to translate business requirements into reliable, production-ready solutions. */}

            <div className="pt-6 border-t border-gray-700">
              <p className="text-cyan-400 font-semibold text-lg mb-4">
                Where I've Worked:
              </p>
              {/* <p className="text-gray-300 text-lg leading-relaxed">
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
              </p> */}

              <p className="text-gray-300 text-lg leading-relaxed">
                I have contributed to large-scale enterprise systems at
                <span className="text-cyan-400 font-semibold"> Agiliad</span>,
                <span className="text-cyan-400 font-semibold"> Synechron</span>,
                and
                <span className="text-cyan-400 font-semibold">
                  {" "}
                  Hong Kong & Shanghai Banking Corporation (HSBC)
                </span>
                , working on high-performance, business-critical applications used across global teams.
              </p>
              {/* I have contributed to large-scale enterprise systems at Agiliad, Synechron, and HSBC, working on high-performance, business-critical applications used across global teams. */}
            </div>

            <p className="text-gray-300 text-lg leading-relaxed pt-4">
              Outside of work, I enjoy exploring new frontend trends, improving
              my technical skills, and spending quality time away from screens. I also love <span className="text-cyan-400 font-semibold">watching movies</span>, <span className="text-cyan-400 font-semibold">relaxing in nature</span>, and finding peace in quiet moments outdoors.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end mt-20">
            <div className="w-full max-w-sm">
              <img
                src="/profile3.jpeg"
                alt="Profile"
                className="w-full h-auto rounded-lg shadow-lg border border-cyan-400 border-opacity-30 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-cyan-300"
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
