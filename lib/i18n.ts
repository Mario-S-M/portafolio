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
      "hero.description": "Full Stack Developer specialized in enterprise Java (Spring Boot) architectures and modern frontends. I build production systems integrating relational databases with Docker deployments.",
      "hero.cta.primary": "View My Work",
      "hero.cta.secondary": "Get In Touch",

      // About Section
      "about.title": "About Me",
      "about.description": "Full Stack Developer specialized in enterprise Java (Spring Boot) architectures. Currently building production systems at Librerías Hidalgo integrating PostgreSQL, MySQL, Docker, and Maven.",
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
      "contact.title": "Let's Talk!",
      "contact.description": "Have a project in mind? Want to collaborate? Or just want to say hello? I'd love to hear from you. Don't hesitate to reach out!",
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

      // About Section (extended)
      "about.subtitle": "Get to know my professional journey and the experiences that have shaped me as a developer",
      "about.specialty": "Specialist in Java architectures and modern technologies",
      "about.philosophy.title": "My Development Philosophy",
      "about.philosophy.code.title": "Clean Code",
      "about.philosophy.code.desc": "I write maintainable, scalable and well-documented code",
      "about.philosophy.innovation.title": "Innovation",
      "about.philosophy.innovation.desc": "Always seeking new technologies and best practices",
      "about.philosophy.learning.title": "Learning",
      "about.philosophy.learning.desc": "I stay updated with the latest trends",
      "about.training.title": "Continuous Training",
      "about.training.subtitle": "More than 25 specialized courses completed",
      "about.training.cert.key": "key",
      "about.training.footer": "19 verifiable certificates — all from Fernando Herrera's Dev/Talles platform",
      "about.recognition.label": "Recognition",
      "about.recognition.title": "Top 47 — Dev/Talles Platform",
      "about.recognition.desc": "Recognized among the top students on the platform of Fernando Herrera, the most recognized Spanish-speaking programming instructor on Udemy.",
      "about.stat.systems.label": "Production systems",
      "about.stat.systems.desc": "With Spring Boot + SQL",
      "about.stat.devtalles.desc": "Fernando Herrera Platform",
      "about.stat.gpa.label": "Academic GPA",
      "about.stat.gpa.desc": "ISC — TecNM Morelia",

      // Experience Section
      "experience.title": "My Journey",
      "experience.subtitle": "A journey through my academic training, featured projects and professional growth in software development",
      "experience.highlights.label": "Key highlights:",
      "experience.type.education": "Education",
      "experience.type.project": "Project",
      "experience.type.work": "Work",
      "experience.type.learning": "Learning",

      // Projects Section (extended)
      "projects.tech.label": "Technologies used",
      "projects.featured.badge": "⭐ Featured Project",
      "projects.btn.code": "Code",
      "projects.btn.demo": "Demo",
      "projects.cta.title": "Have a project in mind?",
      "projects.cta.desc": "I'm always open to new opportunities and interesting collaborations. Let's talk about how I can help you bring your project to life!",
      "projects.cta.button": "Start a Conversation",

      // Contact Section (extended)
      "contact.methods.title": "Contact Methods",
      "contact.quick.title": "Quick Contact",
      "contact.email.card.title": "Direct Email",
      "contact.email.card.desc": "Prefer email? Perfect!",
      "contact.email.send": "Send Email",
      "contact.whatsapp.desc": "Send a quick message via WhatsApp:",
      "contact.cta.title": "Ready to start?",
      "contact.cta.desc": "I'm available for freelance projects, collaborations and full-time opportunities.",
      "contact.footer.built": "Developed with ❤️ by Mario Eduardo Sánchez Mejía",
      "contact.footer.rights": "© 2026 - All rights reserved",
      "contact.method.email.desc": "I respond within 24 hours",
      "contact.method.phone.label": "Phone",
      "contact.method.phone.desc": "Available from 9:00 AM to 6:00 PM",
      "contact.method.location.desc": "Available for remote work",
      "contact.method.github.desc": "Check my projects",
      "contact.method.linkedin.desc": "Let's connect professionally",
      "contact.quickmsg.1": "Hi Mario, I'm interested in collaborating on a project",
      "contact.quickmsg.2": "Do you have availability for a freelance project?",
      "contact.quickmsg.3": "I'd like to know more about your experience",
      "contact.quickmsg.4": "Could you help me with a React project?",
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
      "hero.description": "Desarrollador Full Stack especializado en arquitecturas empresariales Java (Spring Boot) y frontends modernos. Construyo sistemas en producción integrando bases de datos relacionales con despliegue en Docker.",
      "hero.cta.primary": "Ver Mi Trabajo",
      "hero.cta.secondary": "Contactar",

      // About Section
      "about.title": "Sobre Mí",
      "about.description": "Desarrollador Full Stack especializado en arquitecturas empresariales Java (Spring Boot). Actualmente en Librerías Hidalgo construyendo sistemas en producción con PostgreSQL, MySQL, Docker y Maven.",
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
      "contact.title": "¡Hablemos!",
      "contact.description": "¿Tienes un proyecto en mente? ¿Quieres colaborar? ¿O simplemente quieres saludar? Me encantaría escuchar de ti. ¡No dudes en contactarme!",
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

      // About Section (extended)
      "about.subtitle": "Conoce mi trayectoria profesional y las experiencias que me han formado como desarrollador",
      "about.specialty": "Especialista en arquitecturas Java y tecnologías modernas",
      "about.philosophy.title": "Mi Filosofía de Desarrollo",
      "about.philosophy.code.title": "Código Limpio",
      "about.philosophy.code.desc": "Escribo código mantenible, escalable y bien documentado",
      "about.philosophy.innovation.title": "Innovación",
      "about.philosophy.innovation.desc": "Siempre busco nuevas tecnologías y mejores prácticas",
      "about.philosophy.learning.title": "Aprendizaje",
      "about.philosophy.learning.desc": "Me mantengo actualizado con las últimas tendencias",
      "about.training.title": "Formación Continua",
      "about.training.subtitle": "Más de 25 cursos especializados completados",
      "about.training.cert.key": "clave",
      "about.training.footer": "19 certificados verificables — todos de la plataforma Dev/Talles de Fernando Herrera",
      "about.recognition.label": "Reconocimiento",
      "about.recognition.title": "Top 47 — Plataforma Dev/Talles",
      "about.recognition.desc": "Reconocido entre los mejores estudiantes de la plataforma de Fernando Herrera, el instructor de programación más reconocido en español de Udemy.",
      "about.stat.systems.label": "Sistemas en producción",
      "about.stat.systems.desc": "Con Spring Boot + SQL",
      "about.stat.devtalles.desc": "Plataforma Fernando Herrera",
      "about.stat.gpa.label": "Promedio académico",
      "about.stat.gpa.desc": "ISC — TecNM Morelia",

      // Experience Section
      "experience.title": "Mi Trayectoria",
      "experience.subtitle": "Un recorrido por mi formación académica, proyectos destacados y crecimiento profesional en el mundo del desarrollo de software",
      "experience.highlights.label": "Logros destacados:",
      "experience.type.education": "Educación",
      "experience.type.project": "Proyecto",
      "experience.type.work": "Trabajo",
      "experience.type.learning": "Aprendizaje",

      // Projects Section (extended)
      "projects.tech.label": "Tecnologías utilizadas",
      "projects.featured.badge": "⭐ Proyecto Destacado",
      "projects.btn.code": "Código",
      "projects.btn.demo": "Demo",
      "projects.cta.title": "¿Tienes un proyecto en mente?",
      "projects.cta.desc": "Estoy siempre abierto a nuevas oportunidades y colaboraciones interesantes. ¡Hablemos sobre cómo puedo ayudarte a hacer realidad tu proyecto!",
      "projects.cta.button": "Iniciar Conversación",

      // Contact Section (extended)
      "contact.methods.title": "Formas de Contacto",
      "contact.quick.title": "Contacto Rápido",
      "contact.email.card.title": "Email Directo",
      "contact.email.card.desc": "¿Prefieres el email? ¡Perfecto!",
      "contact.email.send": "Enviar Email",
      "contact.whatsapp.desc": "Envía un mensaje rápido por WhatsApp:",
      "contact.cta.title": "¿Listo para empezar?",
      "contact.cta.desc": "Estoy disponible para proyectos freelance, colaboraciones y oportunidades full-time.",
      "contact.footer.built": "Desarrollado con ❤️ por Mario Eduardo Sánchez Mejía",
      "contact.footer.rights": "© 2026 - Todos los derechos reservados",
      "contact.method.email.desc": "Respondo en menos de 24 horas",
      "contact.method.phone.label": "Teléfono",
      "contact.method.phone.desc": "Disponible de 9:00 AM a 6:00 PM",
      "contact.method.location.desc": "Disponible para trabajo remoto",
      "contact.method.github.desc": "Revisa mis proyectos",
      "contact.method.linkedin.desc": "Conectemos profesionalmente",
      "contact.quickmsg.1": "Hola Mario, me interesa colaborar en un proyecto",
      "contact.quickmsg.2": "¿Tienes disponibilidad para un proyecto freelance?",
      "contact.quickmsg.3": "Me gustaría conocer más sobre tu experiencia",
      "contact.quickmsg.4": "¿Podrías ayudarme con un proyecto en React?",
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