export interface ProjectLink {
  label: string;
  href: string;
  kind: "repo" | "demo" | "release";
}

export interface ProjectScreen {
  src: string;
  alt: string;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  eyebrow?: string;
  summary: string;
  stack: string[];
  role: string;
  image: string;
  screens?: ProjectScreen[];
  dotTone?: "dark" | "light";
  status: string;
  featured: boolean;
  links: ProjectLink[];
}

export interface ActionLink {
  label: string;
  href: string;
  kind: "projects" | "github" | "linkedin" | "cv" | "contact";
}

export interface KnowledgeArea {
  area: string;
  items: string[];
}

export interface EducationItem {
  name: string;
  institution: string;
  period: string;
  image: string;
  status?: string;
}

export interface CertificateItem {
  name: string;
  issuer?: string;
  year: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
  aboutText: string;
  mainStack: string[];
  knowledgeAreas: KnowledgeArea[];
  education: EducationItem[];
  certificates: CertificateItem[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    cvEs: string;
  };
  ctas: ActionLink[];
}
