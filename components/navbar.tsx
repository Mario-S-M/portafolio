"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMagnet } from "@/hooks/use-magnet";
import { cn } from "@/lib/utils";

/**
 * Barra flotante del diseño: píldora fija y centrada con el logotipo, los cuatro
 * enlaces de sección, el selector de idioma y la llamada a la acción.
 *
 * El seguimiento de la sección visible no vive aquí: lo resuelve
 * `components/ui/dot-nav.tsx`. Esta barra solo navega por ancla, apoyada en el
 * `scroll-behavior: smooth` global.
 */
const NAV_LINKS = [
  { key: "nav.link.projects", href: "#proyectos" },
  { key: "nav.link.experience", href: "#experiencia" },
  { key: "nav.link.stack", href: "#stack" },
  { key: "nav.link.notes", href: "#notas" },
] as const;

/** Códigos de idioma: no son prosa, se muestran igual en ambos idiomas. */
const LANGUAGES = [
  { code: "es", label: "ES", aria: "nav.lang.es" },
  { code: "en", label: "EN", aria: "nav.lang.en" },
] as const;

const LINK_CLASS =
  "rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle hover:bg-hairline-soft hover:text-fg";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ctaRef = useMagnet<HTMLAnchorElement>({ radius: 60, maxShift: 9 });

  const current = i18n.language?.startsWith("en") ? "en" : "es";

  return (
    <header className="fixed top-3.5 left-1/2 z-[7000] w-max max-w-[calc(100vw-24px)] -translate-x-1/2">
      <nav
        className={cn(
          "flex items-center gap-1.5 rounded-full border border-hairline",
          "bg-surface/70 py-2 pr-2 pl-3 backdrop-blur-[18px] sm:pl-5"
        )}
      >
        <a
          href="#inicio"
          aria-label={t("nav.logo.aria")}
          className="rounded-full px-3 py-2 font-mono text-[11px] tracking-[0.14em] text-fg uppercase hover:bg-hairline-soft hover:text-fg"
        >
          MSM
        </a>

        <div className="hidden gap-0.5 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={LINK_CLASS}>
              {t(link.key)}
            </a>
          ))}
        </div>

        <div
          role="group"
          aria-label={t("nav.lang.aria")}
          className="flex items-center gap-1 rounded-full border border-hairline px-2.5 py-1.5"
        >
          {LANGUAGES.map((language, index) => (
            <span key={language.code} className="flex items-center gap-1">
              {index > 0 && (
                <span aria-hidden="true" className="font-mono text-[11px] text-fg-faint">
                  /
                </span>
              )}
              <button
                type="button"
                onClick={() => i18n.changeLanguage(language.code)}
                aria-label={t(language.aria)}
                aria-pressed={current === language.code}
                className={cn(
                  "cursor-pointer font-mono text-[11px] tracking-[0.12em]",
                  current === language.code
                    ? "text-fg"
                    : "text-fg-subtle hover:text-fg"
                )}
              >
                {language.label}
              </button>
            </span>
          ))}
        </div>

        <a
          ref={ctaRef}
          href="#contacto"
          className="hidden rounded-full bg-accent px-4 py-2.5 font-mono text-[11px] font-medium tracking-[0.12em] text-bg uppercase hover:bg-accent-active hover:text-bg sm:inline-block"
        >
          {t("nav.cta")}
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="nav-mobile-menu"
          aria-label={open ? t("nav.menu.close") : t("nav.menu.open")}
          className="cursor-pointer rounded-full p-2.5 text-fg-subtle hover:bg-hairline-soft hover:text-fg md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open && (
        <div
          id="nav-mobile-menu"
          className="mt-2 flex flex-col gap-0.5 rounded-2xl border border-hairline bg-surface/95 p-2 backdrop-blur-[18px] md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(LINK_CLASS, "block")}
            >
              {t(link.key)}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-full bg-accent px-3 py-2.5 text-center font-mono text-[11px] font-medium tracking-[0.12em] text-bg uppercase hover:bg-accent-active hover:text-bg sm:hidden"
          >
            {t("nav.cta")}
          </a>
        </div>
      )}
    </header>
  );
}
