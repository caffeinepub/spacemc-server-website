import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

const STAR_COLORS = ["#ffffff", "#e0f0ff", "#ffe8a0", "#c8e8ff", "#ffd080"];

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      initStars();
    };

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 3000);
      starsRef.current = Array.from({ length: Math.min(count, 400) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.3,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.3 + 0.05,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      }));
    };

    const spawnParticle = () => {
      if (particlesRef.current.length < 60) {
        const maxLife = Math.random() * 200 + 100;
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          color: Math.random() > 0.5 ? "#60c8ff" : "#b060ff",
          life: 0,
          maxLife,
        });
      }
    };

    const drawNebula = (t: number) => {
      // Nebula cloud 1 - purple
      const g1 = ctx.createRadialGradient(
        canvas.width * 0.15,
        canvas.height * 0.25,
        0,
        canvas.width * 0.15,
        canvas.height * 0.25,
        canvas.width * 0.35,
      );
      g1.addColorStop(
        0,
        `rgba(120, 40, 200, ${0.06 + Math.sin(t * 0.001) * 0.02})`,
      );
      g1.addColorStop(
        0.5,
        `rgba(80, 20, 160, ${0.04 + Math.sin(t * 0.0008) * 0.01})`,
      );
      g1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nebula cloud 2 - blue
      const g2 = ctx.createRadialGradient(
        canvas.width * 0.85,
        canvas.height * 0.15,
        0,
        canvas.width * 0.85,
        canvas.height * 0.15,
        canvas.width * 0.3,
      );
      g2.addColorStop(
        0,
        `rgba(20, 80, 200, ${0.07 + Math.sin(t * 0.0012) * 0.02})`,
      );
      g2.addColorStop(0.5, `rgba(10, 50, 150, ${0.04})`);
      g2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nebula cloud 3 - cyan teal
      const g3 = ctx.createRadialGradient(
        canvas.width * 0.55,
        canvas.height * 0.65,
        0,
        canvas.width * 0.55,
        canvas.height * 0.65,
        canvas.width * 0.25,
      );
      g3.addColorStop(
        0,
        `rgba(0, 160, 200, ${0.05 + Math.sin(t * 0.0009) * 0.015})`,
      );
      g3.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const draw = () => {
      timeRef.current += 1;
      const t = timeRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep space background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGrad.addColorStop(0, "#050510");
      bgGrad.addColorStop(0.3, "#080820");
      bgGrad.addColorStop(0.7, "#060618");
      bgGrad.addColorStop(1, "#040412");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebula
      drawNebula(t);

      // Draw stars
      for (const star of starsRef.current) {
        const twinkle = Math.sin(t * star.twinkleSpeed + star.twinkleOffset);
        const currentOpacity = star.opacity * (0.6 + twinkle * 0.4);
        const currentSize = star.size * (0.8 + twinkle * 0.2);

        ctx.beginPath();
        ctx.arc(star.x, star.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0, currentOpacity);
        ctx.fill();

        // Glow for larger stars
        if (star.size > 1.5) {
          const glow = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.size * 4,
          );
          glow.addColorStop(0, `rgba(255,255,255,${currentOpacity * 0.3})`);
          glow.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalAlpha = 1;
      }

      // Spawn and draw particles
      if (t % 8 === 0) spawnParticle();

      particlesRef.current = particlesRef.current.filter(
        (p) => p.life < p.maxLife,
      );
      for (const p of particlesRef.current) {
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        const lifeRatio = p.life / p.maxLife;
        const alpha =
          p.opacity * (1 - lifeRatio) * Math.sin(lifeRatio * Math.PI);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      tabIndex={-1}
    />
  );
}
