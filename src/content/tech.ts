import { asset } from "../utils/assets";

export type TechMeta = {
  iconImage?: string;
  iconImageDark?: string;
  shortLabel?: string;
  label: string;
  variant?: "main" | "knowledge" | "project" | "hero" | "language";
  accent?: string;
  themeAwareIcon?: boolean;
};

export const techIconMap: Record<string, TechMeta> = {
  React: {
    iconImage: asset("/icons/tech/React_dark.svg"),
    iconImageDark: asset("/icons/tech/React_light.svg"),
    label: "React"
  },
  "Next.js": {
    iconImage: asset("/icons/tech/nextjs-original.svg"),
    label: "Next.js"
  },
  TypeScript: {
    iconImage: asset("/icons/tech/typescript-original.svg"),
    label: "TypeScript"
  },
  JavaScript: {
    iconImage: asset("/icons/tech/javascript-original.svg"),
    label: "JavaScript"
  },
  "Tailwind CSS": {
    iconImage: asset("/icons/tech/tailwindcss-original.svg"),
    label: "Tailwind CSS"
  },
  "Node.js": {
    iconImage: asset("/icons/tech/nodejs-original.svg"),
    label: "Node.js"
  },
  Astro: {
    iconImage: asset("/icons/tech/Astro_dark.svg"),
    iconImageDark: asset("/icons/tech/Astro_light.svg"),
    label: "Astro"
  },
  PostgreSQL: {
    iconImage: asset("/icons/tech/postgresql-original.svg"),
    label: "PostgreSQL"
  },
  SQL: {
    iconImage: asset("/icons/tech/azuresqldatabase-original.svg"),
    label: "SQL"
  },
  "SQL Server": {
    iconImage: asset("/icons/tech/sql-server.svg"),
    label: "SQL Server"
  },
  SQLite: {
    iconImage: asset("/icons/tech/sqlite-original.svg"),
    label: "SQLite"
  },
  MySQL: {
    iconImage: asset("/icons/tech/mysql-original-wordmark.svg"),
    label: "MySQL"
  },
  "Modelado SQL": {
    iconImage: asset("/icons/lucide--database.svg"),
    label: "Modelado SQL",
    themeAwareIcon: true
  },
  Electron: {
    iconImage: asset("/icons/tech/electron-original.svg"),
    label: "Electron"
  },
  Python: {
    iconImage: asset("/icons/tech/python-original.svg"),
    label: "Python"
  },
  PySide6: {
    iconImage: asset("/icons/tech/python-plain.svg"),
    shortLabel: "QT6",
    label: "PySide6"
  },
  FFmpeg: {
    iconImage: asset("/icons/tech/ffmpeg-icon.svg"),
    label: "FFmpeg"
  },
  Java: {
    iconImage: asset("/icons/tech/java-original.svg"),
    label: "Java"
  },
  Vercel: {
    iconImage: asset("/icons/tech/vercel-original.svg"),
    label: "Vercel"
  },
  Render: {
    iconImage: asset("/icons/tech/Render_dark.svg"),
    iconImageDark: asset("/icons/tech/Render_light.svg"),
    label: "Render"
  },
  Git: {
    iconImage: asset("/icons/tech/git-original.svg"),
    label: "Git"
  },
  GitHub: {
    iconImage: asset("/icons/tech/github-original.svg"),
    label: "GitHub",
    themeAwareIcon: true
  },
  Figma: {
    iconImage: asset("/icons/tech/figma-original.svg"),
    label: "Figma"
  },
  "Prototipado Figma": {
    iconImage: asset("/icons/tech/solar--figma-linear.svg"),
    shortLabel: "FIG",
    label: "Prototipado Figma",
    themeAwareIcon: true
  },
  Supabase: {
    iconImage: asset("/icons/tech/supabase-original.svg"),
    label: "Supabase"
  },
  HTML: {
    iconImage: asset("/icons/tech/html5-original.svg"),
    label: "HTML"
  },
  CSS3: {
    iconImage: asset("/icons/tech/css3-original.svg"),
    label: "CSS3"
  },
  Jira: {
    iconImage: asset("/icons/tech/jira-original.svg"),
    label: "Jira"
  },
  Confluence: {
    iconImage: asset("/icons/tech/confluence-original.svg"),
    label: "Confluence"
  },
  Office: {
    iconImage: asset("/icons/microsoft-office.svg"),
    label: "Office"
  },
  "UI Design": {
    shortLabel: "UI",
    label: "UI Design"
  },
  "Modelado de datos": {
    iconImage: asset("/icons/lucide--database.svg"),
    shortLabel: "DB",
    label: "Modelado de datos",
    themeAwareIcon: true
  },
  "Levantamiento de requerimientos": {
    iconImage: asset("/icons/lucide--clipboard-list.svg"),
    shortLabel: "REQ",
    label: "Levantamiento de requerimientos",
    themeAwareIcon: true
  },
  "Validación funcional": {
    iconImage: asset("/icons/lucide--list-check.svg"),
    shortLabel: "QA",
    label: "Validación funcional",
    themeAwareIcon: true
  },
  "Flujos administrativos": {
    iconImage: asset("/icons/lucide--workflow.svg"),
    shortLabel: "OPS",
    label: "Flujos administrativos",
    themeAwareIcon: true
  },
  "Documentación funcional": {
    iconImage: asset("/icons/lucide--file-text.svg"),
    shortLabel: "DOC",
    label: "Documentación funcional",
    themeAwareIcon: true
  },
  "Español nativo": {
    shortLabel: "ES",
    label: "Español nativo",
    variant: "language",
    accent: "#dc2626"
  },
  "Inglés técnico: lectura y comprensión": {
    shortLabel: "EN",
    label: "Inglés técnico: lectura y comprensión",
    variant: "language",
    accent: "#2563eb"
  }
};

export const getTechMeta = (item: string): TechMeta =>
  techIconMap[item] ?? { shortLabel: item.slice(0, 2), label: item };
