import React from 'react';

interface HeadProps {
  children?: React.ReactNode;
}

/**
 * Mock implementation of Docusaurus Head component for Storybook
 * In Storybook, we don't need to actually modify the document head,
 * so this is a no-op component
 */
const Head: React.FC<HeadProps> = ({ children }) => {
  // No-op for Storybook - we don't need to actually render head elements
  return null;
};

export default Head;
