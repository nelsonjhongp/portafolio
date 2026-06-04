import { asset } from "../utils/assets";

export type TechMeta = {
  iconImage?: string;
  shortLabel?: string;
  label: string;
};

export const techIconMap: Record<string, TechMeta> = {
  React: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    label: "React"
  },
  "Next.js": {
    iconImage: asset("/icons/nextjs-original.svg"),
    label: "Next.js"
  },
  TypeScript: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    label: "TypeScript"
  },
  JavaScript: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    label: "JavaScript"
  },
  "Tailwind CSS": {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    label: "Tailwind CSS"
  },
  "Node.js": {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    label: "Node.js"
  },
  Express: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    label: "Express"
  },
  "REST APIs": {
    iconImage: asset("/icons/rest-api-icon.svg"),
    label: "REST APIs"
  },
  PostgreSQL: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    label: "PostgreSQL"
  },
  SQL: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    label: "SQL"
  },
  SQLite: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    label: "SQLite"
  },
  MySQL: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    label: "MySQL"
  },
  Electron: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
    label: "Electron"
  },
  Python: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    label: "Python"
  },
  PySide6: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg",
    label: "PySide6"
  },
  FFmpeg: {
    iconImage: asset("/icons/ffmpeg-icon.svg"),
    label: "FFmpeg"
  },
  Git: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    label: "Git"
  },
  GitHub: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    label: "GitHub"
  },
  Figma: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    label: "Figma"
  },
  Supabase: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    label: "Supabase"
  },
  HTML: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    label: "HTML"
  },
  CSS: {
    iconImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    label: "CSS"
  },
  "UI Design": {
    shortLabel: "UI",
    label: "UI Design"
  }
};

export const getTechMeta = (item: string): TechMeta =>
  techIconMap[item] ?? { shortLabel: item.slice(0, 2), label: item };
