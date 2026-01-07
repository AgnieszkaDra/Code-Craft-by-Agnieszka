import { PaginatorBase, type PaginatorContext } from './PaginatorBase';

type DotSize = 'sm' | 'md' | 'lg';
type DotColor = 'turcoise' | 'navy' | 'coral';

const dotSizeMap: Record<DotSize, string> = {
  sm: 'dot--sm',
  md: 'dot--md',
  lg: 'dot--lg',
};

const dotColorMap: Record<DotColor, string> = {
  turcoise: 'dot--turcoise',
  navy: 'dot--navy',
  coral: 'dot--coral',
};

export class DotsPaginator extends PaginatorBase {
  private readonly dotSizeClass: string;
  private readonly dotColorClass: string;

  constructor(size: DotSize = 'md', color: DotColor = 'turcoise') {
    super();
    this.dotSizeClass = dotSizeMap[size];
    this.dotColorClass = dotColorMap[color];
  }

  render(context?: PaginatorContext) {
    if (!context) return null;

    const {
      className,
      currentIndex,
      length,
      goTo,
    } = context;

    if (length <= 1) return null;

    return (
      <div
        className={
          className
            ? `dots-paginator ${className}`
            : 'dots-paginator'
        }
      >
        {Array.from({ length }).map((_, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to item ${index + 1}`}
              className={[
                'dot',
                this.dotSizeClass,
                this.dotColorClass,
                isActive && 'dot--active',
              ]
                .filter(Boolean)
                .join(' ')}
            />
          );
        })}
      </div>
    );
  }
}