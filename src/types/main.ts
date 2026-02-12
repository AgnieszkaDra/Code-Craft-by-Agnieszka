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
  projectsList: Record<ProjectId, ProjectItem>
  order: ProjectId[]
}