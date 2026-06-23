import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RecipeScope } from '../shared/Compare';
import { RecipeHeader } from './RecipeHeader';
import { PrototypeHeader } from './RecipeHeader.prototype';
import { SAMPLE } from './RecipeHeader.fixtures';

/**
 * Side-by-side comparison of the production `RecipeHeader` against a faithful copy of the
 * design-preview (PR #776) header (see `RecipeHeader.prototype.tsx`).
 */

/** Production header fed the same sample data. */
const ProductionHeader: React.FunctionComponent<{ moderneOnly?: boolean }> = ({ moderneOnly }) => (
  <RecipeHeader
    displayName={SAMPLE.displayName}
    description={SAMPLE.description}
    type={SAMPLE.type}
    languages={SAMPLE.languages}
    tags={SAMPLE.tags}
    license={SAMPLE.license}
    fqName={SAMPLE.fqName}
    artifact={SAMPLE.artifact}
    appLink={SAMPLE.appLink}
    markdownUrl={SAMPLE.markdownUrl}
    moderneOnly={moderneOnly}
  />
);

const Panel: React.FunctionComponent<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div style={{ flex: '1 1 0', minWidth: 360 }}>
    <div style={{ font: '600 13px/1.4 system-ui', textTransform: 'uppercase', letterSpacing: '.04em', opacity: 0.6, marginBottom: 8 }}>
      {label}
    </div>
    {children}
  </div>
);

const meta: Meta<typeof RecipeHeader> = {
  title: 'Recipe/RecipeHeader',
  component: RecipeHeader,
  parameters: { layout: 'fullscreen' },
  decorators: [RecipeScope],
};
export default meta;

type Story = StoryObj<typeof RecipeHeader>;

/** The production header on its own. */
export const Production: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 820 }}>
      <ProductionHeader />
    </div>
  ),
};

/** Production header for a Moderne-only (proprietary) recipe — shows the access badge + info popover. */
export const ProductionModerneOnly: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 820 }}>
      <ProductionHeader moderneOnly />
    </div>
  ),
};

/** Prototype (PR #776) header vs the production header, side by side, on the same data. */
export const Comparison: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <Panel label="Prototype (PR #776 target)">
          <PrototypeHeader />
        </Panel>
        <Panel label="Production (current)">
          <ProductionHeader />
        </Panel>
      </div>
    </div>
  ),
};
