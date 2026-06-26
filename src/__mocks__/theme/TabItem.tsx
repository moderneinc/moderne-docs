/** Mock of @theme/TabItem for Storybook. The parent Tabs mock renders the tablist + active panel. */
import React, { type ReactNode } from 'react';

export default function TabItem({ children }: { children?: ReactNode; label?: string; value?: string }): React.ReactElement {
  return <div role="tabpanel">{children}</div>;
}
