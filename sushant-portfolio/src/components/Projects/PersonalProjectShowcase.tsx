import React, { useEffect, useState } from "react";
import type { PersonalShowcase, ProjectScreenshot } from "./projectsData";
import "./personalShowcase.css";

interface PersonalProjectShowcaseProps {
  showcase: PersonalShowcase;
  variant?: "preview" | "details";
}

interface ScreenshotSliderProps {
  screenshots: ProjectScreenshot[];
}

export const ScreenshotSlider: React.FC<ScreenshotSliderProps> = ({ screenshots }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const screenshotKey = screenshots.map((shot) => shot.src).join("|");

  useEffect(() => {
    setActiveIndex(0);
    setImageErrors({});
  }, [screenshotKey]);

  if (screenshots.length === 0) {
    return null;
  }

  const activeShot = screenshots[activeIndex] ?? screenshots[0];
  const fileName = activeShot.src.split("/").pop() ?? activeShot.src;
  const hasError = imageErrors[activeShot.src] === true;
  const total = screenshots.length;

  const goToSlide = (index: number) => {
    if (total <= 1) return;
    setActiveIndex((index + total) % total);
  };

  return (
    <div className="personal-showcase__slider">
      <div className="personal-showcase__slider-stage">
        <button
          type="button"
          className="personal-showcase__slider-nav personal-showcase__slider-nav--prev"
          onClick={() => goToSlide(activeIndex - 1)}
          aria-label="Previous screenshot"
          disabled={total <= 1}
        >
          ‹
        </button>

        <figure className="personal-showcase__shot personal-showcase__shot--slider">
          <div className="personal-showcase__shot-frame">
            {hasError ? (
              <div className="personal-showcase__shot-placeholder">
                <p className="personal-showcase__shot-placeholder-title">Screenshot pending</p>
                <p className="personal-showcase__shot-placeholder-path">
                  Add <code>{fileName}</code> to enable this preview.
                </p>
              </div>
            ) : (
              <img
                key={activeShot.src}
                src={activeShot.src}
                alt={activeShot.alt}
                className="personal-showcase__shot-image"
                loading="lazy"
                onError={() =>
                  setImageErrors((current) => ({ ...current, [activeShot.src]: true }))
                }
              />
            )}
          </div>
          <figcaption className="personal-showcase__shot-caption">{activeShot.caption}</figcaption>
        </figure>

        <button
          type="button"
          className="personal-showcase__slider-nav personal-showcase__slider-nav--next"
          onClick={() => goToSlide(activeIndex + 1)}
          aria-label="Next screenshot"
          disabled={total <= 1}
        >
          ›
        </button>
      </div>

      <div className="personal-showcase__slider-meta">
        <p className="personal-showcase__slider-counter" aria-live="polite">
          {activeIndex + 1} / {total}
        </p>
        <div className="personal-showcase__slider-dots" role="tablist" aria-label="Screenshot slides">
          {screenshots.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              role="tab"
              className={`personal-showcase__slider-dot ${
                index === activeIndex ? "personal-showcase__slider-dot--active" : ""
              }`}
              aria-label={`Show screenshot ${index + 1}: ${shot.alt}`}
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PersonalProjectShowcase: React.FC<PersonalProjectShowcaseProps> = ({
  showcase,
  variant = "preview",
}) => {
  if (variant === "preview") {
    return (
      <section className="personal-showcase personal-showcase--preview" aria-label="Project preview">
        <ScreenshotSlider screenshots={showcase.screenshots} />
        <div className="personal-showcase__signals personal-showcase__signals--inline">
          {showcase.deliverySignals.map((signal) => (
            <span key={signal} className="personal-showcase__signal">
              {signal}
            </span>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="personal-showcase personal-showcase--details" aria-label="Project architecture">
      <div className="personal-showcase__panel">
        <h5 className="personal-showcase__panel-title">Full-Stack Architecture</h5>
        <div className="personal-showcase__arch-flow personal-showcase__arch-flow--compact">
          {showcase.architecture.map((layer) => (
            <div key={layer.title} className="personal-showcase__arch-layer">
              <p className="personal-showcase__arch-layer-title">{layer.title}</p>
              <p className="personal-showcase__arch-layer-detail">{layer.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjectShowcase;
