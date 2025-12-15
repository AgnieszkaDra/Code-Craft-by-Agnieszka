export interface ProjectItem {
  id?: number; 
  background?: string;
  images?: string[];
  label?: string;
  url?: string;
  description?: string;
  childIds?: number[];
  name?: string;
}

export interface ProjectsData {
  projects: Record<number, ProjectItem>;
}