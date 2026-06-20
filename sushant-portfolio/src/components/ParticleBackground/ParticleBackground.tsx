import React, { useEffect, useRef } from "react";
import { useTheme } from "../../hooks/useTheme";

type ParticleLayer = 0 | 1 | 2;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  layer: ParticleLayer;
  phase: number;
  hub: boolean;
}

interface DataPulse {
  from: number;
  to: number;
  progress: number;
  speed: number;
  accent: boolean;
}

interface ThemePalette {
  particleBg: string;
  particleBgEnd: string;
  particleDot: string;
  particleLine: string;
  particleAccent: string;
  particlePulse: string;
  particleHub: string;
  particleHex: string;
  particleAurora: string;
}

interface PointerState {
  x: number;
  y: number;
  active: boolean;
}

const CONFIG = {
  light: {
    network: 34,
    ambientFar: 16,
    ambientNear: 10,
    hubs: 3,
    connectionDistance: 108,
    maxPulses: 14,
  },
  dark: {
    network: 38,
    ambientFar: 18,
    ambientNear: 12,
    hubs: 4,
    connectionDistance: 112,
    maxPulses: 16,
  },
} as const;

const HEX_SIZE = 42;

function readThemeColors(): ThemePalette {
  const styles = getComputedStyle(document.documentElement);
  const pick = (name: string, fallback: string) =>
    styles.getPropertyValue(name).trim() || fallback;

  return {
    particleBg: pick("--color-particle-bg", "#111827"),
    particleBgEnd: pick("--color-particle-bg-end", "#111827"),
    particleDot: pick("--color-particle-dot", "#22d3ee"),
    particleLine: pick("--color-particle-line", "rgba(34, 211, 238, 0.3)"),
    particleAccent: pick("--color-particle-accent", "#818cf8"),
    particlePulse: pick("--color-particle-pulse", "#67e8f9"),
    particleHub: pick("--color-particle-hub", "#c4b5fd"),
    particleHex: pick("--color-particle-hex", "rgba(34, 211, 238, 0.07)"),
    particleAurora: pick("--color-particle-aurora", "rgba(99, 102, 241, 0.12)"),
  };
}

function cellKey(col: number, row: number) {
  return `${col},${row}`;
}

function buildSpatialGrid(particles: Particle[], cellSize: number, width: number, height: number) {
  const grid = new Map<string, number[]>();
  const cols = Math.ceil(width / cellSize) + 1;
  const rows = Math.ceil(height / cellSize) + 1;

  for (let index = 0; index < particles.length; index++) {
    const particle = particles[index];
    if (particle.layer !== 1) continue;

    const col = Math.floor(particle.x / cellSize);
    const row = Math.floor(particle.y / cellSize);
    const key = cellKey(col, row);
    const bucket = grid.get(key);
    if (bucket) {
      bucket.push(index);
    } else {
      grid.set(key, [index]);
    }
  }

  return { grid, cols, rows, cellSize };
}

function getNetworkNeighbors(
  index: number,
  particles: Particle[],
  gridData: ReturnType<typeof buildSpatialGrid>,
) {
  const particle = particles[index];
  const { grid, cellSize } = gridData;
  const col = Math.floor(particle.x / cellSize);
  const row = Math.floor(particle.y / cellSize);
  const neighbors: number[] = [];

  for (let y = row - 1; y <= row + 1; y++) {
    for (let x = col - 1; x <= col + 1; x++) {
      const bucket = grid.get(cellKey(x, y));
      if (!bucket) continue;
      for (const candidate of bucket) {
        if (candidate !== index) {
          neighbors.push(candidate);
        }
      }
    }
  }

  return neighbors;
}

function drawHexLattice(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  strokeColor: string,
) {
  const hexHeight = HEX_SIZE * Math.sqrt(3);
  const horizontalStep = HEX_SIZE * 1.5;
  const verticalStep = hexHeight;

  ctx.save();
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 0.65;

  for (let row = -1; row * verticalStep < height + hexHeight; row++) {
    const y = row * verticalStep;
    const offset = row % 2 === 0 ? 0 : horizontalStep * 0.5;

    for (let col = -1; col * horizontalStep < width + HEX_SIZE; col++) {
      const x = col * horizontalStep + offset;
      drawHexagon(ctx, x, y, HEX_SIZE * 0.92);
    }
  }

  ctx.restore();
}

function drawHexagon(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const px = x + radius * Math.cos(angle);
    const py = y + radius * Math.sin(angle);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();
}

function drawAuroraBand(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
  auroraColor: string,
  accentColor: string,
) {
  const waveCenter = ((time * 0.000045) % 1.35) * (height + 140) - 70;
  const gradient = ctx.createLinearGradient(0, waveCenter - 90, 0, waveCenter + 90);
  gradient.addColorStop(0, "rgba(0,0,0,0)");
  gradient.addColorStop(0.42, auroraColor);
  gradient.addColorStop(0.5, accentColor);
  gradient.addColorStop(0.58, auroraColor);
  gradient.addColorStop(1, "rgba(0,0,0,0)");

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}

