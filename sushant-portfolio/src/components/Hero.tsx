import React from "react";
import ParticleBackground from "./ParticleBackground";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen py-20 flex flex-col justify-center items-center text-center text-white bg-transparent overflow-hidden"
      style={{ position: "relative", height: "100vh" }}
    >
      <div
        className="absolute inset-0 -z-20"
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
      >
        <ParticleBackground />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          hello, I&apos;m <span className="text-cyan-400">Sushant.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-300">
          Senior Frontend Engineer based in <span className="text-cyan-400">Pune, India</span>
        </p>
        <p className="text-gray-400 mb-8 leading-relaxed text-lg">
          With over 9 years of experience, I specialize in building scalable and high-performance web applications. I'm
          passionate about working with modern JavaScript frameworks and designing clean, maintainable UI architectures
          that create smooth and intuitive user experiences.
        </p>
        <p className="text-gray-400 mb-8 leading-relaxed text-lg">
          I care deeply about code quality, performance, and long-term maintainability. I work closely with designers,
          backend engineers, and product teams to transform complex ideas into reliable, user-friendly products that
          make a real impact.
        </p>
        <a
          href="#contact"
          className="inline-block bg-cyan-400 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-cyan-500 transition"
        >
          📫 Connect with me!
        </a>
      </div>
    </section>
  );
};

export default Hero;
