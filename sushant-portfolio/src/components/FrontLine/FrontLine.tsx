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
      className="relative w-full min-h-screen h-screen py-0 pt-0 flex flex-col justify-center items-center text-center text-white bg-transparent overflow-hidden"
    >
      <div className="absolute inset-0 -z-20">
        <ParticleBackground />
      </div>
      <div className="relative z-10 hero-section">
        <h1 className="hero-title mb-4 sm:mb-6">
          hello, I’m <span className="text-cyan-400 font-bold">Sushant.</span>
        </h1>
        <p className="hero-desc mb-3 sm:mb-4">
          I am a <span className="text-cyan-400 font-semibold">Lead Software Engineer</span> based in <span className="text-cyan-400 font-semibold">Pune, India</span>, with a proven track record of delivering scalable, high-performance web applications. My expertise lies in modern JavaScript frameworks and crafting clean, maintainable UI architectures that deliver seamless user experiences.
        </p>
        <p className="hero-desc mb-4 sm:mb-6">
          I care deeply about code quality, performance, and long-term maintainability. I collaborate closely with
          designers, backend engineers, and product teams to transform complex ideas into reliable, user-friendly products that make a real impact.
        </p>
        <p className="hero-desc mb-4 sm:mb-6">
          I am passionate about building user-centric, high-performance web applications and solving complex challenges with elegant, scalable solutions.
        </p>
        <div className="hero-cta-group">
          {/* <a
            href="/Sushant_Paikarao_Resume.pdf"
            download="Sushant_Paikarao_Resume.pdf"
            className="hero-link-secondary text-base sm:text-lg"
          >
            💼 Download Resume
          </a> */}
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
