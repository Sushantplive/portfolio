
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
        <div className="custom-nav-links flex items-center space-x-4 hidden md:flex flex-nowrap">
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
            href="mailto:sushant.paikarao.dev@gmail.com"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-3xl hover:scale-150 transform hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            title="Email"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
              <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm1.5 0v.638l8.25 5.775 8.25-5.775V6.75a.75.75 0 0 0-.75-.75h-15a.75.75 0 0 0-.75.75zm17.25 1.987-7.728 5.41a2.25 2.25 0 0 1-2.544 0L3 8.737v8.513a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V8.737z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/sushantpaikarao/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-3xl font-extrabold hover:scale-150 transform hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/>
            </svg>
          </a>
          <a
            href="https://github.com/Sushantplive"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-3xl hover:scale-150 transform hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            title="GitHub"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
