// import type { Data } from '../types/data';
// import menu from './menu';
// import projects from './projects';

// export const data: Data = {
//   menu,
//   projects,
// };

// export default data;

// import type { ProjectsData } from './projects'
// import type { MenuData } from './menu' // or whatever your menu type is

// export interface Data {
//   menu: MenuData
//   projects: ProjectsData
// }



// import projects from './projects'
// import menu from './menu'
// import type { MenuData } from '../types/navbar'
// import type { ProjectsData } from '../types/main'

// export interface Data {
//   menu: MenuData
//   projects: ProjectsData
// }

// export const data: Data = {
//   menu,
//   projects,
// }

// export default data


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
