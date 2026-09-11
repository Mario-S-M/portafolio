"use client";

import { useEffect, useRef } from "react";

/**
 * Inclinación 3D de una tarjeta siguiendo al puntero, con retorno suave al salir.
 *
 * Mientras el puntero está encima la transición es corta y lineal, para que la
 * tarjeta se pegue al cursor; al salir se alarga con la curva del diseño, para que
 * vuelva a su posición con inercia.
 *
 * Además publica en el elemento las variables CSS `--tilt-x`, `--tilt-y` (posición
 * del puntero en porcentaje) y `--tilt-active` (0 / 1), para que un brillo hijo
 * pueda seguir al cursor sin necesidad de otro listener.
 *
 * No se activa en punteros gruesos (táctil) ni bajo `prefers-reduced-motion: reduce`.
 *
 * El hook es dueño de la transición del elemento: las transiciones de color van en
 * un hijo, no en el mismo nodo que recibe el ref.
 */
const EASE = "cubic-bezier(.16,1,.3,1)";

export interface TiltOptions {
  /** Grados máximos de giro en cada eje. Por defecto 9. */
  maxTilt?: number;
  /** Elevación en píxeles sobre el plano mientras el puntero está encima. Por defecto 14. */
  lift?: number;
  /** Perspectiva en píxeles. Por defecto 1000. */
  perspective?: number;
  /** Desactiva el efecto sin cambiar el orden de los hooks. */
  disabled?: boolean;
}

export function useTilt<T extends HTMLElement = HTMLDivElement>({
  maxTilt = 9,
  lift = 14,
  perspective = 1000,
  disabled = false,
}: TiltOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el || disabled) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const settle = () => {
      el.style.transitionProperty = "transform";
      el.style.transitionDuration = "0.7s";
      el.style.transitionTimingFunction = EASE;
    };

    el.style.transformStyle = "preserve-3d";
    el.style.setProperty("--tilt-active", "0");
    settle();

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const rect = el.getBoundingClientRect();

      if (rect.width === 0 || rect.height === 0) return;

      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      el.style.transitionProperty = "transform";
      el.style.transitionDuration = "0.12s";
      el.style.transitionTimingFunction = "linear";
      el.style.transform =
        `perspective(${perspective}px)` +
        ` rotateY(${((x - 0.5) * maxTilt).toFixed(2)}deg)` +
        ` rotateX(${((0.5 - y) * maxTilt).toFixed(2)}deg)` +
        ` translateZ(${lift}px)`;

      el.style.setProperty("--tilt-x", `${(x * 100).toFixed(2)}%`);
      el.style.setProperty("--tilt-y", `${(y * 100).toFixed(2)}%`);
      el.style.setProperty("--tilt-active", "1");
    };

    const handleLeave = () => {
      settle();
      el.style.transform = "";
      el.style.setProperty("--tilt-active", "0");
    };

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);
    el.addEventListener("pointercancel", handleLeave);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
      el.removeEventListener("pointercancel", handleLeave);

      el.style.transform = "";
      el.style.transformStyle = "";
      el.style.transitionProperty = "";
      el.style.transitionDuration = "";
      el.style.transitionTimingFunction = "";
      el.style.removeProperty("--tilt-x");
      el.style.removeProperty("--tilt-y");
      el.style.removeProperty("--tilt-active");
    };
  }, [maxTilt, lift, perspective, disabled]);

  return ref;
}
