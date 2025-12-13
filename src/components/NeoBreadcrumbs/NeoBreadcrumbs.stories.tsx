import type { Meta, StoryObj } from '@storybook/react';
import NeoBreadcrumbs from './NeoBreadcrumbs';

const meta: Meta<typeof NeoBreadcrumbs> = {
  title: 'Components/NeoBreadcrumbs',
  component: NeoBreadcrumbs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Breadcrumb navigation component with home icon and customizable path items. Supports light and dark modes with Neo Design system integration.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of breadcrumb items with label and optional href',
      control: 'object',
    },
    showHomeIcon: {
      description: 'Whether to show the home icon at the beginning of breadcrumbs',
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Simple breadcrumb path with 2-3 items showing basic navigation hierarchy.
 * The last item is always rendered as the current page (no link).
 */
export const SimplePath: Story = {
  args: {
    items: [
      { label: 'Documentation', href: '/docs' },
      { label: 'User Guide', href: '/docs/user-guide' },
      { label: 'Getting Started' },
    ],
    showHomeIcon: true,
  },
};

/**
 * Long breadcrumb path with many items to test overflow behavior and readability.
 * Demonstrates how the component handles deep navigation hierarchies.
 */
export const LongPath: Story = {
  args: {
    items: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Administrator Documentation', href: '/docs/admin' },
      { label: 'Moderne Platform', href: '/docs/admin/platform' },
      { label: 'Configuration', href: '/docs/admin/platform/config' },
      { label: 'Organizations', href: '/docs/admin/platform/config/orgs' },
      { label: 'Settings', href: '/docs/admin/platform/config/orgs/settings' },
      { label: 'Advanced Options' },
    ],
    showHomeIcon: true,
  },
};

/**
 * Breadcrumbs without the home icon, showing only the path items.
 * Useful for secondary navigation or when home icon is not needed.
 */
export const WithoutHomeIcon: Story = {
  args: {
    items: [
      { label: 'User Documentation', href: '/user-docs' },
      { label: 'CLI', href: '/user-docs/cli' },
      { label: 'Commands' },
    ],
    showHomeIcon: false,
  },
};

/**
 * Single breadcrumb item showing the simplest possible navigation.
 * Only displays home icon and current page.
 */
export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Introduction' },
    ],
    showHomeIcon: true,
  },
};

/**
 * Breadcrumbs with very long labels to test text wrapping and overflow.
 * Tests edge case of unusually long navigation labels.
 */
export const LongLabels: Story = {
  args: {
    items: [
      {
        label: 'Advanced Program Analysis and Control Flow Documentation',
        href: '/docs/advanced'
      },
      {
        label: 'Comprehensive Guide to Data Flow and Taint Analysis Techniques',
        href: '/docs/advanced/dataflow'
      },
      {
        label: 'Implementation Examples and Best Practices'
      },
    ],
    showHomeIcon: true,
  },
};
