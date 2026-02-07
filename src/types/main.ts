// export interface ProjectLink {
//   href: string;
//   label: string;
//   external?: boolean;
// }

// export interface ProjectItem {
//   id: number;
//   label: string;
//   description?: string;
//   background?: string;
//   images?: string[];
//   link?: ProjectLink;
//   childIds?: number[];
//   name?: string;
// }

// export interface ProjectsData {
//   projects: Record<number, ProjectItem>;
// }

export type ProjectId = string

export interface ProjectLink {
  href: string
  label: string
  external?: boolean
}

export interface ProjectItem {
  id: ProjectId
  label: string
  description?: string
  background?: string
  images?: string[]
  link?: ProjectLink
  childIds?: ProjectId[]
  name?: string
  tags?: string[]
}

export interface ProjectsData {
  projects: Record<ProjectId, ProjectItem>
  order: ProjectId[]
}