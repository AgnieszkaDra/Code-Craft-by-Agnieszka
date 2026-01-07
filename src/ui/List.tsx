import type { ReactNode } from 'react';

interface ListProps {
  items: ReactNode[];
  className?: string;
  label?: string;
}

const List = ({ items, className = '', label }: ListProps) => {
  return (
    <>
    
    <ul className={`list ${className}`}>
      {label && <p className="text text-label">{label}</p>}
      {items.map((item, index) => (
        <li key={index} className={`list__item ${className}`}>
          {item}
        </li>
      ))}
    </ul>
    </>
    
  );
};

export default List;