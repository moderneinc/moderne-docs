import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string; children?: ReactNode };

/** Stands in for @docusaurus/Link, which needs the router and site context. */
export default function Link({ to, href, children, ...props }: Props) {
  return (
    <a href={to ?? href} {...props}>
      {children}
    </a>
  );
}
