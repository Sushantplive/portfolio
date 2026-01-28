import React from "react";

const techIcons = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "ES6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Waypoint",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "REST APIs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original-wordmark.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Styled Components",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg",
  },
  {
    name: "jQuery",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  },
];

const TechStack: React.FC = () => {
  // Generate random positions for icons
  const getRandomPosition = (index: number) => {
    const angle = (index / techIcons.length) * 2 * Math.PI;
    const radius = 250; // Adjust radius to fit within the circle
    const x = Math.cos(angle) * radius + 300; // Centered within the 600px container
    const y = Math.sin(angle) * radius + 300;
    return { x, y };
  };

  return (
    <section
      id="tech-stack"
      className="py-16 text-white text-center bg-gray-900 bg-opacity-30 min-h-screen flex flex-col justify-center items-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            &lt;💡 Tech Stack /&gt;
          </span>
        </h2> */}

        {/* Floating Tech Icons Container */}
        <div
          className="flex justify-center items-center relative mx-auto bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-full shadow-lg mt-[-150px]"
          style={{ width: "600px", height: "600px" }}
        >
          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-cyan-400 text-4xl md:text-5xl font-extrabold animate-pulse">
              Tech Stack
            </div>
          </div>

          {/* Tech icons floating randomly */}
          {techIcons.map((tech, index) => {
            const { x, y } = getRandomPosition(index);

            return (
              <div
                key={tech.name}
                className="absolute group"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: "translate(-50%, -50%)",
                  animation: `randomMove ${5 + (index % 4) * 1}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-14 w-14 object-contain hover:scale-150 transition-transform duration-300 drop-shadow-xl"
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-cyan-400 text-gray-900 text-sm font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tech.name}
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
        @keyframes randomMove {
          0% {
            transform: translate(-50%, -50%) translateX(0) translateY(0);
          }
          25% {
            transform: translate(-50%, -50%) translateX(20px) translateY(-20px);
          }
          50% {
            transform: translate(-50%, -50%) translateX(-15px) translateY(20px);
          }
          75% {
            transform: translate(-50%, -50%) translateX(15px) translateY(-15px);
          }
          100% {
            transform: translate(-50%, -50%) translateX(0) translateY(0);
          }
        }
      `}</style>
      </div>
    </section>
  );
};

export default TechStack;
