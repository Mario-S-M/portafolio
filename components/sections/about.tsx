"use client";

import { useTranslation } from "react-i18next";
import BlurFade from "@/components/ui/blur-fade";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useParallax } from "@/hooks/use-parallax";
import { cn } from "@/lib/utils";

/**
 * Sección `sobre-mi` — numeral 01, titular, dos párrafos, tres contadores
 * y la cita de cierre del diseño.
 *
 * Un solo sistema de animación por nodo: `BlurFade` (Framer Motion) para las
 * entradas de bloque, `useParallax` para el numeral de fondo y el telón de la
 * cita. El hook de parallax ya se inhibe bajo `prefers-reduced-motion`.
 */

/** Cifras verificables del perfil. El valor es dato, no prosa. */
const stats = [
  { id: "years", value: 2, suffix: "+", labelKey: "about.stats.years", accent: false },
  { id: "projects", value: 8, suffix: "", labelKey: "about.stats.projects", accent: false },
  {
    id: "certificates",
    value: 22,
    suffix: "",
    labelKey: "about.stats.certificates",
    accent: true,
  },
];

export function AboutSection() {
  const { t } = useTranslation();
  const numeralRef = useParallax<HTMLDivElement>({ speed: -0.12 });
  const backdropRef = useParallax<HTMLDivElement>({ mode: "zoom" });

  return (
    <section id="sobre-mi" className="relative overflow-hidden bg-bg">
      <div className="relative overflow-hidden px-[5vw] py-[clamp(90px,13vw,180px)]">
        <div
          ref={numeralRef}
          aria-hidden="true"
          className="pointer-events-none absolute top-[10%] right-[4vw] font-display text-[clamp(120px,22vw,320px)] leading-none font-bold text-fg/[2.5%] select-none"
        >
          01
        </div>

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-[clamp(40px,6vw,90px)] lg:grid-cols-2">
          <BlurFade delay={0.05}>
            <p className="mb-[26px] font-mono text-[11px] tracking-[0.26em] text-accent uppercase">
              {t("about.eyebrow")}
            </p>
            <h2 className="font-display text-[clamp(30px,4.6vw,62px)] leading-[1.02] font-bold tracking-[-0.035em] text-balance text-fg">
              {t("about.heading")}
            </h2>
          </BlurFade>

          <div className="flex flex-col gap-[26px] self-end">
            <BlurFade delay={0.12}>
              <p className="text-[clamp(15px,1.8vw,19px)] leading-[1.7] text-pretty text-fg-muted">
                {t("about.paragraph1")}
              </p>
            </BlurFade>

            <BlurFade delay={0.18}>
              <p className="text-[clamp(15px,1.8vw,19px)] leading-[1.7] text-pretty text-fg-muted">
                {t("about.paragraph2")}
              </p>
            </BlurFade>

            <BlurFade delay={0.24} className="mt-[14px]">
              <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.id} className="bg-bg px-5 py-[26px]">
                    <p
                      className={cn(
                        "font-display text-[clamp(34px,4.6vw,52px)] leading-none font-bold",
                        stat.accent ? "text-accent" : "text-fg"
                      )}
                    >
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-[10px] font-mono text-[10px] tracking-[0.16em] text-fg-subtle uppercase">
                      {t(stat.labelKey)}
                    </p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      <div className="relative flex min-h-[min(56vh,420px)] items-end overflow-hidden border-t border-hairline-soft md:min-h-[min(70vh,560px)]">
        <div
          ref={backdropRef}
          aria-hidden="true"
          className="absolute inset-[-10%]"
          style={{
            background:
              "radial-gradient(60% 70% at 18% 18%, color-mix(in oklab, var(--accent) 24%, transparent) 0%, transparent 62%)," +
              "radial-gradient(55% 60% at 82% 8%, color-mix(in oklab, var(--fg) 10%, transparent) 0%, transparent 58%)," +
              "linear-gradient(160deg, var(--surface) 0%, var(--bg) 72%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--hairline-soft) 0 1px, transparent 1px 96px)," +
              "repeating-linear-gradient(0deg, var(--hairline-soft) 0 1px, transparent 1px 96px)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--bg) 70%, transparent) 0%," +
              " color-mix(in srgb, var(--bg) 20%, transparent) 42%, var(--bg) 100%)",
          }}
        />

        <div className="relative w-full px-[5vw] pt-[clamp(80px,14vw,160px)] pb-[7vh]">
          <BlurFade delay={0.05}>
            <p className="max-w-[15ch] font-display text-[clamp(30px,6.2vw,88px)] leading-[0.98] font-bold tracking-[-0.04em] text-balance text-fg">
              {t("about.quote.title")}
            </p>
          </BlurFade>
          <BlurFade delay={0.14}>
            <p className="mt-[18px] font-mono text-[clamp(11px,1.4vw,13px)] tracking-[0.2em] text-accent uppercase">
              {t("about.quote.caption")}
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
