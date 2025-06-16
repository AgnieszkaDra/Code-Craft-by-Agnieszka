import type { MenuData } from './navbar';
import type { ProjectsData } from './main';

export type Data = {
  menu: MenuData['menu'];
  projects: ProjectsData['projects'];
};