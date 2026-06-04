import type { Profile } from "../types/portfolio";
import { asset } from "../utils/assets";

export const profile: Profile = {
  name: "Nelson Jhon Gil Pari",
  title: "Desarrollador de Software",
  subtitle:
    "Construyo aplicaciones web, backend y herramientas de escritorio con React, Next.js, Node.js, PostgreSQL, Python y SQLite.",
  summary:
    "Estudiante de décimo ciclo de Ingeniería de Software con experiencia práctica en proyectos web y de escritorio. Me enfoco en desarrollo web, backend y bases de datos, especialmente en sistemas internos, ERP, herramientas locales y soluciones orientadas a procesos reales.",
  aboutText:
    "Me enfoco en desarrollo web, backend y bases de datos, especialmente en sistemas internos, ERP, herramientas locales y soluciones orientadas a procesos reales.",
  mainStack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Python"],
  knowledgeAreas: [
    {
      area: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      area: "Backend",
      items: ["Node.js", "Express", "REST APIs"]
    },
    {
      area: "Bases de datos",
      items: ["PostgreSQL", "SQL", "SQLite", "MySQL"]
    },
    {
      area: "Desktop / Local tools",
      items: ["Electron", "Python", "PySide6", "FFmpeg"]
    },
    {
      area: "Herramientas",
      items: ["Git", "GitHub", "Figma", "Supabase"]
    }
  ],
  education: [
    {
      name: "Ingeniería de Software",
      institution: "Universidad Tecnológica del Perú",
      period: "Mar 2021 - Presente",
      status: "Actual",
      image: asset("/logos/utp-logo.png")
    },
    {
      name: "JavaScript Moderno: Guía para dominar el lenguaje",
      institution: "Udemy",
      period: "2026",
      image: asset("/logos/udemy-logo.png")
    },
    {
      name: "SQL de cero: Tu guía práctica con PostgreSQL",
      institution: "Udemy",
      period: "2026",
      image: asset("/logos/udemy-logo.png")
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
  ]
};
