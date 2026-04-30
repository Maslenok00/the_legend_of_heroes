import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
};

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let animationId = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.min(95, Math.max(48, Math.round(width / 18)));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.2,
        size: 0.7 + Math.random() * 1.7,
        hue: 170 + ((index * 29) % 160)
      }));
    };

    const draw = () => {
      frame += 1;
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      const scrollDrift = window.scrollY * 0.012;

      for (const particle of particles) {
        if (!reducedMotion) {
          particle.x += particle.vx + Math.sin((frame + particle.hue) * 0.006) * 0.08;
          particle.y += particle.vy + Math.cos((frame + particle.hue) * 0.005) * 0.06;
        }

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        const pulse = Math.sin(frame * 0.018 + particle.hue) * 0.25 + 0.75;
        context.beginPath();
        context.fillStyle = `hsla(${particle.hue}, 90%, 66%, ${0.16 * pulse})`;
        context.arc(particle.x, particle.y + scrollDrift, particle.size * pulse, 0, Math.PI * 2);
        context.fill();
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);

          if (distance < 118) {
            context.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 90%, 64%, ${0.045 * (1 - distance / 118)})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y + scrollDrift);
            context.lineTo(b.x, b.y + scrollDrift);
            context.stroke();
          }
        }
      }

      context.globalCompositeOperation = "source-over";

      if (!reducedMotion) {
        animationId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas className="starfield" ref={canvasRef} aria-hidden="true" />;
}
