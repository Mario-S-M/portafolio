"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ParticleProps {
  className?: string;
  quantity?: number;
  ease?: number;
  refresh?: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
}

export function Particles({
  className = "",
  quantity = 50,
  ease = 50,
  refresh = false,
}: ParticleProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Solo ejecutar en el cliente
    setMounted(true);

    const generateParticles = () => {
      const particleArray: Particle[] = [];
      for (let i = 0; i < quantity; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * 100, // Usar porcentaje en lugar de píxeles
          y: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.1,
          size: Math.random() * 2 + 0.5,
        });
      }
      return particleArray;
    };

    setParticles(generateParticles());
  }, [quantity, refresh]);

  // No renderizar nada hasta que esté montado en el cliente
  if (!mounted) {
    return null;
  }

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-current rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            opacity: [
              particle.opacity,
              particle.opacity * 0.3,
              particle.opacity,
            ],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
