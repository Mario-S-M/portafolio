# SPEC 01 — Rediseño del portafolio: diseño nuevo y contenido real

> **Estado:** Implementado
> **Depende de:** —
> **Fecha:** 2026-09-11
> **Objetivo:** Reemplazar por completo el lenguaje visual y la estructura del portafolio por el diseño `Portafolio Mario Sanchez.dc.html`, y reescribir su contenido a partir del perfil profesional real, conservando el i18n es/en y la descarga de CV y certificados.

## Por qué existe esta spec

El diseño de origen es un archivo estático de Claude Design con una paleta, una tipografía y un catálogo de interacciones propios. No es un tema que se pueda aplicar encima de los componentes actuales: cambia la estructura de secciones, el orden, la retícula y el sistema de color completo.

Además, el diseño trae **contenido de ejemplo explícitamente marcado como ficticio** (`"Datos de ejemplo — reemplázalos por tus casos reales"`, `"Formulario de demostración"`). Publicar ese contenido pondría datos falsos en un portafolio profesional. Esta spec separa de forma deliberada la **forma**, que se adopta entera, del **contenido**, que es siempre real.

Hay un tercer motivo, descubierto al revisar el perfil profesional de Mario: **el contenido del portafolio actual también es inexacto**. El sitio se presenta como desarrollador Java / Spring Boot, pero el perfil declara Java como formación certificada sin uso profesional. El stack real de producción es TypeScript, NestJS, Next.js y Angular sobre PostgreSQL, con Nx, microfrontends y arquitectura multi-tenant. Además faltan en el sitio la residencia en la ENES Morelia (UNAM), el proyecto ESKANI, dos presentaciones en congresos nacionales, la alianza con ElevenLabs, la maestría en curso y la mitad de los proyectos entregados.

Por eso esta spec no solo cambia la forma: **reescribe el contenido a partir del perfil profesional real**, que pasa a ser la fuente de verdad.

Queda un punto técnico no obvio: el diseño resuelve el layout responsive **midiendo anchos en JavaScript** (`data-hero-grid`, `data-two-col`, `data-tl-row`, `data-nav-links`, `data-panel-card`). Eso es una limitación del lienzo de Claude Design, no una decisión de diseño. En Next.js se traduce a clases responsive de Tailwind.

## Fuente de verdad del contenido

El contenido publicado proviene del documento de trayectoria profesional del autor, que se mantiene en una carpeta local fuera de este repositorio y es la fuente de verdad del perfil.

De esa carpeta **solo cruzan al portafolio** cuatro cosas:

1. El contenido del documento de trayectoria, transcrito a `lib/i18n.ts` y a los catálogos de los componentes.
2. Los dos certificados que faltaban en el repositorio: *Ingeniería de prompts* y *Zustand*.
3. El CV en versión ATS, que se publica como `public/cv-mario-sanchez.pdf`.
4. La fotografía de perfil, que se publica como `public/mario.jpg`.

El resto de esa carpeta es material personal y **queda explícitamente fuera** del repositorio.

Una vez ejecutado el paso 1, el contenido queda inlineado aquí y no hace falta volver a leer la carpeta de origen.

## Alcance

**Dentro:**

- Sistema de color nuevo en `app/globals.css`: fondo `#0A0A0C`, superficie `#0D0D10`, texto `#F2EFEA`, acento `#FF1E56` (hover `#FF6D90`, activo `#FF3D6E`), grises `#A5A2AC`, `#8A8792`, `#57545E`, bordes `#3A383F`, `#2C2A32`, `#26242B`.
- Tipografías nuevas en `app/layout.tsx` vía `next/font/google`: Space Grotesk (display), Manrope (texto), JetBrains Mono (código y etiquetas). Reemplazan a Geist.
- Reescritura de las seis secciones existentes en `components/sections/` y de `components/navbar.tsx`.
- Dos secciones nuevas: `components/sections/recognition.tsx` y `components/sections/certificates.tsx`.
- Nuevo orden en `app/page.tsx`: Navbar → Hero → About → Projects → Experience → Stack → Recognition → Certificates → Contact.
- Retirada del tema claro: se eliminan `components/theme-provider.tsx`, `components/theme-toggle.tsx` y la dependencia `next-themes`.
- Primitivas de interacción nuevas en `components/ui/`: cursor, overlay de grano, navegación por puntos, marquesina, barra de progreso de scroll, tarjeta terminal y visor de capturas a pantalla completa.
- Hooks nuevos en `hooks/`: parallax, tilt y efecto imán.
- Reescritura completa del contenido de las ocho secciones a partir del perfil profesional real.
- Reposicionamiento del perfil: de "desarrollador Java / Spring Boot" a "Full Stack TypeScript · NestJS · Next.js · Angular".
- Incorporación al repositorio de los dos certificados faltantes, del CV ATS v2 y de la fotografía de perfil.
- Claves de traducción nuevas en `lib/i18n.ts`, en `es` y `en`. El copy nuevo se traduce al inglés al escribirlo; los atributos `data-en` del diseño solo cubren el copy del diseño que se conserve.
- Excepción declarada de i18n: los nombres propios no se traducen ni salen a `lib/i18n.ts`. Son nombres de tecnología (`PostgreSQL`, `Spring Boot`), títulos de certificado (`React: de cero a experto`) y nombres de proyecto. Viven en los catálogos de sus componentes.
- Formulario de contacto que compone un `mailto:` con los campos nombre, correo y mensaje.

