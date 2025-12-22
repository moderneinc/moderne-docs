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
 * Interactive story with full control over breadcrumb properties.
 * Use the controls panel to customize the breadcrumb path and toggle the home icon.
 */
export const Interactive: Story = {
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
 * All Variations - Comprehensive view of different breadcrumb configurations
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '24px', maxWidth: '800px' }}>
      {/* Path Lengths */}
      <div>
        <h2 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: 600 }}>
          Path Lengths
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Simple Path */}
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#666' }}>
              Simple Path (2-3 items)
            </h3>
            <NeoBreadcrumbs
              items={[
                { label: 'Documentation', href: '/docs' },
                { label: 'User Guide', href: '/docs/user-guide' },
                { label: 'Getting Started' },
              ]}
              showHomeIcon={true}
            />
          </div>

          {/* Long Path */}
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#666' }}>
              Long Path (Deep Hierarchy)
            </h3>
            <NeoBreadcrumbs
              items={[
                { label: 'Documentation', href: '/docs' },
                { label: 'Administrator Documentation', href: '/docs/admin' },
                { label: 'Moderne Platform', href: '/docs/admin/platform' },
                { label: 'Configuration', href: '/docs/admin/platform/config' },
                { label: 'Organizations', href: '/docs/admin/platform/config/orgs' },
                { label: 'Settings', href: '/docs/admin/platform/config/orgs/settings' },
                { label: 'Advanced Options' },
              ]}
              showHomeIcon={true}
            />
          </div>

          {/* Single Item */}
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#666' }}>
              Single Item (Minimal)
            </h3>
            <NeoBreadcrumbs
              items={[{ label: 'Introduction' }]}
              showHomeIcon={true}
            />
          </div>
        </div>
      </div>

      {/* Home Icon Variations */}
      <div>
        <h2 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: 600 }}>
          Home Icon Variations
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* With Home Icon */}
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#666' }}>
              With Home Icon
            </h3>
            <NeoBreadcrumbs
              items={[
                { label: 'User Documentation', href: '/user-docs' },
                { label: 'CLI', href: '/user-docs/cli' },
                { label: 'Commands' },
              ]}
              showHomeIcon={true}
            />
          </div>

          {/* Without Home Icon */}
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#666' }}>
              Without Home Icon
            </h3>
            <NeoBreadcrumbs
              items={[
                { label: 'User Documentation', href: '/user-docs' },
                { label: 'CLI', href: '/user-docs/cli' },
                { label: 'Commands' },
              ]}
              showHomeIcon={false}
            />
          </div>
        </div>
      </div>

      {/* Edge Cases */}
      <div>
        <h2 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: 600 }}>
          Edge Cases
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Long Labels */}
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#666' }}>
              Long Labels (Text Wrapping)
            </h3>
            <NeoBreadcrumbs
              items={[
                {
                  label: 'Advanced Program Analysis and Control Flow Documentation',
                  href: '/docs/advanced',
                },
                {
                  label: 'Comprehensive Guide to Data Flow and Taint Analysis Techniques',
                  href: '/docs/advanced/dataflow',
                },
                {
                  label: 'Implementation Examples and Best Practices',
                },
              ]}
              showHomeIcon={true}
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
