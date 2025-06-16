// import menuData from '../data/menuData';
// import NavigationLink from './NavigationLink';

// const Projects = () => {
//   const projects = menuData.menu;
//   const root = menu[0];
//   const menuIds = root.childIds;

//   return (
//     <ul className={`menu`}>
//       {menuIds?.map((id: number) => {
//         const menuItem = menu[id];
//         return (
//           <li key={id} className={`menu__item`}>
//             {menuItem.path && (
//               <NavigationLink
//                 to={menuItem.path || '#'}
//                 value={menuItem.title || 'Untitled'}
//                 className={'menu__link'}
//               />
//             )}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default Projects;