**Fuera de alcance (para specs futuras):**

- Tema claro. El diseño no lo define; derivarlo sería invención.
- Sección de blog con entradas reales. El contenedor `notas` se reutiliza para certificados.
- Envío de correo por backend o servicio externo (Formspree, Resend).
- Capturas del interior de los sistemas que requieren credenciales. Solo se publica lo accesible sin iniciar sesión, salvo el punto de venta, levantado en local con datos de prueba.
- Migración del catálogo de certificados a un archivo de datos separado. Sigue siendo un arreglo en el componente.
- Facebook e Instagram en contacto. No hay perfiles que enlazar.
- WhatsApp con mensajes rápidos y el bloque de teléfono con horario de atención, presentes hoy en `components/sections/contact.tsx`. El diseño no los contempla y se retiran. El número sí se publica, como dato de contacto suelto.
- El resto del material de la carpeta local de origen.
- El liderazgo scout, los idiomas y el detalle de la formación académica. El diseño no tiene contenedor para ellos; entran cuando exista una sección que los aloje.

## Modelo de datos

No hay persistencia ni estado de sesión. Las estructuras son catálogos estáticos dentro de los componentes.

Catálogo de certificados, migrado tal cual desde `components/sections/about.tsx` a `components/sections/certificates.tsx`:

```ts
type Certificate = {
  name: string;
  category: string;   // "Backend" | "Frontend" | "Arquitectura" | "DevOps" | ...
  icon: string;       // emoji
  file: string;       // nombre exacto del PDF en public/certificates/
  highlight: boolean; // los 4 destacados van primero
};
```

Catálogo del stack, nuevo en `components/sections/skills.tsx`. El diseño trae cuatro columnas; se añade una quinta para IA aplicada:

```ts
type StackGroup = {
  id: "frontend" | "backend" | "datos" | "infraestructura" | "ia";
  items: string[];
};
```

Catálogo de trayectoria, nuevo en `components/sections/experience.tsx`:

```ts
type Milestone = {
  period: string;   // "Oct 2025 — Hoy"
  role: string;     // clave i18n
  org: string;      // "Librerías Hidalgo · Departamento de Sistemas"
  summary: string;  // clave i18n
};
```

Catálogo de proyectos, nuevo en `components/sections/projects.tsx`:

```ts
type Project = {
  id: string;
  category: string;    // clave i18n: "Empresarial · Multi-tenant"
  name: string;        // nombre propio, sin traducir
  summary: string;     // clave i18n
  tech: string[];      // nombres propios, sin traducir
  metric: { value: string; label: string }; // label es clave i18n
};
```

Convenciones:

- Los identificadores de sección son los del diseño y se usan como `id` del DOM y ancla del nav: `inicio`, `sobre-mi`, `proyectos`, `experiencia`, `stack`, `reconocimientos`, `notas`, `contacto`.
- Los colores se declaran una sola vez como variables CSS en `:root` dentro de `app/globals.css`. Ningún componente escribe un hexadecimal literal.
- Toda cadena visible al usuario vive en `lib/i18n.ts`, **salvo los nombres propios**: nombres de tecnología, títulos de certificado y nombres de proyecto. Esos permanecen en los catálogos estáticos de arriba y se muestran igual en español y en inglés.

## Plan de implementación

1. Incorporar al repositorio, desde la carpeta local de origen:
   - el CV en versión ATS → `public/cv-mario-sanchez.pdf`
   - la fotografía de perfil → `public/mario.jpg`
   - los certificados de *Ingeniería de prompts* y *Zustand* → `public/certificates/`

   Verificación: `ls public/certificates | wc -l` devuelve 21, y con `npm run dev` responden `/cv-mario-sanchez.pdf` y `/mario.jpg`.
