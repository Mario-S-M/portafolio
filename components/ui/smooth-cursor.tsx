"use client";

import { useEffect, useRef, useState, type FC, type ReactNode } from "react";
import { motion, useSpring } from "framer-motion";
import { useMotionPreferences } from "@/components/ui/use-motion-preferences";

interface Position {
  x: number;
  y: number;
}

export interface SmoothCursorProps {
  cursor?: ReactNode;
  springConfig?: {
    damping: number;
    stiffness: number;
    mass: number;
    restDelta: number;
  };
}

function isTrackablePointer(pointerType: string) {
  return pointerType !== "touch";
}

/**
 * Punta de flecha del cursor.
 *
 * Relleno oscuro con perfil claro, igual que el original de Magic UI: esa
 * dualidad es lo que la mantiene legible tanto sobre el fondo `#0A0A0C` del
 * sitio como sobre las capturas claras de la sección `proyectos`. Un relleno
 * plano en el color de acento se perdería sobre esas capturas.
 */
const DefaultCursorSVG: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={54}
    viewBox="0 0 50 54"
    fill="none"
    style={{ scale: 0.5 }}
  >
    <g filter="url(#msm_cursor_shadow)">
      <path
        d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
        fill="var(--bg)"
      />
      <path
        d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
        stroke="var(--fg)"
        strokeWidth={2.25825}
      />
    </g>
    <defs>
      <filter
        id="msm_cursor_shadow"
        x={0.602397}
        y={0.952444}
        width={49.0584}
        height={52.428}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2.25825} />
        <feGaussianBlur stdDeviation={2.25825} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

/**
 * Cursor con física de resortes: la flecha persigue al puntero y rota hacia la
 * dirección del movimiento, encogiéndose ligeramente mientras se desplaza.
 *
 * Adaptado del `SmoothCursor` de Magic UI. Dos cambios respecto al original:
 * usa `framer-motion`, que ya es dependencia del proyecto, en lugar de añadir
 * `motion`; y se apaga bajo `prefers-reduced-motion` además de en táctil, que
 * es la regla que sigue el resto del sitio.
 */
export default function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  springConfig = {
    damping: 45,
    stiffness: 400,
    mass: 1,
    restDelta: 0.001,
  },
}: SmoothCursorProps) {
  const { ready, reducedMotion, finePointer } = useMotionPreferences();
  const enabled = ready && !reducedMotion && finePointer;

  const lastMousePos = useRef<Position>({ x: 0, y: 0 });
  const velocity = useRef<Position>({ x: 0, y: 0 });
  const lastUpdateTime = useRef(0);
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const rotation = useSpring(0, { ...springConfig, damping: 60, stiffness: 300 });
  const scale = useSpring(1, { ...springConfig, stiffness: 500, damping: 35 });

  useEffect(() => {
    if (!enabled) {
      setIsVisible(false);
      return;
    }

    let settleTimer: ReturnType<typeof setTimeout> | null = null;
    let rafId = 0;

    const updateVelocity = (currentPos: Position) => {
      const now = performance.now();
      const deltaTime = now - lastUpdateTime.current;
      if (deltaTime > 0 && lastUpdateTime.current !== 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        };
      }
      lastUpdateTime.current = now;
      lastMousePos.current = currentPos;
    };

    const move = (event: PointerEvent) => {
      setIsVisible(true);
      const currentPos = { x: event.clientX, y: event.clientY };
      updateVelocity(currentPos);

      const speed = Math.hypot(velocity.current.x, velocity.current.y);
      cursorX.set(currentPos.x);
      cursorY.set(currentPos.y);

      if (speed > 0.1) {
        const currentAngle =
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) + 90;

        let angleDiff = currentAngle - previousAngle.current;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        accumulatedRotation.current += angleDiff;
        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;

        scale.set(0.95);
        if (settleTimer) clearTimeout(settleTimer);
        settleTimer = setTimeout(() => scale.set(1), 150);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isTrackablePointer(event.pointerType)) return;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        move(event);
        rafId = 0;
      });
    };

    // Al salir de la ventana se esconde: si no, la flecha se queda clavada en el borde.
    const onPointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) setIsVisible(false);
    };

    document.documentElement.classList.add("cursor-none");
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerout", onPointerOut);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerOut);
      document.documentElement.classList.remove("cursor-none");
      if (rafId) cancelAnimationFrame(rafId);
      if (settleTimer) clearTimeout(settleTimer);
      lastUpdateTime.current = 0;
    };
  }, [enabled, cursorX, cursorY, rotation, scale]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        rotate: rotation,
        scale,
        zIndex: 9500,
        pointerEvents: "none",
        willChange: "transform",
      }}
      initial={false}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      {cursor}
    </motion.div>
  );
}
