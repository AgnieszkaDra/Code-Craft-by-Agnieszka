// import type { ProjectsData, ProjectItem } from '../types/main';
// import shopTsImage from '../assets/images/logo/logo-dziecko.jpg';
// import shopTsPart1 from '../assets/images/logo/logo-mama.jpg';
// import shopTsPart2 from '../assets/images/shop-ts-part2.jpeg';

// const projectList: Omit<ProjectItem, 'id'>[] = [
//   {
//     label: 'Shop TS',
//     background: shopTsImage,
//     images: [
//       shopTsImage,
//       shopTsPart1,
//       shopTsPart2,
//       shopTsPart1,
//       shopTsPart2,
//     ],
//     link: {
//       href: 'https://github.com/AgnieszkaDra/shop-TS',
//       label: 'Zobacz projekt',
//       external: true,
//     },
//     description:
//       'This project is an e-commerce web application built using TypeScript, json-server, and Vite. The application features a client-side interface for users to browse products, manage a shopping cart, and place orders.',
//   },
//   {
//     label: 'Hall Reservation',
//     background: shopTsPart1,
//     images: [shopTsImage],
//     link: {
//       href: 'https://github.com/AgnieszkaDra/Hall-Reservation',
//       label: 'Zobacz projekt',
//       external: true,
//     },
//     description:
//       'This project is a Hall Reservation System being developed in pure TypeScript, following Object-Oriented Programming (OOP) principles. The goal is to create a structured, maintainable, and scalable application for managing hall reservations efficiently.',
//   },
//   {
//     label: 'Hall Reservation',
//     background: shopTsPart1,
//     images: [shopTsImage],
//     link: {
//       href: 'https://github.com/AgnieszkaDra/Hall-Reservation',
//       label: 'Zobacz projekt',
//       external: true,
//     },
//     description:
//       'This project is a Hall Reservation System being developed in pure TypeScript, following Object-Oriented Programming (OOP) principles. The goal is to create a structured, maintainable, and scalable application for managing hall reservations efficiently.',
//   },
// ];

// const projects = projectList.reduce(
//   (acc, project, index) => {
//     const id = index + 1;

//     acc[id] = {
//       id,
//       ...project,
//     };

//     return acc;
//   },
//   {} as ProjectsData['projects']
// );

// projects[0] = {
//   id: 0,
//   name: '(Root)',
//   label: 'Projects',
//   childIds: Object.keys(projects)
//     .map(Number)
//     .filter((key) => key !== 0)
//     .sort((a, b) => a - b),
// };

// export default projects;

import type { ProjectsData } from '../types/main'

import shopTsImage from '../assets/images/logo/logo-dziecko.jpg'
import shopTsPart1 from '../assets/images/logo/logo-mama.jpg'
import shopTsPart2 from '../assets/images/shop-ts-part2.jpeg'

export const projects: ProjectsData = {
  order: ['shop-ts', 'hall-reservation'],

  projects: {
    'shop-ts': {
      id: 'shop-ts',
      label: 'Shop TS',
      background: shopTsImage,
      images: [
        shopTsImage,
        shopTsPart1,
        shopTsPart2,
      ],
      link: {
        href: 'https://github.com/AgnieszkaDra/shop-TS',
        label: 'View project',
        external: true,
      },
      description:
        'An e-commerce web application built with TypeScript, json-server, and Vite. Users can browse products, manage a cart, and place orders.',
      tags: ['TypeScript', 'E-commerce', 'Vite'],
    },

    'hall-reservation': {
      id: 'hall-reservation',
      label: 'Hall Reservation',
      background: shopTsPart1,
      images: [shopTsImage],
      link: {
        href: 'https://github.com/AgnieszkaDra/Hall-Reservation',
        label: 'View project',
        external: true,
      },
      description:
        'A hall reservation system built in pure TypeScript using OOP principles, focused on scalability and maintainability.',
      tags: ['TypeScript', 'OOP'],
    },
  },
}

export default projects