2. Reescribir los tokens de `app/globals.css`: sustituir el bloque OKLCH claro/oscuro por un `:root` único con la paleta del diseño, y añadir los keyframes `riseIn`, `fadeUp`, `marquee`, `floaty`, `spinSlow`, `pulseDot`, `scrollCue`, `shimmer` y `blink`. Verificación: el sitio actual sigue compilando, ahora con fondo `#0A0A0C`.
3. Cambiar las fuentes en `app/layout.tsx` a Space Grotesk, Manrope y JetBrains Mono, exponiéndolas como `--font-display`, `--font-sans` y `--font-mono`. Retirar `ThemeProvider` del árbol. Verificación: el texto renderiza con Manrope.
4. Eliminar `components/theme-provider.tsx`, `components/theme-toggle.tsx` y desinstalar `next-themes`. Quitar las referencias en `components/navbar.tsx`. Verificación: `npm run build` pasa sin errores de importación.
5. Crear `components/ui/grain-overlay.tsx` y `components/ui/custom-cursor.tsx`. Ambos son componentes cliente que se montan una sola vez en `app/layout.tsx`. El cursor se desactiva en dispositivos táctiles y bajo `prefers-reduced-motion`. Verificación: el grano es visible y el cursor sigue al puntero en escritorio.
6. Crear `hooks/use-parallax.ts` con los tres modos del diseño: desplazamiento vertical, desplazamiento horizontal y zoom. Un único listener de scroll con `requestAnimationFrame`. Verificación: un elemento de prueba se desplaza a distinta velocidad que la página.
7. Crear `hooks/use-tilt.ts` y `hooks/use-magnet.ts` para las tarjetas y los botones. Verificación: una tarjeta se inclina al pasar el puntero y un botón atrae al cursor.
8. Crear `components/ui/marquee.tsx` (cinta infinita de tecnologías del hero) y `components/ui/scroll-progress.tsx` (porcentaje de avance mostrado en el pie). Verificación: la cinta cicla sin salto y el porcentaje llega a 100 al final.
9. Crear `components/ui/dot-nav.tsx`: navegación lateral por puntos con las ocho secciones, marcando la activa con `IntersectionObserver`. Verificación: al hacer scroll el punto activo cambia y al pulsarlo navega.
10. Reescribir `components/navbar.tsx` con la barra del diseño: logotipo `MSM`, enlaces a Proyectos, Trayectoria, Stack y Notas, selector `ES / EN` y botón `Contáctame`. Menú desplegable en móvil. Verificación: los cinco enlaces navegan a su ancla.
11. Reescribir `components/sections/hero.tsx` como sección `inicio`: etiqueta `FULLSTACK`, píldora de disponibilidad, nombre en tres líneas con animación `riseIn`, subtítulo "Ingeniero en Sistemas Computacionales · Full-Stack", párrafo de presentación reposicionado sobre TypeScript, NestJS, Next.js y Angular, botones "Ver proyectos" y "Descargar CV", foto con recorte `3/4` y borde superior redondeado, indicador de scroll y marquesina con las tecnologías reales: TypeScript, NestJS, Next.js, Angular, PostgreSQL, Docker, Nx, GraphQL. Verificación: la sección ocupa el alto de la ventana y las tres líneas del nombre entran escalonadas.
12. Reescribir `components/sections/about.tsx` como sección `sobre-mi`: numeral `01`, titular, dos párrafos y tres contadores animados. Los párrafos describen el perfil real: ciclo completo de levantamiento de requerimientos a despliegue, arquitecturas de microservicios, microfrontends y multi-tenant, y accesibilidad como criterio de diseño. Los tres contadores son:
   - `2+` años de experiencia profesional, contados desde diciembre de 2023.
   - `8` proyectos entregados: la plataforma web de Librerías Hidalgo, ESKANI, Bookitech, el punto de venta de zapatería, la plataforma multi-tenant interna, el comercio estacional de coronas, ALICIA ERP y la herramienta de monitoreo de facturación de GPS Tracker. Los cuatro primeros se detallan en la sección `proyectos`.
   - `21` certificaciones.

   Se retira de este archivo el bloque de certificados, que pasa al paso 17. Verificación: los tres contadores animan al entrar en pantalla y muestran 2, 8 y 21.
