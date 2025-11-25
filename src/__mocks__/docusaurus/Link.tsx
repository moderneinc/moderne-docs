import React from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Mock implementation of Docusaurus Link component for Storybook
 */
const Link: React.FC<LinkProps> = ({ to, children, className, ...props }) => {
  return (
    <a href={to} className={className} {...props}>
      {children}
    </a>
  );
};

export default Link;
