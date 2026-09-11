"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useMotionPreferences } from "@/components/ui/use-motion-preferences";

export type TerminalLineKind = "prompt" | "output" | "success";

export interface TerminalLine {
  kind: TerminalLineKind;
  /** Texto del comando o de la salida. Sin el símbolo inicial: lo pone la tarjeta. */
  text: string;
}

interface TerminalCardProps {
  lines: TerminalLine[];
  /** Rótulo de la barra de título. Es una ruta, no prosa traducible. */
  title?: string;
  /** Milisegundos entre pulsaciones. */
  speed?: number;
  /** Pausa en milisegundos al terminar cada línea. */
  linePause?: number;
  className?: string;
}

/** Caracteres escritos por tick, como en el diseño original. */
const CHARS_PER_TICK = 2;

const MARKER: Record<TerminalLineKind, string | null> = {
  prompt: "$",
  output: null,
  success: "✓",
};

const LINE_CLASS: Record<TerminalLineKind, string> = {
  prompt: "text-fg",
  output: "text-fg-subtle",
  success: "text-accent",
};

/**
 * Tarjeta con estética de terminal. Escribe las líneas una a una cuando
 * entra en pantalla y deja un cursor parpadeante al final.
 *
 * Bajo `prefers-reduced-motion` no se activa el mecanismo de escritura y
 * el contenido completo queda visible desde la primera pintura, que es
 * también lo que se renderiza en servidor.
 */
export default function TerminalCard({
  lines,
  title,
  speed = 13,
  linePause = 220,
  className,
}: TerminalCardProps) {
  const { ready, reducedMotion } = useMotionPreferences();
  const animate = ready && !reducedMotion;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [typed, setTyped] = useState<string[] | null>(null);
  const [started, setStarted] = useState(false);

  const linesRef = useRef(lines);
  linesRef.current = lines;

  // Arranca al entrar en pantalla, una sola vez.
  useEffect(() => {
    if (!animate || started) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          setStarted(true);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [animate, started]);

  // Escritura línea a línea.
  useEffect(() => {
    if (!started) return;
    const source = linesRef.current;
    if (source.length === 0) return;

    const written: string[] = [];
    let lineIndex = 0;
    let charIndex = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    setTyped([]);

    const step = () => {
      const current = source[lineIndex];
      charIndex += CHARS_PER_TICK;
      written[lineIndex] = current.text.slice(0, charIndex);
      setTyped([...written]);

      if (charIndex < current.text.length) {
        timer = setTimeout(step, speed);
        return;
      }
      lineIndex += 1;
      charIndex = 0;
      if (lineIndex < source.length) timer = setTimeout(step, linePause);
    };

    timer = setTimeout(step, speed);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [started, speed, linePause]);

  const visible = typed === null ? lines.map((line) => line.text) : typed;

  return (
    <div
      ref={containerRef}
      className={cn(
        "overflow-hidden rounded-[14px] border border-hairline bg-surface shadow-[0_50px_130px_rgba(0,0,0,.65)]",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-hairline-soft bg-[#101014] px-[18px] py-[15px]">
        <span aria-hidden="true" className="size-[10px] rounded-full bg-accent" />
        <span
          aria-hidden="true"
          className="size-[10px] rounded-full bg-border-strong"
        />
        <span
          aria-hidden="true"
          className="size-[10px] rounded-full bg-border-strong"
        />
        {title ? (
          <span className="ml-3 font-mono text-[11px] tracking-[0.12em] text-fg-faint">
            {title}
          </span>
        ) : null}
      </div>

      <pre className="m-0 min-h-[250px] px-5 py-5 font-mono text-xs leading-[1.95] break-words whitespace-pre-wrap sm:px-8 sm:py-8 sm:text-sm">
        {lines.map((line, index) => {
          const text = visible[index];
          if (text === undefined) return null;
          const marker = MARKER[line.kind];
          const isLast = index === visible.length - 1;
          return (
            <div key={index} className={LINE_CLASS[line.kind]}>
              {marker ? (
                <span className="text-accent">{marker} </span>
              ) : null}
              {text}
              {isLast ? (
                <span
                  aria-hidden="true"
                  className="ml-[3px] inline-block h-[14px] w-[9px] translate-y-[2px] animate-blink bg-accent align-baseline"
                />
              ) : null}
            </div>
          );
        })}
      </pre>
    </div>
  );
}
