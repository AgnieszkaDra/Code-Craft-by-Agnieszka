// import type { ReactNode } from 'react';

// interface ListProps {
//   items: ReactNode[];
//   className?: string;
//   label?: string;
// }

// const List = ({ items, className = '', label }: ListProps) => {
//   return (
//     <>
//     {label && <p className={`text text-label ${className}-label`}>{label}</p>}
//     <ul className={`list ${className}`}>
//       {items.map((item, index) => (
//         <li key={index} className={`list__item ${className}`}>
//           {item}
//         </li>
//       ))}
//     </ul>
//     </>
    
//   );
// };

// export default List;

import type { ReactNode } from 'react';

interface ListProps {
  items: ReactNode[];
  block: string;        // 👈 nazwa bloku BEM
  label?: string;
}

const List = ({ items, block, label }: ListProps) => {
  return (
    <section className={block}>
      {label && (
        <p className={`${block}__label text text-label`}>
          {label}
        </p>
      )}

      <ul className={`${block}__list`}>
        {items.map((item, index) => (
          <li key={index} className={`${block}__item text`}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default List;