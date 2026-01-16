import React from 'react';

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  noFooter?: boolean;
  wrapperClassName?: string;
}

/**
 * Mock implementation of Docusaurus Layout component for Storybook
 * Provides a simple wrapper that renders children without full Docusaurus layout
 */
const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  // In a real Storybook environment, we could optionally show title/description
  // but for now we'll just render the children
  return <>{children}</>;
};

export default Layout;
