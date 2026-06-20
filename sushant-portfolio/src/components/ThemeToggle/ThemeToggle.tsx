import React from "react";
import { useTheme } from "../../hooks/useTheme";
import "./themeToggle.css";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "", showLabel = false }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`theme-switch-wrap ${showLabel ? "theme-switch-wrap--labeled" : ""} ${className}`.trim()}>
      {showLabel ? <span className="theme-switch-wrap__label">Appearance</span> : null}
      <div
        className="theme-switch"
        role="group"
        aria-label="Color theme"
      >
        <button
          type="button"
          className={`theme-switch__option ${!isDark ? "theme-switch__option--active" : ""}`}
          onClick={() => setTheme("light")}
          aria-pressed={!isDark}
          aria-label="Light theme"
          title="Light mode"
        >
          <SunIcon />
          {showLabel ? <span>Light</span> : null}
        </button>
        <button
          type="button"
          className={`theme-switch__option ${isDark ? "theme-switch__option--active" : ""}`}
          onClick={() => setTheme("dark")}
          aria-pressed={isDark}
          aria-label="Dark theme"
          title="Dark mode"
        >
          <MoonIcon />
          {showLabel ? <span>Dark</span> : null}
        </button>
        <span
          className={`theme-switch__indicator ${isDark ? "theme-switch__indicator--dark" : "theme-switch__indicator--light"}`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
