import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { I18nProvider } from "@/components/i18n-provider";
import SmoothCursor from "@/components/ui/smooth-cursor";
import GrainOverlay from "@/components/ui/grain-overlay";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mario Eduardo Sánchez Mejía - Full Stack Developer",
  description:
    "Ingeniero en Sistemas Computacionales y Full Stack Developer especializado en TypeScript, NestJS, Next.js y Angular.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(
        spaceGrotesk.variable,
        manrope.variable,
        jetBrainsMono.variable
      )}
    >
      <body className="bg-bg text-fg antialiased">
        <I18nProvider>
          {children}
          <GrainOverlay />
          <SmoothCursor />
          <Toaster theme="dark" />
        </I18nProvider>
      </body>
    </html>
  );
}
