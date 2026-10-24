import type { Project } from "../types/portfolio";
import { asset } from "../utils/assets";
import { ripnelProject } from "./ripnel";

export const projects: Project[] = [
  ripnelProject,
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
    image: asset("/projects/metrion-3-dashboard.webp"),
    screens: [
      {
        src: asset("/projects/metrion-1-inicio.webp"),
        alt: "Pantalla de inicio de la aplicación Metrion.",
        label: "Inicio"
      },
      {
        src: asset("/projects/metrion-2-control-del-mes.webp"),
        alt: "Vista de control del mes en Metrion.",
        label: "Control del mes"
      },
      {
        src: asset("/projects/metrion-3-dashboard.webp"),
        alt: "Dashboard principal de Metrion.",
        label: "Dashboard"
      },
      {
        src: asset("/projects/metrion-4-compras.webp"),
        alt: "Módulo de compras dentro de Metrion.",
        label: "Compras"
      },
      {
        src: asset("/projects/metrion-5-excel-operaciones.webp"),
        alt: "Flujo de operaciones con Excel en Metrion.",
        label: "Excel operaciones"
      },
      {
        src: asset("/projects/metrion-6-gestion-organizacion.webp"),
        alt: "Gestión de organización en Metrion.",
        label: "Gestión organización"
      }
    ],
    dotTone: "light",
    status: "Herramienta local",
    featured: true,
    links: [
      { label: "Ver repositorio", href: "https://github.com/nelsonjhongp/metrion-app", kind: "repo" },
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
    stack: ["Python", "PySide6", "FFmpeg"],
    cardStack: ["Python", "PySide6"],
    image: asset("/projects/01-njgktranscriber-inicio.webp"),
    screens: [
      {
        src: asset("/projects/01-njgktranscriber-inicio.webp"),
        alt: "Pantalla de inicio de la aplicación Nejigiku Transcriber.",
        label: "Inicio"
      },
      {
        src: asset("/projects/02-njgktranscriber-transcribiendo.webp"),
        alt: "Proceso de transcripción en curso dentro de Nejigiku Transcriber.",
        label: "Transcribiendo"
      },
      {
        src: asset("/projects/03-njgktranscriber-completado.webp"),
        alt: "Estado completado de una transcripción en Nejigiku Transcriber.",
        label: "Completado"
      },
      {
        src: asset("/projects/04-njgktranscriber-resultados.webp"),
        alt: "Vista de resultados generados por Nejigiku Transcriber.",
        label: "Resultados"
      },
      {
        src: asset("/projects/05-njgktranscriber-temas.webp"),
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
    image: asset("/projects/progmentor-ai-tutor.webp"),
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
    image: asset("/projects/nejigiku-tools.webp"),
    status: "Demo pública",
    featured: false,
    links: [
      { label: "Ver demo", href: "https://nelsonjhongp.github.io/nejigiku-tools/", kind: "demo" },
      { label: "Ver repositorio", href: "https://github.com/nelsonjhongp/nejigiku-tools", kind: "repo" }
    ]
  }
];
