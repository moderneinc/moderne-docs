import React from 'react';

export function translate({ message }: { message: string; id?: string; description?: string }): string {
  return message;
}

export function Translate({ children }: { children: React.ReactNode }): JSX.Element {
  return <>{children}</>;
}
