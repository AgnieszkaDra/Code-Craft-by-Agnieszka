export type LinkId = 'github' | 'linkedin' | ;

export interface Link {
  id: SocialLinkId;
  href: string;
  label: string;
  className?: string;
}

<a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={className}
            >
              {icon}
            </a>

export const links: Link[] = [
  {
    id: 'github',
    href: 'https://github.com/AgnieszkaDra',
    label: 'GitHub',
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/agnieszka-draganczyk/',
    label: 'LinkedIn',
    className: 'is-linkedin',
  },
];