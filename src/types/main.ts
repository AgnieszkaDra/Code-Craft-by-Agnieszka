export interface ProjectItem {
  id: number;
  title?: string;
  url?: string;
  description?: string;
  childIds?: number[];
  name?: string;
}

export interface ProjectsData {
  projects: Record<number, ProjectItem>;
}