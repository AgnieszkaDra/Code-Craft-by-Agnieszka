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