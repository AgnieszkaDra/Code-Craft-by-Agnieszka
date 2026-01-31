import type { JSX, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface BaseLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

const BaseLink = ({
  href,
  children,
  className,
  external = false,
  ariaLabel,
}: BaseLinkProps): JSX.Element => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={href}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </Link>
  );
};

export default BaseLink;