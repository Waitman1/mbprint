"use client";

import { useEffect, useRef } from "react";

const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // <-- корректный useRef

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
    }[] = [];
    const maxParticles = 20;

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 2,
      speedY: Math.random() * 1 + 0.5,
      speedX: Math.random() * 0.5 - 0.25,
    });

    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle());
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        particle.y += particle.speedY;
        particle.x += particle.speedX;

        if (particle.y > canvas.height) particle.y = 0;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
      });

      requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 60,
        pointerEvents: "none",
      }}
    />
  );
};

export default Snowfall;
