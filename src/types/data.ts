import type { MenuData as NavbarData } from './navbar';
import type { ProjectsData as MainData} from './main';

export type Data = {
  menu: NavbarData['menu'];
  projects: MainData['projects'];
}