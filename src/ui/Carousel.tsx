// import { useState,type ReactElement } from 'react';
// import { PaginatorBase } from './paginators/PaginatorBase';

// interface CarouselProps<T> {
//   items: T[];
//   renderItem: (item: T, index: number) => ReactElement;
//   paginator?: PaginatorBase;
//   className?: string;
// }

// export function Carousel<T>({
//   items,
//   renderItem,
//   paginator,
//   className = '',
// }: CarouselProps<T>): ReactElement {
//   const [index, setIndex] = useState(0);
//   const length = items.length;

//   const goTo = (i: number) => setIndex(i);
//   const next = () => setIndex((prev) => (prev + 1) % length);
//   const prev = () => setIndex((prev) => (prev - 1 + length) % length);

//   return (
//     <div className={`carousel ${className}`}>
//       <div className="carousel__content">{renderItem(items[index], index)}</div>
//       {paginator?.render({ 
//         currentIndex: index, 
//         length, 
//         goTo, 
//         next, 
//         prev,
//         className: `paginator ${className}`,
//       })}
//     </div>
//   );
// }

// import { useState, type ReactElement } from 'react';
// import type { PaginatorContext } from './paginators/PaginatorBase';

// interface CarouselProps<T> {
//   items: T[];
//   renderItem: (
//     item: T,
//     index: number,
//     context: PaginatorContext
//   ) => ReactElement;
//   className?: string;
//   onChange?: (index: number) => void;
// }

// export function Carousel<T>({
//   items,
//   renderItem,
//   className = '',
 
// }: CarouselProps<T>): ReactElement {
//   const [index, setIndex] = useState(0);
//   const length = items.length;

//   const goTo = (i: number) => setIndex(i);
//   const next = () => setIndex((prev) => (prev + 1) % length);
//   const prev = () => setIndex((prev) => (prev - 1 + length) % length);

  

//   if (length === 0) {
//     return <div className={`carousel ${className}`} />;
//   }

//   const carouselContext: PaginatorContext = {
//     currentIndex: index,
//     length,
//     goTo,
//     next,
//     prev,
//     className: `paginator ${className}`,
//   };

//   return (
//     <div className={`carousel ${className}`}>
//       {renderItem(items[index], index, carouselContext)}
//     </div>
//   );
// }


import {
  useState,
  useCallback,
  useEffect,
  type ReactElement,
} from 'react';
import type { PaginatorContext } from './paginators/PaginatorBase';

interface CarouselProps<T> {
  items: T[];
  renderItem: (
    item: T,
    index: number,
    context: PaginatorContext
  ) => ReactElement;
  className?: string;
  onChange?: (index: number) => void;
}

export function Carousel<T>({
  items,
  renderItem,
  className = '',
  onChange,
}: CarouselProps<T>): ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = items.length;

  /* ----------------------------------------
   * Navigation helpers
   * ------------------------------------- */
  const goTo = useCallback(
    (index: number) => {
      if (length === 0) return;
      setCurrentIndex(Math.max(0, Math.min(index, length - 1)));
    },
    [length]
  );

  const next = useCallback(() => {
    if (length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % length);
  }, [length]);

  const prev = useCallback(() => {
    if (length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  }, [length]);

  /* ----------------------------------------
   * Notify parent
   * ------------------------------------- */
  useEffect(() => {
    onChange?.(currentIndex);
  }, [currentIndex, onChange]);

  /* ----------------------------------------
   * Reset index when items change
   * ------------------------------------- */
  useEffect(() => {
    if (currentIndex >= length) {
      setCurrentIndex(0);
    }
  }, [length, currentIndex]);

  if (length === 0) {
    return <div className={`carousel ${className}`} />;
  }

  const paginatorContext: PaginatorContext = {
    currentIndex,
    length,
    goTo,
    next,
    prev,
    className: `paginator ${className}`,
  };

  return (
    <div className={`carousel ${className}`}>
      {renderItem(
        items[currentIndex],
        currentIndex,
        paginatorContext
      )}
    </div>
  );
}