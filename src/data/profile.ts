import type { Profile } from "../types";

export const profile: Profile = {
  name: "Nelson Jhon Gil Pari",
  brand: "Nejigiku",
  title: "Desarrollador de Software",
  subtitle:
    "Construyendo aplicaciones web y de escritorio con TypeScript, React, Next.js, Node.js, PostgreSQL, Python y SQLite.",
  location: "Lima, Peru",
  summary:
    "Estudiante de decimo ciclo de Ingenieria de Software con experiencia preprofesional en ERP y proyectos orientados a producto, tooling local y experiencia de usuario.",
  coreStack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Python"],
  alsoWorkedWith: ["SQLite", "Electron", "Supabase", "Tailwind CSS", "Figma", "Java", "MySQL"],
  experience: [
    {
      label: "Experiencia preprofesional en ERP RIPNEL",
      context: "Participacion real en un entorno ERP orientado a procesos operativos."
    },
    {
      label: "Proyectos orientados a producto",
      context: "Aplicaciones web y de escritorio pensadas como software util, no solo como ejercicios."
    },
    {
      label: "Tooling local y experiencia de uso",
      context: "Interes por interfaces claras, automatizacion y software que se siente usable."
    }
  ],
  technologies: [
    { name: "TypeScript", iconClass: "devicon-typescript-plain", label: "TypeScript" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain", label: "JavaScript" },
    { name: "React", iconClass: "devicon-react-original", label: "React" },
    { name: "Next.js", iconImage: "icons/nextjs-original.svg", label: "Next.js" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain", label: "Node.js" },
    { name: "PostgreSQL", iconClass: "devicon-postgresql-plain", label: "PostgreSQL" },
    { name: "Python", iconClass: "devicon-python-plain", label: "Python" },
    { name: "Electron", iconClass: "devicon-electron-original", label: "Electron" },
    { name: "Git", iconClass: "devicon-git-plain", label: "Git" },
    { name: "Figma", iconClass: "devicon-figma-plain", label: "Figma" },
    { name: "Java", iconClass: "devicon-java-plain", label: "Java" },
    { name: "MySQL", iconClass: "devicon-mysql-plain", label: "MySQL" }
  ],
  education: [
    {
      name: "Ingenieria de Software",
      institution: "Universidad Tecnologica del Peru",
      period: "En curso",
      image: "logos/Utplogonuevo.svg.png"
    },
    {
      name: "Master Completo en Java de cero a experto 2023",
      institution: "Udemy",
      period: "En curso",
      image: "logos/Udemy_logo.svg.png"
    },
    {
      name: "Spring Framework 6 y Spring Boot 3 desde cero a experto",
      institution: "Udemy",
      period: "En curso",
      image: "logos/Udemy_logo.svg.png"
    }
  ],
  contact: {
    email: "mailto:nelsonjhongp@gmail.com",
    github: "https://github.com/nelsonjhongp",
    linkedin: "https://www.linkedin.com/in/nelsonjhongp/",
    cvEs: "docs/Nelson_Jhon_Gil_Pari_CV_ES.pdf",
    cvEn: "docs/Nelson_Jhon_Gil_Pari_CV_EN.pdf"
  },
  ctas: [
    { label: "Ver proyectos", href: "#projects" },
    { label: "GitHub", href: "https://github.com/nelsonjhongp" }
  ]
};
