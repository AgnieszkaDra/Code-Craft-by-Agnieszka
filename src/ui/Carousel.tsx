import { useState,type ReactElement } from 'react';
import { PaginatorBase } from './paginators/PaginatorBase';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactElement;
  paginator?: PaginatorBase;
  className?: string;
}

export function Carousel<T>({
  items,
  renderItem,
  paginator,
  className = '',
}: CarouselProps<T>): ReactElement {
  const [index, setIndex] = useState(0);
  const length = items.length;

  const goTo = (i: number) => setIndex(i);
  const next = () => setIndex((prev) => (prev + 1) % length);
  const prev = () => setIndex((prev) => (prev - 1 + length) % length);

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel__content">{renderItem(items[index], index)}</div>
      {paginator?.render({ 
        currentIndex: index, 
        length, 
        goTo, 
        next, 
        prev,
        className: `paginator ${className}`,
      })}
    </div>
  );
}