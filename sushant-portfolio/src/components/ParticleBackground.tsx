import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesArray = useRef<Particle[]>([]);
  const scrollOffsetRef = useRef(0);

  const initParticles = (width: number, height: number, count: number) => {
    particlesArray.current = [];
    for (let i = 0; i < count; i++) {
      particlesArray.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    initParticles(width, height, 80);

    let animationId: number;

    const animate = () => {
      // Clear canvas with dark background
      ctx.fillStyle = "#111827";
      ctx.fillRect(0, 0, width, height);

      // Draw lines between particles
      for (let i = 0; i < particlesArray.current.length; i++) {
        const p1 = particlesArray.current[i];
        for (let j = i + 1; j < particlesArray.current.length; j++) {
          const p2 = particlesArray.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = "rgba(34, 211, 238, 0.3)"; // cyan
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particlesArray.current.forEach((p) => {
        ctx.fillStyle = "#22d3ee"; // cyan
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle scroll to update canvas position
    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY;
    };

    // Handle window resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      canvas.width = newWidth;
      canvas.height = newHeight;
      initParticles(newWidth, newHeight, 80);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-[90vh] pointer-events-none z-0"
      style={{ position: "fixed" }}
    />
  );
};

export default ParticleBackground;
