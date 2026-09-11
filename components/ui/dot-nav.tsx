"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useMotionPreferences } from "@/components/ui/use-motion-preferences";

export interface DotNavItem {
  /** `id` de la sección en el DOM. */
  id: string;
  /** Texto visible y nombre accesible del punto. Llega traducido desde i18n. */
  label: string;
}

interface DotNavProps {
  items: DotNavItem[];
  /** Nombre accesible de la navegación. Llega traducido desde i18n. */
  label: string;
  className?: string;
}

/**
 * Navegación lateral por puntos. Marca la sección visible con un
 * `IntersectionObserver` centrado en la mitad de la ventana y navega con
 * desplazamiento suave al pulsar. Solo se muestra en pantallas anchas.
 */
export default function DotNav({ items, label, className }: DotNavProps) {
  const { reducedMotion } = useMotionPreferences();
  const [active, setActive] = useState<string | null>(null);

  const itemsRef = useRef(items);
  itemsRef.current = items;
  const idsKey = items.map((item) => item.id).join("|");

  useEffect(() => {
    const ids = itemsRef.current.map((item) => item.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const visible = new Set<string>();
    let frame = 0;

    const pick = () => {
      frame = 0;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }
      const current = ids.find((id) => visible.has(id));
      if (current) setActive(current);
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(pick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        schedule();
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", schedule, { passive: true });
    schedule();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
    };
  }, [idsKey]);

  const goTo = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    event.preventDefault();
    section.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${id}`);
    setActive(id);
  };

  return (
    <nav
      aria-label={label}
      className={cn(
        "fixed top-1/2 right-[26px] z-[7000] hidden -translate-y-1/2 flex-col items-end gap-4 min-[1150px]:flex",
        className
      )}
    >
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(event) => goTo(event, item.id)}
            aria-current={isActive ? "true" : undefined}
            className="flex items-center justify-end gap-3 font-mono text-[9px] tracking-[0.2em] uppercase"
          >
            <span
              className={cn(
                "transition-opacity duration-300",
                isActive ? "text-fg opacity-100" : "text-fg-subtle opacity-0"
              )}
            >
              {item.label}
            </span>
            <span
              aria-hidden="true"
              className={cn(
                "block h-px transition-[width,background-color] duration-[400ms] ease-[cubic-bezier(.16,1,.3,1)]",
                isActive ? "w-10 bg-accent" : "w-[18px] bg-border-strong"
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}