13. Reescribir `components/sections/projects.tsx` como sección `proyectos`: **cuatro** tarjetas numeradas `01/04` a `04/04` en retícula 2×2, cada una con categoría, nombre, descripción, píldoras de tecnología, métrica destacada y, si el proyecto tiene sitio público, enlace al dominio y captura real:

   - **01 · Plataforma web de Librerías Hidalgo** — `libreriashidalgo.mx` — E-commerce · Full-stack. Tienda en línea y back-office de una cadena de librerías: catálogo e inventario sincronizados desde el ERP por captura de cambios sobre el binlog de MySQL, pagos, envíos con Carta Porte, programa de lealtad de tres niveles e impresión térmica ESC/POS desde el navegador por WebUSB. Despliegue sin caída de servicio con Jenkins, con reemplazo de contenedores uno a uno y rollback inmediato. Tecnologías: `Next.js 16` `React 19` `NestJS 11` `GraphQL` `PostgreSQL 17` `TypeORM` `Socket.IO` `Docker` `Jenkins`. Métrica: **71** pantallas en producción.
   - **02 · ESKANI** — `eskani.enesmorelia.unam.mx` — Accesibilidad · UNAM. Plataforma gratuita de aprendizaje de idiomas construida desde cero para personas con discapacidad visual, bajo criterios WCAG con etiquetas ARIA, navegación por teclado y compatibilidad con lectores de pantalla. Residencia profesional en la ENES Morelia, desplegada en VPS de la UNAM. Tecnologías: `Next.js` `NestJS` `Fastify` `PostgreSQL` `Docker` `Nginx` `WCAG` `ARIA`. Métrica: **2** congresos nacionales.
   - **03 · Bookitech** — `bookitech.mx` — IA aplicada · Automatización. Plataforma de pedidos de libros escolares con bot de atención por WhatsApp: pipeline RAG con embeddings bge-m3 sobre el catálogo, gestión de estados de conversación y horarios comerciales, y estrategia multiproveedor de LLM con Groq como principal y Ollama local como respaldo. Tecnologías: `n8n` `Twilio` `RAG` `bge-m3` `Groq` `Ollama` `Python` `WhatsApp Business API`. Métrica: **8** catálogos editoriales consultables por ISBN.
   - **04 · Punto de venta e inventario** — Freelance · Móvil y web. Sin sitio público. Sistema a la medida para una zapatería, en operación diaria: control de inventario y registro de ventas desde una sola base de código desplegada en móvil y web, con API REST documentada en Swagger. Ciclo completo, del levantamiento de requerimientos a la capacitación del usuario final. Tecnologías: `Flutter` `Dart` `NestJS` `PostgreSQL` `Swagger`. Métrica: **1** base de código, dos plataformas.

   Cierra el bloque "Manifiesto", cuyo texto es el de la filosofía de desarrollo ya existente en `lib/i18n.ts` (`about.philosophy.*`: Código Limpio, Innovación, Aprendizaje), no el del diseño. Cada proyecto muestra una portada real guardada en `public/projects/<id>/`, velada hacia la paleta oscura y servida con `next/image`, con un contador `1 / n` que abre un visor a pantalla completa para recorrer todas sus capturas con teclado, flechas y puntos. Verificación: renderizan cuatro tarjetas numeradas hasta `/04`, tres con captura y enlace, y ninguna corresponde a los proyectos ficticios del diseño.
14. Reescribir `components/sections/experience.tsx` como sección `experiencia`: numeral `02`, titular y línea de tiempo con una fila por hito, del más reciente al más antiguo:
   - **Ago 2026 — Hoy** · Maestría en Arquitectura de Software · UTEL Universidad, en línea.
   - **Mar 2026** · Titulación como Ingeniero en Sistemas Computacionales · TecNM Campus Morelia, especialidad en Tecnologías de la Nube.
   - **Oct 2025 — Hoy** · Desarrollador Full Stack · Librerías Hidalgo, Departamento de Sistemas. Plataforma multi-tenant interna, comercio electrónico, modernización del ERP heredado y agentes de IA. El nombre del producto interno no se publica.
   - **Abr 2025 — Hoy** · Desarrollador Full Stack independiente. Sistemas a la medida de extremo a extremo, del requerimiento a la capacitación del usuario.
   - **Ene 2025 — Dic 2025** · Residencia profesional · ENES Morelia, UNAM. Proyecto ESKANI.
   - **Dic 2023 — Verano 2024** · GPS Tracker. Analista y desarrollador, después coordinación de producto.

   Verificación: la línea de tiempo muestra seis filas y mantiene el formato rango-a-la-izquierda del diseño en escritorio, apilado en móvil.
15. Reescribir `components/sections/skills.tsx` como sección `stack` con cinco columnas de tecnologías reales:
   - **Frontend**: Next.js · React, Angular · Module Federation, Flutter · React Native, TailwindCSS · shadcn/ui, Accesibilidad WCAG · ARIA.
   - **Backend**: NestJS · Fastify, Node.js · TypeScript, GraphQL · REST, NATS · Socket.IO, OAuth2 · OIDC · JWT.
   - **Datos**: PostgreSQL, MySQL, TypeORM · Prisma, Row-Level Security · ltree.
   - **Infraestructura**: Docker · Nginx, Nx · pnpm, GitHub Actions · Jenkins, VPS Linux · PM2, OpenTelemetry.
   - **IA aplicada**: LLMs · RAG, Embeddings bge-m3, Agentes · n8n · MCP, Groq · Ollama.

   Más la tarjeta terminal animada con `whoami`, `cat prioridades.txt` y `deploy --env production`. Verificación: se renderizan las cinco columnas y la terminal escribe línea a línea al entrar en pantalla.
