import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["hero", "about", "tech-stack", "projects", "contact"];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
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

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
      isScrolled
        ? "bg-gray-900 bg-opacity-95 backdrop-blur-md border-b border-gray-700 shadow-lg shadow-cyan-500/10"
        : "bg-gray-900 bg-opacity-60 backdrop-blur-sm border-b border-gray-700/50"
    }`}>
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-center">
          {/* Name - Left of Center */}
          <div className="flex-shrink-0 group cursor-pointer mr-12" onClick={() => scrollToSection("hero")}>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition duration-300">
              Sushant
            </span>
          </div>

          {/* Center - Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
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

          {/* Social Icons - Right of Center */}
          <div className="flex items-center space-x-5 ml-12">
            <a
              href="mailto:sushant.paikrao.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 text-lg hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
              title="Email"
            >
              ✉️
            </a>
            <a
              href="https://www.linkedin.com/in/sushantpaikarao/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 text-lg font-bold hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="https://github.com/Sushantplive"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 text-lg hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
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
