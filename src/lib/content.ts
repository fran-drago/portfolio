/**
 * content.ts — Single source of truth for all portfolio content.
 * Two locales: es (primary) and en.
 * Consumed via useContent() hook — never import directly in components.
 */

const es = {
  locale: "es",

  /* ─── Identity ─── */
  name: "Francisco Lencina Drago",
  role: "Product Designer · Design System Designer",
  location: "Buenos Aires, Argentina",
  availability: "Disponible para proyectos",

  /* ─── Section labels ─── */
  sections: {
    about:      "Sobre mí",
    experience: "Experiencia",
    projects:   "Proyectos",
    education:  "Educación",
    tools:      "Tools",
    languages:  "Idiomas",
    contact:    "CONECTEMOS",
    comingSoon: "Próximamente",
  },

  /* ─── Hero ─── */
  heroStatement: {
    lines: ["Hola 👋, soy", "Francisco Drago y"],
    cycling: [
      "Construyo sistemas que escalan",
      "Diseño productos con impacto",
    ],
  },

  /* ─── About ─── */
  bio: "Hola 👋, soy Fran Drago. Diseño productos que conectan con personas y negocio, y construyo los sistemas que los sostienen. Product & Design System Designer de Buenos Aires. Opero end-to-end: discovery, prototipado, testing y handoff.",

  /* ─── Experience ─── */
  experience: [
    {
      company: "Altatienda",
      role: "Product & Design System Designer",
      period: "2024 – 2026",
      description:
        "Plataforma argentina de e-commerce. Founding member del equipo de producto. Lideré la creación del Design System desde cero, desempeñándome también como Product Designer sobre flujos clave.",
      bullets: [
        "Construí el design system desde cero con foco en escalabilidad, iterándolo y manteniéndolo para reducir decisiones y aumentar la velocidad del equipo.",
        "Definí la estructura de trabajo del equipo UX en Figma: carpetas, versionado, ready-for-dev checklist y naming. Un flujo de entrega claro y replicable.",
        "Colaboré con desarrollo para asegurar consistencia entre diseño e implementación.",
        "Rediseñé el flujo de My Account de punta a punta (UI, arquitectura y funcionalidades), resolviendo el dolor visual y construyendo una base sólida para nuevas funcionalidades.",
        "Referente del equipo UX en buenas prácticas de uso de Figma: autolayout, mobile-first, adopción de variables y consistencia del diseño.",
      ],
    },
    {
      company: "Extra Talle",
      role: "UX/UI Designer",
      period: "2023 – 2024",
      description:
        "Diseño de landing page para una marca de ropa inclusiva de Mendoza con foco en conversión e identidad.",
      bullets: [
        "Diseñé una landing orientada a conversión con enfoque humano: imágenes reales y wording transparente sobre los talles.",
        "Propuse marcos de trabajo y organicé las librerías, aportando estructura al proceso.",
      ],
    },
    {
      company: "Casa Violeta",
      role: "UX/UI Designer",
      period: "2023",
      description:
        "Diseño de sitio web educativo para una organización en Quilmes.",
      bullets: [
        "Diseñé un sitio que centraliza la oferta de cursos, facilitando el acceso a la información.",
        "Proceso colaborativo con stakeholders desde el relevamiento hasta la entrega.",
      ],
    },
  ],

  /* ─── Education ─── */
  education: {
    institution: "Coderhouse",
    programs: [
      { name: "Desarrollo Web", year: "2024", badge: "TOP 10" },
      { name: "UX Research", year: "2023", badge: "TOP 10" },
      { name: "UX Writing", year: "2023", badge: "TOP 10" },
      { name: "Diseño UX/UI Avanzado", year: "2023", badge: "TOP 10" },
      { name: "Diseño UX/UI", year: "2022", badge: "TOP 10" },
    ],
  },

  /* ─── Tools ─── */
  tools: [
    {
      category: "Diseño",
      items: ["Figma", "Pencil", "Paper", "Affinity", "Adobe Illustrator", "Adobe Photoshop"],
    },
    {
      category: "AI",
      items: ["Claude", "ChatGPT", "Gemini", "Stitch", "NotebookLM"],
    },
    {
      category: "Desarrollo",
      items: ["Antigravity", "Storybook", "HTML", "CSS"],
    },
    {
      category: "Gestión",
      items: ["Notion", "Slack", "ClickUp"],
    },
  ],

  /* ─── Languages ─── */
  languages: [
    { language: "Inglés", level: "Profesional" },
    { language: "Español", level: "Nativo" },
  ],

  /* ─── Contact ─── */
  contact: {
    channels: [
      {
        icon: "Mail01Icon",
        label: "Email",
        href: "mailto:franciscolencinadrago@gmail.com",
        domain: "",
        username: "franciscolencinadrago@gmail.com",
      },
      {
        icon: "Linkedin01Icon",
        label: "LinkedIn",
        href: "https://linkedin.com/in/fran-drago",
        domain: "linkedin.com/in/",
        username: "fran-drago",
      },
      {
        icon: "Behance01Icon",
        label: "Behance",
        href: "https://behance.net/frandrago",
        domain: "behance.net/",
        username: "frandrago",
      },
    ],
    closingStatement: ["¿Tenés una idea?", "Hablemos"],
    cv: { label: "CV", href: "#" },
    downloadCv: "Descargar CV",
  },

  /* ─── Nav / Menu ─── */
  nav: {
    mail: {
      copy: "Copiar mail",
      copied: "¡Copiado!",
    },
    scrollToTop: "Volver arriba",
    menu: {
      open: "Abrir menú",
      close: "Cerrar menú",
      language: {
        label: "Idioma",
        description: "Cómo ver el contenido",
      },
      theme: {
        label: "Tema",
        description: "Tono de la interfaz",
        options: {
          system: "Sistema",
          light: "Claro",
          dark: "Oscuro",
        },
      },
    },
  },

  /* ─── Not Found ─── */
  notFound: {
    code: "404",
    title: "Token perdido",
    description: "Este componente no está en el sistema. La página que buscás fue removida, renombrada o nunca existió.",
    backHome: "Volver al inicio",
  },

  /* ─── Error ─── */
  error: {
    code: "Error",
    title: "Algo se rompió",
    description: "El sistema encontró un componente inesperado. No es tu problema, es nuestro bug.",
    tryAgain: "Intentar de nuevo",
    backHome: "Volver al inicio",
  },

  /* ─── Footer ─── */
  footer: {
    tagline: "Hecho con ❤️ por",
  },
};

