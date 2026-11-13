import React from 'react';

interface ThemedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  sources: { light: string; dark: string };
}

/**
 * Mock implementation of Docusaurus ThemedImage for Storybook.
 * Renders the light source only; Storybook has no Docusaurus color mode.
 */
const ThemedImage: React.FC<ThemedImageProps> = ({ sources, alt = '', ...props }) => {
  return <img src={sources.light} alt={alt} {...props} />;
};

export default ThemedImage;
