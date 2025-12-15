import type { MenuItem } from "../types/navbar";

const menuItems: Omit<MenuItem, 'id' | 'childIds'>[] = [
  { label: 'Strona główna', path: 'Strona-glowna' },
  { label: 'O mnie', path: 'O-mnie' },
  { label: 'Projekty', path: 'Projekty' },
  { label: 'Kontakt', path: 'Kontakt' },
];

const menu: Record<number, MenuItem> = menuItems.reduce((acc, item, index) => {
  acc[index + 1] = { id: index + 1, ...item };
  return acc;
}, {} as Record<number, MenuItem>);

menu[0] = {
  id: 0,
  name: '(Root)',
  label: 'Menu',
  childIds: Object.keys(menu)
    .map(Number)
    .filter((k) => k !== 0),
};
export default menu;