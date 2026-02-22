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
      "Leverage modern JavaScript (ES6+) to build modular, maintainable, and performance-optimized applications for production environments.",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description:
      "Use TypeScript to enforce strong typing, improve scalability, and enhance long-term maintainability across complex codebases.",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "Design scalable, component-driven architectures in React with optimized rendering strategies and reusable UI systems.",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description:
      "Build high-performance applications using SSR, SSG, and optimized routing strategies to improve SEO and user experience.",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description:
      "Develop lightweight, scalable backend services and APIs that integrate seamlessly with frontend systems.",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    description:
      "Implement scalable design systems and responsive UI architectures using utility-first CSS strategies.",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    description:
      "Manage complex application state using predictable data flows and scalable state management patterns.",
  },
  {
    name: "ES6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "Apply modern ES6+ features to write concise, modular, and performance-efficient code.",
  },
  {
    name: "jQuery",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    description:
      "Maintain and enhance legacy systems with stable, efficient DOM manipulation where required.",
  },
  {
    name: "Styled Components",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg",
    description:
      "Create dynamic, component-scoped styling solutions that improve reusability and maintainability.",
  },
  {
    name: "REST APIs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original-wordmark.svg",
    description:
      "Integrate and optimize RESTful APIs with robust error handling, authentication, and abstraction layers.",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description:
      "Follow structured version control workflows and collaborative branching strategies for team-based development.",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    description:
      "Deploy and manage scalable cloud-based applications with a focus on performance, reliability, and security.",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description:
      "Build semantic, accessible, and SEO-friendly foundations aligned with modern web standards.",
  },
  {
    name: "Waypoint",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "Implement performance-conscious scroll-triggered interactions while maintaining smooth user experiences.",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description:
      "Develop responsive, cross-browser UI systems with modern layout techniques and optimized styling strategies.",
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
    icon: "message",
    description:
      "Articulating technical concepts clearly to both technical and non-technical stakeholders",
    isEmoji: false,
  },
  {
    name: "Team Collaboration",
    icon: "users",
    description:
      "Working closely with designers, PMs, and backend engineers to deliver cohesive products",
    isEmoji: false,
  },
  {
    name: "Adaptability",
    icon: "arrows",
    description:
      "Quickly embracing new technologies, frameworks, and shifting project requirements",
    isEmoji: false,
  },
  {
    name: "Critical Thinking",
    icon: "idea",
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
    icon: "target",
    description:
      "Ensuring pixel-perfect UI, clean code, and thorough code reviews",
    isEmoji: false,
  },
  {
    name: "Leadership",
    icon: "flag",
    description:
      "Mentoring junior developers and driving technical direction within the team",
    isEmoji: false,
  },
  {
    name: "Ownership",
    icon: "shield",
    description:
      "Taking end-to-end responsibility for features from design to production",
    isEmoji: false,
  },
  {
    name: "Empathy",
    icon: "heart",
    description:
      "Understanding user needs and translating them into intuitive, accessible experiences",
    isEmoji: false,
  },
];

const softSkillSvgs: Record<string, React.ReactNode> = {
  puzzle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="w-full h-full">
      <path d="M20 13.5V18a2 2 0 0 1-2 2h-4.5v-2a1.5 1.5 0 1 0-3 0v2H6a2 2 0 0 1-2-2v-4.5h2a1.5 1.5 0 1 0 0-3H4V6a2 2 0 0 1 2-2h4.5v2a1.5 1.5 0 1 0 3 0V4H18a2 2 0 0 1 2 2v4.5h-2a1.5 1.5 0 1 0 0 3H20Z" />
    </svg>
  ),
  message: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="w-full h-full">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v7A2.5 2.5 0 0 1 17.5 15H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 12.5v-7Z" />
      <circle cx="9" cy="9" r="1" />
      <circle cx="12" cy="9" r="1" />
      <circle cx="15" cy="9" r="1" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="w-full h-full">
      <circle cx="9" cy="8" r="2.5" />
      <circle cx="16" cy="9" r="2" />
      <path d="M4 18c0-2.5 2.2-4 5-4s5 1.5 5 4" />
      <path d="M14 18c.2-1.7 1.6-2.8 3.5-2.8S21 16.3 21 18" />
    </svg>
  ),
  arrows: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="w-full h-full">
      <path d="M4 7h11" />
      <path d="m12 3 4 4-4 4" />
      <path d="M20 17H9" />
      <path d="m12 13-4 4 4 4" />
    </svg>
  ),
  idea: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="w-full h-full">
      <path d="M12 3a6 6 0 0 0-3.7 10.7c.9.7 1.5 1.7 1.7 2.8h4c.2-1.1.8-2.1 1.7-2.8A6 6 0 0 0 12 3Z" />
      <path d="M10 20h4" />
      <path d="M10.5 17.5h3" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="w-full h-full">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="w-full h-full">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  flag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="w-full h-full">
      <path d="M6 21V4" />
      <path d="M6 5h10l-2 3 2 3H6" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="w-full h-full">
      <path d="M12 3 5 6v6c0 4.8 3 7.7 7 9 4-1.3 7-4.2 7-9V6l-7-3Z" />
      <path d="m9.5 12 2 2 3-3" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="w-full h-full">
      <path d="M12 20s-6.5-4.5-8.5-8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.5 6c-2 3.5-8.5 8-8.5 8Z" />
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
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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
          const isHovered = hoveredSkill === skill.name;

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
                animationPlayState: isHovered ? "paused" : "running",
                animationDelay: `${index * 0.2}s`,
                zIndex: isActive ? 20 : 1,
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
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
