import projects from './projects'
import menu from './menu'
import type { MenuData } from '../types/navbar'
import type { ProjectsData } from '../types/main'

export interface Data {
  menu: MenuData
  projects: ProjectsData  
}

export const data: Data = {
  menu,
  projects,  
}

export default data
