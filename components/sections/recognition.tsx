"use client";

import { useTranslation } from "react-i18next";

import BlurFade from "@/components/ui/blur-fade";
import Marquee from "@/components/ui/marquee";
import { useMotionPreferences } from "@/components/ui/use-motion-preferences";
import { useParallax } from "@/hooks/use-parallax";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/**
 * Reconocimientos. Cuatro constancias reales de la trayectoria: dos
 * presentaciones de ESKANI en congresos nacionales, la alianza con ElevenLabs
 * —aprobada y en implementación— y la posición en la plataforma DevTalles.
 *
 * Cierra con las dos cintas del diseño, que se desplazan en direcciones
 * opuestas. Su texto es microcopy ambiental del diseño, no afirma ningún hecho
 * de la trayectoria, y por eso vive aquí y no en `lib/i18n.ts`.
 */

/** Claves i18n de cada constancia. El orden es el de publicación, de más reciente a más antigua. */
const AWARDS = ["ife", "elevenlabs", "enitet", "devtalles"] as const;

/** Entrada escalonada de las tarjetas. Constante de módulo: el hook la usa como dependencia. */
const CARD_REVEAL = {
  opacity: [0, 1],
  translateY: [30, 0],
  duration: 720,
  easing: "easeOutCubic",
  delay: (el: HTMLElement, index: number) => index * 90,
};

/** Sustituto inerte bajo `prefers-reduced-motion`: deja las tarjetas donde están. */
const CARD_STATIC = { opacity: [1, 1], duration: 0 };

/** Palabras de la cinta superior, con el tratamiento tipográfico de cada una. */
const SHIP_RIBBON = [
  { text: "SHIP IT", tone: "accent" },
  { text: "MEASURE IT", tone: "outline-accent" },
  { text: "FIX IT", tone: "solid" },
  { text: "REPEAT", tone: "outline-soft" },
] as const;

/** Pasos del ciclo de entrega, cinta inferior. */
const LOOP_RIBBON = [
  "commit",
  "review",
  "test",
  "deploy",
  "observe",
  "iterate",
];

const OUTLINE_ACCENT = {
  color: "transparent",
  WebkitTextStroke: "1.4px var(--accent)",
} as const;

const OUTLINE_SOFT = {
  color: "transparent",
  WebkitTextStroke: "1.4px color-mix(in srgb, var(--fg) 28%, transparent)",
} as const;

export function Recognition() {
  const { t } = useTranslation();
  const { reducedMotion } = useMotionPreferences();
  const ringRef = useParallax<HTMLDivElement>({ mode: "vertical", speed: 0.14 });
  const revealRef = useScrollReveal({
    targets: ".recognition-card",
    animation: reducedMotion ? CARD_STATIC : CARD_REVEAL,
    triggerOffset: 0.05,
  });

  return (
    <>
      <section
        id="reconocimientos"
        className="relative overflow-hidden px-[5vw] py-[clamp(80px,12vw,150px)]"
      >
        {/* Anillo decorativo: gira despacio y se desplaza con el scroll. */}
        <div
          ref={ringRef}
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[10%] right-[8vw] hidden size-[320px] rounded-full border border-accent/10 sm:block"
        >
          <div className="size-full rounded-full border-t border-accent/40 animate-spin-slow" />
        </div>

        <div ref={revealRef} className="relative mx-auto max-w-[1100px]">
          <BlurFade className="mb-[clamp(36px,5vw,60px)]">
            <div className="mb-[22px] font-mono text-[11px] uppercase tracking-[.26em] text-accent">
              {t("recognition.eyebrow")}
            </div>
            <h2 className="font-display text-[clamp(30px,5.4vw,74px)] font-bold leading-[.98] tracking-[-.04em] text-fg text-balance">
              {t("recognition.title")}
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
            {AWARDS.map((id) => (
              <article
                key={id}
                className="recognition-card flex flex-col gap-[14px] border border-hairline bg-bg p-[30px] transition-colors duration-[400ms] hover:border-accent/55"
              >
                <div className="font-mono text-[11px] tracking-[.16em] text-accent">
                  {t(`recognition.items.${id}.period`)}
                </div>
                <h3 className="font-display text-[22px] font-bold tracking-[-.02em] text-fg text-balance">
                  {t(`recognition.items.${id}.title`)}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-fg-subtle text-pretty">
                  {t(`recognition.items.${id}.description`)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cintas. Decorativas: no aportan información y se ocultan al lector de pantalla. */}
      <div
        aria-hidden="true"
        className="relative overflow-hidden border-y border-hairline-soft bg-surface py-[clamp(70px,10vw,120px)]"
      >
        <Marquee direction="left" duration={30} gap={60}>
          {SHIP_RIBBON.map((word, index) => (
            <span
              key={`${word.text}-${index}`}
              className={
                word.tone === "accent"
                  ? "font-display text-[clamp(42px,9vw,130px)] font-bold leading-none tracking-[-.04em] text-accent"
                  : "font-display text-[clamp(42px,9vw,130px)] font-bold leading-none tracking-[-.04em] text-fg"
              }
              style={
                word.tone === "outline-accent"
                  ? OUTLINE_ACCENT
                  : word.tone === "outline-soft"
                    ? OUTLINE_SOFT
                    : undefined
              }
            >
              {word.text}
            </span>
          ))}
        </Marquee>

        <Marquee
          direction="right"
          duration={26}
          gap={24}
          className="mt-[18px]"
          trackClassName="font-mono text-[clamp(11px,1.4vw,14px)] uppercase tracking-[.3em] text-fg-faint"
          items={LOOP_RIBBON.map((step) => (
            <span key={step}>{step}</span>
          ))}
          separator={<span>·</span>}
        />
      </div>
    </>
  );
}

export default Recognition;
