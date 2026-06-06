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
  problem: string;
  solution: string;
  responsibilities: string[];
  stack: string[];
  cardStack?: string[];
  image: string;
  screens?: ProjectScreen[];
  dotTone?: "dark" | "light";
  status: string;
  featured: boolean;
  links: ProjectLink[];
}

export interface ActionLink {
  label: string;
  href?: string;
  kind: "projects" | "github" | "linkedin" | "cv" | "contact" | "secondary";
  pending?: boolean;
  title?: string;
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
  imageDark?: string;
  kind?: "degree" | "course";
  status?: string;
}

export interface CertificateItem {
  name: string;
  issuer?: string;
  year: string;
  href: string;
}

export interface SectionTexts {
  projectsTitle: string;
  projectsCopy: string;
  knowledgeTitle: string;
  knowledgeCopy: string;
  aboutTitle: string;
  contactTitle: string;
  contactCopy: string;
  educationCopy: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
  icon: string;
}

export interface EducationLabels {
  mainCareer: string;
  complementary: string;
  certificates: string;
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
  projectCtas: ActionLink[];
  sectionTexts: SectionTexts;
  aboutCallout: string;
  contactEmailLabel: string;
  contactCvLabel: string;
  contactCtaHeading: string;
  contactCtaText: string;
  workflowSteps: WorkflowStep[];
  educationLabels: EducationLabels;
}
