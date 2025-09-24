"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  duration?: number;
}

export function AnimatedGradientText({
  children,
  className,
  gradient = "from-blue-500 via-purple-500 to-pink-500",
  duration = 3,
}: AnimatedGradientTextProps) {
  return (
    <motion.div
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent font-bold",
        gradient,
        className
      )}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      {children}
    </motion.div>
  );
}