16. Crear `components/sections/recognition.tsx` como sección `reconocimientos`, con cuatro entradas reales:
   - **Ene 2026** · Presentación de ESKANI en el IFE Conference, Tecnológico de Monterrey campus Monterrey.
   - **Ene 2026** · Alianza con ElevenLabs. Acceso aprobado a su API de síntesis de voz mediante su programa de apoyo a la educación especial, tras presentar el proyecto ante su CEO. Se redacta como alianza en implementación, no como integración terminada.
   - **May 2025** · Presentación de ESKANI en el congreso ENITET, Universidad Michoacana de San Nicolás de Hidalgo.
   - **Top 31** · Plataforma DevTalles de Fernando Herrera. La tarjeta de perfil de la plataforma muestra `#31` y 21 certificados, cifra que coincide con el catálogo de la sección `notas`.

   Más las cintas `SHIP IT / MEASURE IT / FIX IT / REPEAT` y `commit · review · test · deploy · observe · iterate`. Verificación: se muestran las cuatro entradas y las dos cintas se desplazan en direcciones opuestas.
17. Crear `components/sections/certificates.tsx` como sección `notas`: se reutiliza el layout de tarjetas de notas para los 21 certificados de `public/certificates/`. El catálogo se migra desde `about.tsx` y se le añaden las dos entradas nuevas: "Ingeniería de prompts: para la vida real" (categoría IA) y "Zustand: gestor de estado para React" (categoría Frontend). Cada tarjeta enlaza a su PDF y abre en pestaña nueva. Verificación: se listan 21 tarjetas y los 21 enlaces abren su PDF correspondiente.
18. Reescribir `components/sections/contact.tsx` como sección `contacto`: titular, párrafo y los datos de contacto reales — correo `mariosnachezmarla@gmail.com` como principal y destinatario del formulario, correo `mayitolalito@hotmail.com` como alterno, teléfono `+52 443 840 9187`, `linkedin.com/in/mario-sánchez-46b341210` y `github.com/Mario-S-M`. Más el formulario de tres campos que compone un `mailto:` hacia el correo principal, y el pie con copyright, "Descargar CV", "Volver arriba", enlaces de sección y el porcentaje de scroll. Verificación: enviar el formulario abre el cliente de correo con destinatario, asunto y cuerpo prellenados.
19. Actualizar `app/page.tsx` con el orden nuevo de nueve componentes. Verificación: el scroll recorre las ocho secciones en el orden del diseño.
20. Añadir a `lib/i18n.ts` todas las claves nuevas en `es` y `en`, y retirar las que quedaron huérfanas. Tres claves actuales afirman cifras que ya no son ciertas y deben desaparecer o corregirse: `about.training.subtitle` ("Más de 25 cursos"), `about.training.footer` ("19 certificados verificables") y `about.recognition.title` ("Top 47"). El copy es casi todo nuevo, así que la versión inglesa se redacta al escribirlo; los atributos `data-en` del diseño solo aportan las pocas cadenas del diseño que se conservan. Es el paso más largo del plan. Verificación: cambiar a EN traduce las ocho secciones y no queda ninguna clave sin su par en el otro idioma.
21. Retirar los componentes que el diseño nuevo ya no usa: `components/ui/particles.tsx`, `components/ui/icon-cloud.tsx`, `components/ui/bento-grid.tsx`, `components/ui/gradient-text.tsx` y `components/ui/animated-gradient-text.tsx`, junto con sus dependencias huérfanas. Verificación: `npm run build` y `npm run lint` pasan.

## Criterios de aceptación

