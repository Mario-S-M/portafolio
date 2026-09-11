"use client";

import { useEffect, useRef } from "react";

/**
 * Efecto imán: el elemento se desplaza hacia el cursor cuando este entra en su zona
 * de atracción, y vuelve a su sitio con inercia cuando se aleja.
 *
 * La zona es el rectángulo del elemento ampliado por `radius` en cada lado, así que
 * la atracción empieza antes de que el puntero llegue al botón. El seguimiento se
 * hace con un `requestAnimationFrame` por elemento y solo se escriben estilos cuando
 * el estado cambia.
 *
 * No se activa en punteros gruesos (táctil) ni bajo `prefers-reduced-motion: reduce`.
 *
 * El hook es dueño de la transición del elemento: las transiciones de color van en
 * un hijo, no en el mismo nodo que recibe el ref.
 */
const EASE = "cubic-bezier(.16,1,.3,1)";

export interface MagnetOptions {
  /** Distancia en píxeles, más allá del borde, a la que empieza la atracción. Por defecto 90. */
  radius?: number;
  /** Fracción de la distancia al cursor que se recorre en X. Por defecto 0.28. */
  strengthX?: number;
  /** Fracción de la distancia al cursor que se recorre en Y. Por defecto 0.4. */
  strengthY?: number;
  /** Desplazamiento máximo en píxeles por eje. Por defecto 22. */
  maxShift?: number;
  /** Desactiva el efecto sin cambiar el orden de los hooks. */
  disabled?: boolean;
}

const clampShift = (value: number, limit: number) =>
  value > limit ? limit : value < -limit ? -limit : value;

export function useMagnet<T extends HTMLElement = HTMLAnchorElement>({
  radius = 90,
  strengthX = 0.28,
  strengthY = 0.4,
  maxShift = 22,
  disabled = false,
}: MagnetOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;

    if (!el || disabled) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pointerX = 0;
    let pointerY = 0;
    let tracking = false;
    let engaged = false;
    let frame = 0;

    const release = () => {
      engaged = false;
      el.style.transitionProperty = "transform";
      el.style.transitionDuration = "0.7s";
      el.style.transitionTimingFunction = EASE;
      el.style.transform = "";
    };

    const update = () => {
      frame = 0;

      if (!tracking) return;

      const rect = el.getBoundingClientRect();
      const deltaX = pointerX - (rect.left + rect.width / 2);
      const deltaY = pointerY - (rect.top + rect.height / 2);
      const inZone =
        Math.abs(deltaX) <= rect.width / 2 + radius &&
        Math.abs(deltaY) <= rect.height / 2 + radius;

      if (!inZone) {
        if (engaged) release();
        return;
      }

      engaged = true;
      el.style.transitionProperty = "transform";
      el.style.transitionDuration = "0.18s";
      el.style.transitionTimingFunction = "linear";
      el.style.transform =
        `translate3d(${clampShift(deltaX * strengthX, maxShift).toFixed(1)}px,` +
        ` ${clampShift(deltaY * strengthY, maxShift).toFixed(1)}px, 0)`;
    };

    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      pointerX = event.clientX;
      pointerY = event.clientY;
      tracking = true;
      schedule();
    };

    /** El puntero salió de la ventana: no habrá más eventos, hay que soltar. */
    const handleOut = (event: PointerEvent) => {
      if (event.relatedTarget) return;

      tracking = false;
      if (engaged) release();
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("pointerout", handleOut);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("pointerout", handleOut);

      if (frame !== 0) cancelAnimationFrame(frame);

      el.style.transform = "";
      el.style.transitionProperty = "";
      el.style.transitionDuration = "";
      el.style.transitionTimingFunction = "";
    };
  }, [radius, strengthX, strengthY, maxShift, disabled]);

  return ref;
}