const ParticleBackground: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pulsesRef = useRef<DataPulse[]>([]);
  const canvasSizeRef = useRef({ width: 0, height: 0 });
  const pointerRef = useRef<PointerState>({ x: -9999, y: -9999, active: false });
  const isActiveRef = useRef(true);
  const spawnCooldownRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const settings = CONFIG[theme];
    const connectionDistance = settings.connectionDistance;
    const connectionDistanceSq = connectionDistance * connectionDistance;
    const isLight = theme === "light";

    let colors = readThemeColors();
    let backgroundGradient = ctx.createLinearGradient(0, 0, 0, 1);

    const rebuildBackgroundGradient = (height: number) => {
      backgroundGradient = ctx.createLinearGradient(0, 0, 0, height);
      backgroundGradient.addColorStop(0, colors.particleBg);
      backgroundGradient.addColorStop(0.55, colors.particleBg);
      backgroundGradient.addColorStop(1, colors.particleBgEnd);
    };

    const createParticle = (
      width: number,
      height: number,
      layer: ParticleLayer,
      hub = false,
    ): Particle => {
      const layerConfig = {
        0: { speed: isLight ? 0.12 : 0.16, size: isLight ? 0.7 : 0.85 },
        1: { speed: isLight ? 0.28 : 0.38, size: isLight ? 1.2 : 1.45 },
        2: { speed: isLight ? 0.42 : 0.55, size: isLight ? 2.1 : 2.4 },
      }[layer];

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * layerConfig.speed,
        vy: (Math.random() - 0.5) * layerConfig.speed,
        size: hub ? layerConfig.size + 1.4 : layerConfig.size + Math.random() * 0.8,
        layer,
        phase: Math.random() * Math.PI * 2,
        hub,
      };
    };

    const seedParticles = (width: number, height: number) => {
      const particles: Particle[] = [];

      for (let i = 0; i < settings.ambientFar; i++) {
        particles.push(createParticle(width, height, 0));
      }

      const networkParticles: Particle[] = [];
      for (let i = 0; i < settings.network; i++) {
        networkParticles.push(createParticle(width, height, 1));
      }

      for (let i = 0; i < settings.hubs; i++) {
        const hubIndex = Math.floor((i / settings.hubs) * networkParticles.length);
        networkParticles[hubIndex].hub = true;
        networkParticles[hubIndex].size += 1.1;
      }

      particles.push(...networkParticles);

      for (let i = 0; i < settings.ambientNear; i++) {
        particles.push(createParticle(width, height, 2));
      }

      particlesRef.current = particles;
      pulsesRef.current = [];
    };

    const resizeCanvas = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      canvasSizeRef.current = { width: newWidth, height: newHeight };
      canvas.width = newWidth;
      canvas.height = newHeight;
      colors = readThemeColors();
      rebuildBackgroundGradient(newHeight);
      seedParticles(newWidth, newHeight);
    };

    resizeCanvas();

    if (reducedMotion) {
      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0, 0, canvasSizeRef.current.width, canvasSizeRef.current.height);
      drawHexLattice(ctx, canvasSizeRef.current.width, canvasSizeRef.current.height, colors.particleHex);
      return;
    }

    let animationId = 0;
    let frame = 0;

    const spawnPulse = (from: number, to: number) => {
      if (pulsesRef.current.length >= settings.maxPulses) return;
      pulsesRef.current.push({
        from,
        to,
        progress: 0,
        speed: 0.012 + Math.random() * 0.018,
        accent: Math.random() > 0.55,
      });
    };

    const drawHubSigils = (particles: Particle[]) => {
      const hubs = particles
        .map((particle, index) => ({ particle, index }))
        .filter(({ particle }) => particle.layer === 1 && particle.hub);

      for (let i = 0; i < hubs.length; i++) {
        for (let j = i + 1; j < hubs.length; j++) {
          for (let k = j + 1; k < hubs.length; k++) {
            const a = hubs[i].particle;
            const b = hubs[j].particle;
            const c = hubs[k].particle;

            const ab = (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
            const bc = (b.x - c.x) ** 2 + (b.y - c.y) ** 2;
            const ca = (c.x - a.x) ** 2 + (c.y - a.y) ** 2;

            if (ab < connectionDistanceSq && bc < connectionDistanceSq && ca < connectionDistanceSq) {
              const pulse = 0.45 + Math.sin(frame * 0.03 + i + j + k) * 0.2;
              ctx.save();
              ctx.globalAlpha = isLight ? 0.07 * pulse : 0.11 * pulse;
              const sigilGradient = ctx.createLinearGradient(a.x, a.y, c.x, c.y);
              sigilGradient.addColorStop(0, colors.particleAccent);
              sigilGradient.addColorStop(1, colors.particlePulse);
              ctx.fillStyle = sigilGradient;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.lineTo(c.x, c.y);
              ctx.closePath();
              ctx.fill();
              ctx.restore();
            }
          }
        }
      }
    };

    const animate = (time: number) => {
      frame += 1;

      if (!isActiveRef.current) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      const { width, height } = canvasSizeRef.current;
      const particles = particlesRef.current;
      const pointer = pointerRef.current;

      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0, 0, width, height);
      drawHexLattice(ctx, width, height, colors.particleHex);
      drawAuroraBand(ctx, width, height, time, colors.particleAurora, colors.particleAccent);

      const gridData = buildSpatialGrid(particles, connectionDistance, width, height);

      for (const particle of particles) {
        if (pointer.active) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distSq = dx * dx + dy * dy;
          const fieldRadius = particle.layer === 1 ? 16500 : 9000;
          if (distSq > 120 && distSq < fieldRadius) {
            const pull = particle.hub ? 0.0009 : 0.0016;
            particle.vx += dx * pull;
            particle.vy += dy * pull;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        particle.vx *= particle.layer === 0 ? 0.998 : 0.992;
        particle.vy *= particle.layer === 0 ? 0.998 : 0.992;
      }

      drawHubSigils(particles);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        if (p1.layer !== 1) continue;

        const neighbors = getNetworkNeighbors(i, particles, gridData);
        for (const j of neighbors) {
          if (j <= i) continue;
          const p2 = particles[j];
          if (p2.layer !== 1) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq >= connectionDistanceSq) continue;

          const dist = Math.sqrt(distSq);
          const strength = 1 - dist / connectionDistance;
          const hubGlow = p1.hub || p2.hub ? 1.35 : 1;

          ctx.globalAlpha = strength * (isLight ? 0.38 : 0.62) * hubGlow;
          ctx.strokeStyle = p1.hub || p2.hub ? colors.particleAccent : colors.particleLine;
          ctx.lineWidth = p1.hub || p2.hub ? 1.15 : 0.8;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();

          if (spawnCooldownRef.current <= 0 && Math.random() < 0.018) {
            spawnPulse(i, j);
            spawnCooldownRef.current = 6;
          }
        }
      }

      spawnCooldownRef.current = Math.max(0, spawnCooldownRef.current - 1);

      pulsesRef.current = pulsesRef.current.filter((pulse) => {
        const from = particles[pulse.from];
        const to = particles[pulse.to];
        if (!from || !to) return false;

        pulse.progress += pulse.speed;
        if (pulse.progress > 1) return false;

        const x = from.x + (to.x - from.x) * pulse.progress;
        const y = from.y + (to.y - from.y) * pulse.progress;
        const tailProgress = Math.max(0, pulse.progress - 0.12);
        const tailX = from.x + (to.x - from.x) * tailProgress;
        const tailY = from.y + (to.y - from.y) * tailProgress;

        ctx.save();
        ctx.globalAlpha = isLight ? 0.85 : 1;
        ctx.strokeStyle = pulse.accent ? colors.particleAccent : colors.particlePulse;
        ctx.lineWidth = 2.2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.fillStyle = pulse.accent ? colors.particleAccent : colors.particlePulse;
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return true;
      });

      for (const particle of particles) {
        const depthAlpha = particle.layer === 0 ? 0.35 : particle.layer === 2 ? 0.9 : 0.75;
        const pulse = particle.hub ? 0.75 + Math.sin(time * 0.004 + particle.phase) * 0.25 : 1;

        if (particle.hub) {
          const ringRadius = particle.size * 3.8 * pulse;
          ctx.save();
          ctx.globalAlpha = isLight ? 0.14 : 0.22;
          ctx.strokeStyle = colors.particleHub;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, ringRadius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        ctx.globalAlpha = depthAlpha * (particle.hub ? pulse : 1);
        ctx.fillStyle = particle.hub ? colors.particleHub : particle.layer === 2 ? colors.particleAccent : colors.particleDot;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * (particle.hub ? pulse : 1), 0, Math.PI * 2);
        ctx.fill();

        if (particle.hub) {
          ctx.globalAlpha = isLight ? 0.55 : 0.75;
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.35, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleResize = () => resizeCanvas();

    const handleVisibility = () => {
      isActiveRef.current = document.visibilityState === "visible";
    };

    const handlePointerMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isActiveRef.current = entry.isIntersecting && document.visibilityState === "visible";
      },
      { threshold: 0.05 },
    );
    observer.observe(canvas);

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("mouseout", handlePointerLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseout", handlePointerLeave);
      observer.disconnect();
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
