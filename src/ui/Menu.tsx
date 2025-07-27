import { Link } from 'react-router-dom';
import type { MenuItem } from '../types/navbar';
import data from '../data/data';
import type { Data } from '../types/data';
import type { JSX } from 'react';

type MenuItemProps = {
  id: number;
  menu: Data['menu'];
};

const MenuItemComponent = ({ id, menu }: MenuItemProps): JSX.Element | null => {
  const item = menu[id];

  if (!item) return null;

  return (
    <li className="menu__item text" role="none">
      <Link to={item.path ?? '#'} className="menu__link text" role="menuitem">
        {item.label}
      </Link>
    </li>
  );
};

const Menu = (): JSX.Element => {
  const menu: Data['menu'] = data.menu;
  const root: MenuItem | undefined = menu[0];

  const rootChildren = root?.childIds ?? [];

  return (
    <ul
      className="menu"
      role="menu"
      tabIndex={-1}
      aria-label="Main menu"
    >
      {rootChildren.map((id) => (
        <MenuItemComponent key={id} id={id} menu={menu} />
      ))}
    </ul>
  );
};

export default Menu;