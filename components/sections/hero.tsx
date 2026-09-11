"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import Marquee from "@/components/ui/marquee";
import { useMagnet } from "@/hooks/use-magnet";
import { useParallax } from "@/hooks/use-parallax";
import { useTilt } from "@/hooks/use-tilt";

/** Nombres propios de tecnología: no se traducen. */
const TECHNOLOGIES = [
  "TypeScript",
  "NestJS",
  "Next.js",
  "Angular",
  "PostgreSQL",
  "Docker",
  "Nx",
  "GraphQL",
];

/** Retícula de fondo del diseño, desvanecida hacia los bordes. */
const GRID_BACKDROP = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
  backgroundSize: "90px 90px",
  maskImage:
    "radial-gradient(ellipse 90% 70% at 50% 40%, #000 20%, transparent 78%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 90% 70% at 50% 40%, #000 20%, transparent 78%)",
} as const;

export function HeroSection() {
  const { t } = useTranslation();

  const accentBlobRef = useParallax<HTMLDivElement>({ speed: 0.22 });
  const violetBlobRef = useParallax<HTMLDivElement>({ speed: -0.16 });
  const wordmarkRef = useParallax<HTMLDivElement>({ speed: 0.5 });
  const photoRef = useParallax<HTMLDivElement>({ speed: 0.1 });
  const photoTiltRef = useTilt<HTMLDivElement>({ maxTilt: 7, lift: 10 });
  const projectsRef = useMagnet<HTMLAnchorElement>();
  const cvRef = useMagnet<HTMLAnchorElement>();

  return (
    <>
      <section
        id="inicio"
        className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-[5vw] pt-[120px] pb-[60px] lg:pt-[96px] lg:pb-12"
      >
        {/* Capas decorativas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50"
          style={GRID_BACKDROP}
        />

        <div
          ref={accentBlobRef}
          aria-hidden="true"
          className="pointer-events-none absolute top-[8%] -right-[8vw] h-[46vw] max-h-[620px] w-[46vw] max-w-[620px] rounded-full blur-[30px]"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, color-mix(in srgb, var(--accent) 50%, transparent), transparent 62%)",
          }}
        >
          <div className="size-full animate-floaty" />
        </div>

        <div
          ref={violetBlobRef}
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[6%] -left-[10vw] h-[40vw] max-h-[520px] w-[40vw] max-w-[520px] rounded-full blur-[40px]"
          style={{
            background:
              "radial-gradient(circle, rgba(120,105,255,.28), rgba(120,105,255,0) 65%)",
          }}
        />

        <div
          ref={wordmarkRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <span
            className="font-display text-[clamp(90px,26vw,420px)] leading-[0.8] font-bold tracking-[-0.04em] whitespace-nowrap text-transparent"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,.055)" }}
          >
            FULLSTACK
          </span>
        </div>

        {/* Contenido */}
        <div className="relative z-[3] mx-auto grid w-full max-w-[1400px] items-end gap-11 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0">
            <div
              className="mb-5 flex animate-fade-up flex-wrap items-center gap-3"
              style={{ animationDelay: "0.1s", animationDuration: "0.8s" }}
            >
              <span className="font-mono text-[11px] tracking-[0.24em] text-accent uppercase">
                {t("hero.eyebrow")}
              </span>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-hairline px-3.5 py-1.5">
                <span
                  aria-hidden="true"
                  className="size-[7px] animate-pulse-dot rounded-full bg-accent"
                />
                <span className="font-mono text-[11px] tracking-[0.18em] text-fg-subtle uppercase">
                  {t("hero.availability")}
                </span>
              </span>
            </div>

            <h1 className="m-0 font-display text-[clamp(42px,8.8vw,142px)] leading-[0.86] font-bold tracking-[-0.045em] text-fg">
              <span className="block overflow-hidden pb-[0.04em]">
                <span
                  className="inline-block animate-rise-in"
                  style={{ animationDelay: "0.15s" }}
                >
                  MARIO EDUARDO
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.04em]">
                <span
                  className="inline-block animate-rise-in"
                  style={{ animationDelay: "0.28s" }}
                >
                  SÁNCHEZ
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.04em]">
                <span
                  className="inline-block animate-rise-in text-transparent"
                  style={{
                    animationDelay: "0.41s",
                    WebkitTextStroke: "1.6px var(--accent)",
                  }}
                >
                  MEJÍA
                </span>
              </span>
            </h1>

            <div
              className="mt-6 flex animate-fade-up flex-wrap gap-x-5 gap-y-2.5"
              style={{ animationDelay: "0.55s" }}
            >
              <span className="font-mono text-[clamp(12px,1.5vw,15px)] tracking-[0.1em] text-fg uppercase">
                {t("hero.role")}
              </span>
              <span className="font-mono text-[clamp(12px,1.5vw,15px)] tracking-[0.1em] text-accent uppercase">
                {t("hero.roleAccent")}
              </span>
            </div>

            <p
              className="mt-5 max-w-[56ch] animate-fade-up text-[clamp(15px,1.9vw,19px)] leading-[1.65] text-pretty text-fg-muted"
              style={{ animationDelay: "0.68s" }}
            >
              {t("hero.intro")}
            </p>

            <div
              className="mt-8 flex animate-fade-up flex-wrap gap-3.5"
              style={{ animationDelay: "0.82s" }}
            >
              <a
                ref={projectsRef}
                href="#proyectos"
                className="inline-flex items-center gap-3 rounded-full bg-accent px-[30px] py-[17px] text-sm font-extrabold tracking-[0.04em] text-bg uppercase hover:bg-accent-active hover:text-bg"
                style={{
                  boxShadow:
                    "0 14px 44px color-mix(in srgb, var(--accent) 34%, transparent)",
                }}
              >
                {t("hero.cta.projects")}
                <span aria-hidden="true" className="text-[17px]">
                  ↘
                </span>
              </a>
              <a
                ref={cvRef}
                href="/cv-mario-sanchez.pdf"
                download
                className="inline-flex items-center gap-3 rounded-full border border-hairline px-[30px] py-[17px] text-sm font-extrabold tracking-[0.04em] text-fg uppercase hover:border-fg hover:bg-hairline-soft hover:text-fg"
              >
                {t("hero.cta.cv")}
                <span aria-hidden="true" className="text-[17px]">
                  ↓
                </span>
              </a>
            </div>
          </div>

          {/* Retrato */}
          <div
            ref={photoRef}
            className="relative w-[min(300px,62vw)] justify-self-start"
          >
            <div ref={photoTiltRef} className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3.5 rounded-[200px_200px_14px_14px] border border-accent/35"
              />
              <Image
                src="/mario.jpg"
                alt={t("hero.photo.alt")}
                width={600}
                height={800}
                priority
                className="block aspect-[3/4] w-full animate-fade-up rounded-[190px_190px_8px_8px] object-cover object-[50%_20%] grayscale contrast-[1.08]"
                style={{ animationDelay: "0.5s", animationDuration: "1.1s" }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[190px_190px_8px_8px] mix-blend-multiply"
                style={{
                  background:
                    "linear-gradient(180deg, color-mix(in srgb, var(--accent) 10%, transparent), color-mix(in srgb, var(--bg) 72%, transparent))",
                }}
              />
            </div>

            <div className="absolute -right-4 -bottom-4 rounded-lg border border-hairline bg-bg px-3.5 py-2.5">
              <span className="font-mono text-[10px] tracking-[0.14em] text-fg-subtle uppercase">
                {t("hero.location")}
              </span>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[26px] left-[5vw] z-[3] flex items-center gap-3.5"
        >
          <span className="block h-[52px] w-px overflow-hidden bg-hairline">
            <span className="block size-full animate-scroll-cue bg-accent" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-fg-faint uppercase">
            {t("hero.scroll")}
          </span>
        </div>
      </section>

      <section
        aria-label={t("hero.marquee.aria")}
        className="relative z-[4] border-y border-hairline bg-surface py-[22px]"
      >
        <Marquee
          duration={34}
          gap={40}
          trackClassName="font-display text-[clamp(20px,3.4vw,40px)] font-medium tracking-[-0.02em] text-border"
          separator={
            <span aria-hidden="true" className="text-accent">
              ✳
            </span>
          }
          items={TECHNOLOGIES.map((name) => (
            <span key={name}>{name}</span>
          ))}
        />
      </section>
    </>
  );
}
