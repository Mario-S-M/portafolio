"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import BlurFade from "@/components/ui/blur-fade";
import { useMotionPreferences } from "@/components/ui/use-motion-preferences";
import { useParallax } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";

/**
 * Hito de la línea de tiempo. Solo guarda el identificador: el periodo, el
 * puesto, la organización y el resumen viven en `lib/i18n.ts` bajo
 * `experience.<id>.*`, porque todos ellos cambian de idioma ("Ago 2026 — Hoy"
 * frente a "Aug 2026 — Now", "Departamento de Sistemas" frente a "Systems
 * Department"). Los nombres propios que contienen se escriben igual en las dos
 * versiones.
 */
type Milestone = { id: string };

/** Del más reciente al más antiguo, como en el diseño. */
const MILESTONES: Milestone[] = [
  { id: "utel" },
  { id: "tecnm" },
  { id: "hidalgo" },
  { id: "freelance" },
  { id: "enes" },
  { id: "gps" },
];

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Retardo en milisegundos, para escalonar las filas. */
  delay?: number;
}

/**
 * Entrada escalonada al aparecer en pantalla, resuelta con una transición CSS
 * sobre el propio nodo: un único sistema de animación por elemento.
 *
 * En servidor y bajo `prefers-reduced-motion: reduce` el contenido se pinta ya
 * visible. Si al activarse el elemento está dentro de la ventana, se marca como
 * mostrado sin ocultarlo antes, para que nunca haya un parpadeo.
 */
function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ready, reducedMotion } = useMotionPreferences();
  const animate = ready && !reducedMotion;
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");
  /**
   * Marca el elemento como ya resuelto. Va en una ref y no en las dependencias
   * del efecto: si `state` fuera dependencia, pasar a "hidden" volvería a
   * ejecutar el efecto, su limpieza desconectaría el observador recién creado y
   * la fila se quedaría invisible para siempre.
   */
  const settledRef = useRef(false);

  useEffect(() => {
    if (!animate || settledRef.current) return;
    const node = ref.current;
    if (!node) return;

    if (node.getBoundingClientRect().top < window.innerHeight * 0.9) {
      settledRef.current = true;
      setState("shown");
      return;
    }

    setState("hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          settledRef.current = true;
          setState("shown");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: state === "shown" ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)]",
        state === "hidden" ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
}

export function ExperienceSection() {
  const { t } = useTranslation();
  const numeralRef = useParallax<HTMLDivElement>({ mode: "vertical", speed: -0.1 });

  return (
    <section
      id="experiencia"
      className="relative overflow-hidden px-[5vw] py-[clamp(90px,13vw,180px)]"
    >
      <div
        ref={numeralRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-[6%] left-[3vw] font-display text-[clamp(120px,22vw,320px)] leading-none font-bold text-white/[0.022] select-none"
      >
        02
      </div>

      <div className="relative mx-auto max-w-[1100px]">
        <BlurFade className="mb-[clamp(44px,7vw,84px)]">
          <div className="mb-[22px] font-mono text-[11px] tracking-[0.26em] text-accent uppercase">
            {t("experience.eyebrow")}
          </div>
          <h2 className="font-display text-[clamp(30px,5.4vw,74px)] leading-[0.98] font-bold tracking-[-0.04em] text-fg">
            {t("experience.title")}
          </h2>
        </BlurFade>

        <div className="flex flex-col">
          {MILESTONES.map((milestone, index) => {
            const org = t(`experience.${milestone.id}.org`);
            const summary = t(`experience.${milestone.id}.summary`);

            return (
              <Reveal key={milestone.id} delay={index * 60}>
                <div
                  data-cursor="1"
                  className={cn(
                    "grid grid-cols-1 gap-x-10 gap-y-2 border-t border-hairline py-[30px] transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-[160px_minmax(0,1fr)]",
                    index === MILESTONES.length - 1 && "border-b"
                  )}
                >
                  <div className="font-mono text-xs tracking-[0.12em] whitespace-nowrap text-accent">
                    {t(`experience.${milestone.id}.period`)}
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-[clamp(21px,2.6vw,30px)] font-bold tracking-[-0.02em] text-fg">
                      {t(`experience.${milestone.id}.role`)}
                      <span className="text-fg-subtle"> · {org}</span>
                    </h3>
                    <p className="max-w-[62ch] text-[15.5px] leading-[1.6] text-pretty text-fg-subtle">
                      {summary}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
