"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import BlurFade from "@/components/ui/blur-fade";
import { useTilt } from "@/hooks/use-tilt";
import Lightbox from "@/components/ui/lightbox";

/**
 * Sección `proyectos` — cuatro tarjetas numeradas 01/04 … 04/04 y el bloque
 * "Manifiesto" de cierre.
 *
 * Los proyectos con sitio público muestran una captura real y enlazan al dominio;
 * los que no lo tienen caen al marcador con gradiente e iniciales.
 *
 * Un solo sistema de animación por nodo: `BlurFade` (Framer Motion) anima el
 * contenedor de cada tarjeta; `useTilt` transforma el artículo interior y publica
 * `--tilt-x` / `--tilt-y` / `--tilt-active` para el brillo que sigue al puntero.
 * Ambos hooks se inhiben en táctil y bajo `prefers-reduced-motion`.
 */

type Project = {
  id: string;
  /** Nombre propio: no se traduce. */
  name: string;
  /** Iniciales del marcador que se usa cuando no hay captura. */
  initials: string;
  categoryKey: string;
  summaryKey: string;
  /** Nombres propios de tecnología: no se traducen. */
  tech: string[];
  metric: { value: string; labelKey: string };
  /** Sitio público del proyecto. Ausente si no lo tiene. */
  url?: string;
  /** Dominio mostrado en el enlace. */
  host?: string;
  /** Capturas en `public/projects/<id>/`. La primera es la portada de la tarjeta. */
  shots?: { src: string; captionKey: string }[];
};

const projects: Project[] = [
  {
    id: "hidalgo",
    name: "Librerías Hidalgo",
    initials: "LH",
    url: "https://libreriashidalgo.mx",
    host: "libreriashidalgo.mx",
    shots: [
      { src: "/projects/hidalgo/01-portada.jpg", captionKey: "projects.hidalgo.shot1" },
      { src: "/projects/hidalgo/02-catalogo.jpg", captionKey: "projects.hidalgo.shot2" },
      { src: "/projects/hidalgo/03-secciones.jpg", captionKey: "projects.hidalgo.shot3" },
    ],
    categoryKey: "projects.hidalgo.category",
    summaryKey: "projects.hidalgo.summary",
    tech: [
      "Next.js 16",
      "React 19",
      "NestJS 11",
      "GraphQL",
      "PostgreSQL 17",
      "TypeORM",
      "Socket.IO",
      "Docker",
      "Jenkins",
    ],
    metric: { value: "71", labelKey: "projects.hidalgo.metric" },
  },
  {
    id: "eskani",
    name: "ESKANI",
    initials: "ES",
    url: "https://eskani.enesmorelia.unam.mx",
    host: "eskani.enesmorelia.unam.mx",
    shots: [{ src: "/projects/eskani/01-portada.jpg", captionKey: "projects.eskani.shot1" }],
    categoryKey: "projects.eskani.category",
    summaryKey: "projects.eskani.summary",
    tech: ["Next.js", "NestJS", "Fastify", "PostgreSQL", "Docker", "Nginx", "WCAG", "ARIA"],
    metric: { value: "2", labelKey: "projects.eskani.metric" },
  },
  {
    id: "bookitech",
    name: "Bookitech",
    initials: "BK",
    url: "https://bookitech.mx",
    host: "bookitech.mx",
    shots: [{ src: "/projects/bookitech/01-portada.jpg", captionKey: "projects.bookitech.shot1" }],
    categoryKey: "projects.bookitech.category",
    summaryKey: "projects.bookitech.summary",
    tech: [
      "n8n",
      "Twilio",
      "RAG",
      "bge-m3",
      "Groq",
      "Ollama",
      "Python",
      "WhatsApp Business API",
    ],
    metric: { value: "8", labelKey: "projects.bookitech.metric" },
  },
  {
    id: "pos",
    name: "Punto de venta",
    initials: "PV",
    shots: [
      { src: "/projects/pos/01-catalogo.jpg", captionKey: "projects.pos.shot1" },
      { src: "/projects/pos/02-ventas.jpg", captionKey: "projects.pos.shot2" },
      { src: "/projects/pos/03-cierre-caja.jpg", captionKey: "projects.pos.shot3" },
      { src: "/projects/pos/04-inversionistas.jpg", captionKey: "projects.pos.shot4" },
      { src: "/projects/pos/05-categorias.jpg", captionKey: "projects.pos.shot5" },
    ],
    categoryKey: "projects.pos.category",
    summaryKey: "projects.pos.summary",
    tech: ["Flutter", "Dart", "NestJS", "PostgreSQL", "Swagger"],
    metric: { value: "1", labelKey: "projects.pos.metric" },
  },
];

