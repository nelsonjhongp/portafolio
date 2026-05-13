export type ProjectStatus = "Demo" | "Repositorio" | "Caso de estudio";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  name: string;
  summary: string;
  stack: string[];
  role: string;
  highlights: string[];
  repoUrl: string;
  demoUrl?: string;
  image: string;
  status: ProjectStatus;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  label: string;
  context: string;
}

export interface TechnologyItem {
  name: string;
  iconClass?: string;
  iconImage?: string;
  label: string;
}

export interface EducationItem {
  name: string;
  institution: string;
  period: string;
  image: string;
}

export interface Profile {
  name: string;
  brand: string;
  title: string;
  subtitle: string;
  location: string;
  summary: string;
  coreStack: string[];
  alsoWorkedWith: string[];
  experience: ExperienceItem[];
  technologies: TechnologyItem[];
  education: EducationItem[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    cvEs: string;
    cvEn: string;
  };
  ctas: ContactLink[];
}
