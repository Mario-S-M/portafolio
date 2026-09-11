"use client";

import { useEffect, useState } from "react";

export interface MotionPreferences {
  /** `true` solo después de montar en cliente; evita desajustes de hidratación. */
  ready: boolean;
  /** El visitante pidió movimiento reducido. */
  reducedMotion: boolean;
  /** El puntero principal es fino (ratón / trackpad), no táctil. */
  finePointer: boolean;
}

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const FINE_POINTER = "(pointer: fine)";

/**
 * Lee las media queries de accesibilidad una sola vez y se mantiene
 * suscrita a sus cambios. En servidor devuelve siempre el estado neutro
 * (`ready: false`), de modo que los componentes que dependen de ella
 * rendericen `null` hasta que el cliente confirme las capacidades reales.
 */
export function useMotionPreferences(): MotionPreferences {
  const [prefs, setPrefs] = useState<MotionPreferences>({
    ready: false,
    reducedMotion: false,
    finePointer: false,
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const motionQuery = window.matchMedia(REDUCED_MOTION);
    const pointerQuery = window.matchMedia(FINE_POINTER);

    const sync = () => {
      setPrefs({
        ready: true,
        reducedMotion: motionQuery.matches,
        finePointer: pointerQuery.matches,
      });
    };

    sync();
    motionQuery.addEventListener("change", sync);
    pointerQuery.addEventListener("change", sync);

    return () => {
      motionQuery.removeEventListener("change", sync);
      pointerQuery.removeEventListener("change", sync);
    };
  }, []);

  return prefs;
}
