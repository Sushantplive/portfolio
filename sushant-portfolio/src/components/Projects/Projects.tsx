import React, { useEffect, useMemo, useState } from "react";
import "./slider.css";
import { type Project, type ProjectCategory, projects } from "./projectsData";

type TabKey = "all" | ProjectCategory;

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: "all", label: "All Projects" },
  { key: "professional", label: "Professional" },
  { key: "personal", label: "Personal" },
];

function getProjectInitials(company: string): string {
  const words = company.replace(/[()]/g, " ").split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return `${words[0][0] ?? ""}${words[1][0] ?? ""}`.toUpperCase();
  }
  return (company.slice(0, 2) || "PR").toUpperCase();
}

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
    if (selectedCategory === "professional") return professionalProjects;
    if (selectedCategory === "personal") return personalProjects;
    return [...professionalProjects, ...personalProjects];
  }, [selectedCategory, professionalProjects, personalProjects]);

  const selectedProject = useMemo(
    () =>
      visibleProjects.find((project) => project.name === selectedProjectName) ??
      visibleProjects[0] ??
      projects[0],
    [selectedProjectName, visibleProjects],
  );

  useEffect(() => {
    if (!visibleProjects.some((project) => project.name === selectedProjectName)) {
      setSelectedProjectName(visibleProjects[0]?.name ?? "");
    }
  }, [selectedCategory, visibleProjects, selectedProjectName]);

  if (!selectedProject) {
    return null;
  }

  const hasLinks =
    (selectedProject.live && selectedProject.live !== "#") ||
    (selectedProject.github && selectedProject.github !== "#");

  const renderProjectButton = (project: Project) => {
    const isActive = project.name === selectedProject.name;
    return (
      <button
        key={project.name}
        type="button"
        className={`project-list-item ${isActive ? "project-list-item--active" : ""} ${
          project.category === "personal" ? "project-list-item--personal" : ""
        }`}
        onClick={() => setSelectedProjectName(project.name)}
        aria-pressed={isActive}
      >
        <div className="project-list-item__row">
          <div
            className={`project-list-item__avatar ${
              project.category === "personal" ? "project-list-item__avatar--personal" : ""
            }`}
            aria-hidden="true"
          >
            {getProjectInitials(project.company)}
          </div>
          <div className="project-list-item__body">
            <div className="project-list-item__top">
              <p className="project-list-item__name">{project.name}</p>
              <span
                className={`project-list-item__badge ${
                  project.category === "personal"
                    ? "project-list-item__badge--personal"
                    : "project-list-item__badge--pro"
                }`}
              >
                {project.category === "professional" ? "Pro" : "Personal"}
              </span>
            </div>
            <p className="project-list-item__company">{project.company}</p>
            <p className="project-list-item__impact">{project.impact}</p>
          </div>
        </div>
      </button>
    );
  };

  return (
    <section
      id="projects"
      className="projects-section py-12 sm:py-20 bg-gray-950/90 text-white min-h-screen flex flex-col justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="projects-header mb-8 md:mb-10">
          <div>
            <h2 className="projects-title text-4xl md:text-5xl font-extrabold text-cyan-300 mb-4">
              &lt;Projects /&gt;
            </h2>
            <p className="projects-intro text-lg max-w-2xl">
              Enterprise platforms delivered for global clients and personal full-stack projects
              built end-to-end.
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

        <div className="projects-stats">
          <div className="projects-stat">
            <span className="projects-stat__value">{professionalProjects.length}</span>
            <span className="projects-stat__label">Professional</span>
          </div>
          <div className="projects-stat">
            <span className="projects-stat__value">{personalProjects.length}</span>
            <span className="projects-stat__label">Personal</span>
          </div>
          <div className="projects-stat">
            <span className="projects-stat__value">{projects.length}</span>
            <span className="projects-stat__label">Total Projects</span>
          </div>
        </div>

        <div className="projects-layout">
          <aside className="projects-sidebar" aria-label="Project navigation">
            {(selectedCategory === "all" || selectedCategory === "professional") && (
              <div className="project-category-block">
                <p className="project-category-label">Professional Projects</p>
                <div className="projects-list">
                  {professionalProjects.map(renderProjectButton)}
                </div>
              </div>
            )}

            {(selectedCategory === "all" || selectedCategory === "personal") && (
              <div className="project-category-block">
                <p className="project-category-label project-category-label--personal">
                  Personal Projects
                </p>
                <div className="projects-list">
                  {personalProjects.map(renderProjectButton)}
                </div>
              </div>
            )}
          </aside>

          <article
            className={`project-detail-card ${
              selectedProject.category === "personal" ? "project-detail-card--personal" : ""
            }`}
          >
            <div className="project-card-top">
              <div className="project-card-top__main">
                <div className="project-card-top__identity">
                  <div
                    className={`project-detail-avatar ${
                      selectedProject.category === "personal"
                        ? "project-detail-avatar--personal"
                        : ""
                    }`}
                    aria-hidden="true"
                  >
                    {getProjectInitials(selectedProject.company)}
                  </div>
                  <div>
                    <p className="project-detail-card__eyebrow">Selected Project</p>
                    <h3 className="project-detail-card__title">{selectedProject.name}</h3>
                    <p className="project-detail-card__company">{selectedProject.company}</p>
                  </div>
                </div>
              </div>

              <div className="project-card-tags">
                <span
                  className={`project-card-tag ${
                    selectedProject.category === "personal"
                      ? "project-card-tag--personal"
                      : "project-card-tag--pro"
                  }`}
                >
                  {selectedProject.category === "professional" ? "Professional" : "Personal"}
                </span>
                {selectedProject.role ? (
                  <span className="project-card-tag project-card-tag--role">
                    {selectedProject.role}
                  </span>
                ) : null}
              </div>
            </div>

            <p className="project-detail-card__desc">{selectedProject.desc}</p>

            <div className="project-impact">
              <p className="project-impact__label">Impact</p>
              <p className="project-impact__text">{selectedProject.impact}</p>
            </div>

            <div className="project-tech">
              <p className="project-tech__label">Tech Stack</p>
              <div className="project-tech__chips">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="project-tech__chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-highlights-block">
              <p className="project-highlights-block__label">Key Contributions</p>
              <ul className="project-highlights" role="list">
                {selectedProject.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {hasLinks ? (
              <div className="project-card-actions">
                {selectedProject.live && selectedProject.live !== "#" ? (
                  <a
                    href={selectedProject.live}
                    className="project-link-button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                ) : null}
                {selectedProject.github && selectedProject.github !== "#" ? (
                  <a
                    href={selectedProject.github}
                    className="project-link-button project-link-button--secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
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
