import React from "react";
import ParticleBackground from "./ParticleBackground";

const Hero: React.FC = () => {
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
      className="relative w-full h-[90vh] py-12 flex flex-col justify-center items-center text-center text-white bg-transparent overflow-hidden"
    >
      <div className="absolute inset-0 -z-20">
        <ParticleBackground />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          hello, I’m <span className="text-cyan-400">Sushant.</span>
          {/* {text.includes("Sushant") ? (
            <>
              {text.replace("Sushant.", "")}
              <span className="text-cyan-400">Sushant</span>.
            </>
          ) : (
            text
          )} */}
        </h1>
        <p className="text-lg md:text-xl mb-4 text-gray-300 leading-relaxed">
          I am a <span className="text-cyan-400 font-semibold">Senior Frontend Engineer</span> based in <span className="text-cyan-400">Pune, India</span>, with over 8 years of experience in developing scalable, high-performance web applications. My expertise lies in modern JavaScript frameworks and crafting clean, maintainable UI architectures that deliver seamless user experiences.
        </p>
        <p className="text-gray-400 mb-6 leading-relaxed text-lg">
          I care deeply about code quality, performance, and long-term maintainability. I collaborate closely with
          designers, backend engineers, and product teams to transform complex ideas into reliable, user-friendly
          products that make a real impact.
        </p>
        <p className="text-gray-400 mb-6 leading-relaxed text-lg">
          I am passionate about building user-centric, high-performance web applications and solving complex
          challenges with elegant, scalable solutions.
        </p>
        <a
          href="#contact"
          className="inline-block bg-cyan-400 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-cyan-500 transition shadow-lg"
        >
          📫 Connect with me!
        </a>
      </div>
    </section>
  );
};

export default Hero;
