import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { useStorageSlot } from '@docusaurus/theme-common';
import { useQueryStringValue } from '@docusaurus/theme-common/internal';

/**
 * A command split across lines with `\` on Linux/macOS, joined onto one line on Windows so it pastes
 * into PowerShell and cmd. Follows the reader's choice in the `cli-install-os` tabs.
 */
export default function ShellCommand({ lines }: { lines: string[] }) {
  const queryOs = useQueryStringValue('os');
  const [storedOs] = useStorageSlot('docusaurus.tab.cli-install-os');
  const windows = (queryOs ?? storedOs) === 'windows';
  return (
    <CodeBlock language="bash" className="wrap-code">
      {lines.join(windows ? ' ' : ' \\\n  ')}
    </CodeBlock>
  );
}
