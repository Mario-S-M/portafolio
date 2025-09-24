"use client";

import { useEffect } from "react";
import i18n from "@/lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize i18next on the client side
    i18n.init();
  }, []);

  return <>{children}</>;
}