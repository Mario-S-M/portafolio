"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, GraduationCap, Code2, Lightbulb, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import BlurFade from "@/components/ui/blur-fade"
import { GradientText } from "@/components/ui/gradient-text"

const stats = [
  {
    icon: Code2,
    label: "Años con React",
    value: "3+",
    description: "Experiencia desarrollando"
  },
  {
    icon: Lightbulb,
    label: "Proyectos",
    value: "10+",
    description: "Completados con éxito"
  },
  {
    icon: GraduationCap,
    label: "Tecnologías",
    value: "15+",
    description: "Dominadas"
  }
]

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
              Conoce mi trayectoria profesional y las experiencias que me han formado como desarrollador
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
                <span>3+ años de experiencia en React</span>
              </div>

              <div className="flex items-center space-x-3 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span>Instituto Tecnológico Nacional de México Campus Morelia (2021-2025)</span>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Soy un desarrollador apasionado por crear soluciones tecnológicas que marquen la diferencia. 
                  Mi especialidad es el desarrollo <span className="font-semibold text-primary">Full Stack</span> 
                  con un enfoque particular en tecnologías modernas como <span className="font-semibold">React</span> y <span className="font-semibold">Next.js</span>.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Durante mis <span className="font-semibold text-primary">3 años con React</span> y 
                  <span className="font-semibold text-primary"> 1 año</span> explorando tecnologías como 
                  <span className="font-semibold"> Node.js, GraphQL, Docker y Kubernetes</span>, 
                  he desarrollado una sólida base técnica que me permite abordar proyectos complejos con confianza.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Actualmente estoy realizando mis <span className="font-semibold text-primary">residencias profesionales</span> en 
                  la ENES Morelia (agosto-diciembre 2025), donde desarrollo una 
                  <span className="font-semibold text-primary"> plataforma educativa para personas con discapacidad visual</span>. 
                  Esta experiencia me ha enseñado la importancia de crear tecnología <span className="font-semibold">accesible e inclusiva</span>.
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
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">
                  <GradientText variant="secondary">Cursos y Certificaciones</GradientText>
                </h3>
              </div>
              <div className="grid gap-3 text-sm text-muted-foreground">
                <div className="grid md:grid-cols-2 gap-2">
                  <span>• Astro: El framework para sitios web orientados al contenido</span>
                  <span>• n8n+MCP: Automatización y agentes de IA inteligentes</span>
                  <span>• C#: Empieza tu camino en el lenguaje</span>
                  <span>• NestJS: Desarrollo backend escalable con Node</span>
                  <span>• .NET Backend: .NET Core, SQL Server y seguridad JWT</span>
                  <span>• NestJS + Reportes: Genera PDFs desde Node</span>
                  <span>• Next.js: El framework de React para producción</span>
                  <span>• ShadcnUI: Componentes accesibles y personalizables</span>
                  <span>• Docker: Guía práctica de uso para desarrolladores</span>
                  <span>• OpenAI: Ejercicios y asistencia con Angular + NestJS</span>
                  <span>• Nest + GraphQL: Evoluciona tus APIs</span>
                  <span>• NestJS + Microservicios: Aplicaciones escalables y modulares</span>
                  <span>• React: Aplicaciones en tiempo real con Socket.io</span>
                  <span>• Visual Studio Code: Mejora tu velocidad para codificar</span>
                  <span>• NestJS + Testing: Pruebas unitarias y end to end</span>
                  <span>• OpenAI: Ejercicios prácticos y asistentes con React + NestJS</span>
                  <span>• Angular Pro: Lleva tus bases al siguiente nivel</span>
                  <span>• ReactiveX - RxJS: Desde cero hasta los detalles</span>
                  <span>• Principios SOLID y Clean Code</span>
                  <span>• Zustand: Gestor de estado para React</span>
                  <span>• TanStack Query: Un poderoso gestor de estado asíncrono</span>
                  <span>• Angular: De cero a experto</span>
                  <span>• Programación para principiantes - Primeros pasos</span>
                  <span>• DevOps Total: Docker, Kubernetes, Jenkins, AWS, Git</span>
                  <span>• React Native Expo: Aplicaciones nativas para iOS y Android</span>
                  <span>• Docker & Kubernetes: The Practical Guide 2025</span>
                  <span>• Microfrontends: Arquitectura de aplicaciones web escalables</span>
                  <span>• React y TypeScript: La guía completa creando +10 proyectos</span>
                  <span>• Git + GitHub: Todo un sistema de control de versiones desde cero</span>
                  <span>• Next.js 15 y React: The Complete Guide</span>
                  <span>• Estimación de proyectos de software</span>
                  <span>• FullStack Node.js React TS NestJS</span>
                  <span>• Next.js: Creando proyectos</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </section>
  )
}