"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Code2,
  Lightbulb,
  BookOpen,
  Trophy,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import BlurFade from "@/components/ui/blur-fade";
import { GradientText } from "@/components/ui/gradient-text";
import { useTranslation } from "react-i18next";

export function AboutSection() {
  const { t, i18n } = useTranslation();
  const isES = i18n.language === 'es';

  const stats = [
    {
      icon: Code2,
      label: t("about.stat.systems.label"),
      value: "2",
      description: t("about.stat.systems.desc"),
    },
    {
      icon: Trophy,
      label: "Dev/Talles",
      value: "Top 47",
      description: t("about.stat.devtalles.desc"),
    },
    {
      icon: GraduationCap,
      label: t("about.stat.gpa.label"),
      value: "9.4",
      description: t("about.stat.gpa.desc"),
    },
  ];
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <GradientText variant="accent">{t("about.title")}</GradientText>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-sm"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              {t("about.subtitle")}
            </p>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Información Personal */}
          <BlurFade delay={0.4}>
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Morelia, Michoacán, México</span>
              </div>

              <div className="flex items-center space-x-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{t("about.specialty")}</span>
              </div>

              <div className="flex items-center space-x-3 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span>
                  Instituto Tecnológico Nacional de México Campus Morelia
                  (2021-2025)
                </span>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                {isES ? (
                  <>
                    <p className="text-muted-foreground leading-relaxed">
                      Soy desarrollador <span className="font-semibold text-primary">Full Stack</span> con
                      especialización en arquitecturas empresariales{" "}
                      <span className="font-semibold">Java (Spring Boot)</span> y frontends modernos con{" "}
                      <span className="font-semibold">Next.js</span> y{" "}
                      <span className="font-semibold">Angular</span>. Ingeniería en Sistemas
                      Computacionales con promedio de 9.4/10 e inglés B2.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Actualmente en{" "}
                      <span className="font-semibold text-primary">Librerías Hidalgo</span>, donde diseño
                      y mantengo dos sistemas en producción: un sitio web corporativo y un CRM
                      empresarial, integrando bases de datos relacionales{" "}
                      <span className="font-semibold">PostgreSQL + MySQL</span>, desplegados en
                      contenedores <span className="font-semibold">Docker</span> con{" "}
                      <span className="font-semibold">Maven</span>.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Aplico{" "}
                      <span className="font-semibold text-primary">Clean Architecture</span> y
                      arquitectura basada en features para construir sistemas sostenibles con baja deuda
                      técnica. Lidero la toma de requerimientos funcionales y no funcionales, y la
                      gestión estructurada de issues.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-muted-foreground leading-relaxed">
                      I&apos;m a <span className="font-semibold text-primary">Full Stack</span> developer
                      specialized in enterprise{" "}
                      <span className="font-semibold">Java (Spring Boot)</span> architectures and modern
                      frontends with <span className="font-semibold">Next.js</span> and{" "}
                      <span className="font-semibold">Angular</span>. Computer Systems Engineer with a
                      9.4/10 GPA and B2 English.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Currently at{" "}
                      <span className="font-semibold text-primary">Librerías Hidalgo</span>, where I
                      design and maintain two production systems: a corporate website and an enterprise
                      CRM, integrating relational databases{" "}
                      <span className="font-semibold">PostgreSQL + MySQL</span>, deployed in{" "}
                      <span className="font-semibold">Docker</span> containers with{" "}
                      <span className="font-semibold">Maven</span>.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I apply{" "}
                      <span className="font-semibold text-primary">Clean Architecture</span> and
                      feature-based architecture to build sustainable systems with low technical debt.
                      I lead functional and non-functional requirements gathering and structured issue
                      management.
                    </p>
                  </>
                )}
              </div>
            </div>
          </BlurFade>

          {/* Estadísticas */}
          <BlurFade delay={0.6}>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="font-semibold text-foreground mb-1">
                        {stat.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Valores y Filosofía */}
        <BlurFade delay={0.8}>
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  <GradientText>{t("about.philosophy.title")}</GradientText>
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">{t("about.philosophy.code.title")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t("about.philosophy.code.desc")}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">{t("about.philosophy.innovation.title")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t("about.philosophy.innovation.desc")}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">{t("about.philosophy.learning.title")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t("about.philosophy.learning.desc")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </BlurFade>

        {/* Cursos y Certificaciones */}
        <BlurFade delay={0.8}>
          <Card className="mt-8">
            <CardContent className="p-8">
              {/* Top 47 Highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 border border-amber-500/30 p-6">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/20 to-transparent rounded-bl-full" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="p-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30 flex-shrink-0">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                          {t("about.recognition.label")}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-foreground">
                        {t("about.recognition.title")}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t("about.recognition.desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <GradientText variant="secondary">
                      {t("about.training.title")}
                    </GradientText>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t("about.training.subtitle")}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Java: Explora el lenguaje desde cero", category: "Backend", icon: "☕", file: "Java Explora el lenguaje desde cero.pdf", highlight: true },
                  { name: "Patrones de diseño: soluciones prácticas y eficientes", category: "Arquitectura", icon: "🏗️", file: "Patrones de diseño soluciones y practicas y eficientes.pdf", highlight: true },
                  { name: "Principios SOLID y Clean Code", category: "Arquitectura", icon: "✨", file: "Principios SOLID y Clean Code.pdf", highlight: true },
                  { name: "Docker: Guía práctica para desarrolladores", category: "DevOps", icon: "🐳", file: "Docker Guía práctica de uso para desarrolladores.pdf", highlight: true },
                  { name: "Angular: de cero a experto", category: "Frontend", icon: "🅰️", file: "Angular de cero a experto.pdf", highlight: false },
                  { name: "React: de cero a experto", category: "Frontend", icon: "⚛️", file: "React de cero a experto.pdf", highlight: false },
                  { name: "Nest: Desarrollo backend escalable con Node", category: "Backend", icon: "🛡️", file: "Nest Desarrollo backend escalable con Node.pdf", highlight: false },
                  { name: "Nest GraphQL: evoluciona tus APIs", category: "Backend", icon: "🔗", file: "Nest GraphQL evoluciona tus APIs.pdf", highlight: false },
                  { name: "NestJs Reportes: Genera PDFs desde Node", category: "Backend", icon: "📄", file: "NestJs Reportes Genera PDFs desde Node.pdf", highlight: false },
                  { name: "Git & GitHub: sistema de control de versiones", category: "Herramientas", icon: "🐙", file: "Git Github Todo un sistema de control de versiones de cero.pdf", highlight: false },
                  { name: "ReactiveX: de cero hasta los detalles", category: "Frontend", icon: "🔄", file: "ReactiveX de cero hasta los detalles.pdf", highlight: false },
                  { name: "TailwindCSS para desarrolladores de software", category: "Frontend", icon: "🎨", file: "TailwindCSS para desarrolladores de software.pdf", highlight: false },
                  { name: "Shadcn UI: Componentes accesibles y personalizables", category: "Frontend", icon: "🎯", file: "Shadcn UI Componentes accesibles y personalizables.pdf", highlight: false },
                  { name: "TanStack Query: gestor de estado asíncrono", category: "Frontend", icon: "⚡", file: "TanStack Query un poderoso gestor de estado asincrono.pdf", highlight: false },
                  { name: "Python & n8n: Automatiza rutinas cotidianas", category: "Automatización", icon: "🐍", file: "Python n8n Automatiza reutinas cotidianas.pdf", highlight: false },
                  { name: "n8n MCP: Automatización y agentes de IA", category: "IA", icon: "🤖", file: "n8n MCP Automatizacion y agentes de IA inteligentes.pdf", highlight: false },
                  { name: "Vibe coding de forma responsable", category: "IA", icon: "🚀", file: "Vibe coding de forma responsable.pdf", highlight: false },
                  { name: "Visual Studio Code: Mejora tu velocidad", category: "Herramientas", icon: "💻", file: "Visual Studio Code Mejora tu velocidad para codificar.pdf", highlight: false },
                  { name: "Programación para principiantes", category: "Fundamentos", icon: "🌱", file: "Programación para principiantes primeros pasos.pdf", highlight: false },
                ].map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group"
                  >
                    <a
                      href={`/certificates/${cert.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <Card className={`h-full border-0 hover:shadow-lg transition-all duration-300 ${
                        cert.highlight
                          ? "bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20"
                          : "bg-gradient-to-br from-card to-card/50"
                      }`}>
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="text-2xl">{cert.icon}</div>
                            <div className="flex-1 min-w-0">
                              <h4 className={`font-semibold text-sm transition-colors ${
                                cert.highlight
                                  ? "text-primary"
                                  : "text-foreground group-hover:text-primary"
                              }`}>
                                {cert.name}
                              </h4>
                              <div className="flex items-center gap-2 mt-1">
                                <p className="text-xs text-muted-foreground">
                                  {cert.category}
                                </p>
                                {cert.highlight && (
                                  <span className="text-xs px-1.5 py-0.5 rounded bg-primary/15 text-primary font-medium">
                                    {t("about.training.cert.key")}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-muted-foreground text-center">
                  {t("about.training.footer")}
                </p>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </section>
  );
}
