import { NavLink } from 'react-router-dom';
import type { NavigationLinkProps } from '../types/navbar';

export const NavigationLink = ({ value, to, className = '' }: NavigationLinkProps) => {
  return (
    <NavLink to={to} className={`link ${className}`}>
      {value}
    </NavLink>
  );
};

export default NavigationLink;