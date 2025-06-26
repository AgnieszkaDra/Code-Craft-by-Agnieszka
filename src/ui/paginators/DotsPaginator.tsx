import { PaginatorBase, type PaginatorContext } from "./PaginatorBase";

type DotSize = 'sm' | 'md' | 'lg';

const dotSizeMap: Record<DotSize, string> = {
  sm: 'dot--sm',
  md: 'dot--md',
  lg: 'dot--lg',
};

type DotColor = 'turcoise' | 'navy' | 'coral';

const dotColorMap: Record<DotColor, string> = {
  turcoise: 'dot--turcoise',
  navy: 'dot--navy',
  coral: 'dot--coral',
};

export class DotsPaginator extends PaginatorBase {
  private dotSizeClass: string;
  private dotColorClass: string;

  constructor(size: DotSize = 'md', color: DotColor = 'turcoise') {
    super();
    this.dotSizeClass = dotSizeMap[size];
    this.dotColorClass = dotColorMap[color];
  }

  render({ className, currentIndex, length, goTo }: PaginatorContext) {
    return (
      <div className={className ? `dots-paginator ${className}` : 'dots-paginator'}>
        {Array.from({ length }).map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to item ${index + 1}`}
            className={`dot ${this.dotSizeClass} ${this.dotColorClass} ${index === currentIndex ? 'dot--active' : ''}`}
          />
        ))}
      </div>
    );
  }
}