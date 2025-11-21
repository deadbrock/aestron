"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export default function Logo({
  className = "",
  showText = true,
  size = "md",
  variant = "dark",
}: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: "text-sm", spacing: "space-y-1" },
    md: { icon: 48, text: "text-base", spacing: "space-y-1.5" },
    lg: { icon: 64, text: "text-lg", spacing: "space-y-2" },
  };

  const currentSize = sizes[size];
  const textColor = variant === "light" ? "text-primary-white" : "text-primary-dark";
  const textSecondaryColor =
    variant === "light" ? "text-primary-gray/80" : "text-primary-gray";

  return (
    <div
      className={`flex flex-col items-center ${className} ${currentSize.spacing}`}
    >
      {/* Símbolo Gráfico */}
      <motion.svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 80 80"
        className="flex-shrink-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A73E8" stopOpacity="1" />
            <stop offset="100%" stopColor="#0A1A2F" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Letra A estilizada com formas geométricas */}
        <path
          d="M 40 8 L 18 62 L 28 62 L 34 48 L 46 48 L 52 62 L 62 62 L 40 8 Z M 37 28 L 43 28 L 40 20 Z"
          fill="url(#blueGradient)"
        />

        {/* Elemento orbital/arco que orbita ao redor do A */}
        <path
          d="M 12 58 Q 18 22, 52 16 Q 70 13, 72 10"
          fill="none"
          stroke="url(#blueGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Ponto/estrela no final do arco */}
        <circle cx="72" cy="10" r="3.5" fill="url(#blueGradient)" />
      </motion.svg>

      {/* Texto */}
      {showText && (
        <div className={`flex flex-col items-center ${currentSize.text}`}>
          <span className={`font-display font-bold ${textColor}`}>
            AESTRON
          </span>
          <span className={`font-display font-medium ${textSecondaryColor} text-xs`}>
            TECNOLOGIA
          </span>
        </div>
      )}
    </div>
  );
}

