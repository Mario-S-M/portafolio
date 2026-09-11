"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
  /** Nombre accesible; viene de i18n. Sin él, el dato se oculta a lectores. */
  label?: string;
  /** Clase del símbolo de porcentaje. */
  symbolClassName?: string;
}

/**
 * Porcentaje de avance de lectura de la página, de 0 a 100.
 * Un único par de listeners pasivos marca la lectura como pendiente y
 * un solo `requestAnimationFrame` calcula la posición.
 */
export default function ScrollProgress({
  className,
  label,
  symbolClassName,
}: ScrollProgressProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    let pending = false;

    const measure = () => {
      frame = 0;
      pending = false;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const next = max > 0 ? (window.scrollY / max) * 100 : 0;
      setValue(Math.max(0, Math.min(100, Math.round(next))));
    };

    const request = () => {
      if (pending) return;
      pending = true;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, []);

  return (
    <span
      className={cn("font-mono tabular-nums", className)}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {value}
      <span className={cn("text-accent", symbolClassName)}>%</span>
    </span>
  );
}