- [ ] `npm run build` termina sin errores ni advertencias nuevas.
- [ ] `npm run lint` termina sin errores.
- [ ] El fondo de la página es `#0A0A0C` y el color de acento de enlaces y botones primarios es `#FF1E56`.
- [ ] Los titulares renderizan en Space Grotesk, el texto corrido en Manrope y las etiquetas numéricas en JetBrains Mono.
- [ ] La página contiene exactamente ocho secciones con los `id` `inicio`, `sobre-mi`, `proyectos`, `experiencia`, `stack`, `reconocimientos`, `notas` y `contacto`, en ese orden.
- [ ] No existe ningún botón de cambio de tema y `next-themes` ya no aparece en `package.json`.
- [ ] Cambiar el selector a EN traduce titulares, párrafos, etiquetas y botones de las ocho secciones; solo permanecen en español los nombres propios listados en el modelo de datos.
- [ ] Cambiar el selector a ES devuelve el texto original; no queda ningún titular, párrafo, etiqueta ni botón en inglés.
- [ ] Ninguna cadena de prosa visible al usuario está escrita directamente en un archivo `.tsx`; todas vienen de `lib/i18n.ts`. Los catálogos de nombres propios son la única excepción.
- [ ] El portafolio no menciona ninguno de los proyectos ficticios del diseño: Nexo Pay, el "Atlas ERP" de logística, Helios ni Vera. ALICIA ERP sí puede aparecer, por ser proyecto propio.
- [ ] La sección `proyectos` muestra cuatro tarjetas en retícula 2×2: la plataforma web de Librerías Hidalgo, ESKANI, Bookitech y el punto de venta.
- [ ] Cada tarjeta de proyecto muestra su métrica: 71, 2, 8 y 1 respectivamente.
- [ ] Las tarjetas de Librerías Hidalgo, ESKANI y Bookitech muestran una captura real y enlazan a su dominio en una pestaña nueva.
- [ ] Cada tarjeta abre un visor a pantalla completa con sus capturas, navegable con `←`, `→` y `Esc`, y con pie descriptivo traducido.
- [ ] El visor se dibuja por encima de la barra de navegación y de los puntos laterales.
- [ ] La palabra "Atlas" no aparece en ninguna parte del sitio, ni como tarjeta ni en la trayectoria.
- [ ] Los contadores de "Sobre mí" muestran 2, 8 y 21, no 4 / 23 / 99.9.
- [ ] El portafolio no se presenta como desarrollador Java ni Spring Boot en ninguna sección.
- [ ] La sección `experiencia` muestra seis hitos e incluye Librerías Hidalgo, la residencia en ENES Morelia (UNAM), GPS Tracker, la titulación en TecNM Morelia y la maestría en UTEL.
- [ ] La sección `stack` muestra cinco columnas, una de ellas dedicada a IA aplicada.
- [ ] La sección `reconocimientos` incluye el IFE Conference, el congreso ENITET, la alianza con ElevenLabs y el Top 31 de DevTalles.
- [ ] El portafolio no menciona en ningún punto el "Top 47"; la cifra publicada es 31.
- [ ] La alianza con ElevenLabs se describe como aprobada y en implementación, no como integración terminada.
- [ ] `public/certificates/` contiene 21 PDFs y la sección `notas` lista los 21, cada uno enlazando a su archivo.
- [ ] Los dos botones "Descargar CV" (hero y pie) descargan `public/cv-mario-sanchez.pdf`, que es la versión ATS v2.
- [ ] La sección `contacto` publica los dos correos, el teléfono, LinkedIn y GitHub.
- [ ] Ningún archivo del repositorio contiene material personal ajeno al portafolio.
- [ ] Enviar el formulario de contacto abre el cliente de correo con destinatario, asunto y cuerpo prellenados con lo escrito.
- [ ] La navegación por puntos marca la sección visible y navega al pulsarla.
- [ ] El cursor personalizado y el overlay de grano no se montan en dispositivos táctiles.
- [ ] Con `prefers-reduced-motion: reduce` activo, no se ejecutan parallax, tilt, imán ni cursor personalizado.
- [ ] A 375 px de ancho no hay desplazamiento horizontal en ninguna sección.
- [ ] A 1440 px de ancho la retícula del hero y de la línea de tiempo coincide con la del diseño.

## Decisiones tomadas y descartadas

