import type { Profile } from "../types/portfolio";
import { asset } from "../utils/assets";

export const profile: Profile = {
  name: "Nelson Jhon Gil Pari",
  title: "Desarrollador de software orientado a sistemas internos y datos",
  subtitle:
    "Construyo aplicaciones web y herramientas locales para ordenar información, automatizar tareas administrativas y apoyar operaciones con interfaces claras y bases de datos relacionales.",
  summary:
    "Soy estudiante de décimo ciclo de Ingeniería de Software, con enfoque en <strong>aplicaciones web</strong>, <strong>bases de datos</strong>, <strong>interfaces administrativas</strong> y herramientas orientadas a operaciones reales.",
  aboutText:
    "Me interesa construir software cerca del problema: entender el flujo operativo, ordenar requerimientos, modelar información y validar reglas de negocio antes de desarrollar.",
  mainStack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
  knowledgeAreas: [
    {
      area: "Frontend",
      items: ["HTML", "CSS3", "Tailwind CSS", "Figma"]
    },
    {
      area: "Cloud y despliegue",
      items: ["Supabase", "Vercel", "Render"]
    },
    {
      area: "Herramientas",
      items: ["Git", "GitHub", "Jira", "Confluence", "Office"]
    },
    {
      area: "Bases de datos",
      items: ["MySQL", "SQLite", "SQL Server"]
    },
    {
      area: "Lenguajes y frameworks",
      items: ["JavaScript", "Python", "Java", "Electron"]
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
      "Proyectos que demuestran mi capacidad para convertir procesos reales en sistemas web, herramientas administrativas y aplicaciones orientadas a datos.",
    knowledgeTitle: "Habilidades y tecnologías",
    knowledgeCopy:
      "Tecnologías y capacidades que aplico para construir aplicaciones web, trabajar con bases de datos y ordenar procesos administrativos reales.",
    aboutTitle: "Sobre mí",
    contactTitle: "Contacto",
    contactCopy:
      "Disponible para prácticas preprofesionales y oportunidades junior en desarrollo web, bases de datos y sistemas administrativos.",
    educationCopy:
      "Base universitaria en Ingeniería de Software y formación complementaria enfocada en JavaScript y PostgreSQL."
  },
  aboutCallout:
    "Actualmente busco <strong>prácticas preprofesionales</strong> u oportunidades junior donde pueda aportar en <strong>desarrollo web</strong>, <strong>lógica de negocio</strong>, <strong>modelado de datos</strong> y soporte a procesos administrativos.",
  contactEmailLabel: "Escríbeme por correo",
  contactCvLabel: "Descargar CV",
  contactCtaHeading: "Disponible para prácticas y oportunidades junior",
  contactCtaText:
    "Escríbeme para conversar sobre cómo puedo aportar a tu equipo.",
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
