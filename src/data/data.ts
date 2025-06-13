import type { MenuData } from '../types/navbar';

export const data: MenuData = {
  menu: {
    0: {
      id: 0,
      name: '(Root)',
      title: 'Menu',
      childIds: [1, 2, 3, 4],
    },
    1: {
      id: 1,
      title: 'Strona główna',
      path: '/Strona glówna',
    },
    2: {
      id: 2,
      title: 'Projekty',
      path: '/Projekty',
    },
    3: {
      id: 3,
      title: 'O mnie',
      path: '/O mnie',
    },
    4: {
      id: 4,
      title: 'Kontakt',
      path: '/Kontakt',
    },
  },
};

export default data;






