import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "tech-stack", "projects", "contact"];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (id: string) => activeSection === id;

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-gray-900 bg-opacity-80 backdrop-blur-md border-b border-gray-700">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-cyan-400">Sushant</span>
          </div>

          {/* Center - Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className={`transition duration-300 pb-2 border-b-2 ${
                isActive("hero")
                  ? "text-cyan-400 border-cyan-400"
                  : "text-gray-300 hover:text-cyan-400 border-transparent"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition duration-300 pb-2 border-b-2 ${
                isActive("about")
                  ? "text-cyan-400 border-cyan-400"
                  : "text-gray-300 hover:text-cyan-400 border-transparent"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("tech-stack")}
              className={`transition duration-300 pb-2 border-b-2 ${
                isActive("tech-stack")
                  ? "text-cyan-400 border-cyan-400"
                  : "text-gray-300 hover:text-cyan-400 border-transparent"
              }`}
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`transition duration-300 pb-2 border-b-2 ${
                isActive("projects")
                  ? "text-cyan-400 border-cyan-400"
                  : "text-gray-300 hover:text-cyan-400 border-transparent"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition duration-300 pb-2 border-b-2 ${
                isActive("contact")
                  ? "text-cyan-400 border-cyan-400"
                  : "text-gray-300 hover:text-cyan-400 border-transparent"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="mailto:sushant.paikrao.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition duration-300 text-lg"
              title="Email"
            >
              ✉️
            </a>
            <a
              href="https://www.linkedin.com/in/sushantpaikarao/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition duration-300 text-lg font-bold"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition duration-300 text-lg"
              title="GitHub"
            >
              🐙
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