- **Sí:** una sola spec para las ocho secciones. Es un único diseño coherente; partirlo dejaría el portafolio mitad viejo y mitad nuevo entre specs.
- **Sí:** solo tema oscuro. El diseño es exclusivamente oscuro y no define equivalentes claros. Derivar un tema claro sería interpretación mía, no el diseño.
- **No:** conservar el toggle de tema sin efecto. Un control que no hace nada es peor que no tenerlo.
- **Sí:** contenido real en todas las secciones. El diseño marca su propio contenido como datos de ejemplo; publicarlo pondría trayectoria y proyectos falsos en un portafolio profesional.
- **No:** copiar el contenido del diseño tal cual, ni siquiera el copy narrativo.
- **Sí:** `informacion-Mario.md` como fuente de verdad del contenido, por encima del portafolio actual. El portafolio actual se presenta como Java / Spring Boot, y el perfil declara Java como formación certificada sin uso profesional. Mantener el texto actual habría publicado un posicionamiento que el propio perfil contradice.
- **Sí:** inlinear el contenido en el repositorio en lugar de referenciar la carpeta externa. La carpeta contiene material personal; nada debe tener motivo para volver a leerla después del paso 1.
- **Sí:** publicar los dos correos y el teléfono, a petición explícita del usuario tras advertirle que un número en un sitio público queda expuesto a rastreadores.
- **Sí:** quinta columna de stack dedicada a IA aplicada, fuera de las cuatro del diseño. RAG, agentes, embeddings y MCP son el diferenciador más claro del perfil y diluirlos dentro de "Backend" los perdería.
- **Sí:** publicar "Top 31 · DevTalles". El portafolio actual decía Top 47 y el perfil profesional no recoge el dato; el usuario aportó la tarjeta de la plataforma, que muestra `#31` y 21 certificados. Se corrige la cifra y se toma la tarjeta como respaldo.
- **Sí:** CV ATS v2 en lugar del CV de LaTeX del repositorio. El del repositorio está adaptado a una postulación concreta a Banxico; el ATS v2 es general y más reciente.
- **No:** publicar el liderazgo scout, los idiomas ni el detalle de la formación. El diseño no tiene contenedor para ellos y forzarlos rompería la retícula.
- **Sí:** reutilizar el contenedor de `notas` para los certificados. El layout de tarjetas encaja y ya existen 21 PDF reales que hoy están enterrados dentro de "Sobre mí".
- **No:** una sección de blog con entradas de marcador. No hay entradas escritas y los marcadores envejecen mal.
- **Sí:** conservar los dos sistemas de animación actuales, Framer Motion vía `BlurFade` y Anime.js vía `useScrollReveal` y `useAnimeHover`, reaplicados sobre el markup nuevo. No se tocan `hooks/use-scroll-reveal.ts` ni `hooks/use-anime.ts`, solo dónde se invocan.
- **No:** portar el JavaScript de layout del diseño (`data-hero-grid`, `data-two-col`, `data-tl-row`, `data-nav-links`, `data-panel-card`). Mide anchos en tiempo de ejecución porque el lienzo de Claude Design no admite media queries. En Next.js se resuelve con clases responsive de Tailwind, que no provocan parpadeo en la primera pintura.
- **Sí:** `mailto:` para el formulario. Funciona sin backend, sin claves y sin dependencias, y el portafolio se despliega como sitio estático.
- **No:** Formspree ni Resend. Añaden una cuenta externa y una variable de entorno para un formulario de portafolio.
- **No:** conservar el bloque de WhatsApp con mensajes rápidos ni la tarjeta de teléfono con horario de atención. El diseño de contacto se organiza alrededor de correo, LinkedIn y GitHub más el formulario, y no tiene hueco para esas tarjetas. El número sí se publica, como dato suelto. Si se quiere WhatsApp de vuelta, va en su propia spec.
- **Sí:** tratar el microcopy decorativo como forma, no como contenido. Las etiquetas de la terminal del stack (`whoami`, `cat prioridades.txt`, `deploy --env production`) y las cintas de `reconocimientos` se adoptan del diseño porque no afirman nada falso sobre la trayectoria. La distinción es esa: el copy que declara hechos verificables es siempre el real; el que solo ambienta puede venir del diseño.
- **Sí:** marcador con gradiente e iniciales donde el diseño espera capturas de proyecto. Los cuatro `image-slot` del diseño llegan vacíos y no hay capturas disponibles.
- **No:** publicar Atlas, ni como tarjeta ni por su nombre en la trayectoria. Es la plataforma interna de Librerías Hidalgo y el usuario pidió retirarla. Sigue contando dentro de los 8 proyectos entregados de "Sobre mí", y el trabajo se describe en la trayectoria como "plataforma multi-tenant interna", sin nombrar el producto.
- **Sí:** retícula 2×2 para las cuatro tarjetas. Con tres columnas la cuarta quedaba huérfana y dejaba un hueco visible.
- **Sí:** capturas reales de los cuatro proyectos. Las de `libreriashidalgo.mx`, `eskani.enesmorelia.unam.mx` y `bookitech.mx` se tomaron del sitio público; las del punto de venta, levantando el sistema en local con Docker, porque su despliegue en Raspberry Pi dejó de funcionar. Se velan hacia la paleta oscura para que no rompan la composición y se aclaran al pasar el puntero.
- **Sí:** visor a pantalla completa en lugar de carrusel dentro de la tarjeta. Las capturas de interfaces densas no se leen a tamaño de tarjeta, y el visor permite añadir muchas por proyecto sin alargar la página.
- **Sí:** ventas de prueba generadas vía API en el punto de venta antes de capturar. Las pantallas de Ventas y Cierre de caja salían vacías, y el cierre —con su desglose por inversionista— es justo lo que distingue a ese sistema.
- **Sí:** `SmoothCursor` de Magic UI, adaptado a `framer-motion` y a la paleta, en lugar del cursor de anillo y punto. El anterior se sentía arrastrado; este rota hacia la dirección del movimiento y su relleno oscuro con perfil claro se lee tanto sobre el fondo del sitio como sobre las capturas claras.
- **Sí:** escala explícita de apilamiento — navegación 7000, visor 8000, grano 9000, cursor 9500. Sin ella el visor quedaba por debajo de la barra de navegación.
- **Sí:** retirar `particles`, `icon-cloud`, `bento-grid` y los componentes de texto con gradiente. El diseño nuevo no los usa y dejarlos sin referencias es deuda muerta.
- **No:** incluir Facebook e Instagram, que el diseño lista en contacto. No hay perfiles que enlazar.

