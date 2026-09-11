"use client";

import { useEffect, useRef } from "react";

/**
 * Parallax ligado al scroll, con los tres modos del diseño:
 *
 * - `vertical`   — el elemento se desplaza en Y a distinta velocidad que la página.
 * - `horizontal` — el elemento recorre X según el progreso de su contenedor (cintas).
 * - `zoom`       — el elemento escala y deriva según el progreso de su contenedor.
 *
 * Todos los elementos suscritos comparten un único listener de scroll y un único
 * `requestAnimationFrame`. La geometría se lee una sola vez al suscribirse y se
 * recalcula en `resize`, nunca en cada frame.
 *
 * Bajo `prefers-reduced-motion: reduce` el hook no se suscribe ni escribe estilos.
 */
export type ParallaxMode = "vertical" | "horizontal" | "zoom";

export interface ParallaxOptions {
  /** Modo de desplazamiento. Por defecto `vertical`. */
  mode?: ParallaxMode;
  /**
   * Intensidad del efecto:
   * - `vertical`: fracción del desplazamiento de la página (0.16 por defecto).
   * - `horizontal`: recorrido total en píxeles, negativo para invertir (320).
   * - `zoom`: multiplicador del zoom y la deriva base del diseño (1).
   */
  speed?: number;
  /** Desactiva el efecto sin cambiar el orden de los hooks. */
  disabled?: boolean;
}

interface ParallaxEntry {
  el: HTMLElement;
  mode: ParallaxMode;
  speed: number;
  /** Geometría cacheada en coordenadas de documento. */
  top: number;
  height: number;
  hostTop: number;
  hostHeight: number;
}

/** Margen fuera de la ventana en el que se sigue calculando, en píxeles. */
const CULL_MARGIN = 300;

const entries = new Set<ParallaxEntry>();

let frame = 0;
let listening = false;

const clamp01 = (value: number) => (value < 0 ? 0 : value > 1 ? 1 : value);

/**
 * Relee la geometría de todos los suscritos en dos pasadas: primero limpia las
 * transformaciones y después mide, para provocar un solo reflow en lugar de uno
 * por elemento.
 */
function measureAll() {
  if (entries.size === 0) return;

  const list = Array.from(entries);

  for (const entry of list) {
    entry.el.style.transform = "";
  }

  const scrollY = window.scrollY;

  for (const entry of list) {
    const rect = entry.el.getBoundingClientRect();
    entry.top = rect.top + scrollY;
    entry.height = rect.height;

    const host = entry.el.parentElement;

    if (host) {
      const hostRect = host.getBoundingClientRect();
      entry.hostTop = hostRect.top + scrollY;
      entry.hostHeight = hostRect.height;
    } else {
      entry.hostTop = entry.top;
      entry.hostHeight = entry.height;
    }
  }
}

function apply() {
  frame = 0;

  const scrollY = window.scrollY;
  const viewport = window.innerHeight;

  for (const entry of entries) {
    if (entry.mode === "vertical") {
      const top = entry.top - scrollY;

      if (top + entry.height < -CULL_MARGIN || top > viewport + CULL_MARGIN) continue;

      const offset = -(top + entry.height / 2 - viewport / 2) * entry.speed;
      entry.el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      continue;
    }

    const hostTop = entry.hostTop - scrollY;

    if (hostTop + entry.hostHeight < -CULL_MARGIN || hostTop > viewport + CULL_MARGIN) continue;

    const progress = 1 - (hostTop + entry.hostHeight) / (viewport + entry.hostHeight);

    if (entry.mode === "horizontal") {
      const offset = (progress - 0.5) * -entry.speed;
      entry.el.style.transform = `translate3d(${offset.toFixed(1)}px, 0, 0)`;
    } else {
      const eased = clamp01(progress);
      const scale = 1.14 - eased * 0.14 * entry.speed;
      const drift = (eased - 0.5) * 46 * entry.speed;
      entry.el.style.transform = `scale(${scale.toFixed(3)}) translate3d(0, ${drift.toFixed(1)}px, 0)`;
    }
  }
}

function schedule() {
  if (frame === 0) frame = requestAnimationFrame(apply);
}

/** Remide y repinta de inmediato, para no dejar un frame con el elemento sin transformar. */
function remeasure() {
  if (frame !== 0) {
    cancelAnimationFrame(frame);
    frame = 0;
  }

  measureAll();
  apply();
}

function subscribe(entry: ParallaxEntry) {
  entries.add(entry);

  if (!listening) {
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", remeasure);
    listening = true;
  }

  remeasure();
}

function unsubscribe(entry: ParallaxEntry) {
  entries.delete(entry);
  entry.el.style.transform = "";
  entry.el.style.willChange = "";

  if (entries.size === 0 && listening) {
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", remeasure);
    listening = false;

    if (frame !== 0) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  }
}

function defaultSpeed(mode: ParallaxMode) {
  if (mode === "horizontal") return 320;
  if (mode === "zoom") return 1;
  return 0.16;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>({
  mode = "vertical",
  speed,
  disabled = false,
}: ParallaxOptions = {}) {
  const ref = useRef<T>(null);
  const amount = speed ?? defaultSpeed(mode);

  useEffect(() => {
    const el = ref.current;

    if (!el || disabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const entry: ParallaxEntry = {
      el,
      mode,
      speed: amount,
      top: 0,
      height: 0,
      hostTop: 0,
      hostHeight: 0,
    };

    el.style.willChange = "transform";
    subscribe(entry);

    return () => unsubscribe(entry);
  }, [mode, amount, disabled]);

  return ref;
}
