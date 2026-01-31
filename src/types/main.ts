export interface ProjectLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface ProjectItem {
  id: number;
  label: string;
  description?: string;
  background?: string;
  images?: string[];
  link?: ProjectLink;
  childIds?: number[];
  name?: string;
}

export interface ProjectsData {
  projects: Record<number, ProjectItem>;
}