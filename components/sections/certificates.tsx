"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import BlurFade from "@/components/ui/blur-fade";
import { useMotionPreferences } from "@/components/ui/use-motion-preferences";
import { useParallax } from "@/hooks/use-parallax";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/**
 * Certificados. Reutiliza el contenedor `notas` del diseño —el numeral 03— para
 * los 22 PDF de `public/certificates/`.
 *
 * Se agrupan por familia porque eso es lo que el contenido es: cuatro bloques de
 * formación, no una secuencia. Numerarlos 01…22 habría sido decoración.
 *
 * Cada fila lleva el icono de su tecnología servido por Simple Icons en gris de
 * la paleta, más emisor, fecha y duración cuando el certificado la acredita.
 * Esos datos son verificables y dejan ver de un vistazo que diecinueve de los
 * veintidós son de 2026. Sustituyen a los emojis de la versión anterior, que
 * traían cada uno su propia paleta.
 *
 * Los nombres de curso, emisor y duración son nombres propios: viven en este
 * catálogo y no se traducen. Solo los títulos de grupo pasan por i18n.
 */

type GroupSlug = "backend" | "frontend" | "ai" | "foundations";

type Certificate = {
  /** Nombre propio del curso. No se traduce. */
  name: string;
  /** Emisor: DevTalles o Udemy. */
  issuer: string;
  /** Fecha abreviada del certificado. */
  date: string;
  /** Duración acreditada, solo donde el certificado la indica. */
  hours?: string;
  /** Nombre exacto del archivo dentro de `public/certificates/`. */
  file: string;
  /**
   * Slug de Simple Icons de la tecnología del curso. Ausente en los cursos
   * conceptuales —SOLID, patrones, prompts— que no tienen una tecnología
   * detrás; esos caen a un marcador tipográfico del mismo tamaño para no
   * romper la retícula.
   */
  icon?: string;
};

type Group = {
  slug: GroupSlug;
  items: Certificate[];
};

const GROUPS: Group[] = [
  {
    slug: "backend",
    items: [
      { name: "Nest: desarrollo backend escalable con Node", issuer: "DevTalles", date: "Feb 2026", file: "Nest Desarrollo backend escalable con Node.pdf", icon: "nestjs" },
      { name: "Nest GraphQL: evoluciona tus APIs", issuer: "DevTalles", date: "Feb 2026", file: "Nest GraphQL evoluciona tus APIs.pdf", icon: "graphql" },
      { name: "NestJS Reportes: genera PDFs desde Node", issuer: "DevTalles", date: "Feb 2026", file: "NestJs Reportes Genera PDFs desde Node.pdf", icon: "nestjs" },
      { name: "Docker: guía práctica para desarrolladores", issuer: "DevTalles", date: "Feb 2026", file: "Docker Guía práctica de uso para desarrolladores.pdf", icon: "docker" },
      { name: "Principios SOLID y Clean Code", issuer: "DevTalles", date: "Feb 2026", file: "Principios SOLID y Clean Code.pdf" },
      { name: "Patrones de diseño: soluciones prácticas y eficientes", issuer: "DevTalles", date: "Mar 2026", file: "Patrones de diseño soluciones y practicas y eficientes.pdf" },
      { name: "Java: explora el lenguaje desde cero", issuer: "DevTalles", date: "Jun 2026", file: "Java Explora el lenguaje desde cero.pdf", icon: "openjdk" },
    ],
  },
  {
    slug: "frontend",
    items: [
      { name: "React: de cero a experto", issuer: "Udemy", date: "Feb 2026", hours: "46 h", file: "React de cero a experto.pdf", icon: "react" },
      { name: "Angular: de cero a experto", issuer: "Udemy", date: "Feb 2026", hours: "33.5 h", file: "Angular de cero a experto.pdf", icon: "angular" },
      { name: "ReactiveX: de cero hasta los detalles", issuer: "DevTalles", date: "Feb 2026", file: "ReactiveX de cero hasta los detalles.pdf", icon: "reactivex" },
      { name: "TanStack Query: gestor de estado asíncrono", issuer: "DevTalles", date: "Feb 2026", file: "TanStack Query un poderoso gestor de estado asincrono.pdf", icon: "reactquery" },
      { name: "Zustand: gestor de estado para React", issuer: "DevTalles", date: "Jul 2026", file: "Zustand Gestor de estado para react.pdf" },
      { name: "shadcn/ui: componentes accesibles y personalizables", issuer: "DevTalles", date: "Feb 2026", file: "Shadcn UI Componentes accesibles y personalizables.pdf", icon: "shadcnui" },
      { name: "TailwindCSS para desarrolladores de software", issuer: "DevTalles", date: "Feb 2026", file: "TailwindCSS para desarrolladores de software.pdf", icon: "tailwindcss" },
    ],
  },
  {
    slug: "ai",
    items: [
      { name: "n8n + MCP: automatización y agentes de IA", issuer: "DevTalles", date: "Feb 2026", file: "n8n MCP Automatizacion y agentes de IA inteligentes.pdf", icon: "n8n" },
      { name: "Python + n8n: automatiza rutinas cotidianas", issuer: "DevTalles", date: "Mar 2026", file: "Python n8n Automatiza reutinas cotidianas.pdf", icon: "python" },
      { name: "Claude Code: guía completa para desarrolladores de software", issuer: "DevTalles", date: "Sep 2026", file: "Claude Code.pdf", icon: "claude" },
      { name: "Ingeniería de prompts para la vida real", issuer: "DevTalles", date: "Jul 2026", file: "Ingenieria de prompts para la vida real.pdf" },
      { name: "Vibe coding de forma responsable", issuer: "DevTalles", date: "Mar 2026", file: "Vibe coding de forma responsable.pdf" },
    ],
  },
  {
    slug: "foundations",
    items: [
      { name: "Git y GitHub: control de versiones desde cero", issuer: "Udemy", date: "Feb 2026", hours: "12 h", file: "Git Github Todo un sistema de control de versiones de cero.pdf", icon: "git" },
      { name: "Visual Studio Code: mejora tu velocidad", issuer: "DevTalles", date: "May 2025", file: "Visual Studio Code Mejora tu velocidad para codificar.pdf" },
      { name: "Programación para principiantes", issuer: "Udemy", date: "Nov 2025", hours: "8 h", file: "Programación para principiantes primeros pasos.pdf" },
    ],
  },
];

