import type { ReactNode } from 'react';

export interface PaginatorContext {
  className?: string;
  currentIndex: number;
  length: number;
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
}

export abstract class PaginatorBase {
  abstract render(context: PaginatorContext): ReactNode;
}