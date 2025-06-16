import { useState, type JSX } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import type { MenuItem } from '../types/navbar';
import data from '../data/data';
import type { Data } from '../types/data';





type MenuItemProps = {
  id: number;
  menu: Data['menu']
};

const MenuItemComponent = ({ id, menu }: MenuItemProps): JSX.Element => {
  const item = menu[id];
  const hasChildren = Array.isArray(item.childIds) && item.childIds.length > 0;
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <li className="menu__item text p paragraph" onClick={toggle}>
      {item.path ? (
        <Link to={item.path} className="menu__link">
          {item.title}
        </Link>
      ) : (
        <span>{item.title}</span>
      )}
      {hasChildren && <FaChevronDown className="menu__item--chevron-down" />}
      {hasChildren && open && (
        <ul className="menu__submenu">
          {item.childIds!.map((childId) => (
            <MenuItemComponent key={childId} id={childId} menu={menu} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Menu = (): JSX.Element => {
  
  const menu: Data['menu'] = data.menu;
  const root: MenuItem = menu[0];
  const rootChildren = root.childIds || [];

  return (
    <nav>
      <ul className="menu">
        {rootChildren.map((id) => (
          <MenuItemComponent key={id} id={id} menu={menu} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;