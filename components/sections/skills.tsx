"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Smartphone,
  Palette,
  Settings,
  Cloud,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import BlurFade from "@/components/ui/blur-fade";
import { GradientText } from "@/components/ui/gradient-text";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { IconCloud } from "@/components/ui/icon-cloud";
import { useScrollReveal, scrollAnimations } from "@/hooks/use-scroll-reveal";
import { useTranslation } from "react-i18next";

const skillCategories = [
  {
    title: "Frontend",
    icon: Smartphone,
    color: "from-blue-500 via-purple-500 to-pink-500",
    skills: [
      { name: "JavaScript", level: 75, years: "3+" },
      { name: "TypeScript", level: 70, years: "2+" },
      { name: "React", level: 75, years: "3+" },
      { name: "Next.js", level: 70, years: "2+" },
      { name: "Angular", level: 60, years: "1+" },
      { name: "Astro", level: 65, years: "1+" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-emerald-500 via-teal-500 to-cyan-500",
    skills: [
      { name: "Node.js", level: 65, years: "1+" },
      { name: "Nest.js", level: 70, years: "1+" },
      { name: "REST APIs", level: 70, years: "2+" },
      { name: "GraphQL", level: 65, years: "1+" },
      { name: "TypeORM", level: 60, years: "1+" },
      { name: "OpenAPI", level: 55, years: "1+" },
    ],
  },
  {
    title: "Base de Datos",
    icon: Database,
    color: "from-violet-500 via-purple-500 to-indigo-500",
    skills: [
      { name: "PostgreSQL", level: 65, years: "1+" },
      { name: "MySQL", level: 70, years: "1+" },
      { name: "MongoDB", level: 65, years: "1+" },
      { name: "TypeORM", level: 70, years: "1+" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-rose-500 to-pink-600",
    skills: [
      { name: "Docker", level: 65, years: "1+" },
      { name: "Kubernetes", level: 55, years: "1+" },
      { name: "Ansible", level: 50, years: "6m" },
      { name: "CI/CD", level: 60, years: "1+" },
    ],
  },
  {
    title: "Herramientas",
    icon: Settings,
    color: "from-pink-500 to-rose-600",
    skills: [
      { name: "Git & GitHub", level: 80, years: "3+" },
      { name: "VS Code", level: 85, years: "3+" },
      { name: "Postman", level: 75, years: "2+" },
      { name: "SandBox", level: 65, years: "1+" },
      { name: "Axios", level: 75, years: "2+" },
    ],
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
    ],
  },
];

export function SkillsSection() {
  const { t } = useTranslation();

  // Spectacular scroll animations
  const statsAnimation = useScrollReveal({
    targets: ".stats-counter",
    animation: scrollAnimations.elasticScale,
    triggerOffset: 0.3,
    delay: 200,
  });
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <GradientText variant="primary">
                {t("skills.title")}
              </GradientText>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-sm mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              {t("skills.description")}
            </p>
          </div>
        </BlurFade>

        {/* Icon Cloud */}
        <BlurFade delay={0.4}>
          <div className="flex justify-center mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                <GradientText variant="secondary">
                  Tecnologías que domino
                </GradientText>
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
                    "https://cdn.simpleicons.org/jenkins",
                  ]}
                />
                <div className="absolute inset-0 bg-radial-primary rounded-full pointer-events-none"></div>
              </div>
              <p className="text-muted-foreground mt-4 max-w-md mx-auto">
                Una nube interactiva con las tecnologías y herramientas que
                utilizo diariamente
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Skills Grid - Ultra Compact & Elegant */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <BlurFade key={category.title} delay={0.3 + categoryIndex * 0.15}>
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.08,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Subtle Background Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-xl blur opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

                {/* Main Card - Compact */}
                <Card className="relative h-full overflow-hidden border-0 bg-gradient-to-br from-card/90 via-card/70 to-card/50 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-5">
                    {/* Compact Header */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className={`p-2.5 rounded-lg bg-gradient-to-r ${category.color} shadow-md`}
                        whileHover={{ rotate: [0, -3, 3, 0] }}
                        transition={{ duration: 0.4 }}
                      >
                        <category.icon className="w-5 h-5 text-white" />
                      </motion.div>

                      <div className="text-right">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                          {category.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {category.skills.length} skills
                        </p>
                      </div>
                    </div>

                    {/* Compact Skills List */}
                    <div className="space-y-2.5">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: categoryIndex * 0.05 + skillIndex * 0.03,
                          }}
                          viewport={{ once: true }}
                          className="group/skill"
                        >
                          <div className="flex items-center justify-between py-2 px-3 rounded-md bg-background/40 border border-border/30 hover:border-primary/20 transition-all duration-200 hover:bg-background/60">
                            <div className="flex items-center space-x-2.5">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} opacity-70`} />
                              <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors duration-200">
                                {skill.name}
                              </span>
                            </div>

                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground bg-muted/40 px-1.5 py-0.5 rounded text-[10px]">
                                {skill.years}
                              </span>
                              {/* Compact Level Indicator */}
                              <div className="flex space-x-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-1 h-1 rounded-full transition-all duration-200 ${
                                      i < Math.floor(skill.level / 20)
                                        ? `bg-gradient-to-r ${category.color} opacity-80`
                                        : 'bg-muted-foreground/30'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Compact Footer */}
                    <div className="mt-4 pt-3 border-t border-border/30">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-foreground">Promedio</span>
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-0.5">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-1 h-1 rounded-full ${
                                  i < Math.floor(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length / 20)
                                    ? `bg-gradient-to-r ${category.color} opacity-80`
                                    : 'bg-muted-foreground/30'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-semibold text-primary ml-1">
                            {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length / 20)}/5
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Statistics Section */}
        <BlurFade delay={0.6}>
          <div ref={statsAnimation} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div
              className="stats-counter text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedCounter value={3} suffix="+" />
              </div>
              <p className="text-muted-foreground">{t("about.experience")}</p>
            </div>

            <div
              className="stats-counter text-center p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20"
            >
              <div className="text-3xl font-bold text-secondary mb-2">
                <AnimatedCounter value={15} suffix="+" />
              </div>
              <p className="text-muted-foreground">{t("about.projects")}</p>
            </div>

            <div
              className="stats-counter text-center p-6 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20"
            >
              <div className="text-3xl font-bold text-accent mb-2">
                <AnimatedCounter value={25} suffix="+" />
              </div>
              <p className="text-muted-foreground">{t("about.technologies")}</p>
            </div>
          </div>
        </BlurFade>

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
                  Mi filosofía es el aprendizaje continuo. Cada día es una
                  oportunidad para descubrir nuevas tecnologías, mejorar mis
                  habilidades existentes y mantenerme al día con las últimas
                  tendencias en desarrollo web.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "Machine Learning",
                    "AWS",
                    "Microservicios",
                    "Testing",
                    "PWA",
                  ].map((tech) => (
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
  );
}
