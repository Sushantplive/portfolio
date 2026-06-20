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

interface CircuitPath {
  points: { x: number; y: number }[];
  segmentLengths: number[];
  totalLength: number;
}

interface DataPulse {
  from: number;
  to: number;
  progress: number;
  speed: number;
  accent: boolean;
  horizontalFirst: boolean;
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

const GRID_STEP = 28;

const CONFIG = {
  light: {
    network: 32,
    ambientFar: 14,
    ambientNear: 8,
    hubs: 3,
    connectionDistance: 110,
    maxPulses: 12,
  },
  dark: {
    network: 36,
    ambientFar: 16,
    ambientNear: 10,
    hubs: 4,
    connectionDistance: 114,
    maxPulses: 14,
  },
} as const;

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

function buildSpatialGrid(particles: Particle[], cellSize: number) {
  const grid = new Map<string, number[]>();

  for (let index = 0; index < particles.length; index++) {
    const particle = particles[index];
    if (particle.layer !== 1) continue;

    const col = Math.floor(particle.x / cellSize);
    const row = Math.floor(particle.y / cellSize);
    const key = cellKey(col, row);
    const bucket = grid.get(key);
    if (bucket) bucket.push(index);
    else grid.set(key, [index]);
  }

  return { grid, cellSize };
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
        if (candidate !== index) neighbors.push(candidate);
      }
    }
  }

  return neighbors;
}

function buildCircuitPath(
  from: Particle,
  to: Particle,
  horizontalFirst: boolean,
): CircuitPath {
  const elbow = horizontalFirst
    ? { x: to.x, y: from.y }
    : { x: from.x, y: to.y };

  const points = [
    { x: from.x, y: from.y },
    elbow,
    { x: to.x, y: to.y },
  ];

  const segmentLengths: number[] = [];
  let totalLength = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const dx = points[i + 1].x - points[i].x;
    const dy = points[i + 1].y - points[i].y;
    const length = Math.hypot(dx, dy);
    segmentLengths.push(length);
    totalLength += length;
  }

  return { points, segmentLengths, totalLength };
}

function getPointOnPath(path: CircuitPath, progress: number) {
  if (path.totalLength <= 0) {
    return { ...path.points[0], segmentIndex: 0 };
  }

  const target = Math.min(Math.max(progress, 0), 1) * path.totalLength;
  let walked = 0;

  for (let i = 0; i < path.segmentLengths.length; i++) {
    const segmentLength = path.segmentLengths[i];
    if (walked + segmentLength >= target) {
      const localT = segmentLength === 0 ? 0 : (target - walked) / segmentLength;
      const start = path.points[i];
      const end = path.points[i + 1];
      return {
        x: start.x + (end.x - start.x) * localT,
        y: start.y + (end.y - start.y) * localT,
        segmentIndex: i,
      };
    }
    walked += segmentLength;
  }

  const last = path.points[path.points.length - 1];
  return { x: last.x, y: last.y, segmentIndex: path.segmentLengths.length - 1 };
}

function drawPcbGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  gridColor: string,
  dotColor: string,
) {
  ctx.save();
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 0.55;

  for (let x = 0; x <= width; x += GRID_STEP) {
    ctx.beginPath();
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, height);
    ctx.stroke();
  }

  for (let y = 0; y <= height; y += GRID_STEP) {
    ctx.beginPath();
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(width, y + 0.5);
    ctx.stroke();
  }

  ctx.fillStyle = dotColor;
  for (let x = 0; x <= width; x += GRID_STEP) {
    for (let y = 0; y <= height; y += GRID_STEP) {
      ctx.beginPath();
      ctx.arc(x, y, 0.85, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.restore();
}

function drawCircuitTrace(
  ctx: CanvasRenderingContext2D,
  path: CircuitPath,
  strokeColor: string,
  lineWidth: number,
  alpha: number,
  drawVias: boolean,
  viaColor: string,
) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = lineWidth;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(path.points[0].x, path.points[0].y);
  for (let i = 1; i < path.points.length; i++) {
    ctx.lineTo(path.points[i].x, path.points[i].y);
  }
  ctx.stroke();

  if (drawVias && path.points.length === 3) {
    const via = path.points[1];
    ctx.globalAlpha = alpha * 1.15;
    ctx.fillStyle = viaColor;
    ctx.beginPath();
    ctx.arc(via.x, via.y, lineWidth + 1.1, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = alpha * 0.55;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(via.x, via.y, lineWidth * 0.45, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

function drawChipPad(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  fillColor: string,
  borderColor: string,
  alpha: number,
  pulse = 1,
) {
  const pad = size * 2.1 * pulse;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1.1;
  ctx.beginPath();
  ctx.roundRect(x - pad / 2, y - pad / 2, pad, pad, 3);
  ctx.fill();
  ctx.stroke();

  const pinLength = pad * 0.22;
  const pinThickness = 1.4;
  ctx.fillStyle = borderColor;
  ctx.fillRect(x - pad / 2 - pinLength, y - pinThickness, pinLength, pinThickness * 2);
  ctx.fillRect(x + pad / 2, y - pinThickness, pinLength, pinThickness * 2);
  ctx.fillRect(x - pinThickness, y - pad / 2 - pinLength, pinThickness * 2, pinLength);
  ctx.fillRect(x - pinThickness, y + pad / 2, pinThickness * 2, pinLength);

  ctx.globalAlpha = alpha * 0.85;
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(x, y, size * 0.32, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawSolderPad(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  fillColor: string,
  alpha: number,
) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = alpha * 0.35;
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 0.8;
  ctx.stroke();
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
    const gridCanvas = document.createElement("canvas");
    const gridCtx = gridCanvas.getContext("2d");

    const rebuildBackgroundGradient = (height: number) => {
      backgroundGradient = ctx.createLinearGradient(0, 0, 0, height);
      backgroundGradient.addColorStop(0, colors.particleBg);
      backgroundGradient.addColorStop(0.55, colors.particleBg);
      backgroundGradient.addColorStop(1, colors.particleBgEnd);
    };

    const rebuildGridCache = (width: number, height: number) => {
      if (!gridCtx) return;
      gridCanvas.width = width;
      gridCanvas.height = height;
      drawPcbGrid(gridCtx, width, height, colors.particleHex, colors.particleHex);
    };

    const createParticle = (
      width: number,
      height: number,
      layer: ParticleLayer,
      hub = false,
    ): Particle => {
      const layerConfig = {
        0: { speed: isLight ? 0.1 : 0.14, size: isLight ? 0.65 : 0.8 },
        1: { speed: isLight ? 0.22 : 0.3, size: isLight ? 1.15 : 1.35 },
        2: { speed: isLight ? 0.34 : 0.44, size: isLight ? 1.7 : 2 },
      }[layer];

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * layerConfig.speed,
        vy: (Math.random() - 0.5) * layerConfig.speed,
        size: hub ? layerConfig.size + 1.2 : layerConfig.size + Math.random() * 0.6,
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
        networkParticles[hubIndex].size += 1;
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
      rebuildGridCache(newWidth, newHeight);
      seedParticles(newWidth, newHeight);
    };

    resizeCanvas();

    const drawStaticTraces = (particles: Particle[]) => {
      const gridData = buildSpatialGrid(particles, connectionDistance);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        if (p1.layer !== 1) continue;
        for (const j of getNetworkNeighbors(i, particles, gridData)) {
          if (j <= i) continue;
          const p2 = particles[j];
          if (p2.layer !== 1) continue;
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          if (dx * dx + dy * dy >= connectionDistanceSq) continue;
          const path = buildCircuitPath(p1, p2, (i + j) % 2 === 0);
          drawCircuitTrace(
            ctx,
            path,
            p1.hub || p2.hub ? colors.particleAccent : colors.particleLine,
            p1.hub || p2.hub ? 1.1 : 0.85,
            isLight ? 0.42 : 0.58,
            true,
            colors.particlePulse,
          );
        }
      }
    };

    if (reducedMotion) {
      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0, 0, canvasSizeRef.current.width, canvasSizeRef.current.height);
      drawPcbGrid(
        ctx,
        canvasSizeRef.current.width,
        canvasSizeRef.current.height,
        colors.particleHex,
        colors.particleHex,
      );
      drawStaticTraces(particlesRef.current);
      for (const particle of particlesRef.current) {
        if (particle.hub && particle.layer === 1) {
          drawChipPad(ctx, particle.x, particle.y, particle.size, colors.particleHub, colors.particleAccent, 0.9);
        } else if (particle.layer === 1) {
          drawSolderPad(ctx, particle.x, particle.y, particle.size, colors.particleDot, 0.85);
        }
      }
      return;
    }

    let animationId = 0;

    const spawnPulse = (from: number, to: number, horizontalFirst: boolean) => {
      if (pulsesRef.current.length >= settings.maxPulses) return;
      pulsesRef.current.push({
        from,
        to,
        progress: 0,
        speed: 0.014 + Math.random() * 0.02,
        accent: Math.random() > 0.5,
        horizontalFirst,
      });
    };

    const animate = (time: number) => {
      if (!isActiveRef.current) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      const { width, height } = canvasSizeRef.current;
      const particles = particlesRef.current;
      const pointer = pointerRef.current;

      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0, 0, width, height);
      if (gridCanvas.width === width && gridCanvas.height === height) {
        ctx.drawImage(gridCanvas, 0, 0);
      } else {
        drawPcbGrid(ctx, width, height, colors.particleHex, colors.particleHex);
      }

      const gridData = buildSpatialGrid(particles, connectionDistance);

      for (const particle of particles) {
        if (pointer.active && particle.layer === 1) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > 140 && distSq < 14000) {
            const pull = particle.hub ? 0.00075 : 0.0012;
            particle.vx += dx * pull;
            particle.vy += dy * pull;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        particle.vx *= particle.layer === 0 ? 0.998 : 0.991;
        particle.vy *= particle.layer === 0 ? 0.998 : 0.991;
      }

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        if (p1.layer !== 1) continue;

        for (const j of getNetworkNeighbors(i, particles, gridData)) {
          if (j <= i) continue;
          const p2 = particles[j];
          if (p2.layer !== 1) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq >= connectionDistanceSq) continue;

          const dist = Math.sqrt(distSq);
          const strength = 1 - dist / connectionDistance;
          const isHubTrace = p1.hub || p2.hub;
          const horizontalFirst = (i + j) % 2 === 0;
          const path = buildCircuitPath(p1, p2, horizontalFirst);

          drawCircuitTrace(
            ctx,
            path,
            isHubTrace ? colors.particleAccent : colors.particleLine,
            isHubTrace ? 1.25 : 0.9,
            strength * (isLight ? 0.4 : 0.62) * (isHubTrace ? 1.2 : 1),
            true,
            isHubTrace ? colors.particleHub : colors.particlePulse,
          );

          if (spawnCooldownRef.current <= 0 && Math.random() < 0.02) {
            spawnPulse(i, j, horizontalFirst);
            spawnCooldownRef.current = 7;
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

        const path = buildCircuitPath(from, to, pulse.horizontalFirst);
        const head = getPointOnPath(path, pulse.progress);
        const tail = getPointOnPath(path, Math.max(0, pulse.progress - 0.14));

        ctx.save();
        ctx.globalAlpha = isLight ? 0.9 : 1;
        ctx.strokeStyle = pulse.accent ? colors.particleAccent : colors.particlePulse;
        ctx.lineWidth = 2.4;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tail.x, tail.y);
        ctx.lineTo(head.x, head.y);
        ctx.stroke();

        ctx.fillStyle = pulse.accent ? colors.particleAccent : colors.particlePulse;
        ctx.beginPath();
        ctx.arc(head.x, head.y, 2.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = isLight ? 0.45 : 0.65;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(head.x, head.y, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return true;
      });

      for (const particle of particles) {
        const depthAlpha = particle.layer === 0 ? 0.3 : particle.layer === 2 ? 0.75 : 0.88;
        const hubPulse = particle.hub ? 0.92 + Math.sin(time * 0.0035 + particle.phase) * 0.08 : 1;

        if (particle.hub && particle.layer === 1) {
          drawChipPad(
            ctx,
            particle.x,
            particle.y,
            particle.size,
            colors.particleHub,
            colors.particleAccent,
            depthAlpha * hubPulse,
            hubPulse,
          );
          continue;
        }

        if (particle.layer === 1) {
          drawSolderPad(ctx, particle.x, particle.y, particle.size, colors.particleDot, depthAlpha);
          continue;
        }

        ctx.globalAlpha = depthAlpha;
        ctx.fillStyle = particle.layer === 2 ? colors.particleAccent : colors.particleDot;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
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
      if (!isActiveRef.current) return;
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
        pointerRef.current.active = false;
        return;
      }
      pointerRef.current = { x, y, active: true };
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
