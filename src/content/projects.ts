import type { Project } from "../types/portfolio";
import { asset } from "../utils/assets";

export const projects: Project[] = [
  {
    id: "ripnel-platform",
    name: "RIPNEL Platform",
    eyebrow: "Plataforma web",
    summary:
      "ERP MVP web para inventario, ventas, precios y transferencias internas entre sedes textiles, orientado a operación real y crecimiento modular.",
    problem:
      "Negocios con operaciones textiles necesitan controlar inventario, ventas, precios y transferencias internas entre sedes sin depender de procesos manuales dispersos.",
    solution:
      "Sistema web pensado para ordenar procesos administrativos, centralizar información operativa y crecer por módulos según las necesidades del negocio.",
    responsibilities: [
      "Levantamiento de requerimientos y prototipado funcional",
      "Modelado de datos y revisión de reglas operativas",
      "Desarrollo de módulos de inventario, ventas y transferencias",
      "Interfaces administrativas y validación funcional"
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Render", "Vercel"],
    cardStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    image: asset("/projects/ripnel-3-dashboard.png"),
    screens: [
      {
        src: asset("/projects/ripnel-3-dashboard.png"),
        alt: "Vista principal del dashboard de RIPNEL Platform.",
        label: "Dashboard"
      },
      {
        src: asset("/projects/ripnel-2-inicio.png"),
        alt: "Pantalla de inicio del ERP RIPNEL Platform.",
        label: "Inicio"
      },
      {
        src: asset("/projects/ripnel-4-venta.png"),
        alt: "Flujo de ventas dentro de RIPNEL Platform.",
        label: "Ventas"
      },
      {
        src: asset("/projects/ripnel-5-caja.png"),
        alt: "Módulo de caja de RIPNEL Platform.",
        label: "Caja"
      },
      {
        src: asset("/projects/ripnel-6-trasnferencia.png"),
        alt: "Vista de transferencias internas en RIPNEL Platform.",
        label: "Transferencias"
      },
      {
        src: asset("/projects/ripnel-1-login.png"),
        alt: "Pantalla de acceso al sistema RIPNEL Platform.",
        label: "Login"
      }
    ],
    dotTone: "dark",
    status: "MVP en desarrollo",
    featured: true,
    links: [
      { label: "Ver repositorio", href: "https://github.com/nelsonjhongp/ripnel-platform", kind: "repo" }
    ]
  },
  {
    id: "metrion",
    name: "Metrion",
    eyebrow: "Escritorio local",
    summary:
      "Aplicación de escritorio local para control mensual de compras, ventas, impuestos y cierres administrativos.",
    problem:
      "Pequeños flujos administrativos suelen depender de hojas sueltas y cierres manuales, lo que complica el control mensual de compras, ventas e impuestos.",
    solution:
      "Herramienta local con persistencia en SQLite, validación de formularios y enfoque en uso operativo sin depender de servicios en la nube.",
    responsibilities: [
      "Diseño de interfaz para registro y seguimiento mensual",
      "Persistencia local y estructura de datos operativa",
      "Validación de formularios y flujos administrativos",
      "Organización del producto para uso cotidiano"
    ],
    stack: ["Electron", "React", "TypeScript", "SQLite"],
    image: asset("/projects/metrion-3-dashboard.png"),
    screens: [
      {
        src: asset("/projects/metrion-1-inicio.png"),
        alt: "Pantalla de inicio de la aplicación Metrion.",
        label: "Inicio"
      },
      {
        src: asset("/projects/metrion-2-control-del-mes.png"),
        alt: "Vista de control del mes en Metrion.",
        label: "Control del mes"
      },
      {
        src: asset("/projects/metrion-3-dashboard.png"),
        alt: "Dashboard principal de Metrion.",
        label: "Dashboard"
      },
      {
        src: asset("/projects/metrion-4-compras.png"),
        alt: "Módulo de compras dentro de Metrion.",
        label: "Compras"
      },
      {
        src: asset("/projects/metrion-5-excel-operaciones.png"),
        alt: "Flujo de operaciones con Excel en Metrion.",
        label: "Excel operaciones"
      },
      {
        src: asset("/projects/metrion-6-gestion-organizacion.png"),
        alt: "Gestión de organización en Metrion.",
        label: "Gestión organización"
      }
    ],
    dotTone: "light",
    status: "Herramienta local",
    featured: true,
    links: [
      { label: "Ver repositorio", href: "https://github.com/nelsonjhongp", kind: "repo" },
      { label: "Ver releases", href: "https://github.com/nelsonjhongp/metrion-app/releases", kind: "release" }
    ]
  },
  {
    id: "nejigiku-transcriber",
    name: "Nejigiku Transcriber",
    eyebrow: "Escritorio local",
    summary:
      "Herramienta local para Windows enfocada en transcripción de audio y video mediante procesamiento local.",
    problem:
      "Transcribir audio y video localmente en Windows suele requerir herramientas separadas, configuraciones técnicas y flujos poco amigables para el usuario final.",
    solution:
      "Aplicación de escritorio con configuración persistente, estados visibles, guardado de resultados e integración con procesamiento multimedia local.",
    responsibilities: [
      "Interfaz de escritorio y flujo principal de uso",
      "Configuración persistente y manejo de estados",
      "Procesamiento por lotes y guardado de resultados",
      "Integración con procesamiento multimedia local"
    ],
    stack: ["Python"],
    image: asset("/projects/01-njgktranscriber-inicio.png"),
    screens: [
      {
        src: asset("/projects/01-njgktranscriber-inicio.png"),
        alt: "Pantalla de inicio de la aplicación Nejigiku Transcriber.",
        label: "Inicio"
      },
      {
        src: asset("/projects/02-njgktranscriber-transcribiendo.png"),
        alt: "Proceso de transcripción en curso dentro de Nejigiku Transcriber.",
        label: "Transcribiendo"
      },
      {
        src: asset("/projects/03-njgktranscriber-completado.png"),
        alt: "Estado completado de una transcripción en Nejigiku Transcriber.",
        label: "Completado"
      },
      {
        src: asset("/projects/04-njgktranscriber-resultados.png"),
        alt: "Vista de resultados generados por Nejigiku Transcriber.",
        label: "Resultados"
      },
      {
        src: asset("/projects/05-njgktranscriber-temas.png"),
        alt: "Pantalla de temas y apariencia en Nejigiku Transcriber.",
        label: "Temas"
      }
    ],
    dotTone: "light",
    status: "Herramienta local",
    featured: true,
    links: [
      { label: "Ver repositorio", href: "https://github.com/nelsonjhongp/njgk-transcriber", kind: "repo" }
    ]
  },
  {
    id: "progmentor-ai-tutor",
    name: "ProgMentor AI Tutor",
    summary:
      "Prototipo frontend-first de una experiencia educativa guiada con IA, centrado en estructura de producto e interfaz.",
    problem:
      "Explora cómo una plataforma educativa puede organizar contenido y guía de aprendizaje con una experiencia centrada en frontend.",
    solution:
      "Prototipo frontend-first de una plataforma educativa con IA para visualizar una experiencia guiada y estructura de producto.",
    responsibilities: ["Conceptualización de producto y composición frontend"],
    stack: ["Next.js", "React", "TypeScript", "UI Design"],
    image: asset("/projects/progmentor-ai-tutor.png"),
    status: "Prototipo frontend",
    featured: false,
    links: [
      { label: "Ver repositorio", href: "https://github.com/nelsonjhongp/progmentor-ai-tutor", kind: "repo" }
    ]
  },
  {
    id: "nejigiku-tools",
    name: "Nejigiku Tools",
    summary:
      "Suite web de utilidades ligeras para gestión e importación/exportación, pensada como software pequeño y práctico en navegador.",
    problem:
      "Flujos pequeños de gestión e importación/exportación suelen necesitar utilidades rápidas dentro del navegador.",
    solution:
      "Suite web de herramientas prácticas para gestión e importación/exportación, pensada como software pequeño pero útil.",
    responsibilities: ["Utilidades web ligeras para flujos pequeños en navegador"],
    stack: ["HTML", "CSS", "JavaScript"],
    image: asset("/projects/nejigiku-tools.png"),
    status: "Demo pública",
    featured: false,
    links: [
      { label: "Ver demo", href: "https://nelsonjhongp.github.io/nejigiku-tools/", kind: "demo" },
      { label: "Ver repositorio", href: "https://github.com/nelsonjhongp/nejigiku-tools", kind: "repo" }
    ]
  }
];
