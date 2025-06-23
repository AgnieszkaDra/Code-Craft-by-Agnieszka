import { useState, type ReactNode, type ReactElement} from 'react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
}

export function Carousel<T>({ items, renderItem, className=''}: CarouselProps<T>): ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (items.length === 0) return <p>No items to display.</p>;

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel__content">
        {renderItem(items[currentIndex], currentIndex)}
      </div>
      <div className="carousel__controls">
        <button onClick={prev} aria-label="Previous item">Previous</button>
        <span>{currentIndex + 1} / {items.length}</span>
        <button onClick={next} aria-label="Next item">Next</button>
      </div>
    </div>
  );
}

export default Carousel;