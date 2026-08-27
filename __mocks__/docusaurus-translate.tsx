import type { ReactNode } from 'react';

/**
 * Stands in for @docusaurus/Translate. The site is English-only, so rendering
 * the default message is what the real component does anyway.
 */
export default function Translate({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

export function translate({ message }: { message: string }): string {
  return message;
}
