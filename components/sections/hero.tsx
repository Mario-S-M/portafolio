"use client"

import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import BlurFade from "@/components/ui/blur-fade"
import { GradientText } from "@/components/ui/gradient-text"
import { Particles } from "@/components/ui/particles"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <Particles
        className="absolute inset-0 text-muted-foreground/20"
        quantity={100}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Avatar */}
          <BlurFade delay={0.2}>
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <Avatar className="w-32 h-32 mx-auto border-4 border-primary/20 shadow-lg">
                <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
                  M
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </BlurFade>

          {/* Greeting */}
          <BlurFade delay={0.4}>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-4"
            >
              ¡Hola! Soy
            </motion.p>
          </BlurFade>

          {/* Name */}
          <BlurFade delay={0.6}>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <GradientText variant="rainbow">
                Mario Eduardo
              </GradientText>
              <br />
              <GradientText variant="primary">
                Sánchez Mejía
              </GradientText>
            </motion.h1>
          </BlurFade>

          {/* Title */}
          <BlurFade delay={0.8}>
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
                <GradientText variant="secondary">
                  Ingeniero en Sistemas Computacionales
                </GradientText>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
            </motion.div>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={1.0}>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              <span className="font-semibold text-primary">Full Stack Developer</span> especializado en 
              <span className="font-medium"> React, Next.js, Node.js</span> y tecnologías modernas. 
              Creando experiencias web excepcionales con <span className="font-medium">3+ años</span> de experiencia.
            </motion.p>
          </BlurFade>

          {/* Tech Stack Preview */}
          <BlurFade delay={1.2}>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "GraphQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </BlurFade>

          {/* CTA Buttons */}
          <BlurFade delay={1.4}>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group relative overflow-hidden"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10"
                >
                  Ver Proyectos
                </motion.span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group"
              >
                <Mail className="w-4 h-4 mr-2" />
                <motion.span whileHover={{ scale: 1.05 }}>
                  Contactar
                </motion.span>
              </Button>
            </motion.div>
          </BlurFade>

          {/* Social Links */}
          <BlurFade delay={1.6}>
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-4 mb-12"
            >
              <motion.a
                href="https://github.com/Mario-S-M"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mario-eduardo-sánchez-mejía-137548184/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:mayitolalito@hotmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:44-38-40-91-87"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </BlurFade>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}