import React from 'react';

export default function Heading({
  as: Component = 'h1',
  children,
  ...props
}: {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  [key: string]: any;
}): JSX.Element {
  return <Component {...props}>{children}</Component>;
}
