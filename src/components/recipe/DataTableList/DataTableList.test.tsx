import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DataTableList } from './DataTableList';

describe('DataTableList', () => {
  it('shows the mod study command that exports each table', () => {
    render(
      <DataTableList
        tables={[
          {
            name: 'org.openrewrite.java.dependencies.table.VulnerabilityReport',
            displayName: 'Vulnerability report',
            description: 'A vulnerability report.',
            columns: [{ name: 'CVE', description: 'The CVE number.' }],
          },
          {
            name: 'org.openrewrite.table.SourcesFileResults',
            displayName: 'Source files that had results',
            description: 'Source files that were modified by the recipe run.',
            columns: [],
          },
        ]}
      >
        <h2>Data tables</h2>
      </DataTableList>
    );

    const commands = Array.from(document.querySelectorAll('pre'), (pre) => pre.textContent);
    expect(commands).toEqual([
      'mod study . --last-recipe-run \\\n  --data-table org.openrewrite.java.dependencies.table.VulnerabilityReport',
      'mod study . --last-recipe-run \\\n  --data-table org.openrewrite.table.SourcesFileResults',
    ]);
    expect(screen.getByText('Vulnerability report')).toBeTruthy();
  });
});
