"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import BlurFade from "@/components/ui/blur-fade";
import TerminalCard, { type TerminalLine } from "@/components/ui/terminal-card";
import { IconCloud } from "@/components/ui/icon-cloud";
import { useMotionPreferences } from "@/components/ui/use-motion-preferences";
import { cn } from "@/lib/utils";

/**
 * Entrada de una columna del stack. Una cadena suelta es un nombre propio y se
 * muestra igual en los dos idiomas; `{ key }` señala una entrada que contiene
 * prosa y por tanto se resuelve contra `lib/i18n.ts`.
 */
type StackItem = string | { key: string };

/**
 * Grupo del stack. El título de la columna siempre se traduce; las tecnologías
 * son nombres propios y viven aquí, idénticos en español y en inglés.
 */
type StackGroup = {
  id: "frontend" | "backend" | "datos" | "infraestructura" | "ia";
  items: StackItem[];
};

const STACK: StackGroup[] = [
  {
    id: "frontend",
    items: [
      "Next.js · React",
      "Angular · Module Federation",
      "Flutter · React Native",
      "TailwindCSS · shadcn/ui",
      { key: "stack.item.accessibility" },
    ],
  },
  {
    id: "backend",
    items: [
      "NestJS · Fastify",
      "Node.js · TypeScript",
      "GraphQL · REST",
      "NATS · Socket.IO",
      "OAuth2 · OIDC · JWT",
    ],
  },
  {
    id: "datos",
    items: ["PostgreSQL", "MySQL", "TypeORM · Prisma", "Row-Level Security · ltree"],
  },
  {
    id: "infraestructura",
    items: [
      "Docker · Nginx",
      "Nx · pnpm",
      "GitHub Actions · Jenkins",
      "VPS Linux · PM2",
      "OpenTelemetry",
    ],
  },
  {
    id: "ia",
    items: ["LLMs · RAG", "Embeddings bge-m3", { key: "stack.item.agents" }, "Groq · Ollama"],
  },
];

/** Ruta de la barra de título de la terminal: no es prosa, no se traduce. */
const TERMINAL_TITLE = "~/mario — zsh";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Retardo en milisegundos, para escalonar las columnas. */
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
        state === "hidden" ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Iconos de la nube del stack. Se piden a Simple Icons en el color de acento
 * para que la nube no meta una paleta ajena en la sección.
 *
 * Todos los slugs están comprobados contra el CDN: `java`, `nodejs`, `aws` y
 * `vscode` no existen en Simple Icons y daban 404 en la versión anterior del
 * sitio; los equivalentes válidos son `openjdk` y `nodedotjs`, y AWS y VS Code
 * simplemente no tienen icono ahí.
 */
const CLOUD_SLUGS = [
  "typescript",
  "javascript",
  "nestjs",
  "nodedotjs",
  "nextdotjs",
  "react",
  "angular",
  "fastify",
  "graphql",
  "postgresql",
  "mysql",
  "mongodb",
  "typeorm",
  "prisma",
  "redis",
  "docker",
  "nginx",
  "kubernetes",
  "jenkins",
  "githubactions",
  "git",
  "tailwindcss",
  "shadcnui",
  "reactquery",
  "reactivex",
  "socketdotio",
  "swagger",
  "flutter",
  "dart",
  "python",
  "php",
  "laravel",
  "openjdk",
  "n8n",
  "ollama",
  "opentelemetry",
  "jsonwebtokens",
];

const CLOUD_IMAGES = CLOUD_SLUGS.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/F2EFEA`
);

export function SkillsSection() {
  const { t, i18n } = useTranslation();

  const terminalLines = useMemo<TerminalLine[]>(
    () => [
      { kind: "prompt", text: t("stack.terminal.whoami") },
      { kind: "output", text: t("stack.terminal.identity") },
      { kind: "prompt", text: t("stack.terminal.cat") },
      { kind: "output", text: t("stack.terminal.priority1") },
      { kind: "output", text: t("stack.terminal.priority2") },
      { kind: "output", text: t("stack.terminal.priority3") },
      { kind: "prompt", text: t("stack.terminal.deploy") },
      { kind: "success", text: t("stack.terminal.done") },
    ],
    [t]
  );

  return (
    <>
      <section
        id="stack"
        className="relative overflow-hidden border-y border-hairline-soft bg-surface px-[5vw] py-[clamp(80px,12vw,150px)]"
      >
        <div className="mx-auto max-w-[1400px]">
          <BlurFade className="mb-[clamp(40px,6vw,70px)]">
            <div className="mb-[22px] font-mono text-[11px] tracking-[0.26em] text-accent uppercase">
              {t("stack.eyebrow")}
            </div>
            <h2 className="font-display text-[clamp(30px,5.4vw,74px)] leading-[0.98] font-bold tracking-[-0.04em] text-fg">
              {t("stack.title")}
            </h2>
          </BlurFade>

          {/* La retícula usa `auto-fit` con un mínimo de 250px: cinco columnas
              en escritorio ancho, tres o dos en tablet y una a 375px, sin medir
              nada en JavaScript. El hueco de 1px sobre el fondo del contenedor
              dibuja las separaciones del diseño. */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-px border border-hairline bg-hairline">
            {STACK.map((group, index) => (
              <div
                key={group.id}
                className="bg-surface p-[clamp(26px,3vw,40px)]"
              >
                <Reveal delay={index * 70}>
                  <h3 className="mb-[22px] font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
                    {t(`stack.group.${group.id}`)}
                  </h3>
                  <ul className="flex list-none flex-col gap-[13px]">
                    {group.items.map((item) => {
                      const isKey = typeof item !== "string";
                      return (
                        <li
                          key={isKey ? item.key : item}
                          className="font-display text-[18px] leading-snug text-fg"
                        >
                          {isKey ? t(item.key) : item}
                        </li>
                      );
                    })}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bg px-[5vw] py-[clamp(80px,12vw,150px)]">
        {/* `key` por idioma: la tarjeta memoriza el texto ya escrito, así que
            al cambiar de idioma se remonta y vuelve a escribir la versión nueva. */}
        <div className="mx-auto grid max-w-[1100px] items-center gap-[clamp(28px,4vw,56px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <TerminalCard
            key={i18n.language}
            title={TERMINAL_TITLE}
            lines={terminalLines}
          />
          <div className="order-first lg:order-last">
            <IconCloud images={CLOUD_IMAGES} />
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsSection;
