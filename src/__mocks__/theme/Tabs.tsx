/** Mock of @theme/Tabs for Storybook. */
import React, { type ReactNode } from 'react';

export default function Tabs({ children }: { children?: ReactNode }): React.ReactElement {
  return <div className="tabs-mock">{children}</div>;
}
