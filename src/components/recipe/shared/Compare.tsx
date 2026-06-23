/** Story-only helper: render the PR #776 prototype version and the production version side by side. */
import React, { type ReactNode } from 'react';
import styles from './styles.module.css';

/**
 * Storybook decorator: wrap every recipe story in the `.recipe` scope so the page-level Docusaurus
 * customizations (Neo segmented `<Tabs>`, table-chrome resets) apply — matching the real docs site.
 */
export const RecipeScope = (Story: React.ComponentType) => (
  <div className={styles.recipe}>
    <Story />
  </div>
);

const labelStyle: React.CSSProperties = {
  font: '600 12px/1.4 system-ui',
  textTransform: 'uppercase',
  letterSpacing: '.05em',
  opacity: 0.55,
  marginBottom: 8,
};

export const Compare = ({ prototype, production }: { prototype: ReactNode; production: ReactNode }) => (
  <div style={{ padding: 24 }}>
    <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 0', minWidth: 380 }}>
        <div style={labelStyle}>Prototype (PR #776)</div>
        {prototype}
      </div>
      <div style={{ flex: '1 1 0', minWidth: 380 }}>
        <div style={labelStyle}>Production (current)</div>
        {production}
      </div>
    </div>
  </div>
);
