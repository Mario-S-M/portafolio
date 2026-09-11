"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export interface LightboxImage {
  src: string;
  /** Clave i18n del pie. */
  captionKey: string;
}

interface LightboxProps {
  images: LightboxImage[];
  /** Índice inicial; `null` mantiene el visor cerrado. */
  openAt: number | null;
  onClose: () => void;
  /** Nombre propio del proyecto, para el título del visor. */
  title: string;
}

/**
 * Visor de capturas a pantalla completa.
 *
 * Se renderiza en un portal sobre `document.body` para escapar del `overflow`
 * y los `transform` de las tarjetas, que si no recortarían el visor.
 *
 * Accesibilidad: `role="dialog"` con `aria-modal`, foco llevado al contenedor
 * al abrir y devuelto al disparador al cerrar, navegación con `Esc`, `←` y `→`,
 * y bloqueo del scroll de fondo mientras está abierto.
 */
export default function Lightbox({ images, openAt, onClose, title }: LightboxProps) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(openAt ?? 0);
  const [montado, setMontado] = useState(false);
  const contenedorRef = useRef<HTMLDivElement | null>(null);
  const disparadorRef = useRef<Element | null>(null);

  const abierto = openAt !== null;

  useEffect(() => setMontado(true), []);

  useEffect(() => {
    if (openAt !== null) setIndex(openAt);
  }, [openAt]);

  const anterior = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const siguiente = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!abierto) return;

    disparadorRef.current = document.activeElement;
    contenedorRef.current?.focus();

    const overflowPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowLeft") anterior();
      else if (event.key === "ArrowRight") siguiente();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflowPrevio;
      (disparadorRef.current as HTMLElement | null)?.focus?.();
    };
  }, [abierto, onClose, anterior, siguiente]);

  if (!montado) return null;

  return createPortal(
    <AnimatePresence>
      {abierto ? (
        <motion.div
          ref={contenedorRef}
          role="dialog"
          aria-modal="true"
          aria-label={t("projects.gallery.dialog", { name: title })}
          tabIndex={-1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[8000] flex flex-col bg-bg/97 backdrop-blur-sm outline-none"
        >
          <header className="flex items-center justify-between gap-4 px-[clamp(16px,3vw,40px)] py-5">
            <div className="min-w-0">
              <p className="truncate font-display text-[15px] font-bold tracking-[-0.01em] text-fg">
                {title}
              </p>
              <p className="font-mono text-[11px] tracking-[0.12em] text-fg-subtle">
                {String(index + 1).padStart(2, "0")}
                <span className="text-fg-faint"> / {String(images.length).padStart(2, "0")}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full border border-border px-4 py-2 font-mono text-[11px] tracking-[0.12em] text-fg-muted uppercase transition-colors hover:border-accent hover:text-accent"
            >
              {t("projects.gallery.close")}
            </button>
          </header>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-[clamp(12px,4vw,72px)] pb-4"
            onClick={(event) => event.stopPropagation()}
          >
            {images.length > 1 ? (
              <button
                type="button"
                onClick={anterior}
                aria-label={t("projects.gallery.prev")}
                className="absolute left-[clamp(4px,1.5vw,24px)] z-10 grid size-11 place-items-center rounded-full border border-border bg-bg/80 text-fg-muted transition-colors hover:border-accent hover:text-accent"
              >
                ‹
              </button>
            ) : null}

            <AnimatePresence mode="wait">
              <motion.div
                key={images[index]?.src}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex h-full w-full items-center justify-center"
              >
                <Image
                  src={images[index]?.src ?? ""}
                  alt={t(images[index]?.captionKey ?? "")}
                  width={1440}
                  height={900}
                  sizes="92vw"
                  className="max-h-full w-auto max-w-full border border-hairline object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {images.length > 1 ? (
              <button
                type="button"
                onClick={siguiente}
                aria-label={t("projects.gallery.next")}
                className="absolute right-[clamp(4px,1.5vw,24px)] z-10 grid size-11 place-items-center rounded-full border border-border bg-bg/80 text-fg-muted transition-colors hover:border-accent hover:text-accent"
              >
                ›
              </button>
            ) : null}
          </div>

          <footer
            className="flex flex-col items-center gap-3 px-[clamp(16px,3vw,40px)] pb-6"
            onClick={(event) => event.stopPropagation()}
          >
            <p aria-live="polite" className="text-center text-[13px] text-fg-muted">
              {t(images[index]?.captionKey ?? "")}
            </p>
            {images.length > 1 ? (
              <div className="flex flex-wrap items-center justify-center gap-2">
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={t("projects.gallery.goTo", { n: i + 1 })}
                    aria-current={i === index}
                    className={cn(
                      "size-2 rounded-full transition-colors",
                      i === index ? "bg-accent" : "bg-border hover:bg-fg-subtle"
                    )}
                  />
                ))}
              </div>
            ) : null}
          </footer>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
