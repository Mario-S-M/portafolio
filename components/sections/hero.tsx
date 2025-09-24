"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Particles } from "@/components/ui/particles";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useScrollReveal, scrollAnimations } from "@/hooks/use-scroll-reveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function HeroSection() {
  const { t } = useTranslation();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Spectacular scroll animations
  const greetingRef = useScrollReveal({
    targets: ".hero-greeting",
    animation: scrollAnimations.fadeInUp,
    triggerOffset: 0.5,
  });

  const nameRef = useScrollReveal({
    targets: ".hero-name",
    animation: scrollAnimations.complexEntrance,
    triggerOffset: 0.4,
    delay: 200,
  });

  const titleRef = useScrollReveal({
    targets: ".hero-title",
    animation: scrollAnimations.elasticSlide,
    triggerOffset: 0.3,
    delay: 400,
  });

  const descriptionRef = useScrollReveal({
    targets: ".hero-description",
    animation: scrollAnimations.waveIn,
    triggerOffset: 0.3,
    delay: 600,
  });

  const techStackRef = useScrollReveal({
    targets: ".hero-tech-stack span",
    animation: scrollAnimations.staggerScale,
    triggerOffset: 0.2,
    delay: 800,
  });

  const buttonsRef = useScrollReveal({
    targets: ".hero-buttons",
    animation: scrollAnimations.springRebound,
    triggerOffset: 0.2,
    delay: 1000,
  });

  const socialRef = useScrollReveal({
    targets: ".hero-social",
    animation: scrollAnimations.flipIn,
    triggerOffset: 0.2,
    delay: 1200,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
    >
      <Particles
        className="absolute inset-0 text-muted-foreground/20"
        quantity={100}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Main Content Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              className="flex-1 text-center lg:text-left space-y-6"
            >
              {/* Greeting */}
              <div ref={greetingRef} className="hero-greeting">
                <BlurFade delay={0.4}>
                  <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl text-muted-foreground"
                  >
                    {t("hero.greeting")}
                  </motion.p>
                </BlurFade>
              </div>

              {/* Name */}
              <div ref={nameRef} className="hero-name">
                <BlurFade delay={0.6}>
                  <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                  >
                    <AnimatedGradientText
                      gradient="from-blue-500 via-purple-500 to-pink-500"
                      duration={4}
                    >
                      {t("hero.name")}
                    </AnimatedGradientText>
                  </motion.h1>
                </BlurFade>
              </div>

              {/* Title with Typing Animation */}
              <div ref={titleRef} className="hero-title">
                <BlurFade delay={0.8}>
                  <motion.div variants={itemVariants} className="space-y-3">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-semibold h-12 flex items-center">
                      <TypingAnimation
                        texts={[
                          t("hero.title"),
                          "Frontend Developer",
                          "Backend Developer",
                          "Full Stack Engineer"
                        ]}
                        className="text-foreground"
                        cursorClassName="text-primary"
                        duration={100}
                        delay={2000}
                      />
                    </div>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto lg:mx-0 rounded-full"></div>
                  </motion.div>
                </BlurFade>
              </div>

              {/* Description */}
              <div ref={descriptionRef} className="hero-description">
                <BlurFade delay={1.0}>
                  <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                  >
                    {t("hero.description")}
                  </motion.p>
                </BlurFade>
              </div>

              {/* Tech Stack Preview */}
              <div ref={techStackRef} className="hero-tech-stack">
                <BlurFade delay={1.2}>
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center lg:justify-start gap-2 py-4"
                  >
                    {[
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Node.js",
                      "GraphQL",
                    ].map((tech, index) => (
                      <motion.span
                        key={tech}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </BlurFade>
              </div>

              {/* CTA Buttons */}
              <div ref={buttonsRef} className="hero-buttons">
                <BlurFade delay={1.4}>
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
                        {t("hero.cta.primary")}
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
                        {t("hero.cta.secondary")}
                      </motion.span>
                    </Button>
                  </motion.div>
                </BlurFade>
              </div>

              {/* Social Links */}
              <div ref={socialRef} className="hero-social">
                <BlurFade delay={1.6}>
                  <motion.div
                    variants={itemVariants}
                    className="flex justify-center lg:justify-start space-x-4 pt-6"
                  >
                    <motion.a
                      href="https://github.com/Mario-S-M"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/mario-eduardo-sánchez-mejía-137548184/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="mailto:mayitolalito@hotmail.com"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="tel:44-38-40-91-87"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Phone className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </BlurFade>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div variants={itemVariants} className="flex-shrink-0">
              <BlurFade delay={0.2}>
                <div className="relative group">
                  {/* Background Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                  {/* Main Image Container */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 mx-auto"
                  >
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1 animate-spin-slow">
                      <div className="w-full h-full rounded-full bg-background"></div>
                    </div>

                    {/* Image */}
                    <div className="absolute inset-1 rounded-full overflow-hidden">
                      <Image
                        src="/Foto de Perfil.jpg"
                        alt="Mario Eduardo Sánchez Mejía"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        priority
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Status Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-background shadow-lg animate-pulse">
                      <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary/60 rounded-full animate-bounce delay-100"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary/60 rounded-full animate-bounce delay-300"></div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent/60 rounded-full animate-bounce delay-500"></div>
                  </motion.div>
                </div>
              </BlurFade>
            </motion.div>
          </div>

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
        </motion.div>
      </div>
    </section>
  );
}
