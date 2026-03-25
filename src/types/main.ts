export type ProjectId = string

export interface ProjectLink {
  href: string
  label: string
  external?: boolean
}

export interface FeatureItem {
  title: string
  description?: string
}

export interface FeaturesSection {
  title: string
  features: FeatureItem[]
}

export interface ClientAdminFeatures {
  title: string
  features: FeatureItem[]
}

export interface TechnicalDetails {
  title: string
  features: FeatureItem[]
}

export interface ValidationAndTypes {
  title: string
  features: FeatureItem[]
}

export interface ProjectDetails {
  title: string
  introduction?: string
  features: {
    title: string
    client: ClientAdminFeatures
    admin: ClientAdminFeatures
    technicalDetails: TechnicalDetails
    validationAndTypes: ValidationAndTypes
    technologies?: string[]
  }
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
  details?: ProjectDetails
}

export interface ProjectsData {
  projectsList: Record<ProjectId, ProjectItem>
  order: ProjectId[]
}