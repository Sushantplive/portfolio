import React, { useMemo, useState } from "react";
import "./slider.css";
import "./enterpriseProof.css";
import "./personalShowcase.css";
import EnterpriseProofPanel from "./EnterpriseProof";
import PersonalProjectShowcase from "./PersonalProjectShowcase";
import { type Project, type ProjectCategory, projects } from "./projectsData";

type TabKey = "all" | ProjectCategory;

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: "all", label: "All Projects" },
  { key: "professional", label: "Professional" },
  { key: "personal", label: "Personal" },
];

const MAX_HIGHLIGHTS = 3;
const MAX_METRICS = 3;
const MAX_VISIBLE_TECH = 8;

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TabKey>("all");
  const [selectedProjectName, setSelectedProjectName] = useState(projects[0]?.name ?? "");
  const [showAllTech, setShowAllTech] = useState(false);
  const [showAllHighlights, setShowAllHighlights] = useState(false);

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

  if (!selectedProject) {
    return null;
  }

  const hasLinks =
    (selectedProject.live && selectedProject.live !== "#") ||
    (selectedProject.github && selectedProject.github !== "#");

  const selectProject = (name: string) => {
    setSelectedProjectName(name);
    setShowAllTech(false);
    setShowAllHighlights(false);
  };

  const renderProjectButton = (project: Project) => {
    const isActive = project.name === selectedProject.name;
    return (
      <button
        key={project.name}
        type="button"
        className={`project-list-item ${isActive ? "project-list-item--active" : ""} ${
          project.category === "personal" ? "project-list-item--personal" : ""
        }`}
        onClick={() => selectProject(project.name)}
        aria-pressed={isActive}
      >
        <p className="project-list-item__name">{project.name}</p>
        <p className="project-list-item__company">{project.company}</p>
      </button>
    );
  };

  const visibleTech = showAllTech
    ? selectedProject.techStack
    : selectedProject.techStack.slice(0, MAX_VISIBLE_TECH);
  const hiddenTechCount = selectedProject.techStack.length - MAX_VISIBLE_TECH;

  return (
    <section id="projects" className="projects-section site-section py-10 sm:py-14 text-theme">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="projects-header mb-8 md:mb-10">
          <div>
            <h2 className="projects-title text-4xl md:text-5xl font-extrabold text-cyan-300 mb-4">
              &lt;Projects /&gt;
            </h2>
            <p className="projects-intro text-lg max-w-2xl">
              Enterprise and personal builds — select a project for details.
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
                onClick={() => {
                  setSelectedCategory(tab.key);
                  setShowAllTech(false);
                  setShowAllHighlights(false);
                }}
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
            className={`project-detail-card project-detail-card--brief ${
              selectedProject.category === "personal" ? "project-detail-card--personal" : ""
            }`}
          >
            <div className="project-brief-top">
              <div className="project-brief-top__copy">
                <h3 className="project-detail-card__title">{selectedProject.name}</h3>
                <p className="project-detail-card__company">{selectedProject.company}</p>
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

              {hasLinks ? (
                <div className="project-card-actions project-card-actions--inline">
                  {selectedProject.live && selectedProject.live !== "#" ? (
                    <a
                      href={selectedProject.live}
                      className="project-link-button project-link-button--small"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  ) : null}
                  {selectedProject.github && selectedProject.github !== "#" ? (
                    <a
                      href={selectedProject.github}
                      className="project-link-button project-link-button--secondary project-link-button--small"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>

            <p className="project-detail-card__desc">{selectedProject.desc}</p>

            <div className="project-tech project-tech--compact">
              <p className="project-tech__label">Tech Stack</p>
              <div className="project-tech__chips">
                {visibleTech.map((tech) => (
                  <span key={tech} className="project-tech__chip">
                    {tech}
                  </span>
                ))}
                {hiddenTechCount > 0 ? (
                  <button
                    type="button"
                    className="project-tech__chip project-tech__chip--toggle"
                    onClick={() => setShowAllTech((current) => !current)}
                  >
                    {showAllTech ? "Show less" : `+${hiddenTechCount} more`}
                  </button>
                ) : null}
              </div>
            </div>

            <div className="project-brief-visual" aria-label="Project preview">
              {selectedProject.personalShowcase ? (
                <PersonalProjectShowcase
                  showcase={selectedProject.personalShowcase}
                  variant="preview"
                />
              ) : null}

              {selectedProject.enterpriseProof ? (
                <EnterpriseProofPanel proof={selectedProject.enterpriseProof} variant="preview" />
              ) : null}
            </div>

            <div className="project-highlights-block">
              <p className="project-highlights-block__label">Key Contributions</p>
              <ul className="project-highlights" role="list">
                {(showAllHighlights
                  ? selectedProject.highlights
                  : selectedProject.highlights.slice(0, MAX_HIGHLIGHTS)
                ).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {selectedProject.highlights.length > MAX_HIGHLIGHTS ? (
                <button
                  type="button"
                  className="project-highlights-toggle"
                  onClick={() => setShowAllHighlights((current) => !current)}
                >
                  {showAllHighlights
                    ? "Show fewer contributions"
                    : `Show all ${selectedProject.highlights.length} contributions`}
                </button>
              ) : null}
            </div>

            {selectedProject.personalShowcase ? (
              <PersonalProjectShowcase
                showcase={selectedProject.personalShowcase}
                variant="details"
              />
            ) : null}

            {selectedProject.enterpriseProof ? (
              <>
                <div className="project-brief-metrics">
                  {selectedProject.enterpriseProof.performance.slice(0, MAX_METRICS).map((metric) => (
                    <div key={metric.label} className="project-brief-metric">
                      <p className="project-brief-metric__label">{metric.label}</p>
                      <p className="project-brief-metric__value">
                        <span className="project-brief-metric__before">{metric.before}</span>
                        <span className="project-brief-metric__arrow" aria-hidden="true">
                          →
                        </span>
                        <span className="project-brief-metric__after">{metric.after}</span>
                      </p>
                    </div>
                  ))}
                </div>
                <p className="project-brief-nda">Redacted patterns only — client data omitted under NDA.</p>
              </>
            ) : null}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