const en: typeof es = {
  locale: "en",

  /* ─── Identity ─── */
  name: "Francisco Lencina Drago",
  role: "Product Designer · Design System Designer",
  location: "Buenos Aires, Argentina",
  availability: "Available for projects",

  /* ─── Section labels ─── */
  sections: {
    about:      "About me",
    experience: "Experience",
    projects:   "Projects",
    education:  "Education",
    tools:      "Tools",
    languages:  "Languages",
    contact:    "LET'S CONNECT",
    comingSoon: "Coming soon",
  },

  /* ─── Hero ─── */
  heroStatement: {
    lines: ["Hi 👋, I'm", "Francisco Drago and"],
    cycling: [
      "I build systems that scale",
      "I design products with impact",
    ],
  },

  /* ─── About ─── */
  bio: "Hi 👋, I'm Fran Drago. I design products that connect people with business goals, and build the systems that sustain them. Product & Design System Designer based in Buenos Aires. Operating end-to-end: discovery, prototyping, testing and handoff.",

  /* ─── Experience ─── */
  experience: [
    {
      company: "Altatienda",
      role: "Product & Design System Designer",
      period: "2024 – 2026",
      description:
        "Argentine e-commerce platform. Founding member of the product team. Led the creation of the Design System from scratch, also acting as Product Designer on key flows.",
      bullets: [
        "Built the design system from scratch with a focus on scalability, iterating and maintaining it to reduce decisions and increase team velocity.",
        "Defined the UX team's workflow in Figma: folder structure, versioning, ready-for-dev checklist and naming. A clear, replicable delivery process.",
        "Collaborated with development to ensure consistency between design and implementation.",
        "Redesigned the My Account flow end-to-end (UI, architecture and features), resolving visual pain points and building a solid foundation for new functionality.",
        "UX team reference for Figma best practices: auto layout, mobile-first, variable adoption and design consistency.",
      ],
    },
    {
      company: "Extra Talle",
      role: "UX/UI Designer",
      period: "2023 – 2024",
      description:
        "Landing page design for an inclusive clothing brand from Mendoza focused on conversion and identity.",
      bullets: [
        "Designed a conversion-oriented landing with a human approach: real images and transparent copy about sizing.",
        "Proposed frameworks and organized libraries, adding structure to the process.",
      ],
    },
    {
      company: "Casa Violeta",
      role: "UX/UI Designer",
      period: "2023",
      description:
        "Educational website design for an organization in Quilmes.",
      bullets: [
        "Designed a site that centralizes the course offering, making information more accessible.",
        "Collaborative process with stakeholders from discovery to delivery.",
      ],
    },
  ],

  /* ─── Education ─── */
  education: {
    institution: "Coderhouse",
    programs: [
      { name: "Web Development", year: "2024", badge: "TOP 10" },
      { name: "UX Research", year: "2023", badge: "TOP 10" },
      { name: "UX Writing", year: "2023", badge: "TOP 10" },
      { name: "Advanced UX/UI Design", year: "2023", badge: "TOP 10" },
      { name: "UX/UI Design", year: "2022", badge: "TOP 10" },
    ],
  },

  /* ─── Tools ─── */
  tools: [
    {
      category: "Design",
      items: ["Figma", "Pencil", "Paper", "Affinity", "Adobe Illustrator", "Adobe Photoshop"],
    },
    {
      category: "AI",
      items: ["Claude", "ChatGPT", "Gemini", "Stitch", "NotebookLM"],
    },
    {
      category: "Development",
      items: ["Antigravity", "Storybook", "HTML", "CSS"],
    },
    {
      category: "Management",
      items: ["Notion", "Slack", "ClickUp"],
    },
  ],

  /* ─── Languages ─── */
  languages: [
    { language: "English", level: "Professional" },
    { language: "Spanish", level: "Native" },
  ],

  /* ─── Contact ─── */
  contact: {
    channels: [
      {
        icon: "Mail01Icon",
        label: "Email",
        href: "mailto:franciscolencinadrago@gmail.com",
        domain: "",
        username: "franciscolencinadrago@gmail.com",
      },
      {
        icon: "Linkedin01Icon",
        label: "LinkedIn",
        href: "https://linkedin.com/in/fran-drago",
        domain: "linkedin.com/in/",
        username: "fran-drago",
      },
      {
        icon: "Behance01Icon",
        label: "Behance",
        href: "https://behance.net/frandrago",
        domain: "behance.net/",
        username: "frandrago",
      },
    ],
    closingStatement: ["Got an idea?", "Let's talk"],
    cv: { label: "CV", href: "#" },
    downloadCv: "Download CV",
  },

  /* ─── Nav / Menu ─── */
  nav: {
    mail: {
      copy: "Copy email",
      copied: "Copied!",
    },
    scrollToTop: "Scroll to top",
    menu: {
      open: "Open menu",
      close: "Close menu",
      language: {
        label: "Language",
        description: "How to view content",
      },
      theme: {
        label: "Theme",
        description: "Interface tone",
        options: {
          system: "System",
          light: "Light",
          dark: "Dark",
        },
      },
    },
  },

  /* ─── Not Found ─── */
  notFound: {
    code: "404",
    title: "Lost token",
    description: "This component isn't in the system. The page you're looking for was removed, renamed, or never existed.",
    backHome: "Go back home",
  },

  /* ─── Error ─── */
  error: {
    code: "Error",
    title: "Something broke",
    description: "The system encountered an unexpected component. Not your fault, our bug.",
    tryAgain: "Try again",
    backHome: "Go back home",
  },

  /* ─── Footer ─── */
  footer: {
    tagline: "Made with ❤️ by",
  },
};

export const contentMap = { es, en } as const;
export type Locale = keyof typeof contentMap;
export type Content = typeof es;
