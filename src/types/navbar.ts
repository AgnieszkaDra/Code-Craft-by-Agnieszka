export type HamburgerProps = {
  navbarOpen: boolean;
  toggleNavbar: () => void;
}

export type NavigationLinkProps = {
  value: string;
  to: string;
  className?: string;
};

export interface MenuItem {
  id: number;
  title?: string;
  path?: string;
  name?: string;
  childIds?: number[];
}

export interface MenuData {
  menu: Record<number, MenuItem>;
}

export type MenuProps = {
  isOpen: boolean;
};