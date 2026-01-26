import React from "react";

interface Tech {
  src: string;
  alt: string;
}

const techs: Tech[] = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg", alt: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg", alt: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", alt: "Redux" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg", alt: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original-wordmark.svg", alt: "REST APIs" },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-24 text-white text-center bg-gray-900 bg-opacity-30 min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-8">💡 Tech Stack</h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {techs.map((tech, i) => (
          <img
            key={i}
            src={tech.src}
            alt={tech.alt}
            className="h-12 hover:scale-110 transition-transform opacity-80 hover:opacity-100"
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
