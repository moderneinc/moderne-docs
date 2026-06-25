import React from 'react';
export default function TabItem({ children, label }: { children?: React.ReactNode; label?: string }) {
  return <div data-testid="tabitem" data-label={label}>{children}</div>;
}
