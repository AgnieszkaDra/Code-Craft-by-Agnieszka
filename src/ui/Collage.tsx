// import React from "react";

// type ImageItem = {
//   id?: string | number;
//   url: string;
//   alt?: string;
// };

// type CollageProps = {
//   items: string[];
//   className?: string;
// };

// const Collage: React.FC<CollageProps> = ({ items, className }) => {
//   if (!items || items.length === 0) return null;

//   return (
//     <div className={`collage ${className ?? ""}`}>
//       {items.map((item, index) => (
//         <div
//           key={item.id ?? index}
//           className="collage__item collage__item--left"
//         >
//           <img
//             src={item.url}
//             alt={item.alt ?? `Collage image ${index + 1}`}
//             className="collage__image"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Collage;