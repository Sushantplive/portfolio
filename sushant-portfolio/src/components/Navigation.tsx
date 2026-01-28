
import React, { useState, useEffect } from "react";
import "./navigation-responsive.css";

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "experience", "tech-stack", "projects", "contact"];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
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

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    // { id: "experience", label: "Experience" },
    // { id: "tech-stack", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`custom-nav fixed top-0 left-0 right-0 z-20 flex items-center justify-center transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900 bg-opacity-95 backdrop-blur-md border-b border-gray-700 shadow-lg shadow-cyan-500/10"
          : "bg-gray-900 bg-opacity-60 backdrop-blur-sm border-b border-gray-700/50"
      }`}
    >
      <div className="w-full max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo and Name */}
        <div
          className="custom-logo flex items-center flex-shrink-0 group cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <div className="bg-cyan-400 text-gray-900 font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full mr-2">
            SP
          </div>
          <span className="ml-2 text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition duration-300">
            Sushant
          </span>
        </div>

        {/* Nav Links */}
        <div className="custom-nav-links flex items-center space-x-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative px-3 py-1 text-sm font-medium transition-all duration-300 group flex items-center ${
                isActive(link.id)
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              {link.label}

              {/* Animated underline */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                  isActive(link.id) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="custom-nav-social flex items-center space-x-6">
          <a
            href="mailto:sushant.paikrao.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-3xl hover:scale-150 transform hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            title="Email"
          >
            ✉️
          </a>
          <a
            href="https://www.linkedin.com/in/sushantpaikarao/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-3xl font-extrabold hover:scale-150 transform hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            title="LinkedIn"
          >
            in
          </a>
          <a
            href="https://github.com/Sushantplive"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-3xl hover:scale-150 transform hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            title="GitHub"
          >
            🐙
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
