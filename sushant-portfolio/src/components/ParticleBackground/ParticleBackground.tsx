import React, { useEffect, useRef } from "react";
import { useTheme } from "../../hooks/useTheme";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const ParticleBackground: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesArray = useRef<Particle[]>([]);
  const canvasSizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvasSizeRef.current = { width, height };
    canvas.width = width;
    canvas.height = height;

    const particleCount = theme === "light" ? 95 : 80;

    const seedParticles = (w: number, h: number, count: number) => {
      particlesArray.current = [];
      for (let i = 0; i < count; i++) {
        particlesArray.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * (theme === "light" ? 0.35 : 0.5),
          vy: (Math.random() - 0.5) * (theme === "light" ? 0.35 : 0.5),
          size: Math.random() * (theme === "light" ? 1.8 : 2) + (theme === "light" ? 0.8 : 1),
        });
      }
    };

    seedParticles(width, height, particleCount);

    let animationId: number;

    const readThemeColors = () => {
      const styles = getComputedStyle(document.documentElement);
      return {
        particleBg: styles.getPropertyValue("--color-particle-bg").trim() || "#111827",
        particleBgEnd: styles.getPropertyValue("--color-particle-bg-end").trim() || "#111827",
        particleDot: styles.getPropertyValue("--color-particle-dot").trim() || "#22d3ee",
        particleLine: styles.getPropertyValue("--color-particle-line").trim() || "rgba(34, 211, 238, 0.3)",
        particleGlow: styles.getPropertyValue("--color-particle-glow").trim() || "rgba(34, 211, 238, 0.45)",
      };
    };

    let colors = readThemeColors();
    const connectionDistance = theme === "light" ? 110 : 100;

    const animate = () => {
      const { width: currentWidth, height: currentHeight } = canvasSizeRef.current;

      const gradient = ctx.createLinearGradient(0, 0, 0, currentHeight);
      gradient.addColorStop(0, colors.particleBg);
      gradient.addColorStop(1, colors.particleBgEnd);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, currentWidth, currentHeight);

      for (let i = 0; i < particlesArray.current.length; i++) {
        const p1 = particlesArray.current[i];
        for (let j = i + 1; j < particlesArray.current.length; j++) {
          const p2 = particlesArray.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * (theme === "light" ? 0.5 : 0.85);
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = colors.particleLine;
            ctx.lineWidth = theme === "light" ? 0.75 : 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      particlesArray.current.forEach((p) => {
        ctx.shadowBlur = theme === "light" ? 8 : 12;
        ctx.shadowColor = colors.particleGlow;
        ctx.fillStyle = colors.particleDot;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > currentWidth) p.vx *= -1;
        if (p.y < 0 || p.y > currentHeight) p.vy *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      colors = readThemeColors();
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      canvasSizeRef.current = { width: newWidth, height: newHeight };
      canvas.width = newWidth;
      canvas.height = newHeight;
      seedParticles(newWidth, newHeight, particleCount);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
