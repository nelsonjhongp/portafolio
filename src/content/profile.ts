import type { Profile } from "../types/portfolio";
import { asset } from "../utils/assets";

const introduction =
  "Soy bachiller en Ingeniería de Software. En mis proyectos propios desarrollo interfaces, APIs y bases de datos con React, Node.js y PostgreSQL. RIPNEL es mi proyecto principal: un ERP textil que integra inventario, ventas y caja.";
const firstOpportunity = "Busco mi primera oportunidad profesional en desarrollo de software";

export const profile: Profile = {
  name: "Nelson Jhon Gil Pari",
  title: "Desarrollador de software · enfoque full stack",
  subtitle: introduction,
  summary:
    "Soy bachiller en Ingeniería de Software y desarrollo proyectos propios para aplicar <strong>interfaces web</strong>, <strong>lógica de negocio</strong> y <strong>modelado de datos</strong>.",
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
      period: "",
      kind: "degree",
      status: "Bachiller",
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
  projectCtas: [{ label: "Más sobre mí", href: "#about", kind: "secondary" }],
  sectionTexts: {
    projectsTitle: "Proyectos destacados",
    projectsCopy:
      "Proyectos propios en los que aplico desarrollo web, bases de datos y diseño de interfaces para resolver problemas concretos.",
    knowledgeTitle: "Habilidades y tecnologías",
    knowledgeCopy:
      "Tecnologías y capacidades que aplico en mis proyectos para construir aplicaciones web, trabajar con bases de datos y desarrollar herramientas administrativas.",
    aboutTitle: "Sobre mí",
    contactTitle: "Contacto",
    contactCopy: `${firstOpportunity}.`,
    educationCopy:
      "Grado de bachiller en Ingeniería de Software y formación complementaria enfocada en JavaScript y PostgreSQL."
  },
  aboutCallout: `${firstOpportunity}.`,
  contactEmailLabel: "Escríbeme por correo",
  contactCvLabel: "Descargar CV",
  contactCtaHeading: firstOpportunity,
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
      description: "Desarrollo interfaces y módulos, y reviso sus recorridos y validaciones en mis proyectos.",
      icon: asset("/icons/lucide--list-check.svg")
    }
  ],
  educationLabels: {
    mainCareer: "Trayectoria principal",
    complementary: "Formación complementaria",
    certificates: "Certificados y constancias"
  }
};