## Riesgos identificados

| Riesgo | Mitigación |
| --- | --- |
| El cursor personalizado y el grano degradan el rendimiento o estorban en móvil | Ambos se montan solo si el puntero es fino y `prefers-reduced-motion` no está activo. |
| El parallax provoca saltos al recalcular en cada evento de scroll | Un único listener compartido con `requestAnimationFrame` y lecturas de geometría cacheadas por `resize`. |
| Tres fuentes de Google aumentan el peso de la primera carga | Se cargan por `next/font/google`, que las autoaloja y las inyecta con `display: swap`; se limita cada familia a los pesos que el diseño usa. |
| El texto sobre el fondo `#0A0A0C` no alcanza contraste AA en los grises más oscuros | `#57545E` queda reservado para bordes y elementos decorativos, nunca para texto de lectura. |
| Mezclar Anime.js, Framer Motion y los keyframes CSS del diseño sobre el mismo elemento produce transformaciones en conflicto | Un solo sistema por elemento: los keyframes del diseño para lo decorativo, `BlurFade` para entradas de bloque, Anime.js para scroll y hover. |
| `files/foto-perfil-mario.jpg` no está disponible al ejecutar el paso 1 | Se usa `public/Foto de Perfil.jpg`, ya presente en el repositorio, con el mismo recorte `3/4` que define el diseño. |
| El nombre del PDF del CV lleva acentos y espacios | Se copia a `public/cv-mario-sanchez.pdf`, sin acentos ni espacios, en el paso 1. |
| Las traducciones inglesas de `data-en` cubren el copy del diseño, que casi no se conserva | El paso 20 deja de ser una transcripción y pasa a ser una traducción completa al inglés del contenido real. Es el paso más largo del plan; presupuestarlo como tal. |
| El puesto en DevTalles cambia con el tiempo y el número publicado envejece | El dato vive en una sola clave de `lib/i18n.ts`. Se revisa contra la tarjeta de la plataforma antes de cada despliegue. |
| Publicar cifras de proyectos que no se puedan respaldar en una entrevista | Todas las métricas de la sección `proyectos` se contaron directamente sobre los repositorios: 11 microfrontends, 71 pantallas, 2 congresos, 8 catálogos editoriales. Se descartaron a propósito uptime, número de usuarios, volumen de pedidos y tamaño del catálogo, que no están documentados. |
| Publicar detalle de sistemas internos de Librerías Hidalgo podría exponer información de la empresa | Atlas se retiró por completo de la sección. La tarjeta del comercio electrónico describe arquitectura y tecnologías de un sitio ya público, nunca credenciales, endpoints, datos de clientes ni cifras de negocio. El nombre del ERP de terceros no aparece. |
| Las capturas envejecen cuando los sitios cambian de diseño | Viven en `public/projects/` con el nombre del dominio. Reemplazar el PNG basta; no hay que tocar código. |
| Publicar el teléfono expone el número a rastreadores de spam | Decisión explícita del usuario tras la advertencia. Se puede mitigar en otra spec ofuscándolo en el cliente. |
| El contenido del perfil se desactualiza y el portafolio queda estancado, como ocurrió con la versión Java / Spring Boot | El contenido queda inlineado en `lib/i18n.ts` y en los catálogos, todos en un único lugar por sección, para que actualizar sea editar un arreglo. |

## Lo que **no** entra en esta spec

- Tema claro y selector de tema.
- Blog con entradas reales en la sección `notas`.
- Envío de correo por backend o servicio de terceros.
- Capturas del interior de los sistemas tras inicio de sesión.
- Perfiles de Facebook e Instagram.
- WhatsApp con mensajes rápidos y el bloque de teléfono con horario de atención.
- Liderazgo scout, idiomas y detalle de la formación académica.
- El resto del material de la carpeta local de origen.
- Extraer los catálogos de certificados, proyectos y stack a archivos de datos.

Cada uno de esos, si llega, va en su propia spec.
