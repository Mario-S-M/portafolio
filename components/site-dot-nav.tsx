"use client";

import { useTranslation } from "react-i18next";

import DotNav from "@/components/ui/dot-nav";

/**
 * Puente cliente entre `app/page.tsx` —que es un Server Component— y la
 * navegación por puntos, que necesita las etiquetas ya traducidas.
 *
 * Los identificadores son los del diseño y coinciden con el `id` del DOM de
 * cada sección. Las etiquetas se reutilizan de las del pie, que nombran las
 * mismas ocho secciones.
 */
const SECTIONS = [
  { id: "inicio", labelKey: "contact.footer.link.inicio" },
  { id: "sobre-mi", labelKey: "contact.footer.link.sobreMi" },
  { id: "proyectos", labelKey: "contact.footer.link.proyectos" },
  { id: "experiencia", labelKey: "contact.footer.link.experiencia" },
  { id: "stack", labelKey: "contact.footer.link.stack" },
  { id: "reconocimientos", labelKey: "contact.footer.link.reconocimientos" },
  { id: "notas", labelKey: "contact.footer.link.notas" },
  { id: "contacto", labelKey: "contact.footer.link.contacto" },
] as const;

export function SiteDotNav() {
  const { t } = useTranslation();

  return (
    <DotNav
      label={t("nav.dots.aria")}
      items={SECTIONS.map((section) => ({
        id: section.id,
        label: t(section.labelKey),
      }))}
    />
  );
}

export default SiteDotNav;
