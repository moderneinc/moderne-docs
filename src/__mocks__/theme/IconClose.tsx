/**
 * Mock implementation of @theme/Icon/Close for Storybook.
 */
import React, { type ComponentProps } from 'react';

export default function IconClose(props: ComponentProps<'svg'>): React.ReactElement {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
