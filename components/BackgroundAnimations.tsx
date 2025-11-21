"use client";

import { useEffect, useRef } from "react";

export function GridPattern() {
  return (
    <div className="absolute inset-0 opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1A73E8 1px, transparent 1px),
            linear-gradient(to bottom, #1A73E8 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

export function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26, 115, 232, ${particle.opacity})`;
        ctx.fill();

        // Conectar partículas próximas
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(26, 115, 232, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
}

export function CircuitLines() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll("path");
    let progress = 0;

    const animate = () => {
      progress += 0.005;
      if (progress > 1) progress = 0;

      paths.forEach((path, index) => {
        const length = path.getTotalLength();
        const offset = length - progress * length;
        path.style.strokeDashoffset = offset.toString();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full opacity-10"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A73E8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0A1A2F" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path
        d="M 100 200 Q 300 100, 500 200 T 900 200"
        fill="none"
        stroke="url(#circuitGradient)"
        strokeWidth="2"
        strokeDasharray="10 5"
        strokeLinecap="round"
      />
      <path
        d="M 200 400 L 400 400 L 600 300 L 800 400 L 1000 400"
        fill="none"
        stroke="url(#circuitGradient)"
        strokeWidth="2"
        strokeDasharray="10 5"
        strokeLinecap="round"
      />
      <path
        d="M 150 600 Q 350 500, 550 600 T 950 600"
        fill="none"
        stroke="url(#circuitGradient)"
        strokeWidth="2"
        strokeDasharray="10 5"
        strokeLinecap="round"
      />
      <circle cx="500" cy="200" r="8" fill="#1A73E8" opacity="0.6">
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="600" cy="300" r="8" fill="#1A73E8" opacity="0.6">
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="550" cy="600" r="8" fill="#1A73E8" opacity="0.6">
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(10, 26, 47, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#1A73E8";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.15 }}
    />
  );
}

export function HexagonGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-5">
      <svg
        className="w-full h-full"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="hexagons"
            width="100"
            height="86.6"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="50,0 100,25 100,75 50,100 0,75 0,25"
              fill="none"
              stroke="#1A73E8"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 50,43.3; 0,0"
          dur="20s"
          repeatCount="indefinite"
        />
      </svg>
    </div>
  );
}

export function TechGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-blue/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
    </div>
  );
}

