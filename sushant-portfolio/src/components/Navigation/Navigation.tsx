import React, { useState, useEffect } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./navigation-responsive.css";

const navLinks = [
  { id: "about", label: "About" },
  { id: "tech-stack", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const sectionIds = ["hero", ...navLinks.map((link) => link.id)];

const resumeLink = {
  href: "/Sushant_Paikarao_Resume.pdf",
  download: "Sushant_Paikarao_Resume.pdf",
  label: "Resume",
};

const socialLinks = [
  {
    href: "mailto:sushant.paikarao.dev@gmail.com",
    label: "Email",
    title: "Email",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
        <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm1.5 0v.638l8.25 5.775 8.25-5.775V6.75a.75.75 0 0 0-.75-.75h-15a.75.75 0 0 0-.75.75zm17.25 1.987-7.728 5.41a2.25 2.25 0 0 1-2.544 0L3 8.737v8.513a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V8.737z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/sushantpaikarao/",
    label: "LinkedIn",
    title: "LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/Sushantplive",
    label: "GitHub",
    title: "GitHub",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
      </svg>
    ),
  },
];

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 767px)").matches
      : false,
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
        const sectionId = sectionIds[index];
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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleViewportChange = (event: MediaQueryListEvent) => {
      setIsMobileViewport(event.matches);
      if (!event.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleViewportChange);
    return () => mediaQuery.removeEventListener("change", handleViewportChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen && isMobileViewport ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isMobileViewport]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (id: string) => activeSection === id;

  const renderNavLink = (link: (typeof navLinks)[number], mobile = false) => (
    <button
      key={link.id}
      type="button"
      onClick={() => scrollToSection(link.id)}
      className={`nav-link ${mobile ? "nav-link--mobile" : ""} ${
        isActive(link.id) ? "nav-link--active" : ""
      }`}
      aria-current={isActive(link.id) ? "page" : undefined}
    >
      {link.label}
      {!mobile ? (
        <span
          className={`nav-link__underline ${
            isActive(link.id) ? "nav-link__underline--active" : ""
          }`}
          aria-hidden="true"
        />
      ) : null}
    </button>
  );

  const renderResumeLink = (mobile = false) => (
    <a
      key="resume"
      href={resumeLink.href}
      download={resumeLink.download}
      className={`nav-link nav-link--resume ${mobile ? "nav-link--mobile" : ""}`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {resumeLink.label}
    </a>
  );

  return (
    <nav
      className={`custom-nav fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "custom-nav--scrolled" : ""
      }`}
    >
      <div className="custom-nav__bar w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div
          className="custom-logo flex items-center flex-shrink-0 group cursor-pointer"
          onClick={() => scrollToSection("hero")}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              scrollToSection("hero");
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Go to home"
        >
          <div className="bg-cyan-400 text-gray-900 font-bold text-xl w-10 h-10 flex items-center justify-center rounded-full mr-2">
            SP
          </div>
          <span className="ml-2 text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition duration-300">
            Sushant
          </span>
        </div>

        <div className="custom-nav-links">
          {navLinks.map((link) => renderNavLink(link))}
          {renderResumeLink()}
        </div>

        <div className="custom-nav-actions flex items-center gap-4">
          <ThemeToggle />
          <div className="custom-nav-social custom-nav-social--desktop">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="nav-social-link"
                title={link.title}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {isMobileViewport ? (
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className={`mobile-menu-toggle__bar ${isMobileMenuOpen ? "mobile-menu-toggle__bar--top-open" : ""}`} />
              <span className={`mobile-menu-toggle__bar ${isMobileMenuOpen ? "mobile-menu-toggle__bar--middle-open" : ""}`} />
              <span className={`mobile-menu-toggle__bar ${isMobileMenuOpen ? "mobile-menu-toggle__bar--bottom-open" : ""}`} />
            </button>
          ) : null}
        </div>
      </div>

      {isMobileViewport ? (
        <div
          id="mobile-nav-menu"
          className={`mobile-nav-panel ${isMobileMenuOpen ? "mobile-nav-panel--open" : ""}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="mobile-nav-panel__inner">
            <div className="mobile-nav-panel__links">
              {navLinks.map((link) => renderNavLink(link, true))}
              {renderResumeLink(true)}
            </div>

            <div className="mobile-nav-panel__theme">
              <ThemeToggle showLabel />
            </div>

            <div className="mobile-nav-panel__social">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mobile-nav-social-link"
                  title={link.title}
                  aria-label={link.label}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navigation;
