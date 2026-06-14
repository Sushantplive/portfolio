import React, { useEffect, useRef } from "react";
import "./lighthouse.css";

interface ScoreData {
  label: string;
  score: number;
  color: string;
}

const scores: ScoreData[] = [
  { label: "Performance", score: 84, color: "#f59e0b" },
  { label: "Accessibility", score: 100, color: "#22c55e" },
  { label: "Best Practices", score: 100, color: "#22c55e" },
  { label: "SEO", score: 91, color: "#22c55e" },
];

function getScoreColor(score: number): string {
  if (score >= 90) return "#22c55e";
  if (score >= 50) return "#f59e0b";
  return "#ef4444";
}

const ScoreGauge: React.FC<{ data: ScoreData; delay: number }> = ({ data, delay }) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    const numberEl = numberRef.current;
    if (!circle || !numberEl) return;

    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    const timeout = setTimeout(() => {
      const offset = circumference - (data.score / 100) * circumference;
      circle.style.transition = "stroke-dashoffset 1.5s ease-out";
      circle.style.strokeDashoffset = `${offset}`;

      // Animate number
      let start = 0;
      const duration = 1500;
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        start = Math.round(progress * data.score);
        numberEl.textContent = `${start}`;
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [data.score, delay]);

  const color = getScoreColor(data.score);

  return (
    <div className="lighthouse-gauge">
      <div className="gauge-circle">
        <svg viewBox="0 0 120 120" className="gauge-svg">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6"
          />
          <circle
            ref={circleRef}
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
            className="gauge-progress"
          />
        </svg>
        <span
          ref={numberRef}
          className="gauge-number"
          style={{ color }}
        >
          0
        </span>
      </div>
      <span className="gauge-label">{data.label}</span>
    </div>
  );
};

const LighthouseScores: React.FC = () => {
  return (
    <div className="lighthouse-section">
      <div className="lighthouse-header">
        <h3 className="text-cyan-400 font-semibold text-xl mb-2">
          Lighthouse Scores
        </h3>
        <p className="text-gray-400 text-sm">
          Measured via Google Lighthouse on{" "}
          <a
            href="https://sushdream.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-200 underline"
          >
            sushdream.in
          </a>
        </p>
      </div>
      <div className="lighthouse-gauges">
        {scores.map((s, i) => (
          <ScoreGauge key={s.label} data={s} delay={200 + i * 150} />
        ))}
      </div>
    </div>
  );
};

export default LighthouseScores;
