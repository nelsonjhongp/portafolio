import type { Project } from "../types/portfolio";
import { asset } from "../utils/assets";

export const projects: Project[] = [
  {
    id: "ripnel-platform",
    name: "RIPNEL Platform",
    eyebrow: "Plataforma web",
    summary:
      "ERP MVP comercial enfocado en inventario, ventas, precios y transferencias internas.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase"],
    role: "Frontend separado, backend con logica de negocio y PostgreSQL administrado en Supabase, pensado para crecer por modulos.",
    image: asset("/projects/ripnel-3-dashboard.png"),
    screens: [
      {
        src: asset("/projects/ripnel-1-login.png"),
        alt: "Pantalla de acceso al sistema RIPNEL Platform.",
        label: "Login"
      },
      {
        src: asset("/projects/ripnel-2-inicio.png"),
        alt: "Pantalla de inicio del ERP RIPNEL Platform.",
        label: "Inicio"
      },
      {
        src: asset("/projects/ripnel-3-dashboard.png"),
        alt: "Vista principal del dashboard de RIPNEL Platform.",
        label: "Dashboard"
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
      "Aplicación local de escritorio para el control mensual de compras, ventas, impuestos y cierres.",
    stack: ["Electron", "React", "TypeScript", "SQLite"],
    role: "Control operativo mensual con persistencia local, sin depender de la nube y con una base lista para evolucionar como producto usable.",
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
      "Aplicación de escritorio para Windows enfocada en transcripción local de audio y video con un flujo simple y usable.",
    stack: ["Python", "PySide6", "FFmpeg"],
    role: "Interfaz de escritorio, procesamiento local y configuración persistente, pensada para convertir archivos multimedia en texto sin depender de servicios externos.",
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
      "Prototipo frontend-first de plataforma educativa con IA para organizar aprendizaje y visualizar una experiencia guiada.",
    stack: ["Next.js", "React", "TypeScript", "UI Design"],
    role: "Conceptualización de producto y composición frontend.",
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
      "Suite web de herramientas prácticas para gestión e importación/exportación, pensada como software pequeño pero útil.",
    stack: ["HTML", "CSS", "JavaScript"],
    role: "Utilidades web ligeras para flujos pequeños en navegador.",
    image: asset("/projects/nejigiku-tools.png"),
    status: "Demo pública",
    featured: false,
    links: [
      { label: "Ver demo", href: "https://nelsonjhongp.github.io/nejigiku-tools/", kind: "demo" },
      { label: "Ver repositorio", href: "https://github.com/nelsonjhongp/nejigiku-tools", kind: "repo" }
    ]
  }
];
