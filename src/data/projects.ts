import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ripnel-platform",
    name: "RIPNEL Platform",
    summary:
      "ERP MVP web para inventario, ventas y transferencias internas, con enfoque modular y arquitectura pensada para uso operativo real.",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase"],
    role: "Participacion en frontend, integracion backend y estructura modular orientada a flujos operativos claros.",
    highlights: [
      "Separa frontend, backend y persistencia con una narrativa tecnica clara para entrevistas.",
      "Demuestra trabajo con procesos empresariales y flujos mas cercanos a producto."
    ],
    repoUrl: "https://github.com/nelsonjhongp/ripnel-platform",
    image: "projects/ripnel-platform-placeholder.svg",
    status: "Repositorio"
  },
  {
    id: "metrion",
    name: "Metrion",
    summary:
      "Aplicacion de escritorio para control operativo mensual con foco en persistencia local, claridad de flujo y uso practico continuo.",
    stack: ["Electron", "React", "TypeScript", "SQLite", "Zustand", "Zod"],
    role: "Diseno de flujo local, enfoque de producto de escritorio y experiencia de uso para tareas repetitivas.",
    highlights: [
      "Aporta diferenciacion real al mostrar trabajo desktop en un perfil junior.",
      "Prioriza velocidad de uso y almacenamiento local por encima de complejidad innecesaria."
    ],
    repoUrl: "https://github.com/nelsonjhongp",
    image: "projects/metrion-placeholder.svg",
    status: "Caso de estudio"
  },
  {
    id: "nejigiku-transcriber",
    name: "Nejigiku Transcriber",
    summary:
      "Herramienta local para Windows orientada a transcripcion por lotes con procesamiento offline y flujo centrado en productividad.",
    stack: ["Python", "PySide6", "FFmpeg", "faster-whisper", "CTranslate2"],
    role: "Diseno del flujo de transcripcion local, interfaz y procesamiento por lotes en entorno Windows.",
    highlights: [
      "Muestra un stack menos comun y mas tecnico que el de un portafolio web tradicional.",
      "Explica con claridad el valor del procesamiento local: privacidad, control y velocidad."
    ],
    repoUrl: "https://github.com/nelsonjhongp/njgk-transcriber",
    image: "projects/nejigiku-transcriber-placeholder.svg",
    status: "Repositorio"
  },
  {
    id: "progmentor-ai-tutor",
    name: "ProgMentor AI Tutor",
    summary:
      "Mockup frontend-first de plataforma educativa con IA para organizar aprendizaje, interfaz guiada y experiencia enfocada en producto.",
    stack: ["Next.js", "React", "TypeScript", "UI Design"],
    role: "Conceptualizacion de producto, composicion frontend y propuesta de experiencia educativa.",
    highlights: [
      "Se comunica como prototipo fuerte, no como full stack terminado.",
      "Sirve para mostrar criterio visual y estructura de producto desde frontend."
    ],
    repoUrl: "https://github.com/nelsonjhongp/progmentor-ai-tutor",
    image: "projects/progmentor-ai-tutor-placeholder.svg",
    status: "Repositorio"
  },
  {
    id: "nejigiku-tools",
    name: "Nejigiku Tools",
    summary:
      "Suite web de herramientas practicas para gestion e importacion/exportacion, pensada como producto pequeno pero funcional.",
    stack: ["HTML", "CSS", "JavaScript"],
    role: "Diseno de utilidades web practicas e implementacion ligera de flujos en navegador.",
    highlights: [
      "Aporta una demo publica que puede verse rapido desde GitHub Pages.",
      "Demuestra interes por herramientas utiles y software pequeno con valor inmediato."
    ],
    repoUrl: "https://github.com/nelsonjhongp/nejigiku-tools",
    demoUrl: "https://nelsonjhongp.github.io/nejigiku-tools/",
    image: "projects/nejigiku-tools-placeholder.svg",
    status: "Demo"
  }
];
