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
    prefix: "Diseño",
    cycling: ["sistemas", "productos", "experiencias"],
    middle: "con",
    suffix: "propósito",
  },

  /* ─── About ─── */
  bioParagraphs: [
    "Hola 👋, soy Fran Drago. Product & Design System Designer con base en Buenos Aires.",
    "Construyo sistemas de diseño escalables y opero end-to-end con criterio, desde el primer wireframe hasta el handoff.",
    "Diseño para personas, entendiendo los objetivos del negocio.",
  ],

  /* ─── Experience ─── */
  experience: [
    {
      company: "Altatienda",
      role: "Product Designer & Design System Designer",
      period: "2024 – 2026",
      description:
        "Plataforma argentina de e-commerce. Founding member del equipo de producto, con rol dual: Design System Designer y Product Designer sobre flujos clave.",
      bullets: [
        "Construí el Design System desde cero, priorizando consistencia y velocidad de entrega, estableciendo estructuras de trabajo en Figma (versionado, naming y checklist ready-for-dev).",
        "Colaboré con desarrollo para garantizar fidelidad entre diseño e implementación en ciclos iterativos rápidos.",
        "Rediseñé el flujo de My Account end-to-end (UI, arquitectura de información y funcionalidades), resolviendo deuda visual y construyendo las bases para soportar nuevas features.",
        "Referente del equipo en buenas prácticas de Figma y diseño: layout, mobile-first, adopción de librerías y consistencia cross-platform.",
      ],
    },
    {
      company: "Extra Talle",
      role: "UX/UI Designer",
      period: "2023 – 2024",
      description:
        "Marca de ropa inclusiva de Mendoza.",
      bullets: [
        "Diseñé la landing page con foco en conversión e identidad de marca, integrando un enfoque humano — imágenes reales y wording transparente — alineado a los valores de la organización.",
        "Estructuré las librerías en Figma.",
        "Propuse marcos de trabajo que ordenaron el proceso de entrega del equipo.",
      ],
    },
    {
      company: "Casa Violeta",
      role: "UX/UI Designer",
      period: "2023",
      description:
        "Organización educativa de Quilmes.",
      bullets: [
        "Diseñé el sitio web institucional centralizando la oferta de cursos para facilitar el acceso a la información.",
        "Trabajé en un proceso colaborativo end-to-end junto a stakeholders, desde el relevamiento inicial hasta la entrega final.",
      ],
    },
    {
      company: "Foo Talent",
      role: "UX/UI Designer",
      period: "2023",
      description:
        "Plataforma de talento que conecta diseñadores con proyectos reales. Trabajo remoto en equipos multidisciplinarios.",
      bullets: [
        "Diseñé soluciones digitales end-to-end, desde entrevistas con personas y wireframes, hasta prototipos en high fidelity.",
        "Alineé decisiones de diseño a objetivos de negocio en colaboración con producto y desarrollo.",
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
    prefix: "I design",
    cycling: ["systems", "products", "experiences"],
    middle: "with",
    suffix: "purpose",
  },

  /* ─── About ─── */
  bioParagraphs: [
    "Hi 👋, I'm Fran Drago. Product & Design System Designer based in Buenos Aires.",
    "I build scalable design systems and operate end-to-end with intention, from the first wireframe to handoff.",
    "I design for people, understanding business goals.",
  ],

  /* ─── Experience ─── */
  experience: [
    {
      company: "Altatienda",
      role: "Product Designer & Design System Designer",
      period: "2024 – 2026",
      description:
        "Argentine e-commerce platform. Founding member of the product team, with a dual role: Design System Designer and Product Designer on key flows.",
      bullets: [
        "Built the Design System from scratch, prioritizing consistency and delivery speed, establishing Figma workflows (versioning, naming, and ready-for-dev checklist).",
        "Collaborated with development to ensure design-to-implementation fidelity across fast iterative cycles.",
        "Redesigned the My Account flow end-to-end (UI, information architecture, and features), resolving visual debt and laying the foundation for new features.",
        "Team reference for Figma and design best practices: layout, mobile-first, library adoption, and cross-platform consistency.",
      ],
    },
    {
      company: "Extra Talle",
      role: "UX/UI Designer",
      period: "2023 – 2024",
      description:
        "Inclusive clothing brand from Mendoza.",
      bullets: [
        "Designed the landing page focused on conversion and brand identity, integrating a human approach — real images and transparent copy — aligned with the organization's values.",
        "Structured the Figma libraries.",
        "Proposed frameworks that organized the team's delivery process.",
      ],
    },
    {
      company: "Casa Violeta",
      role: "UX/UI Designer",
      period: "2023",
      description:
        "Educational organization in Quilmes.",
      bullets: [
        "Designed the institutional website centralizing the course offering to make information more accessible.",
        "Led a collaborative end-to-end process with stakeholders, from initial discovery to final delivery.",
      ],
    },
    {
      company: "Foo Talent",
      role: "UX/UI Designer",
      period: "2023",
      description:
        "Talent platform connecting designers with real projects. Remote work in multidisciplinary teams.",
      bullets: [
        "Designed digital solutions end-to-end, from user interviews and wireframes to high-fidelity prototypes.",
        "Aligned design decisions to business objectives in collaboration with product and development.",
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
