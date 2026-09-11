"use client";

import { useEffect } from "react";
import i18n from "@/lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize i18next on the client side
    i18n.init();
  }, []);

  // Mantiene <html lang> sincronizado con el idioma activo: sin esto los
  // lectores de pantalla leen el inglés con fonética española.
  useEffect(() => {
    const sincronizar = (lng: string) => {
      document.documentElement.lang = lng;
    };
    sincronizar(i18n.language || "es");
    i18n.on("languageChanged", sincronizar);
    return () => {
      i18n.off("languageChanged", sincronizar);
    };
  }, []);

  return <>{children}</>;
}