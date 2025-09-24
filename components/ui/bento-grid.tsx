"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  delay?: number;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(200px,auto)] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  delay = 0,
}: BentoCardProps) {
  const colSpanClass = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
  }[colSpan];

  const rowSpanClass = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
  }[rowSpan];

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-card/50 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg transition-all duration-300",
        colSpanClass,
        rowSpanClass,
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Subtle gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}