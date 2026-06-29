"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import BlurFade from "@/components/ui/blur-fade";
import { GradientText } from "@/components/ui/gradient-text";
import { useTranslation } from "react-i18next";

const experiencesES = [
  {
    type: "work",
    title: "Desarrollador Full Stack",
    organization: "Librerías Hidalgo — Departamento de Sistemas",
    location: "Morelia, Michoacán",
    period: "Octubre 2025 - Presente",
    description:
      "Diseño, desarrollo y despliegue de sistemas empresariales en producción para cadena de librerías, integrando backend Java con frontends modernos y bases de datos relacionales.",
    highlights: [
      "Desarrollé libreriashidalgo.mx: sistema Full Stack con Spring Boot + Next.js conectado a PostgreSQL y MySQL (inventario legacy)",
      "Desarrollé crm.libmich.com: CRM empresarial con Spring Boot + Angular",
      "Definí arquitectura basada en features y Clean Architecture para reducir deuda técnica",
      "Lideré toma de requerimientos funcionales y no funcionales, estructuré gestión de issues",
      "Despliegue en contenedores Docker, gestión de dependencias con Maven",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Next.js",
      "Angular",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Maven",
      "TypeScript",
    ],
    color: "from-orange-500 to-amber-600",
  },
  {
    type: "education",
    title: "Ingeniería en Sistemas Computacionales",
    organization: "Instituto Tecnológico Nacional de México Campus Morelia",
    location: "Morelia, Michoacán",
    period: "2021 - 2025",
    description:
      "Formación integral en desarrollo de software, bases de datos, redes y sistemas distribuidos. Promedio: 93.94/100. Residencias profesionales en ENES Morelia (2025).",
    highlights: [
      "Promedio certificado: 93.94 / 100",
      "Especialización en arquitecturas de software y bases de datos relacionales",
      "Proyecto de titulación en desarrollo de software",
      "Residencias profesionales en ENES Morelia (Agosto - Diciembre 2025)",
    ],
    color: "from-indigo-500 to-purple-600",
  },
  {
    type: "project",
    title: "Desarrollador Full Stack - Plataforma Educativa",
    organization: "ENES Morelia - UNAM",
    location: "Morelia, Michoacán",
    period: "Agosto - Diciembre 2025",
    description:
      "Desarrollo completo de plataforma web para la enseñanza de idiomas a personas con discapacidad visual, implementando tecnologías modernas y principios de accesibilidad.",
    highlights: [
      "Arquitectura Full Stack con Next.js y Nest.js",
      "Implementación de GraphQL y TypeORM con PostgreSQL",
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
      "Desarrollo continuo de habilidades en tecnologías emergentes y mejores prácticas de desarrollo, con enfoque en arquitecturas empresariales Java, DevOps y estándares de TI.",
    highlights: [
      "Especialización en Java empresarial y Spring Boot",
      "Arquitectura de microservicios y patrones de diseño",
      "DevOps: Docker, Kubernetes, CI/CD",
      "Estándares y mejores prácticas en TI",
      "Certificaciones en plataformas especializadas (Udemy, Platzi)",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "Microservicios",
      "TypeScript",
    ],
    color: "from-violet-500 to-purple-500",
  },
];

const experiencesEN = [
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "Librerías Hidalgo — Systems Department",
    location: "Morelia, Michoacán",
    period: "October 2025 - Present",
    description:
      "Design, development and deployment of enterprise production systems for a bookstore chain, integrating Java backend with modern frontends and relational databases.",
    highlights: [
      "Built libreriashidalgo.mx: Full Stack system with Spring Boot + Next.js connected to PostgreSQL and legacy MySQL (inventory)",
      "Built crm.libmich.com: Enterprise CRM with Spring Boot + Angular",
      "Defined feature-based architecture and Clean Architecture to reduce technical debt",
      "Led functional and non-functional requirements gathering, structured issue management",
      "Docker container deployment, dependency management with Maven",
    ],
    tech: ["Java", "Spring Boot", "Next.js", "Angular", "PostgreSQL", "MySQL", "Docker", "Maven", "TypeScript"],
    color: "from-orange-500 to-amber-600",
  },
  {
    type: "education",
    title: "Computer Systems Engineering",
    organization: "Instituto Tecnológico Nacional de México Campus Morelia",
    location: "Morelia, Michoacán",
    period: "2021 - 2025",
    description:
      "Comprehensive training in software development, databases, networks and distributed systems. GPA: 93.94/100. Professional residency at ENES Morelia (2025).",
    highlights: [
      "Certified GPA: 93.94 / 100",
      "Specialization in software architectures and relational databases",
      "Graduation project in software development",
      "Professional residency at ENES Morelia (August - December 2025)",
    ],
    color: "from-indigo-500 to-purple-600",
  },
  {
    type: "project",
    title: "Full Stack Developer - Educational Platform",
    organization: "ENES Morelia - UNAM",
    location: "Morelia, Michoacán",
    period: "August - December 2025",
    description:
      "Full development of a web platform for language teaching for visually impaired people, implementing modern technologies and accessibility principles.",
    highlights: [
      "Full Stack architecture with Next.js and Nest.js",
      "GraphQL and TypeORM implementation with PostgreSQL",
      "Accessible design with ShadcnUI",
      "Markdown editor tool integration",
      "Deployment on production server",
    ],
    tech: ["Next.js", "Nest.js", "TypeORM", "PostgreSQL", "GraphQL", "TypeScript"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    type: "work",
    title: "Frontend Developer - Billing System",
    organization: "GPS Tracker",
    location: "Morelia, Michoacán",
    period: "2022",
    description:
      "Development of a billing system connecting frontend with backend via web services, using HTML, CSS and PHP for data integration and visualization.",
    highlights: [
      "Responsive user interface with HTML/CSS",
      "Backend integration via PHP",
      "REST web service consumption",
      "Billing data visualization and management",
    ],
    tech: ["HTML", "CSS", "PHP", "REST API"],
    color: "from-rose-500 to-pink-600",
  },
  {
    type: "project",
    title: "Innovatec Project - AI Educational Platform",
    organization: "Tecnológico de Morelia - Basic Sciences Department",
    location: "Morelia, Michoacán",
    period: "2024",
    description:
      "Development of an educational platform using artificial intelligence to support learning for students and teachers in the basic sciences department.",
    highlights: [
      "AI integration for personalized teaching",
      "Intuitive interface for students and teachers",
      "Support for different academic levels",
      "Recommendation algorithm implementation",
    ],
    tech: ["React", "Node.js", "AI/ML", "TypeScript"],
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    type: "project",
    title: "Greenhouse Management System",
    organization: "Personal IoT Project",
    location: "Morelia, Michoacán",
    period: "2023",
    description:
      "Implementation of a complete system for greenhouse monitoring and control using Arduino and MQTT protocol for temperature monitoring and automated management.",
    highlights: [
      "Arduino and sensor development",
      "MQTT protocol for IoT communication",
      "Real-time temperature monitoring",
      "Automated alert system",
    ],
    tech: ["Arduino", "MQTT", "IoT", "C++"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    type: "work",
    title: "Sales & Management System - Seven Cell",
    organization: "Seven Cell - Mobile Devices",
    location: "Morelia, Michoacán",
    period: "2023",
    description:
      "Development of a complete system for sales, inventory and supplier management for mobile device distribution, including admin modules and reporting.",
    highlights: [
      "Inventory management system",
      "Supplier and purchasing module",
      "Sales reports and statistics",
      "Complete admin interface",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    type: "learning",
    title: "Self-taught Learning in Modern Technologies",
    organization: "Continuous Learning",
    location: "Remote",
    period: "2023 - Present",
    description:
      "Continuous skill development in emerging technologies and development best practices, focused on enterprise Java architectures, DevOps and IT standards.",
    highlights: [
      "Specialization in enterprise Java and Spring Boot",
      "Microservices architecture and design patterns",
      "DevOps: Docker, Kubernetes, CI/CD",
      "IT standards and best practices",
      "Certifications on specialized platforms (Dev/Talles, Udemy)",
    ],
    tech: ["Java", "Spring Boot", "Docker", "Kubernetes", "Microservices", "TypeScript"],
    color: "from-violet-500 to-purple-500",
  },
];

export function ExperienceSection() {
  const { t, i18n } = useTranslation();
  const experiences = i18n.language === 'es' ? experiencesES : experiencesEN;

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <GradientText variant="rainbow">{t("experience.title")}</GradientText>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-sm mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("experience.subtitle")}
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
                                  ? t("experience.type.education")
                                  : experience.type === "project"
                                  ? t("experience.type.project")
                                  : experience.type === "work"
                                  ? t("experience.type.work")
                                  : t("experience.type.learning")}
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
                            {t("experience.highlights.label")}
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

      </div>
    </section>
  );
}
