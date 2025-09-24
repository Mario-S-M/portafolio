"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import BlurFade from "@/components/ui/blur-fade"
import { GradientText } from "@/components/ui/gradient-text"

const projects = [
  {
    title: "Plataforma Educativa para Discapacidad Visual",
    description: "Plataforma innovadora desarrollada en la ENES Morelia para facilitar el proceso de enseñanza-aprendizaje de idiomas para personas con discapacidad visual. Incluye características de accesibilidad avanzadas y herramientas adaptativas.",
    longDescription: "Este proyecto representa mi compromiso con la tecnología inclusiva. La plataforma cuenta con navegación por teclado optimizada, soporte para lectores de pantalla, feedback auditivo y una interfaz completamente adaptada para usuarios con discapacidad visual.",
    tech: ["Next.js", "Nest.js", "TypeORM", "PostgreSQL", "GraphQL", "ShadcnUI", "Plate.js", "Markdown", "SSR", "SSG"],
    github: "https://github.com/Mario-S-M/UNAM-Server/tree/main",
    demo: "http://132.247.186.91/",
    image: "/api/placeholder/600/400",
    category: "Full Stack",
    featured: true,
    status: "En producción",
    timeline: "2024"
  },
  {
    title: "API GraphQL con TypeScript",
    description: "API robusta desarrollada con Nest.js, TypeORM y GraphQL, implementando mejores prácticas de arquitectura limpia y documentación automática con OpenAPI.",
    tech: ["Nest.js", "TypeScript", "GraphQL", "TypeORM", "PostgreSQL", "OpenAPI", "Docker"],
    github: "https://github.com/Mario-S-M",
    category: "Backend",
    featured: false,
    status: "Completado",
    timeline: "2024"
  },
  {
    title: "Dashboard React con Analytics",
    description: "Dashboard interactivo construido con React y Next.js, featuring real-time data visualization y un sistema de autenticación robusto.",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "Chart.js", "Prisma"],
    github: "https://github.com/Mario-S-M",
    category: "Frontend",
    featured: false,
    status: "En desarrollo",
    timeline: "2024"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <GradientText variant="accent">Proyectos Destacados</GradientText>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-sm mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Una selección de mis trabajos más significativos, mostrando mi experiencia en
              desarrollo full stack y tecnologías modernas
            </p>
          </div>
        </BlurFade>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <BlurFade key={project.title} delay={0.3 + index * 0.2}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${
                  project.featured 
                    ? "col-span-full" 
                    : "col-span-1"
                }`}
              >
                <Card className={`overflow-hidden hover:shadow-2xl transition-all duration-500 group ${
                  project.featured 
                    ? "border-primary/20 bg-gradient-to-br from-primary/5 to-transparent" 
                    : ""
                }`}>
                  <div className={`${
                    project.featured 
                      ? "lg:flex lg:items-center" 
                      : ""
                  }`}>
                    {/* Project Image/Visual */}
                    <div className={`${
                      project.featured 
                        ? "lg:w-1/2" 
                        : "w-full"
                    } relative`}>
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                        <div className="relative z-10 text-center">
                          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                            <Eye className="w-10 h-10 text-primary" />
                          </div>
                          <p className="text-primary font-semibold">Vista previa próximamente</p>
                        </div>
                        
                        {project.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                              ⭐ Proyecto Destacado
                            </span>
                          </div>
                        )}
                        
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            project.status === "En producción" 
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                              : project.status === "En desarrollo"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <CardContent className={`${
                      project.featured 
                        ? "lg:w-1/2 p-8" 
                        : "p-6"
                    }`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {project.timeline}
                        </span>
                      </div>

                      <h3 className={`font-bold mb-4 group-hover:text-primary transition-colors ${
                        project.featured ? "text-2xl" : "text-xl"
                      }`}>
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.featured ? project.longDescription : project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          asChild
                          size="sm"
                          className="group/btn"
                        >
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                            Código
                          </a>
                        </Button>
                        
                        {project.demo && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="group/btn"
                          >
                            <a 
                              href={project.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* CTA Section */}
        <BlurFade delay={0.8}>
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  <GradientText>¿Tienes un proyecto en mente?</GradientText>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Estoy siempre abierto a nuevas oportunidades y colaboraciones interesantes. 
                  ¡Hablemos sobre cómo puedo ayudarte a hacer realidad tu proyecto!
                </p>
                <Button
                  onClick={() => {
                    const element = document.getElementById("contact")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  size="lg"
                >
                  Iniciar Conversación
                </Button>
              </CardContent>
            </Card>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}