const TOTAL = GROUPS.reduce((suma, grupo) => suma + grupo.items.length, 0);

/** Entrada escalonada de las filas. Constante de módulo: el hook la usa como dependencia. */
const ROW_REVEAL = {
  opacity: [0, 1],
  translateY: [14, 0],
  duration: 560,
  easing: "easeOutCubic",
  delay: (el: HTMLElement, index: number) => Math.min(index, 14) * 32,
};

/** Sustituto inerte bajo `prefers-reduced-motion`: deja las filas donde están. */
const ROW_STATIC = { opacity: [1, 1], duration: 0 };

function CertificateRow({ certificate }: { certificate: Certificate }) {
  const { t } = useTranslation();

  return (
    <a
      href={`/certificates/${certificate.file}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${certificate.name} — ${t("certificates.open")}`}
      className="certificate-row group relative flex items-baseline gap-x-5 border-t border-hairline py-[18px] transition-colors duration-300 hover:bg-fg/[3.5%] focus-visible:bg-fg/[3.5%] focus-visible:outline-none"
    >
      {/* Filete de acento que entra desde la izquierda: sustituye al fondo recortado. */}
      <span
        aria-hidden="true"
        className="absolute top-[-1px] left-0 h-px w-0 bg-accent transition-[width] duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full group-focus-visible:w-full"
      />

      <span
        aria-hidden="true"
        className="relative top-[3px] grid size-[18px] shrink-0 place-items-center"
      >
        {certificate.icon ? (
          <Image
            src={`https://cdn.simpleicons.org/${certificate.icon}/8A8792`}
            alt=""
            width={18}
            height={18}
            unoptimized
            className="size-[18px] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
          />
        ) : (
          // Cursos conceptuales sin tecnología detrás: rombo del mismo tamaño,
          // para que la columna de iconos no se descuadre.
          <span className="size-[7px] rotate-45 border border-fg-faint transition-colors duration-300 group-hover:border-accent" />
        )}
      </span>

      <h3 className="flex-1 font-display text-[clamp(16px,1.55vw,20px)] leading-[1.3] font-medium tracking-[-.01em] text-fg text-pretty transition-colors duration-300 group-hover:text-accent">
        {certificate.name}
      </h3>

      <span className="hidden shrink-0 font-mono text-[10px] tracking-[.14em] whitespace-nowrap text-fg-faint uppercase sm:inline">
        {certificate.issuer}
        <span className="px-1.5 text-fg-faint/60">·</span>
        {certificate.date}
        {certificate.hours ? (
          <>
            <span className="px-1.5 text-fg-faint/60">·</span>
            <span className="text-fg-subtle">{certificate.hours}</span>
          </>
        ) : null}
      </span>

      <span
        aria-hidden="true"
        className="shrink-0 text-[15px] leading-none text-fg-faint transition-[transform,color] duration-[450ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-[5px] group-hover:-translate-y-[2px] group-hover:text-accent"
      >
        ↗
      </span>
    </a>
  );
}

export function Certificates() {
  const { t } = useTranslation();
  const { reducedMotion } = useMotionPreferences();
  const numeralRef = useParallax<HTMLDivElement>({ mode: "vertical", speed: -0.1 });
  const revealRef = useScrollReveal({
    targets: ".certificate-row",
    animation: reducedMotion ? ROW_STATIC : ROW_REVEAL,
    triggerOffset: 0.05,
  });

  return (
    <section id="notas" className="relative overflow-hidden px-[5vw] py-[clamp(90px,13vw,170px)]">
      <div
        ref={numeralRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-[8%] right-[4vw] font-display text-[clamp(120px,22vw,320px)] leading-none font-bold text-fg/[2.2%] select-none"
      >
        03
      </div>

      <div ref={revealRef} className="relative mx-auto max-w-[1000px]">
        <BlurFade className="mb-[clamp(40px,5vw,72px)]">
          <div className="mb-[22px] font-mono text-[11px] tracking-[.26em] text-accent uppercase">
            {t("certificates.eyebrow")}
          </div>
          <h2 className="font-display text-[clamp(30px,5.4vw,74px)] leading-[.98] font-bold tracking-[-.04em] text-balance text-fg">
            {t("certificates.title")}
          </h2>
          <p className="mt-6 max-w-[56ch] text-[15px] leading-[1.7] text-pretty text-fg-subtle">
            {t("certificates.description", { total: TOTAL })}
          </p>
        </BlurFade>

        <div className="flex flex-col gap-[clamp(36px,4.5vw,60px)]">
          {GROUPS.map((group) => (
            <div key={group.slug}>
              <div className="mb-1 flex items-baseline gap-3">
                <h3 className="font-mono text-[11px] tracking-[.2em] text-accent uppercase">
                  {t(`certificates.group.${group.slug}`)}
                </h3>
                <span className="font-mono text-[11px] tracking-[.14em] text-fg-faint">
                  {String(group.items.length).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-hairline" />
              </div>

              <div className="border-b border-hairline">
                {group.items.map((certificate) => (
                  <CertificateRow key={certificate.file} certificate={certificate} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
