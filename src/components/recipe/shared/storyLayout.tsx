import React from 'react';
import type { Decorator } from '@storybook/react';

/**
 * Story-only layout: centers the component with page-like padding. Width comes from the story's
 * `maxWidth` parameter (defaults to 860px) so each meta can size to its content.
 *
 * The `.recipe` page-scope is intentionally NOT applied here — components that need it (ExampleList,
 * OptionsTable, DataTableList, for Docusaurus tab/table chrome) self-apply it, so they render the
 * same in Storybook and on real docs pages.
 */
export const StoryLayout: Decorator = (Story, context) => (
  <div style={{ padding: 24, maxWidth: (context.parameters.maxWidth as number) ?? 860, margin: '0 auto' }}>
    <Story />
  </div>
);
