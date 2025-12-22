import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import NeoMegaMenu from './index';

/**
 * NeoMegaMenu - Dropdown navigation menu
 *
 * A comprehensive mega menu component that displays:
 * - Product documentation links with icons and descriptions (left column)
 * - Learning resources and external links (right column)
 * - Footer with quick links to Moderne website, app, and OpenRewrite docs
 *
 * Features:
 * - Click-outside-to-close behavior
 * - Keyboard navigation (Escape to close)
 * - Responsive layout (two columns on desktop, single column on mobile)
 * - Dark mode support
 *
 * Data is derived from:
 * - Products: sidebars.ts (categories with customProps.megaMenu: true)
 * - Learning items: config/megaMenuData.ts
 * - Footer links: config/megaMenuData.ts
 */
const meta: Meta<typeof NeoMegaMenu> = {
  title: 'Components/NeoMegaMenu',
  component: NeoMegaMenu,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A comprehensive mega menu component for navigation with product docs, learning resources, and quick links.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Full Menu with Popover Context
 *
 * Shows the complete mega menu as it appears in the application,
 * with the overlay backdrop and dropshadow visible.
 * The menu is positioned absolutely to demonstrate the popover behavior.
 */
export const FullMenuWithPopover: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Menu closed'),
  },
  render: (args) => (
    <div style={{ position: 'relative', minHeight: '700px', padding: '20px' }}>
      <div style={{ marginBottom: '16px', color: 'var(--ifm-color-emphasis-600)' }}>
        <p style={{ margin: 0, fontSize: '14px' }}>
          Full menu with overlay backdrop and dropshadow (as seen in the application)
        </p>
      </div>
      <div style={{ position: 'relative' }}>
        <NeoMegaMenu {...args} />
      </div>
    </div>
  ),
};
