import React, { useEffect, useState } from "react";

interface Skill {
  name: string;
  icon: string;
  description: string;
  isEmoji?: boolean;
}

const techIcons: Skill[] = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "Modern JavaScript (ES6+) - Modular, maintainable code practices",
  },
  
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description:
      "React.js & TypeScript - Scalable component architecture and type-safe development",
  },
 
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "React.js & TypeScript - Scalable component architecture and type-safe development",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description:
      "Next.js - SSR/CSR optimization and performance-focused rendering strategies",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description:
      "Server-side JavaScript runtime for scalable backend services and APIs",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    description:
      "Utility-first CSS framework for rapid, consistent UI development",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    description: "State Management - Redux Toolkit, Context API",
  },
   {
    name: "ES6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "Modern JavaScript (ES6+) - Modular, maintainable code practices",
  },
  {
    name: "jQuery",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    description: "DOM manipulation and legacy front-end scripting",
  },
  {
    name: "Styled Components",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg",
    description: "CSS-in-JS for scoped, dynamic component-level styling",
  },
  {
    name: "REST APIs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original-wordmark.svg",
    description: "RESTful API design, integration, and testing with Postman",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description:
      "Version control, branching strategies, and collaborative workflows",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    description:
      "Cloud deployment, S3, CloudFront, and serverless architecture",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description:
      "Semantic markup, accessibility standards, and SEO best practices",
  },
  {
    name: "Waypoint",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Scroll-based animation and intersection observer utility",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description: "Responsive layouts, animations, Flexbox, and CSS Grid",
  },
  
];

const softSkills: Skill[] = [
  {
    name: "Problem Solving",
    icon: "puzzle",
    description:
      "Breaking down complex problems into clear, actionable solutions",
    isEmoji: false,
  },
  {
    name: "Communication",
    icon: "speech",
    description:
      "Articulating technical concepts clearly to both technical and non-technical stakeholders",
    isEmoji: false,
  },
  {
    name: "Team Collaboration",
    icon: "handshake",
    description:
      "Working closely with designers, PMs, and backend engineers to deliver cohesive products",
    isEmoji: false,
  },
  {
    name: "Adaptability",
    icon: "refresh",
    description:
      "Quickly embracing new technologies, frameworks, and shifting project requirements",
    isEmoji: false,
  },
  {
    name: "Critical Thinking",
    icon: "brain",
    description:
      "Evaluating trade-offs and making informed architectural decisions under pressure",
    isEmoji: false,
  },
  {
    name: "Time Management",
    icon: "clock",
    description:
      "Prioritizing tasks effectively to meet deadlines without compromising quality",
    isEmoji: false,
  },
  {
    name: "Attention to Detail",
    icon: "search",
    description:
      "Ensuring pixel-perfect UI, clean code, and thorough code reviews",
    isEmoji: false,
  },
  {
    name: "Leadership",
    icon: "rocket",
    description:
      "Mentoring junior developers and driving technical direction within the team",
    isEmoji: false,
  },
  {
    name: "Ownership",
    icon: "trophy",
    description:
      "Taking end-to-end responsibility for features from design to production",
    isEmoji: false,
  },
  {
    name: "Empathy",
    icon: "lightbulb",
    description:
      "Understanding user needs and translating them into intuitive, accessible experiences",
    isEmoji: false,
  },
];

const softSkillSvgs: Record<string, React.ReactNode> = {
  puzzle: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-full h-full"
    >
      <path d="M20.5 14.5c0 1.1-.9 2-2 2s-2-.9-2-2v-1h-3v3h-1c-1.1 0-2-.9-2-2s.9-2 2-2h1V9h-3V8c0-1.1.9-2 2-2s2 .9 2 2v1h3V6a2 2 0 012 2v6.5z" />
      <rect x="3" y="9" width="7" height="7" rx="1" />
    </svg>
  ),
  speech: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-full h-full"
    >
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  handshake: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-full h-full"
    >
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  ),
  refresh: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-full h-full"
    >
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
    </svg>
  ),
  brain: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-full h-full"
    >
      <path d="M12 3c-1.5 0-3 .9-3.5 2.2A3.5 3.5 0 005 9c0 .8.2 1.5.6 2.1A3.5 3.5 0 007 17.5V20h10v-2.5a3.5 3.5 0 001.4-5.4c.4-.6.6-1.3.6-2.1a3.5 3.5 0 00-3.5-3.8C15 4.9 13.5 3 12 3z" />
    </svg>
  ),
  clock: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-full h-full"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  search: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-full h-full"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  rocket: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-full h-full"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  trophy: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-full h-full"
    >
      <polyline points="8 21 12 21 16 21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M7 4H17v6a5 5 0 01-10 0V4z" />
      <path d="M17 6h3v3a3 3 0 01-3 3" />
      <path d="M7 6H4v3a3 3 0 003 3" />
    </svg>
  ),
  lightbulb: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-full h-full"
    >
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" />
    </svg>
  ),
};

interface SkillCircleProps {
  title: string;
  skills: Skill[];
  accentColor: string;
  size: number;
}

