"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import BlurFade from "@/components/ui/blur-fade";
import { GradientText } from "@/components/ui/gradient-text";

const experiences = [
  {
    type: "education",
    title: "Ingeniería en Sistemas Computacionales",
    organization: "Instituto Tecnológico Nacional de México Campus Morelia",
    location: "Morelia, Michoacán",
    period: "2021 - 2025",
    description:
      "Formación integral en desarrollo de software, bases de datos, redes y sistemas distribuidos. Actualmente realizando residencias profesionales en ENES Morelia.",
    highlights: [
      "Especialización en tecnologías web modernas",
      "Proyecto de titulación en desarrollo de software",
      "Residencias profesionales en ENES Morelia (2025)",
    ],
    color: "from-indigo-500 to-purple-600",
  },
  {
    type: "project",
    title: "Desarrollador Full Stack - Plataforma Educativa",
    organization: "ENES Morelia - UNAM",
    location: "Morelia, Michoacán",
    period: "2025",
    description:
      "Desarrollo completo de plataforma web para la enseñanza de idiomas a personas con discapacidad visual, implementando tecnologías modernas y principios de accesibilidad.",
    highlights: [
      "Arquitectura Full Stack con Next.js y Nest.js",
      "Implementación de GraphQL y TypeORM",
      "Diseño accesible con ShadcnUI",
      "Integración de herramientas de markdown y edición",
      "Deploy en servidor de producción",
    ],
    tech: [
      "Next.js",
      "Nest.js",
      "TypeORM",
      "PostgreSQL",
      "GraphQL",
      "TypeScript",
    ],
    color: "from-emerald-500 to-teal-600",
  },
  {
    type: "work",
    title: "Desarrollador Frontend - Sistema de Facturación",
    organization: "GPS Tracker",
    location: "Morelia, Michoacán",
    period: "2022",
    description:
      "Desarrollo de sistema de facturación conectando frontend con backend mediante servicios web, utilizando HTML, CSS y PHP para la integración y visualización de datos.",
    highlights: [
      "Interfaz de usuario responsiva con HTML/CSS",
      "Integración con backend mediante PHP",
      "Consumo de servicios web REST",
      "Visualización y gestión de datos de facturación",
    ],
    tech: ["HTML", "CSS", "PHP", "REST API"],
    color: "from-rose-500 to-pink-600",
  },
  {
    type: "project",
    title: "Proyecto Innovatec - Plataforma Educativa con IA",
    organization: "Tecnológico de Morelia - Departamento de Ciencias Básicas",
    location: "Morelia, Michoacán",
    period: "2024",
    description:
      "Desarrollo de plataforma educativa que utiliza inteligencia artificial para apoyar el aprendizaje de alumnos y profesores en el departamento de ciencias básicas.",
    highlights: [
      "Integración de IA para enseñanza personalizada",
      "Interfaz intuitiva para estudiantes y docentes",
      "Soporte para diferentes niveles académicos",
      "Implementación de algoritmos de recomendación",
    ],
    tech: ["React", "Node.js", "AI/ML", "TypeScript"],
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    type: "project",
    title: "Sistema de Gestión para Invernadero",
    organization: "Proyecto IoT Personal",
    location: "Morelia, Michoacán",
    period: "2023",
    description:
      "Implementación de sistema completo para monitoreo y control de invernadero utilizando Arduino y protocolo MQTT para toma de temperaturas y gestión automatizada.",
    highlights: [
      "Desarrollo con Arduino y sensores",
      "Protocolo MQTT para comunicación IoT",
      "Monitoreo en tiempo real de temperaturas",
      "Sistema de alertas automatizado",
    ],
    tech: ["Arduino", "MQTT", "IoT", "C++"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    type: "work",
    title: "Sistema de Ventas y Gestión - Seven Cell",
    organization: "Seven Cell - Dispositivos Móviles",
    location: "Morelia, Michoacán",
    period: "2023",
    description:
      "Desarrollo de sistema completo para gestión de ventas, inventario y proveedores para distribución de dispositivos móviles, incluyendo módulos de administración y reporting.",
    highlights: [
      "Sistema de gestión de inventario",
      "Módulo de proveedores y compras",
      "Reportes de ventas y estadísticas",
      "Interfaz de administración completa",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    type: "learning",
    title: "Aprendizaje Autodidacta en Tecnologías Modernas",
    organization: "Aprendizaje Continuo",
    location: "Remoto",
    period: "2023 - Presente",
    description:
      "Desarrollo continuo de habilidades en tecnologías emergentes y mejores prácticas de desarrollo, con enfoque en la stack moderna de JavaScript/TypeScript y arquitectura de software.",
    highlights: [
      "Dominio avanzado de React y Next.js",
      "Especialización en backend con NestJS y GraphQL",
      "Experiencia con DevOps (Docker, Kubernetes)",
      "Aprendizaje de múltiples frameworks y herramientas",
      "Certificaciones en plataformas especializadas",
    ],
    tech: [
      "React",
      "Next.js",
      "NestJS",
      "TypeScript",
      "Docker",
      "Kubernetes",
      "GraphQL",
    ],
    color: "from-violet-500 to-purple-500",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <GradientText variant="rainbow">Mi Trayectoria</GradientText>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-sm mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un recorrido por mi formación académica, proyectos destacados y
              crecimiento profesional en el mundo del desarrollo de software
            </p>
          </div>
        </BlurFade>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <BlurFade key={experience.title} delay={0.3 + index * 0.2}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shadow-lg"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    } ml-12 md:ml-0`}
                  >
                    <Card className="hover:shadow-xl transition-all duration-500 group">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${experience.color}`}
                            >
                              {experience.type === "education" && (
                                <GraduationCap className="w-5 h-5 text-white" />
                              )}
                              {experience.type === "project" && (
                                <Briefcase className="w-5 h-5 text-white" />
                              )}
                              {experience.type === "learning" && (
                                <Briefcase className="w-5 h-5 text-white" />
                              )}
                            </div>
                            <div>
                              <span
                                className={`text-xs font-medium px-2 py-1 rounded-full ${
                                  experience.type === "education"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                    : experience.type === "project"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                    : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                                }`}
                              >
                                {experience.type === "education"
                                  ? "Educación"
                                  : experience.type === "project"
                                  ? "Proyecto"
                                  : "Aprendizaje"}
                              </span>
                            </div>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {experience.title}
                        </h3>

                        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2 text-primary" />
                            <span>{experience.organization}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-primary" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-primary" />
                            <span>{experience.period}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Highlights */}
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 text-sm">
                            Logros destacados:
                          </h4>
                          <ul className="space-y-1">
                            {experience.highlights.map((highlight, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-muted-foreground flex items-start"
                              >
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        {experience.tech && (
                          <div className="flex flex-wrap gap-2">
                            {experience.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <BlurFade delay={0.8}>
          <div className="mt-16">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  <GradientText>Próximos Objetivos</GradientText>
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Experiencia Profesional</h4>
                    <p className="text-sm text-muted-foreground">
                      Buscar oportunidades en equipos de desarrollo ágiles
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Especialización</h4>
                    <p className="text-sm text-muted-foreground">
                      Profundizar en arquitecturas de microservicios y cloud
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Impacto Social</h4>
                    <p className="text-sm text-muted-foreground">
                      Continuar desarrollando tecnología accesible e inclusiva
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
