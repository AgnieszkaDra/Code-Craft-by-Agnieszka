import type { MenuData, MenuItem } from '../types/navbar'

const items: Record<number, MenuItem> = {
  1: { id: 1, label: 'Strona główna', path: 'Strona-glowna' },
  2: { id: 2, label: 'O mnie', path: 'O-mnie' },
  3: { id: 3, label: 'Projekty', path: 'Projekty' },
  4: { id: 4, label: 'Kontakt', path: 'Kontakt' },
}

const root: MenuItem = {
  id: 0,
  name: '(Root)',
  label: 'Menu',
  childIds: Object.keys(items).map(Number),
}

export const menu: MenuData = {
  menu: { ...items }, 
  menuItem: root,
}

export default menu