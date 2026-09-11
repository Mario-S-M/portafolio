import i18n from "i18next";
import { initReactI18next } from "react-i18next";

/**
 * Diccionario único del sitio. Toda cadena de prosa visible vive aquí.
 *
 * Excepción declarada en la spec: los nombres propios —tecnologías, títulos de
 * certificado y nombres de proyecto— no se traducen y viven en los catálogos
 * estáticos de cada componente.
 *
 * Los dos objetos, `es` y `en`, deben mantener exactamente el mismo conjunto de
 * claves: una clave ausente se renderiza cruda en pantalla.
 */
const resources = {
  es: {
    translation: {
      // Navegación
      "nav.logo.aria": "Ir al inicio",
      "nav.link.projects": "Proyectos",
      "nav.link.experience": "Trayectoria",
      "nav.link.stack": "Stack",
      "nav.link.notes": "Notas",
      "nav.cta": "Contáctame",
      "nav.lang.aria": "Idioma del sitio",
      "nav.lang.es": "Cambiar a español",
      "nav.lang.en": "Cambiar a inglés",
      "nav.menu.open": "Abrir menú",
      "nav.menu.close": "Cerrar menú",
      "nav.dots.aria": "Navegación por secciones",

      // Inicio
      "hero.eyebrow": "FULLSTACK",
      "hero.availability": "Disponible para nuevos retos · 2026",
      "hero.role": "Ingeniero en Sistemas Computacionales",
      "hero.roleAccent": "Full-Stack",
      "hero.intro":
        "Escribo TypeScript de punta a punta: APIs en NestJS, interfaces en Next.js y Angular, y la base de datos que las sostiene. Me hago cargo de lo que corre en producción, no solo de lo que compila en mi máquina.",
      "hero.cta.projects": "Ver proyectos",
      "hero.cta.cv": "Descargar CV",
      "hero.photo.alt": "Retrato de Mario Eduardo Sánchez Mejía",
      "hero.location": "MX · Remoto / Híbrido",
      "hero.scroll": "Scroll",
      "hero.marquee.aria": "Tecnologías que uso a diario",

      // Sobre mí
      "about.eyebrow": "Sobre mí",
      "about.heading":
        "No solo escribo código. Me hago responsable de lo que hace cuando ya está en producción.",
      "about.paragraph1":
        "Soy Ingeniero en Sistemas Computacionales y trabajo el ciclo completo: levanto el requerimiento con quien lo va a usar, modelo los datos, construyo el backend y la interfaz, y me quedo hasta el despliegue y la capacitación del usuario.",
      "about.paragraph2":
        "Mi día a día son arquitecturas de microservicios, microfrontends y plataformas multi-tenant sobre TypeScript, NestJS, Next.js y Angular. La accesibilidad no es un extra del final: es un criterio de diseño desde la primera pantalla.",
      "about.stats.years": "Años de experiencia",
      "about.stats.projects": "Proyectos entregados",
      "about.stats.certificates": "Certificaciones",
      "about.quote.title": "El código es la parte fácil",
      "about.quote.caption": "Lo difícil es decidir qué no construir.",

      // Proyectos
      "projects.eyebrow": "Proyectos destacados",
      "projects.heading": "Cuatro cosas que construí y volvería a construir",
      "projects.note": "Cada métrica está contada directamente sobre el repositorio.",
      "projects.shot.alt": "Captura del sitio de {{name}}",
      "projects.gallery.open": "Ver las {{count}} capturas de {{name}}",
      "projects.gallery.dialog": "Capturas de {{name}}",
      "projects.gallery.close": "Cerrar",
      "projects.gallery.prev": "Captura anterior",
      "projects.gallery.next": "Captura siguiente",
      "projects.gallery.goTo": "Ir a la captura {{n}}",
      "projects.hidalgo.shot1": "Portada con la preventa destacada y el buscador por título, autor o ISBN.",
      "projects.hidalgo.shot2": "Catálogo por secciones temáticas, con portadas y listas de deseos.",
      "projects.hidalgo.shot3": "Novedades y colecciones, navegables por categoría.",
      "projects.eskani.shot1": "Portada pública de la plataforma, con el respaldo de la UNAM y la ENES Morelia.",
      "projects.eskani.shot2": "Panel de administración: gestión de idiomas, niveles, habilidades y contenido de la plataforma.",
      "projects.eskani.shot3": "Catálogo de contenidos por idioma, nivel MCER y habilidad, con su estado de revisión.",
      "projects.bookitech.shot2": "Asistente de pedido en cinco pasos, del alta del alumno a la confirmación del domicilio.",
      "projects.bookitech.shot1": "Portada de la tienda de libros escolares, con acceso a registro y ayuda.",
      "projects.pos.shot1": "Catálogo de zapatos con búsqueda por nombre, modelo o código de barras, colores y precios por talla.",
      "projects.pos.shot2": "Historial de ventas con folio, tipo de precio, método de pago y reimpresión de ticket.",
      "projects.pos.shot3": "Cierre de caja del día: total, desglose entre efectivo y tarjeta, y reparto por inversionista.",
      "projects.pos.shot4": "Alta de inversionistas en consignación, con control de terminal bancaria propia.",
      "projects.pos.shot5": "Administración de categorías del catálogo.",
      "projects.visit.sr": "Abrir el sitio de {{name}} en una pestaña nueva",
      "projects.hidalgo.category": "E-commerce · Full-stack",
      "projects.hidalgo.summary":
        "Tienda en línea y back-office de una cadena de librerías: catálogo e inventario sincronizados desde el ERP por captura de cambios sobre el binlog de MySQL, pagos, envíos con Carta Porte, programa de lealtad de tres niveles e impresión térmica ESC/POS desde el navegador por WebUSB. Despliegue sin caída de servicio con Jenkins, reemplazando contenedores uno a uno y con rollback inmediato.",
      "projects.hidalgo.metric": "pantallas en producción",
      "projects.eskani.category": "Accesibilidad · UNAM",
      "projects.eskani.summary":
        "Plataforma gratuita de aprendizaje de idiomas construida desde cero para personas con discapacidad visual, bajo criterios WCAG con etiquetas ARIA, navegación por teclado y compatibilidad con lectores de pantalla. Residencia profesional en la ENES Morelia, desplegada en VPS de la UNAM.",
      "projects.eskani.metric": "congresos nacionales",
      "projects.bookitech.category": "IA aplicada · Automatización",
      "projects.bookitech.summary":
        "Plataforma de pedidos de libros escolares con bot de atención por WhatsApp: pipeline RAG con embeddings bge-m3 sobre el catálogo, gestión de estados de conversación y horarios comerciales, y estrategia multiproveedor de LLM con Groq como principal y Ollama local como respaldo. El catálogo se consulta por ISBN.",
      "projects.bookitech.metric": "catálogos editoriales",
      "projects.pos.category": "Freelance · Móvil y web",
      "projects.pos.summary":
        "Sistema a la medida para una zapatería, en operación diaria: control de inventario y registro de ventas desde una sola base de código desplegada en móvil y web, con API REST documentada en Swagger. Ciclo completo, del levantamiento de requerimientos a la capacitación del usuario final.",
      "projects.pos.metric": "base de código, dos plataformas",
      "projects.manifesto.eyebrow": "Manifiesto",
      "projects.manifesto.code.title": "Código limpio.",
      "projects.manifesto.code.desc":
        "Escribo pensando en quien va a leer esto dentro de seis meses: mantenible, documentado y sin sorpresas.",
      "projects.manifesto.innovation.title": "Innovación.",
      "projects.manifesto.innovation.desc":
        "Estreno tecnología cuando resuelve un problema real, no por el gusto de estrenarla.",
      "projects.manifesto.learning.title": "Aprendizaje.",
      "projects.manifesto.learning.desc":
        "Lo que aprendo hoy entra al proyecto siguiente; el oficio no se queda quieto y yo tampoco.",

      // Trayectoria
      "experience.eyebrow": "Trayectoria",
      "experience.title": "Cómo llegué hasta aquí",
      "experience.utel.period": "Ago 2026 — Hoy",
      "experience.utel.role": "Maestría en Arquitectura de Software",
      "experience.utel.org": "UTEL Universidad",
      "experience.utel.summary": "Programa en línea, cursado en paralelo al trabajo.",
      "experience.tecnm.period": "Mar 2026",
      "experience.tecnm.role": "Titulación como Ingeniero en Sistemas Computacionales",
      "experience.tecnm.org": "TecNM Campus Morelia",
      "experience.tecnm.summary": "Especialidad en Tecnologías de la Nube.",
      "experience.hidalgo.period": "Oct 2025 — Hoy",
      "experience.hidalgo.role": "Desarrollador Full Stack",
      "experience.hidalgo.org": "Librerías Hidalgo · Departamento de Sistemas",
      "experience.hidalgo.summary":
        "Plataforma multi-tenant interna, comercio electrónico, modernización del ERP heredado y agentes de IA.",
      "experience.freelance.period": "Abr 2025 — Hoy",
      "experience.freelance.role": "Desarrollador Full Stack independiente",
      "experience.freelance.org": "Freelance",
      "experience.freelance.summary":
        "Sistemas a la medida de extremo a extremo, del levantamiento de requerimientos a la capacitación del usuario final.",
      "experience.enes.period": "Ene 2025 — Dic 2025",
      "experience.enes.role": "Residencia profesional",
      "experience.enes.org": "ENES Morelia · UNAM",
      "experience.enes.summary":
        "Proyecto ESKANI, plataforma gratuita de aprendizaje de idiomas para personas con discapacidad visual.",
      "experience.gps.period": "Dic 2023 — Verano 2024",
      "experience.gps.role": "Analista y desarrollador",
      "experience.gps.org": "GPS Tracker",
      "experience.gps.summary": "Del análisis y el desarrollo a la coordinación de producto.",

      // Stack
      "stack.eyebrow": "Stack y herramientas",
      "stack.title": "Con qué trabajo",
      "stack.group.frontend": "Frontend",
      "stack.group.backend": "Backend",
      "stack.group.datos": "Datos",
      "stack.group.infraestructura": "Infraestructura",
      "stack.group.ia": "IA aplicada",
      "stack.item.accessibility": "Accesibilidad WCAG · ARIA",
      "stack.item.agents": "Agentes · n8n · MCP",
      "stack.terminal.whoami": "whoami",
      "stack.terminal.identity": "mario — ingeniero full-stack",
      "stack.terminal.cat": "cat prioridades.txt",
      "stack.terminal.priority1": "1. que funcione",
      "stack.terminal.priority2": "2. que se entienda",
      "stack.terminal.priority3": "3. que se pueda cambiar mañana",
      "stack.terminal.deploy": "deploy --env production",
      "stack.terminal.done": "listo en 312 ms · 0 errores",

      // Reconocimientos
      "recognition.eyebrow": "Reconocimientos y presentaciones",
      "recognition.title": "Constancias",
      "recognition.items.ife.period": "Ene 2026",
      "recognition.items.ife.title": "ESKANI en el IFE Conference",
      "recognition.items.ife.description":
        "Presenté ESKANI en el congreso de innovación educativa del Tecnológico de Monterrey, campus Monterrey.",
      "recognition.items.elevenlabs.period": "Ene 2026",
      "recognition.items.elevenlabs.title": "Alianza con ElevenLabs",
      "recognition.items.elevenlabs.description":
        "Tras presentar el proyecto ante su CEO, ElevenLabs aprobó el acceso a su API de síntesis de voz por su programa de apoyo a la educación especial. La integración está en implementación.",
      "recognition.items.enitet.period": "May 2025",
      "recognition.items.enitet.title": "ESKANI en el congreso ENITET",
      "recognition.items.enitet.description":
        "Presentación del proyecto en la Universidad Michoacana de San Nicolás de Hidalgo, ante la comunidad académica del congreso.",
      "recognition.items.devtalles.period": "Top 31",
      "recognition.items.devtalles.title": "Top 31 en DevTalles",
      "recognition.items.devtalles.description":
        "Posición #31 en la plataforma de formación de Fernando Herrera, con 21 certificados completados.",

      // Notas — certificados
      "certificates.eyebrow": "Formación continua",
      "certificates.title": "Lo que estudié para llegar hasta aquí",
      "certificates.description":
        "{{total}} certificados verificables, casi todos de 2026. Cada uno enlaza a su PDF original.",
      "certificates.open": "abrir el certificado en PDF",
      "certificates.group.backend": "Backend y arquitectura",
      "certificates.group.frontend": "Frontend",
      "certificates.group.ai": "IA y automatización",
      "certificates.group.foundations": "Fundamentos y herramientas",

      // Contacto
      "contact.eyebrow": "Contacto",
      "contact.title": "Hablemos de lo que necesitas construir",
      "contact.description":
        "Respondo cada mensaje en menos de 24 horas. Si es una vacante, mándame la descripción: prefiero decirte con honestidad si encajo.",
      "contact.channels.label": "Datos de contacto",
      "contact.channel.email": "Correo principal",
      "contact.channel.emailAlt": "Correo alterno",
      "contact.channel.phone": "Teléfono",
      "contact.channel.linkedin": "LinkedIn",
      "contact.channel.github": "GitHub",
      "contact.form.name": "Nombre",
      "contact.form.namePlaceholder": "Tu nombre",
      "contact.form.email": "Correo",
      "contact.form.emailPlaceholder": "tu@correo.com",
      "contact.form.message": "Mensaje",
      "contact.form.messagePlaceholder": "Cuéntame del proyecto o la vacante…",
      "contact.form.submit": "Enviar mensaje",
      "contact.form.hint":
        "Se abrirá tu cliente de correo con el mensaje ya escrito, listo para que lo revises y lo envíes.",
      "contact.form.incomplete":
        "Completa los tres campos, con un correo válido, para poder enviar.",
      "contact.sent.title": "Tu mensaje está listo",
      "contact.sent.body":
        "Se abrió tu cliente de correo con el mensaje ya escrito. Revísalo y dale enviar.",
      "contact.sent.fallback": "¿No se abrió nada? Escríbeme directo a",
      "contact.sent.again": "Escribir otro mensaje",
      "contact.mail.subject": "Contacto desde el portafolio",
      "contact.mail.from": "Nombre",
      "contact.mail.replyTo": "Correo de respuesta",
      "contact.footer.navLabel": "Secciones del sitio",
      "contact.footer.link.inicio": "Inicio",
      "contact.footer.link.sobreMi": "Sobre mí",
      "contact.footer.link.proyectos": "Proyectos",
      "contact.footer.link.experiencia": "Trayectoria",
      "contact.footer.link.stack": "Stack",
      "contact.footer.link.reconocimientos": "Reconocimientos",
      "contact.footer.link.notas": "Notas",
      "contact.footer.link.contacto": "Contacto",
      "contact.footer.copyright": "© 2026 Mario Eduardo Sánchez Mejía",
      "contact.footer.progress": "Avance",
      "contact.footer.progressLabel": "Porcentaje de avance de lectura de la página",
      "contact.footer.cv": "Descargar CV",
      "contact.footer.top": "Volver arriba",
    },
  },
  en: {
    translation: {
      // Navigation
      "nav.logo.aria": "Back to top",
      "nav.link.projects": "Work",
      "nav.link.experience": "Path",
      "nav.link.stack": "Stack",
      "nav.link.notes": "Notes",
      "nav.cta": "Hire me",
      "nav.lang.aria": "Site language",
      "nav.lang.es": "Switch to Spanish",
      "nav.lang.en": "Switch to English",
      "nav.menu.open": "Open menu",
      "nav.menu.close": "Close menu",
      "nav.dots.aria": "Section navigation",

      // Hero
      "hero.eyebrow": "FULLSTACK",
      "hero.availability": "Available for new roles · 2026",
      "hero.role": "Computer Systems Engineer",
      "hero.roleAccent": "Full-Stack",
      "hero.intro":
        "I write TypeScript end to end: NestJS APIs, Next.js and Angular front ends, and the database underneath. I own what runs in production, not just what compiles on my machine.",
      "hero.cta.projects": "See my work",
      "hero.cta.cv": "Download CV",
      "hero.photo.alt": "Portrait of Mario Eduardo Sánchez Mejía",
      "hero.location": "MX · Remote / Hybrid",
      "hero.scroll": "Scroll",
      "hero.marquee.aria": "Technologies I work with every day",

      // About
      "about.eyebrow": "About",
      "about.heading":
        "I don't just write code. I take responsibility for what it does once it's live.",
      "about.paragraph1":
        "I'm a Computer Systems Engineer and I work the full cycle: I gather requirements with the people who will actually use the system, model the data, build the backend and the interface, and stay through deployment and user training.",
      "about.paragraph2":
        "My day-to-day is microservice architectures, microfrontends and multi-tenant platforms on TypeScript, NestJS, Next.js and Angular. Accessibility isn't a finishing touch: it's a design criterion from the very first screen.",
      "about.stats.years": "Years of experience",
      "about.stats.projects": "Projects shipped",
      "about.stats.certificates": "Certifications",
      "about.quote.title": "Code is the easy part",
      "about.quote.caption": "The hard part is deciding what not to build.",

      // Work
      "projects.eyebrow": "Selected work",
      "projects.heading": "Four things I built and would build again",
      "projects.note": "Every metric counted straight from the repository.",
      "projects.shot.alt": "Screenshot of the {{name}} site",
      "projects.gallery.open": "View the {{count}} screenshots of {{name}}",
      "projects.gallery.dialog": "{{name}} screenshots",
      "projects.gallery.close": "Close",
      "projects.gallery.prev": "Previous screenshot",
      "projects.gallery.next": "Next screenshot",
      "projects.gallery.goTo": "Go to screenshot {{n}}",
      "projects.hidalgo.shot1": "Home page with the featured pre-order and search by title, author or ISBN.",
      "projects.hidalgo.shot2": "Catalogue browsing by theme, with covers and wishlists.",
      "projects.hidalgo.shot3": "New releases and collections, browsable by category.",
      "projects.eskani.shot1": "Public landing page, backed by UNAM and ENES Morelia.",
      "projects.eskani.shot2": "Admin panel: managing the platform's languages, levels, skills and content.",
      "projects.eskani.shot3": "Content catalogue by language, CEFR level and skill, with its review status.",
      "projects.bookitech.shot2": "Five-step order wizard, from student details to delivery address.",
      "projects.bookitech.shot1": "School bookstore home page, with sign-up and help.",
      "projects.pos.shot1": "Shoe catalogue with search by name, model or barcode, plus colours and size-based pricing.",
      "projects.pos.shot2": "Sales history with invoice number, price tier, payment method and ticket reprint.",
      "projects.pos.shot3": "Daily cash close: total, cash-versus-card split and payout per consignment partner.",
      "projects.pos.shot4": "Consignment partner records, tracking who has their own card terminal.",
      "projects.pos.shot5": "Catalogue category management.",
      "projects.visit.sr": "Open the {{name}} site in a new tab",
      "projects.hidalgo.category": "E-commerce · Full-stack",
      "projects.hidalgo.summary":
        "Online store and back-office for a bookstore chain: catalog and inventory synced from the ERP through change data capture on the MySQL binlog, payments, shipping with Carta Porte, a three-tier loyalty program and ESC/POS thermal printing straight from the browser over WebUSB. Zero-downtime releases with Jenkins, swapping containers one at a time with instant rollback.",
      "projects.hidalgo.metric": "screens in production",
      "projects.eskani.category": "Accessibility · UNAM",
      "projects.eskani.summary":
        "Free language-learning platform built from scratch for people with visual impairments, following WCAG criteria with ARIA labels, full keyboard navigation and screen-reader support. Professional residency at ENES Morelia, deployed on UNAM servers.",
      "projects.eskani.metric": "national conferences",
      "projects.bookitech.category": "Applied AI · Automation",
      "projects.bookitech.summary":
        "School-book ordering platform with a WhatsApp support bot: a RAG pipeline with bge-m3 embeddings over the catalog, conversation-state and business-hours handling, and a multi-provider LLM strategy with Groq as primary and a local Ollama as fallback. The catalog is queried by ISBN.",
      "projects.bookitech.metric": "publisher catalogs",
      "projects.pos.category": "Freelance · Mobile and web",
      "projects.pos.summary":
        "Custom system for a shoe store, in daily use: inventory control and sales tracking from a single codebase shipped to mobile and web, with a REST API documented in Swagger. End to end, from requirements gathering to training the people who use it.",
      "projects.pos.metric": "codebase, two platforms",
      "projects.manifesto.eyebrow": "Manifesto",
      "projects.manifesto.code.title": "Clean code.",
      "projects.manifesto.code.desc":
        "I write for whoever reads this six months from now: maintainable, documented and free of surprises.",
      "projects.manifesto.innovation.title": "Innovation.",
      "projects.manifesto.innovation.desc":
        "I bring in new technology when it solves a real problem, not for the thrill of trying it.",
      "projects.manifesto.learning.title": "Learning.",
      "projects.manifesto.learning.desc":
        "What I learn today goes into the next project; the craft doesn't stand still and neither do I.",

      // Path
      "experience.eyebrow": "Path",
      "experience.title": "How I got here",
      "experience.utel.period": "Aug 2026 — Now",
      "experience.utel.role": "Master's in Software Architecture",
      "experience.utel.org": "UTEL Universidad",
      "experience.utel.summary": "Online program, studied alongside full-time work.",
      "experience.tecnm.period": "Mar 2026",
      "experience.tecnm.role": "Graduated as Computer Systems Engineer",
      "experience.tecnm.org": "TecNM Campus Morelia",
      "experience.tecnm.summary": "Specialization in Cloud Technologies.",
      "experience.hidalgo.period": "Oct 2025 — Now",
      "experience.hidalgo.role": "Full Stack Developer",
      "experience.hidalgo.org": "Librerías Hidalgo · Systems Department",
      "experience.hidalgo.summary":
        "Internal multi-tenant platform, e-commerce, legacy ERP modernization and AI agents.",
      "experience.freelance.period": "Apr 2025 — Now",
      "experience.freelance.role": "Independent Full Stack Developer",
      "experience.freelance.org": "Freelance",
      "experience.freelance.summary":
        "End-to-end custom systems, from requirements gathering to end-user training.",
      "experience.enes.period": "Jan 2025 — Dec 2025",
      "experience.enes.role": "Professional residency",
      "experience.enes.org": "ENES Morelia · UNAM",
      "experience.enes.summary":
        "ESKANI project: a free language-learning platform for people with visual impairments.",
      "experience.gps.period": "Dec 2023 — Summer 2024",
      "experience.gps.role": "Analyst and developer",
      "experience.gps.org": "GPS Tracker",
      "experience.gps.summary":
        "From analysis and development through to product coordination.",

      // Stack
      "stack.eyebrow": "Stack & tools",
      "stack.title": "What I reach for",
      "stack.group.frontend": "Frontend",
      "stack.group.backend": "Backend",
      "stack.group.datos": "Data",
      "stack.group.infraestructura": "Infrastructure",
      "stack.group.ia": "Applied AI",
      "stack.item.accessibility": "WCAG accessibility · ARIA",
      "stack.item.agents": "Agents · n8n · MCP",
      "stack.terminal.whoami": "whoami",
      "stack.terminal.identity": "mario — full-stack engineer",
      "stack.terminal.cat": "cat priorities.txt",
      "stack.terminal.priority1": "1. make it work",
      "stack.terminal.priority2": "2. make it understandable",
      "stack.terminal.priority3": "3. make it changeable tomorrow",
      "stack.terminal.deploy": "deploy --env production",
      "stack.terminal.done": "done in 312 ms · 0 errors",

      // Recognition
      "recognition.eyebrow": "Recognition & talks",
      "recognition.title": "Proof of work",
      "recognition.items.ife.period": "Jan 2026",
      "recognition.items.ife.title": "ESKANI at the IFE Conference",
      "recognition.items.ife.description":
        "I presented ESKANI at Tecnológico de Monterrey's educational innovation conference, Monterrey campus.",
      "recognition.items.elevenlabs.period": "Jan 2026",
      "recognition.items.elevenlabs.title": "Partnership with ElevenLabs",
      "recognition.items.elevenlabs.description":
        "After presenting the project to their CEO, ElevenLabs approved access to their speech synthesis API through their special education support program. The integration is currently being implemented.",
      "recognition.items.enitet.period": "May 2025",
      "recognition.items.enitet.title": "ESKANI at the ENITET congress",
      "recognition.items.enitet.description":
        "Project presentation at Universidad Michoacana de San Nicolás de Hidalgo, before the congress's academic community.",
      "recognition.items.devtalles.period": "Top 31",
      "recognition.items.devtalles.title": "Top 31 on DevTalles",
      "recognition.items.devtalles.description":
        "Ranked #31 on Fernando Herrera's training platform, with 21 completed certificates.",

      // Notes — certificates
      "certificates.eyebrow": "Continuous learning",
      "certificates.title": "The training behind the work",
      "certificates.description":
        "{{total}} verifiable certificates, nearly all from 2026. Each one links to its original PDF.",
      "certificates.open": "open the certificate PDF",
      "certificates.group.backend": "Backend and architecture",
      "certificates.group.frontend": "Frontend",
      "certificates.group.ai": "AI and automation",
      "certificates.group.foundations": "Fundamentals and tooling",

      // Contact
      "contact.eyebrow": "Contact",
      "contact.title": "Let's talk about what you need built",
      "contact.description":
        "I answer every message within 24 hours. If it's a role, send me the job description: I'd rather tell you honestly whether I'm a fit.",
      "contact.channels.label": "Contact details",
      "contact.channel.email": "Primary email",
      "contact.channel.emailAlt": "Alternate email",
      "contact.channel.phone": "Phone",
      "contact.channel.linkedin": "LinkedIn",
      "contact.channel.github": "GitHub",
      "contact.form.name": "Name",
      "contact.form.namePlaceholder": "Your name",
      "contact.form.email": "Email",
      "contact.form.emailPlaceholder": "you@email.com",
      "contact.form.message": "Message",
      "contact.form.messagePlaceholder": "Tell me about the project or the role…",
      "contact.form.submit": "Send message",
      "contact.form.hint":
        "This opens your email client with the message already written, ready for you to review and send.",
      "contact.form.incomplete":
        "Fill in all three fields, with a valid email address, to send.",
      "contact.sent.title": "Your message is ready",
      "contact.sent.body":
        "Your email client just opened with the message already written. Give it a read and hit send.",
      "contact.sent.fallback": "Nothing opened? Write to me directly at",
      "contact.sent.again": "Write another message",
      "contact.mail.subject": "Portfolio enquiry",
      "contact.mail.from": "Name",
      "contact.mail.replyTo": "Reply to",
      "contact.footer.navLabel": "Site sections",
      "contact.footer.link.inicio": "Home",
      "contact.footer.link.sobreMi": "About",
      "contact.footer.link.proyectos": "Work",
      "contact.footer.link.experiencia": "Path",
      "contact.footer.link.stack": "Stack",
      "contact.footer.link.reconocimientos": "Recognition",
      "contact.footer.link.notas": "Notes",
      "contact.footer.link.contacto": "Contact",
      "contact.footer.copyright": "© 2026 Mario Eduardo Sánchez Mejía",
      "contact.footer.progress": "Progress",
      "contact.footer.progressLabel": "Page reading progress percentage",
      "contact.footer.cv": "Download CV",
      "contact.footer.top": "Back to top",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
