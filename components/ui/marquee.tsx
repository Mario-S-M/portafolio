"use client";

import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  /** Contenido libre de la cinta. Tiene prioridad sobre `items`. */
  children?: ReactNode;
  /** Alternativa a `children`: lista de piezas separadas por `separator`. */
  items?: ReactNode[];
  /** Nodo que cierra cada pieza de `items`; también cose la costura del bucle. */
  separator?: ReactNode;
  /** Sentido del desplazamiento. */
  direction?: "left" | "right";
  /** Segundos que tarda un ciclo completo. */
  duration?: number;
  /** Separación horizontal entre piezas, en píxeles. */
  gap?: number;
  className?: string;
  trackClassName?: string;
}

/**
 * Cinta infinita horizontal. Duplica el contenido para que el bucle sea
 * continuo: el keyframe `marquee` desplaza la pista un 50 %, justo el ancho
 * de la primera copia, así que el salto no se ve.
 *
 * Bajo `prefers-reduced-motion` la animación queda detenida por la regla
 * `.animate-marquee { animation: none !important }` de `app/globals.css`.
 */
export default function Marquee({
  children,
  items,
  separator,
  direction = "left",
  duration = 34,
  gap = 40,
  className,
  trackClassName,
}: MarqueeProps) {
  const group: ReactNode =
    children ??
    items?.map((item, index) => (
      <Fragment key={index}>
        {item}
        {separator}
      </Fragment>
    ));

  const groupClassName = cn(
    "flex shrink-0 items-center whitespace-nowrap",
    trackClassName
  );
  const groupStyle = { gap: `${gap}px`, paddingRight: `${gap}px` };

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        <div className={groupClassName} style={groupStyle}>
          {group}
        </div>
        <div className={groupClassName} style={groupStyle} aria-hidden="true">
          {group}
        </div>
      </div>
    </div>
  );
}
