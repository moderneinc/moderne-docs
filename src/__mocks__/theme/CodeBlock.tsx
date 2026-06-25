/** Mock of @theme/CodeBlock for Storybook. */
import React, { type ReactNode } from 'react';

export default function CodeBlock({ children, language }: { children?: ReactNode; language?: string }): React.ReactElement {
  return (
    <pre data-language={language}>
      <code>{children}</code>
    </pre>
  );
}
