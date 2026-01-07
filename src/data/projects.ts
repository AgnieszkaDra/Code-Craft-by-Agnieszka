import type { ProjectsData, ProjectItem } from '../types/main';
import shopTsImage from '../assets/images/shop-ts.jpeg';
import shopTsPart1 from '../assets/images/shop-ts-part1.jpeg';
import shopTsPart2 from '../assets/images/shop-ts-part2.jpeg';

const projectList: ProjectItem[] = [
  {
    label: 'Shop TS',
    background: shopTsImage,
    images: [shopTsImage, shopTsPart1, shopTsPart2, shopTsPart1, shopTsPart2],
    url: 'https://github.com/AgnieszkaDra/shop-TS',
    description:
      'This project is an e-commerce web application built using TypeScript, json-server, and Vite. The application features a client-side interface for users to browse products, manage a shopping cart, and place orders.',
  },
  {
    label: 'Hall Reservation',
    url: 'https://github.com/AgnieszkaDra/Hall-Reservation',
    images: [shopTsImage],
    description:
      'This project is a Hall Reservation System being developed in pure TypeScript, following Object-Oriented Programming (OOP) principles. The goal is to create a structured, maintainable, and scalable application for managing hall reservations efficiently.',
  },
];

export const projects: ProjectsData['projects'] = projectList.reduce((acc, project, index) => {
  acc[index + 1] = { id: index + 1, ...project };
  return acc;
}, {} as ProjectsData['projects']);


projects[0] = {
  id: 0,
  name: '(Root)',
  label: 'Projects',
  childIds: Object.keys(projects)
    .map(Number)
    .filter((k) => k !== 0)
    .sort((a, b) => a - b),
};

export default projects;