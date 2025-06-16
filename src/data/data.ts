
import type { Data } from '../types/data';

export const data: Data = {
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
  projects: {
    0: {
      id: 0,
      name: '(Root)',
      title: 'Menu',
      childIds: [1, 2],
    },
    1: {
      id: 1,
      title: 'Shop TS. Still in the developing process',
      url: 'https://github.com/AgnieszkaDra/shop-TS',
      description:
        'This project is an e-commerce web application built using TypeScript, json-server, and Vite. The application features a client-side interface for users to browse products, manage a shopping cart, and place orders. On the admin side, there’s an interface for managing orders and tracking their status.',
    },
    2: {
      id: 2,
      title: 'Hall Reservation. Still in the developing process',
      url: 'https://github.com/AgnieszkaDra/Hall-Reservation',
      description:
        'This project is a Hall Reservation System being developed in pure TypeScript, following Object-Oriented Programming (OOP) principles. The goal is to create a structured, maintainable, and scalable application for managing hall reservations efficiently',
    },
  },
};

export default data;








