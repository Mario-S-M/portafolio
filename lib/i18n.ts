import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",

      // Hero Section
      "hero.greeting": "Hi, I'm",
      "hero.name": "Mario Sánchez",
      "hero.title": "Full Stack Developer",
      "hero.description": "Passionate about creating digital experiences that make a difference. I specialize in modern web technologies and love turning ideas into reality.",
      "hero.cta.primary": "View My Work",
      "hero.cta.secondary": "Get In Touch",

      // About Section
      "about.title": "About Me",
      "about.description": "I'm a passionate Full Stack Developer with over 3 years of experience creating digital solutions. My journey in tech started with curiosity and has evolved into a deep love for crafting elegant, efficient, and user-centric applications.",
      "about.experience": "Years of Experience",
      "about.projects": "Projects Completed",
      "about.technologies": "Technologies Mastered",

      // Skills Section
      "skills.title": "Technologies & Skills",
      "skills.description": "My technological arsenal perfected through challenging projects and continuous learning. Each visual indicator represents my level of expertise in each tool, developed with passion for technical excellence.",
      "skills.technologies": "technologies",

      // Projects Section
      "projects.title": "Featured Projects",
      "projects.description": "A showcase of my recent work, demonstrating my ability to solve complex problems and create impactful digital solutions.",
      "projects.viewAll": "View All Projects",
      "projects.liveDemo": "Live Demo",
      "projects.sourceCode": "Source Code",

      // Contact Section
      "contact.title": "Let's Work Together",
      "contact.description": "I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.send": "Send Message",
      "contact.info.title": "Contact Information",
      "contact.info.email": "Email",
      "contact.info.location": "Location",

      // Footer
      "footer.rights": "All rights reserved.",
      "footer.built": "Built with",
      "footer.and": "and",
    }
  },
  es: {
    translation: {
      // Navigation
      "nav.home": "Inicio",
      "nav.about": "Sobre Mí",
      "nav.skills": "Habilidades",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",

      // Hero Section
      "hero.greeting": "Hola, soy",
      "hero.name": "Mario Sánchez",
      "hero.title": "Desarrollador Full Stack",
      "hero.description": "Apasionado por crear experiencias digitales que marquen la diferencia. Me especializo en tecnologías web modernas y me encanta convertir ideas en realidad.",
      "hero.cta.primary": "Ver Mi Trabajo",
      "hero.cta.secondary": "Contactar",

      // About Section
      "about.title": "Sobre Mí",
      "about.description": "Soy un Desarrollador Full Stack apasionado con más de 3 años de experiencia creando soluciones digitales. Mi viaje en la tecnología comenzó con curiosidad y ha evolucionado en un profundo amor por crear aplicaciones elegantes, eficientes y centradas en el usuario.",
      "about.experience": "Años de Experiencia",
      "about.projects": "Proyectos Completados",
      "about.technologies": "Tecnologías Dominadas",

      // Skills Section
      "skills.title": "Tecnologías & Habilidades",
      "skills.description": "Mi arsenal tecnológico perfeccionado a través de proyectos desafiantes y aprendizaje continuo. Cada indicador visual representa mi nivel de expertise en cada herramienta, desarrollado con pasión por la excelencia técnica.",
      "skills.technologies": "tecnologías",

      // Projects Section
      "projects.title": "Proyectos Destacados",
      "projects.description": "Una muestra de mi trabajo reciente, demostrando mi capacidad para resolver problemas complejos y crear soluciones digitales impactantes.",
      "projects.viewAll": "Ver Todos los Proyectos",
      "projects.liveDemo": "Demo en Vivo",
      "projects.sourceCode": "Código Fuente",

      // Contact Section
      "contact.title": "Trabajemos Juntos",
      "contact.description": "Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. ¡Si tienes una pregunta o solo quieres saludar, no dudes en contactarme!",
      "contact.form.name": "Nombre",
      "contact.form.email": "Email",
      "contact.form.message": "Mensaje",
      "contact.form.send": "Enviar Mensaje",
      "contact.info.title": "Información de Contacto",
      "contact.info.email": "Email",
      "contact.info.location": "Ubicación",

      // Footer
      "footer.rights": "Todos los derechos reservados.",
      "footer.built": "Construido con",
      "footer.and": "y",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;