import React from 'react';
import type { Decorator } from '@storybook/react';

export const CatalogStoryLayout: Decorator = (Story, context) => (
  <div style={{ padding: 24, maxWidth: (context.parameters.maxWidth as number) ?? 1080, margin: '0 auto' }}>
    <Story />
  </div>
);
