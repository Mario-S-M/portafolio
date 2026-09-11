"use client";

import { cn } from "@/lib/utils";
import { useMotionPreferences } from "@/components/ui/use-motion-preferences";

const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  "<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'>" +
  "<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/></filter>" +
  "<rect width='140' height='140' filter='url(%23n)'/></svg>";

interface GrainOverlayProps {
  className?: string;
  /** Opacidad del grano. El diseño usa 0.045. */
  opacity?: number;
}

/**
 * Capa de grano de película a pantalla completa.
 * No captura eventos y se sitúa por debajo del cursor personalizado (z 9999).
 * No se monta en punteros gruesos ni bajo `prefers-reduced-motion`.
 */
export default function GrainOverlay({
  className,
  opacity = 0.045,
}: GrainOverlayProps) {
  const { ready, reducedMotion, finePointer } = useMotionPreferences();

  if (!ready || reducedMotion || !finePointer) return null;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none fixed inset-0 z-[9000]", className)}
      style={{
        opacity,
        backgroundImage: `url("${GRAIN_SVG}")`,
      }}
    />
  );
}
