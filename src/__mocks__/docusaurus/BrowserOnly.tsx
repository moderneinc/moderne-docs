/**
 * Mock implementation of Docusaurus BrowserOnly for Storybook.
 * Storybook always runs in the browser, so we render the children directly.
 */
import React, { type ReactNode } from 'react';

export default function BrowserOnly({
  children,
  fallback,
}: {
  children?: () => ReactNode;
  fallback?: ReactNode;
}): ReactNode {
  if (typeof children === 'function') {
    return <>{children()}</>;
  }
  return <>{fallback ?? null}</>;
}
