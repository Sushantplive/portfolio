import React, { useMemo, useState } from "react";
import "./slider.css";
import { type ProjectCategory, projects } from "./projectsData";

type TabKey = "all" | ProjectCategory;

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: "all", label: "All Projects" },
  { key: "professional", label: "Professional Projects" },
  { key: "personal", label: "Personal Projects" },
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TabKey>("all");
  const [selectedProjectName, setSelectedProjectName] = useState(projects[0]?.name ?? "");

  const professionalProjects = useMemo(
    () => projects.filter((project) => project.category === "professional"),
    [],
  );

  const personalProjects = useMemo(
    () => projects.filter((project) => project.category === "personal"),
    [],
  );

  const visibleProjects = useMemo(() => {
    if (selectedCategory === "professional") {
      return professionalProjects;
    }
    if (selectedCategory === "personal") {
      return personalProjects;
    }
    return [...professionalProjects, ...personalProjects];
  }, [selectedCategory, professionalProjects, personalProjects]);

  const selectedProject = useMemo(
    () =>
      visibleProjects.find((project) => project.name === selectedProjectName) ??
      visibleProjects[0] ??
      projects[0],
    [selectedProjectName, visibleProjects],
  );

  if (!selectedProject) {
    return null;
  }

  return (
    <section
      id="projects"
      className="projects-section py-2 pt-12 sm:pt-20 bg-gray-950 text-white min-h-screen flex flex-col justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="projects-header mb-8">
          <div>
            <h2 className="projects-title text-4xl md:text-5xl font-extrabold text-cyan-300 mb-4">
              &lt;Projects /&gt;
            </h2>
            <p className="text-cyan-100/80 text-lg max-w-2xl">
              A mix of enterprise-grade platforms I contributed to professionally and personal full-stack projects I built end-to-end.
            </p>
          </div>

          <div className="projects-tabs" role="tablist" aria-label="Project categories">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`projects-tab ${
                  selectedCategory === tab.key ? "projects-tab--active" : ""
                }`}
                onClick={() => setSelectedCategory(tab.key)}
                role="tab"
                aria-selected={selectedCategory === tab.key}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-layout">
          <aside className="projects-sidebar" aria-label="Project navigation">
            {(selectedCategory === "all" || selectedCategory === "professional") && (
              <div className="project-category-block">
                <p className="project-category-label">Professional Projects</p>
                <div className="projects-list">
                  {professionalProjects.map((project) => {
                    const isActive = project.name === selectedProject.name;
                    return (
                      <button
                        key={project.name}
                        type="button"
                        className={`project-list-item ${
                          isActive ? "project-list-item--active" : ""
                        }`}
                        onClick={() => setSelectedProjectName(project.name)}
                        aria-pressed={isActive}
                      >
                        <p className="project-list-item__name">{project.name}</p>
                        <p className="project-list-item__company">{project.company}</p>
                        <p className="project-list-item__impact">{project.impact}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {(selectedCategory === "all" || selectedCategory === "personal") && (
              <div className="project-category-block">
                <p className="project-category-label">Personal Projects</p>
                <div className="projects-list">
                  {personalProjects.map((project) => {
                    const isActive = project.name === selectedProject.name;
                    return (
                      <button
                        key={project.name}
                        type="button"
                        className={`project-list-item ${
                          isActive ? "project-list-item--active" : ""
                        }`}
                        onClick={() => setSelectedProjectName(project.name)}
                        aria-pressed={isActive}
                      >
                        <p className="project-list-item__name">{project.name}</p>
                        <p className="project-list-item__company">{project.company}</p>
                        <p className="project-list-item__impact">{project.impact}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>

          <article className="project-detail-card">
            <div className="project-card-top">
              <div>
                <p className="project-detail-card__eyebrow">Selected Project</p>
                <h3 className="text-3xl font-bold text-cyan-200 mb-2">
                  {selectedProject.name}
                </h3>
                <p className="text-cyan-50/90 text-lg font-semibold mb-2">
                  {selectedProject.company}
                </p>
              </div>
              <div className="project-card-tags">
                {selectedProject.labels?.map((label) => (
                  <span key={label} className="project-card-tag">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-cyan-50/90 text-base leading-relaxed mb-6">
              {selectedProject.desc}
            </p>

            <div className="project-card-meta-grid mb-6">
              {selectedProject.role && (
                <div className="project-card-meta">
                  <p className="project-card-meta__label">Role</p>
                  <p className="project-card-meta__value">{selectedProject.role}</p>
                </div>
              )}
              <div className="project-card-meta">
                <p className="project-card-meta__label">Tech Stack</p>
                <p className="project-card-meta__value">
                  {selectedProject.techStack.join(" • ")}
                </p>
              </div>
              <div className="project-card-meta">
                <p className="project-card-meta__label">Impact</p>
                <p className="project-card-meta__value">{selectedProject.impact}</p>
              </div>
            </div>

            <div className="project-impact mb-6">
              <p className="project-impact__label">Key Responsibilities</p>
              <ul className="project-highlights" role="list">
                {selectedProject.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {(selectedProject.live && selectedProject.live !== "#") || (selectedProject.github && selectedProject.github !== "#") ? (
              <div className="project-card-actions">
                {selectedProject.live && selectedProject.live !== "#" ? (
                  <a href={selectedProject.live} className="project-link-button" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                ) : null}
                {selectedProject.github && selectedProject.github !== "#" ? (
                  <a href={selectedProject.github} className="project-link-button project-link-button--secondary" target="_blank" rel="noreferrer">
                    GitHub Repo
                  </a>
                ) : null}
              </div>
            ) : null}
          </article>
        </div>

      </div>
    </section>
  );
};

export default Projects;
