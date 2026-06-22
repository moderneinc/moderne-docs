/** Mock of @theme/TabItem for Storybook. */
import React, { type ReactNode } from 'react';

export default function TabItem({ children, label }: { children?: ReactNode; label?: string }): React.ReactElement {
  return (
    <div data-tab-label={label}>
      <div style={{ fontSize: 12, opacity: 0.6, marginBottom: 4 }}>{label}</div>
      {children}
    </div>
  );
}
