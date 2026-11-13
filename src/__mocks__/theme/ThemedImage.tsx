import React from 'react';

/** Storybook stand-in for Docusaurus's ThemedImage: renders the light source. */
export default function ThemedImage({
  sources,
  alt,
  ...props
}: {
  sources: { light: string; dark: string };
  alt?: string;
  [key: string]: any;
}): JSX.Element {
  return <img src={sources.light} alt={alt} {...props} />;
}
