import type { Data } from '../types/data';
import menuData from '../data/menu';
import type { JSX } from 'react';

type MenuItemProps = {
  id: number;
  menu: Data['menu'];
};

const MenuItemComponent = ({ id, menu }: MenuItemProps): JSX.Element | null => {
  const item = menu[id];
  if (!item) return null;

  const handleClick = () => {
    if (!item.path) return;

    const target = document.getElementById(item.path);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <li className="menu__item text" role="none">
      <button
        type="button"
        className="menu__link text"
        role="menuitem"
        onClick={handleClick}
      >
        {item.label}
      </button>
    </li>
  );
};

const Menu = (): JSX.Element => {
  const menu: Data['menu'] = menuData.menu;
  const root = menuData.menuItem;               
  const rootChildren = root.childIds ?? []; 

  return (
    <ul className="menu" role="menu" tabIndex={-1} aria-label="Main menu">
      {rootChildren.map((id) => (
        <MenuItemComponent key={id} id={id} menu={menu} />
      ))}
    </ul>
  );
};

export default Menu;