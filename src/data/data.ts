import type { Data } from '../types/data';
import shopTsImage from '../assets/images/shop-ts.jpeg';
import shopTsPart1 from '../assets/images/shop-ts-part1.jpeg';
import shopTsPart2 from '../assets/images/shop-ts-part2.jpeg';

export const data: Data = {
  menu: {
    0: {
      id: 0,
      name: '(Root)',
      label: 'Menu',
      childIds: [1, 2, 3,4],
    },
    1: {
      id: 1,
      label: 'Strona główna',
      path: '/Strona-glowna',
    },
    2: {
      id: 2,
      label: 'O mnie',
      path: '/O-mnie',
    },
    3: {
      id: 3,
      label: 'Projekty',
      path: '/Projekty',
    },
    4: {
      id: 4,
      label: 'Kontakt',
      path: '/Kontakt',
    },
  },
  projects: {
    0: {
      id: 0,
      name: '(Root)',
      label: 'Menu',
      childIds: [1, 2],
    },
    1: {
      id: 1,
      background: shopTsImage,
      images: [shopTsImage, shopTsPart1, shopTsPart2],
      label: 'Shop TS',
      url: 'https://github.com/AgnieszkaDra/shop-TS',
      description: 'This project is an e-commerce web application built using TypeScript, json-server, and Vite. The application features a client-side interface for users to browse products, manage a shopping cart, and place orders.' 
    },
    2: {
      id: 2,
      label: 'Hall Reservation',
      url: 'https://github.com/AgnieszkaDra/Hall-Reservation',
      description: 'This project is a Hall Reservation System being developed in pure TypeScript, following Object-Oriented Programming (OOP) principles. The goal is to create a structured, maintainable, and scalable application for managing hall reservations efficiently',
    },
  },

};

export default data;