/** Las tres ideas de la filosofía de desarrollo, en la voz del diseño. */
const manifesto = [
  { id: "code", titleKey: "projects.manifesto.code.title", descKey: "projects.manifesto.code.desc" },
  {
    id: "innovation",
    titleKey: "projects.manifesto.innovation.title",
    descKey: "projects.manifesto.innovation.desc",
  },
  {
    id: "learning",
    titleKey: "projects.manifesto.learning.title",
    descKey: "projects.manifesto.learning.desc",
  },
];

const total = String(projects.length).padStart(2, "0");

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useTranslation();
  const cardRef = useTilt<HTMLElement>({ maxTilt: 6, lift: 10 });
  const [openAt, setOpenAt] = useState<number | null>(null);
  const shots = project.shots ?? [];

  return (
    <article
      ref={cardRef}
      className="group/card relative flex h-full flex-col gap-5 overflow-hidden border border-hairline bg-bg p-[clamp(24px,2.6vw,40px)] hover:border-accent/55"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: "var(--tilt-active, 0)",
          background:
            "radial-gradient(420px circle at var(--tilt-x, 50%) var(--tilt-y, 50%)," +
            " color-mix(in oklab, var(--accent) 16%, transparent), transparent 62%)",
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono text-[11px] tracking-[0.16em] text-accent">
          {String(index + 1).padStart(2, "0")}
          <span className="text-fg-faint"> / {total}</span>
        </span>
        <span className="text-right font-mono text-[10px] tracking-[0.14em] text-fg-subtle uppercase">
          {t(project.categoryKey)}
        </span>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden border border-hairline bg-surface">
        {shots.length > 0 ? (
          <button
            type="button"
            onClick={() => setOpenAt(0)}
            aria-label={t("projects.gallery.open", { name: project.name, count: shots.length })}
            className="group/shot absolute inset-0 block cursor-pointer"
          >
            <Image
              src={shots[0].src}
              alt={t("projects.shot.alt", { name: project.name })}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover/card:scale-[1.04]"
            />
            {/* Vela la captura hacia la paleta oscura para que no chille entre las tarjetas. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-bg/35 mix-blend-multiply transition-opacity duration-500 group-hover/card:opacity-0"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 45%, color-mix(in oklab, var(--bg) 78%, transparent) 100%)",
              }}
            />
            <span
              aria-hidden="true"
              className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-bg/85 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-fg-muted backdrop-blur-sm transition-colors group-hover/shot:border-accent group-hover/shot:text-accent"
            >
              <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="9" height="7" rx="1" />
                <path d="M5 13h9V6" />
              </svg>
              1 / {shots.length}
            </span>
          </button>
        ) : (
          <div aria-hidden="true" className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 130% at 18% 0%, color-mix(in oklab, var(--accent) 26%, transparent) 0%, transparent 58%)," +
                  "linear-gradient(140deg, var(--surface) 0%, var(--bg) 78%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, var(--hairline-soft) 0 1px, transparent 1px 44px)," +
                  "repeating-linear-gradient(0deg, var(--hairline-soft) 0 1px, transparent 1px 44px)",
              }}
            />
            <span className="absolute inset-0 grid place-items-center font-display text-[clamp(46px,7vw,84px)] leading-none font-bold tracking-[-0.05em] text-fg/10">
              {project.initials}
            </span>
          </div>
        )}
      </div>

      <div className="relative flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-[clamp(24px,2.6vw,34px)] leading-[1.02] font-bold tracking-[-0.03em] text-fg">
          {project.name}
        </h3>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] text-fg-subtle transition-colors hover:text-accent"
          >
            {project.host}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px]"
            >
              ↗
            </span>
            <span className="sr-only">{t("projects.visit.sr", { name: project.name })}</span>
          </a>
        ) : null}
      </div>

      <p className="relative flex-1 text-[15px] leading-[1.65] text-pretty text-fg-muted">
        {t(project.summaryKey)}
      </p>

      <ul className="relative flex flex-wrap gap-[7px]">
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border px-[10px] py-[5px] font-mono text-[10px] tracking-[0.08em] text-fg-subtle"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="relative flex items-baseline gap-3 border-t border-hairline pt-[18px]">
        <span className="font-display text-[30px] leading-none font-bold text-accent">
          {project.metric.value}
        </span>
        <span className="font-mono text-[10px] tracking-[0.14em] text-fg-subtle uppercase">
          {t(project.metric.labelKey)}
        </span>
      </div>

      {shots.length > 0 ? (
        <Lightbox
          images={shots}
          openAt={openAt}
          onClose={() => setOpenAt(null)}
          title={project.name}
        />
      ) : null}
    </article>
  );
}

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="proyectos" className="relative border-t border-hairline-soft bg-surface">
      <div className="px-[5vw] pt-[clamp(70px,10vw,130px)] pb-[clamp(90px,13vw,170px)]">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-[clamp(40px,6vw,76px)] flex flex-wrap items-end justify-between gap-6">
            <BlurFade delay={0.05}>
              <p className="mb-[22px] font-mono text-[11px] tracking-[0.26em] text-accent uppercase">
                {t("projects.eyebrow")}
              </p>
              <h2 className="font-display text-[clamp(30px,5.4vw,74px)] leading-[0.98] font-bold tracking-[-0.04em] text-balance text-fg">
                {t("projects.heading")}
              </h2>
            </BlurFade>
            <BlurFade delay={0.12}>
              <p className="max-w-[26ch] font-mono text-[11px] leading-[1.7] tracking-[0.1em] text-fg-subtle">
                {t("projects.note")}
              </p>
            </BlurFade>
          </div>

          {/* Cuatro tarjetas: 2×2 llena la retícula. Con 3 columnas la última quedaría huérfana. */}
          <div className="grid grid-cols-1 gap-[clamp(16px,2vw,28px)] md:grid-cols-2">
            {projects.map((project, index) => (
              <BlurFade
                key={project.id}
                delay={0.08 + index * 0.06}
                className="h-full [perspective:1200px]"
              >
                <ProjectCard project={project} index={index} />
              </BlurFade>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-hairline-soft bg-bg px-[5vw] py-[clamp(100px,16vw,220px)]">
        <div className="mx-auto max-w-[1080px]">
          <BlurFade delay={0.05}>
            <p className="mb-[34px] font-mono text-[11px] tracking-[0.26em] text-accent uppercase">
              {t("projects.manifesto.eyebrow")}
            </p>
          </BlurFade>

          <div className="flex flex-col gap-[clamp(20px,2.6vw,34px)]">
            {manifesto.map((idea, index) => (
              <BlurFade key={idea.id} delay={0.12 + index * 0.08}>
                <p className="font-display text-[clamp(22px,3.4vw,46px)] leading-[1.24] font-bold tracking-[-0.03em] text-pretty text-fg-subtle">
                  <span className="text-fg">{t(idea.titleKey)}</span>{" "}
                  {t(idea.descKey)}
                </p>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
