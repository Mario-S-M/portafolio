"use client"

import { motion } from "framer-motion"
import { 
  Code2, 
  Database, 
  Server, 
  Smartphone, 
  Palette,
  Settings,
  Cloud
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import BlurFade from "@/components/ui/blur-fade"
import { GradientText } from "@/components/ui/gradient-text"
import { IconCloud } from "@/components/ui/icon-cloud"

const skillCategories = [
  {
    title: "Frontend",
    icon: Smartphone,
    color: "from-indigo-500 to-purple-600",
    skills: [
      { name: "JavaScript", level: 90, years: "3+" },
      { name: "TypeScript", level: 85, years: "2+" },
      { name: "React", level: 90, years: "3+" },
      { name: "Next.js", level: 85, years: "2+" },
      { name: "Angular", level: 70, years: "1+" },
      { name: "Astro", level: 75, years: "1+" },
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Node.js", level: 80, years: "1+" },
      { name: "Nest.js", level: 85, years: "1+" },
      { name: "REST APIs", level: 85, years: "2+" },
      { name: "GraphQL", level: 80, years: "1+" },
      { name: "TypeORM", level: 75, years: "1+" },
      { name: "OpenAPI", level: 70, years: "1+" },
    ]
  },
  {
    title: "Base de Datos",
    icon: Database,
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "PostgreSQL", level: 80, years: "1+" },
      { name: "MySQL", level: 75, years: "1+" },
      { name: "MongoDB", level: 70, years: "1+" },
      { name: "TypeORM", level: 75, years: "1+" },
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-rose-500 to-pink-600",
    skills: [
      { name: "Docker", level: 75, years: "1+" },
      { name: "Kubernetes", level: 65, years: "1+" },
      { name: "Ansible", level: 60, years: "6m" },
      { name: "CI/CD", level: 70, years: "1+" },
    ]
  },
  {
    title: "Herramientas",
    icon: Settings,
    color: "from-pink-500 to-rose-600",
    skills: [
      { name: "Git & GitHub", level: 90, years: "3+" },
      { name: "VS Code", level: 95, years: "3+" },
      { name: "Postman", level: 85, years: "2+" },
      { name: "SandBox", level: 75, years: "1+" },
      { name: "Axios", level: 85, years: "2+" },
    ]
  },
  {
    title: "UI/UX",
    icon: Palette,
    color: "from-blue-500 to-indigo-600",
    skills: [
      { name: "ShadcnUI", level: 90, years: "1+" },
      { name: "Tailwind CSS", level: 90, years: "2+" },
      { name: "CSS3", level: 85, years: "3+" },
      { name: "Responsive Design", level: 90, years: "3+" },
      { name: "Figma", level: 70, years: "1+" },
    ]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <GradientText variant="primary">Tecnologías & Habilidades</GradientText>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-sm mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mi conjunto de herramientas tecnológicas, perfeccionado a través de años de experiencia
              práctica en proyectos reales
            </p>
          </div>
        </BlurFade>

        {/* Icon Cloud */}
        <BlurFade delay={0.4}>
          <div className="flex justify-center mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                <GradientText variant="secondary">Tecnologías que domino</GradientText>
              </h3>
              <div className="relative">
                <IconCloud
                  images={[
                    "https://cdn.simpleicons.org/react",
                    "https://cdn.simpleicons.org/nextdotjs",
                    "https://cdn.simpleicons.org/nestjs",
                    "https://cdn.simpleicons.org/typescript",
                    "https://cdn.simpleicons.org/javascript",
                    "https://cdn.simpleicons.org/nodejs",
                    "https://cdn.simpleicons.org/graphql",
                    "https://cdn.simpleicons.org/postgresql",
                    "https://cdn.simpleicons.org/mongodb",
                    "https://cdn.simpleicons.org/docker",
                    "https://cdn.simpleicons.org/kubernetes",
                    "https://cdn.simpleicons.org/tailwindcss",
                    "https://cdn.simpleicons.org/git",
                    "https://cdn.simpleicons.org/github",
                    "https://cdn.simpleicons.org/vercel",
                    "https://cdn.simpleicons.org/angular",
                    "https://cdn.simpleicons.org/astro",
                    "https://cdn.simpleicons.org/python",
                    "https://cdn.simpleicons.org/csharp",
                    "https://cdn.simpleicons.org/dotnet",
                    "https://cdn.simpleicons.org/php",
                    "https://cdn.simpleicons.org/mysql",
                    "https://cdn.simpleicons.org/linux",
                    "https://cdn.simpleicons.org/vscode",
                    "https://cdn.simpleicons.org/figma",
                    "https://cdn.simpleicons.org/arduino",
                    "https://cdn.simpleicons.org/raspberrypi",
                    "https://cdn.simpleicons.org/firebase",
                    "https://cdn.simpleicons.org/aws",
                    "https://cdn.simpleicons.org/jenkins"
                  ]}
                />
                <div className="absolute inset-0 bg-radial-primary rounded-full pointer-events-none"></div>
              </div>
              <p className="text-muted-foreground mt-4 max-w-md mx-auto">
                Una nube interactiva con las tecnologías y herramientas que utilizo diariamente
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <BlurFade key={category.title} delay={0.3 + categoryIndex * 0.1}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-muted-foreground">
                              {skill.years}
                            </span>
                            <span className="text-xs font-semibold text-primary">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        
                        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut" 
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        {/* Learning Section */}
        <BlurFade delay={0.8}>
          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-primary/20 rounded-full">
                    <Code2 className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  <GradientText>Siempre Aprendiendo</GradientText>
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Mi filosofía es el aprendizaje continuo. Cada día es una oportunidad para 
                  descubrir nuevas tecnologías, mejorar mis habilidades existentes y mantenerme 
                  al día con las últimas tendencias en desarrollo web.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Machine Learning", "AWS", "Microservicios", "Testing", "PWA"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      🎯 {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}