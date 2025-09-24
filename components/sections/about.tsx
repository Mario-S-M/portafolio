"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Code2,
  Lightbulb,
  BookOpen,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import BlurFade from "@/components/ui/blur-fade";
import { GradientText } from "@/components/ui/gradient-text";

const stats = [
  {
    icon: Code2,
    label: "Años con React",
    value: "3+",
    description: "Experiencia desarrollando",
  },
  {
    icon: Lightbulb,
    label: "Proyectos",
    value: "10+",
    description: "Completados con éxito",
  },
  {
    icon: GraduationCap,
    label: "Tecnologías",
    value: "15+",
    description: "Dominadas",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <GradientText variant="accent">Sobre mí</GradientText>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-sm"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Conoce mi trayectoria profesional y las experiencias que me han
              formado como desarrollador
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
                <span>Especialista en desarrollo React y tecnologías modernas</span>
              </div>

              <div className="flex items-center space-x-3 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span>
                  Instituto Tecnológico Nacional de México Campus Morelia
                  (2021-2025)
                </span>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Soy un desarrollador apasionado por crear soluciones
                  tecnológicas que transforman la experiencia digital. Mi especialidad reside en el
                  desarrollo <span className="font-semibold text-primary">Full Stack </span>
                  con un enfoque meticuloso en tecnologías modernas como{" "}
                  <span className="font-semibold">React</span> y{" "}
                  <span className="font-semibold">Next.js</span>.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Mi trayectoria profesional me ha permitido dominar un amplio espectro de tecnologías,
                  desde el desarrollo frontend con <span className="font-semibold">React</span> hasta
                  arquitecturas backend robustas con <span className="font-semibold">Node.js</span> y
                  <span className="font-semibold">GraphQL</span>. La innovación tecnológica y la
                  excelencia en el código son mis principios fundamentales.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Actualmente estoy realizando mis{" "}
                  <span className="font-semibold text-primary">
                    residencias profesionales
                  </span>{" "}
                  en la ENES Morelia (agosto-diciembre 2025), donde desarrollo
                  una
                  <span className="font-semibold text-primary">
                    {" "}
                    plataforma educativa para personas con discapacidad visual
                  </span>
                  . Esta experiencia me ha enseñado la importancia de crear
                  tecnología{" "}
                  <span className="font-semibold">accesible e inclusiva</span>.
                </p>
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
                  <GradientText>Mi Filosofía de Desarrollo</GradientText>
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Código Limpio</h4>
                    <p className="text-sm text-muted-foreground">
                      Escribo código mantenible, escalable y bien documentado
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Innovación</h4>
                    <p className="text-sm text-muted-foreground">
                      Siempre busco nuevas tecnologías y mejores prácticas
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Aprendizaje</h4>
                    <p className="text-sm text-muted-foreground">
                      Me mantengo actualizado con las últimas tendencias
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
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <GradientText variant="secondary">
                      Formación Continua
                    </GradientText>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Más de 25 cursos especializados completados
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Astro Framework", category: "Frontend", icon: "🚀" },
                  { name: "NestJS Backend", category: "Backend", icon: "🛡️" },
                  { name: "Next.js Avanzado", category: "Full Stack", icon: "⚡" },
                  { name: "Docker & Kubernetes", category: "DevOps", icon: "🐳" },
                  { name: "GraphQL APIs", category: "Backend", icon: "🔗" },
                  { name: "React Native", category: "Mobile", icon: "📱" },
                  { name: "TypeScript", category: "Lenguajes", icon: "🔷" },
                  { name: "Microservicios", category: "Arquitectura", icon: "🏗️" },
                  { name: "Testing Avanzado", category: "Calidad", icon: "🧪" },
                  { name: "DevOps Completo", category: "Infraestructura", icon: "⚙️" },
                  { name: "IA & OpenAI", category: "Inteligencia", icon: "🤖" },
                  { name: "Clean Code", category: "Metodología", icon: "✨" }
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
                    <Card className="h-full border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">{cert.icon}</div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                              {cert.name}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {cert.category}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="font-medium text-primary">+25 cursos especializados</span> en plataformas líderes como Udemy, Platzi y documentación oficial
                </p>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </section>
  );
}
