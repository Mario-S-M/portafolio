import { Navbar } from "@/components/navbar";
import { SiteDotNav } from "@/components/site-dot-nav";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { Recognition } from "@/components/sections/recognition";
import { Certificates } from "@/components/sections/certificates";
import { ContactSection } from "@/components/sections/contact";

/**
 * Página única del portafolio. Ocho secciones en el orden del diseño:
 * inicio, sobre-mi, proyectos, experiencia, stack, reconocimientos, notas y
 * contacto. El grano y el cursor personalizado se montan una sola vez en
 * `app/layout.tsx`.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <SiteDotNav />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <Recognition />
        <Certificates />
        <ContactSection />
      </main>
    </>
  );
}
