import type { Profile } from "../types/portfolio";
import { asset } from "../utils/assets";

export const profile: Profile = {
  name: "Nelson Jhon Gil Pari",
  title: "Desarrollador de software orientado a datos y procesos reales",
  subtitle:
    "Construyo aplicaciones web y herramientas locales para ordenar información, automatizar tareas y apoyar flujos administrativos con interfaces claras y bases de datos.",
  summary:
    "Soy estudiante de décimo ciclo de Ingeniería de Software y me enfoco en construir soluciones para sistemas internos, backend, datos y herramientas administrativas.",
  aboutText:
    "Me interesa trabajar cerca del problema: entender el flujo operativo, ordenar requerimientos, modelar información, validar reglas de negocio y construir interfaces claras para usuarios reales.",
  mainStack: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "PostgreSQL"],
  knowledgeAreas: [
    {
      area: "Frontend",
      items: ["HTML", "CSS3", "Tailwind CSS", "Figma"]
    },
    {
      area: "Bases de datos",
      items: ["MySQL", "SQLite", "SQL Server"]
    },
    {
      area: "Cloud y despliegue",
      items: ["Supabase", "Vercel", "Render"]
    },
    {
      area: "Lenguajes y frameworks",
      items: ["Python", "Java", "Electron"]
    },
    {
      area: "Capacidades aplicadas",
      items: [
        "Modelado de datos",
        "Levantamiento de requerimientos",
        "Validación funcional",
        "Flujos administrativos",
        "Documentación funcional",
        "Prototipado Figma"
      ]
    },
    {
      area: "Herramientas",
      items: ["Git", "GitHub", "Jira", "Confluence", "Office"]
    },
    {
      area: "Idiomas",
      items: ["Español nativo", "Inglés técnico: lectura y comprensión"]
    }
  ],
  education: [
    {
      name: "Ingeniería de Software",
      institution: "Universidad Tecnológica del Perú",
      period: "Mar 2021 - Actualidad",
      kind: "degree",
      status: "10mo ciclo",
      image: asset("/logos/utp-logo.png"),
      imageDark: asset("/logos/utp-logo-dark.png")
    },
    {
      name: "JavaScript Moderno: Guía para dominar el lenguaje",
      institution: "Udemy",
      kind: "course",
      period: "2026",
      image: asset("/logos/udemy-logo.png"),
      imageDark: asset("/logos/udemy-logo-dark.png")
    },
    {
      name: "SQL de cero: Tu guía práctica con PostgreSQL",
      institution: "Udemy",
      kind: "course",
      period: "2026",
      image: asset("/logos/udemy-logo.png"),
      imageDark: asset("/logos/udemy-logo-dark.png")
    }
  ],
  certificates: [
    {
      name: "Tutor STEM - Algorítmica",
      issuer: "Tutor STEM",
      year: "2024",
      href: "https://drive.google.com/file/d/15hDMKLQQ29wtind4Yy9SVOZ6IVEp5HUp/view?usp=sharing"
    },
    {
      name: "Tutor STEM Matemática",
      issuer: "Tutor STEM",
      year: "2024",
      href: "https://drive.google.com/file/d/1kqTi7XURidQy9FW1G0nzWzj8ZpyW7xrV/view?usp=sharing"
    },
    {
      name: "Excel Intermedio",
      issuer: "Certificación",
      year: "2024",
      href: "https://drive.google.com/file/d/1o3Gwk13moCk36Q_pj1DN9VBGT7KTn4Vm/view?usp=sharing"
    },
    {
      name: "Soporte Técnico de Computadoras",
      issuer: "Certificación",
      year: "2024",
      href: "https://drive.google.com/file/d/1qFFBTxH0wQ46w7I2dkVd7piF7OOQBlju/view?usp=sharing"
    }
  ],
  contact: {
    email: "mailto:nelsonjhongp@gmail.com",
    github: "https://github.com/nelsonjhongp",
    linkedin: "https://www.linkedin.com/in/nelsonjhongp/",
    cvEs: "https://drive.google.com/file/d/1Q2oKaSmDKCyjcjZMRa8ympCTzgl6qxPr/view?usp=sharing"
  },
  ctas: [
    { label: "Ver proyectos", href: "#projects", kind: "projects" },
    { label: "GitHub", href: "https://github.com/nelsonjhongp", kind: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nelsonjhongp/", kind: "linkedin" }
  ],
  projectCtas: [
    {
      label: "Ver más proyectos",
      kind: "projects",
      pending: true,
      title: "Próximamente"
    },
    {
      label: "Más sobre mí",
      kind: "secondary",
      pending: true,
      title: "Próximamente"
    }
  ],
  sectionTexts: {
    projectsTitle: "Proyectos destacados",
    projectsCopy:
      "Proyectos que demuestran mi capacidad para convertir procesos reales en sistemas internos, herramientas administrativas y aplicaciones orientadas a datos.",
    knowledgeTitle: "Habilidades y tecnologías",
    knowledgeCopy:
      "Tecnologías y capacidades que aplico para construir sistemas internos, trabajar con datos y ordenar procesos administrativos reales.",
    aboutTitle: "Sobre mí",
    contactTitle: "Contacto",
    contactCopy:
      "Disponible para prácticas y oportunidades junior en desarrollo backend/full-stack, sistemas internos y software orientado a procesos reales.",
    educationCopy:
      "Base universitaria en Ingeniería de Software y formación complementaria enfocada en JavaScript y PostgreSQL."
  },
  aboutCallout:
    "Actualmente busco prácticas profesionales o primeras oportunidades donde pueda aportar en lógica de negocio, bases de datos, interfaces administrativas y herramientas de soporte para operaciones reales.",
  contactEmailLabel: "Escríbeme por correo",
  contactCvLabel: "Descargar CV",
  contactCtaHeading: "Disponible para prácticas y oportunidades junior",
  contactCtaText:
    "Me interesa aportar en equipos que construyan producto, operación interna o software orientado a procesos reales.",
  workflowSteps: [
    {
      title: "Entiendo el proceso",
      description: "Levanto reglas, usuarios, datos y flujos antes de construir.",
      icon: asset("/icons/lucide--clipboard-list.svg")
    },
    {
      title: "Ordeno la solución",
      description: "Modelo entidades, pantallas y validaciones para que el sistema sea mantenible.",
      icon: asset("/icons/lucide--workflow.svg")
    },
    {
      title: "Construyo y valido",
      description: "Desarrollo interfaces y módulos revisando que el flujo funcione para usuarios reales.",
      icon: asset("/icons/lucide--list-check.svg")
    }
  ],
  educationLabels: {
    mainCareer: "Trayectoria principal",
    complementary: "Formación complementaria",
    certificates: "Certificados y constancias"
  }
};