const SkillCircle: React.FC<SkillCircleProps> = ({
  title,
  skills,
  accentColor,
  size,
}) => {
  const [selected, setSelected] = useState<Skill | null>(null);

  const accent =
    accentColor === "purple"
      ? {
          text: "text-purple-400",
          border: "border-purple-600",
          glow: "rgba(168,85,247,0.8)",
          tooltip: "bg-purple-400",
          stroke: "#c084fc",
        }
      : {
          text: "text-cyan-400",
          border: "border-cyan-600",
          glow: "rgba(34,211,238,0.8)",
          tooltip: "bg-cyan-400",
          stroke: "#22d3ee",
        };

  const iconSize = Math.max(24, size * 0.065);

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex justify-center items-center relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-full shadow-lg"
        style={{ width: size, height: size, minWidth: 200, minHeight: 200 }}
      >
        {/* Center panel */}
        <div
          className="absolute flex items-center justify-center z-10 cursor-pointer"
          style={{ width: size * 0.52, height: size * 0.52 }}
          onClick={() => setSelected(null)}
        >
          {selected ? (
            <div
              className="flex flex-col items-center justify-center text-center select-none gap-1"
              style={{ padding: size * 0.025 }}
            >
              {selected.isEmoji === false && softSkillSvgs[selected.icon] ? (
                <div
                  style={{
                    width: size * 0.09,
                    height: size * 0.09,
                    color: accent.stroke,
                  }}
                  className="mb-1"
                >
                  {softSkillSvgs[selected.icon]}
                </div>
              ) : (
                <img
                  src={selected.icon}
                  alt={selected.name}
                  style={{ width: size * 0.07, height: size * 0.07 }}
                  className="object-contain mb-1"
                />
              )}
              <p
                className={`${accent.text} font-extrabold tracking-wide leading-tight`}
                style={{ fontSize: Math.max(11, size * 0.034) }}
              >
                {selected.name}
              </p>
              <div className={`w-8 border-t ${accent.border} my-1`} />
              <p
                className="text-gray-100 font-semibold leading-relaxed bg-black/30 rounded-md px-2 py-1"
                style={{
                  fontSize: Math.max(10, size * 0.03),
                  lineHeight: 1.55,
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.6)",
                }}
              >
                {selected.description}
              </p>
              <p
                className="text-gray-500 mt-1 italic"
                style={{ fontSize: Math.max(8, size * 0.019) }}
              >
                tap to close
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-1">
              <div
                className={`${accent.text} font-extrabold animate-pulse tracking-wider`}
                style={{ fontSize: Math.max(12, size * 0.062) }}
              >
                {title}
              </div>
              <p
                className="text-gray-500 italic"
                style={{ fontSize: Math.max(8, size * 0.022) }}
              >
                click an icon
              </p>
            </div>
          )}
        </div>

        {/* Orbiting icons */}
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI;
          const radius = size / 2 - 36;
          const xPos = Math.cos(angle) * radius + size / 2;
          const yPos = Math.sin(angle) * radius + size / 2;
          const isActive = selected?.name === skill.name;

          return (
            <div
              key={skill.name}
              className="absolute group cursor-pointer"
              style={{
                left: `${xPos}px`,
                top: `${yPos}px`,
                transform: "translate(-50%, -50%)",
                animation: isActive
                  ? "none"
                  : `randomMove ${5 + (index % 4)}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
                zIndex: isActive ? 20 : 1,
              }}
              onClick={() =>
                setSelected((prev) =>
                  prev?.name === skill.name ? null : skill,
                )
              }
            >
              {skill.isEmoji === false && softSkillSvgs[skill.icon] ? (
                <div
                  className={`transition-transform duration-300 ${isActive ? "scale-150" : "hover:scale-150"}`}
                  style={{
                    width: iconSize,
                    height: iconSize,
                    color: accent.stroke,
                    filter: isActive
                      ? `drop-shadow(0 0 8px ${accent.glow})`
                      : undefined,
                  }}
                >
                  {softSkillSvgs[skill.icon]}
                </div>
              ) : (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`object-contain transition-transform duration-300 drop-shadow-xl ${isActive ? "scale-150" : "hover:scale-150"}`}
                  style={{
                    width: iconSize,
                    height: iconSize,
                    filter: isActive
                      ? `drop-shadow(0 0 10px ${accent.glow})`
                      : undefined,
                  }}
                />
              )}
              <div
                className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 ${accent.tooltip} text-gray-900 text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}
              >
                {skill.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Hint */}
      <p
        className={`mt-4 text-xs text-gray-400 italic flex items-center gap-1 transition-opacity duration-500 ${
          selected ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <span className={accent.text}>&#9757;</span> Click an icon for details
      </p>
    </div>
  );
};

const TechStack: React.FC = () => {
  const [circleSize, setCircleSize] = useState(320);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1024) setCircleSize(380);
      else if (window.innerWidth >= 768) setCircleSize(320);
      else if (window.innerWidth >= 640) setCircleSize(280);
      else setCircleSize(250);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section
      id="tech-stack"
      className="py-8 text-white text-center bg-gray-900 bg-opacity-30 flex flex-col justify-center items-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-center items-start gap-10 sm:gap-6 lg:gap-16 md:mt-[-150px] mt-8">
          <SkillCircle
            title="Tech Stack"
            skills={techIcons}
            accentColor="cyan"
            size={circleSize}
          />
          <SkillCircle
            title="Soft Skills"
            skills={softSkills}
            accentColor="purple"
            size={circleSize}
          />
        </div>
      </div>

      <style>{`
        @keyframes randomMove {
          0%   { transform: translate(-50%, -50%) translateX(0)     translateY(0);     }
          25%  { transform: translate(-50%, -50%) translateX(20px)  translateY(-20px); }
          50%  { transform: translate(-50%, -50%) translateX(-15px) translateY(20px);  }
          75%  { transform: translate(-50%, -50%) translateX(15px)  translateY(-15px); }
          100% { transform: translate(-50%, -50%) translateX(0)     translateY(0);     }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
