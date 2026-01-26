import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4">
      <h1 className="text-5xl font-bold">
        Hi, I'm <span className="text-blue-600">Sushant Paikrao</span>
      </h1>
      <p className="mt-4 text-xl">Senior Frontend Developer | React Specialist</p>
      <div className="mt-6 flex space-x-4">
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Hire Me
        </a>
        <a
          href="/resume.pdf"
          className="bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 transition"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
