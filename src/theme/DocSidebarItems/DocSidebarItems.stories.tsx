import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import type { PropSidebarItem } from '@docusaurus/plugin-content-docs';

/**
 * Simplified Sidebar Item Component for Storybook
 *
 * This is a visual representation of sidebar items without Docusaurus dependencies.
 * The actual DocSidebarItems component uses complex filtering logic with hooks.
 */
function SimplifiedSidebarItem({
  item,
  level = 0,
}: {
  item: PropSidebarItem;
  level?: number;
}) {
  const indent = level * 16;

  if (item.type === 'category') {
    return (
      <li style={{ listStyle: 'none' }}>
        <div
          style={{
            paddingLeft: `${indent}px`,
            padding: '8px 16px',
            fontWeight: 600,
            fontSize: '14px',
            color: 'var(--ifm-heading-color)',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          ▼ {item.label}
        </div>
        {item.items && (
          <ul style={{ margin: 0, padding: 0 }}>
            {item.items.map((childItem, i) => (
              <SimplifiedSidebarItem key={i} item={childItem} level={level + 1} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  if (item.type === 'link') {
    return (
      <li style={{ listStyle: 'none' }}>
        <a
          href={item.href}
          style={{
            display: 'block',
            paddingLeft: `${indent}px`,
            padding: '6px 16px',
            fontSize: '14px',
            color: 'var(--ifm-menu-color)',
            textDecoration: 'none',
            transition: 'background-color 0.2s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--ifm-menu-color-background-hover)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          {item.label}
        </a>
      </li>
    );
  }

  if (item.type === 'html') {
    return (
      <li
        style={{ listStyle: 'none', padding: '12px 16px' }}
        dangerouslySetInnerHTML={{ __html: item.value }}
      />
    );
  }

  return null;
}

/**
 * SimplifiedSidebarItems - Visual representation for Storybook
 *
 * Renders a simplified version of DocSidebarItems without Docusaurus hooks.
 * Shows the visual structure of sidebar navigation.
 */
function SimplifiedSidebarItems({ items }: { items: PropSidebarItem[] }) {
  return (
    <aside
      style={{
        width: '300px',
        background: 'var(--ifm-background-surface-color)',
        border: '1px solid var(--ifm-color-border)',
        borderRadius: '4px',
        padding: '16px 0',
        maxHeight: '600px',
        overflowY: 'auto',
      }}
    >
      <ul style={{ margin: 0, padding: 0 }}>
        {items.map((item, i) => (
          <SimplifiedSidebarItem key={i} item={item} />
        ))}
      </ul>
    </aside>
  );
}

/**
 * DocSidebarItems - Swizzled Docusaurus component
 *
 * NOTE: This story shows a simplified visual representation only.
 * The actual component has complex Docusaurus dependencies:
 * - useContextualSidebarDepth() for path-based filtering
 * - useCurrentSidebarCategory() for category context
 * - filterSidebarItemsByContext() for contextual filtering logic
 *
 * Filtering behavior in production:
 * - Depth 0-1 (/, /introduction): Show all sections with dividers
 * - Depth 2+ (product level): Show only current product with children
 *
 * This provides focused navigation by showing only relevant content
 * based on the current page depth and context.
 *
 * These stories demonstrate the visual sidebar structure without
 * the full interactive filtering functionality.
 */
const meta: Meta<typeof SimplifiedSidebarItems> = {
  title: 'Theme/DocSidebarItems',
  component: SimplifiedSidebarItems,
  parameters: {
    docs: {
      description: {
        component:
          'Simplified visual representation of the DocSidebarItems component. Shows sidebar structure without Docusaurus hooks and contextual filtering.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample sidebar items for stories
const sampleItems: PropSidebarItem[] = [
  {
    type: 'html',
    value: '<strong>Getting Started</strong>',
  } as PropSidebarItem,
  {
    type: 'link',
    label: 'Introduction',
    href: '/introduction',
  } as PropSidebarItem,
  {
    type: 'link',
    label: 'Quick Start',
    href: '/quick-start',
  } as PropSidebarItem,
  {
    type: 'html',
    value: '<br/><strong>User Documentation</strong>',
  } as PropSidebarItem,
  {
    type: 'category',
    label: 'Platform',
    items: [
      {
        type: 'link',
        label: 'Overview',
        href: '/user-documentation/moderne-platform/overview',
      } as PropSidebarItem,
      {
        type: 'link',
        label: 'Getting Started',
        href: '/user-documentation/moderne-platform/getting-started',
      } as PropSidebarItem,
      {
        type: 'category',
        label: 'How-to Guides',
        items: [
          {
            type: 'link',
            label: 'Run a Recipe',
            href: '/user-documentation/moderne-platform/how-to-guides/run-recipe',
          } as PropSidebarItem,
          {
            type: 'link',
            label: 'Create a Visualization',
            href: '/user-documentation/moderne-platform/how-to-guides/visualization',
          } as PropSidebarItem,
        ],
      } as PropSidebarItem,
    ],
  } as PropSidebarItem,
  {
    type: 'category',
    label: 'CLI',
    items: [
      {
        type: 'link',
        label: 'Overview',
        href: '/user-documentation/moderne-cli/overview',
      } as PropSidebarItem,
      {
        type: 'link',
        label: 'Installation',
        href: '/user-documentation/moderne-cli/installation',
      } as PropSidebarItem,
    ],
  } as PropSidebarItem,
];

const deepHierarchy: PropSidebarItem[] = [
  {
    type: 'html',
    value: '<strong>Administrator Documentation</strong>',
  } as PropSidebarItem,
  {
    type: 'category',
    label: 'Platform',
    items: [
      {
        type: 'category',
        label: 'Installation',
        items: [
          {
            type: 'link',
            label: 'Prerequisites',
            href: '/admin/platform/installation/prerequisites',
          } as PropSidebarItem,
          {
            type: 'category',
            label: 'Deployment Options',
            items: [
              {
                type: 'link',
                label: 'Kubernetes',
                href: '/admin/platform/installation/kubernetes',
              } as PropSidebarItem,
              {
                type: 'link',
                label: 'Docker Compose',
                href: '/admin/platform/installation/docker',
              } as PropSidebarItem,
            ],
          } as PropSidebarItem,
        ],
      } as PropSidebarItem,
      {
        type: 'category',
        label: 'Configuration',
        items: [
          {
            type: 'link',
            label: 'Authentication',
            href: '/admin/platform/config/auth',
          } as PropSidebarItem,
          {
            type: 'link',
            label: 'Storage',
            href: '/admin/platform/config/storage',
          } as PropSidebarItem,
        ],
      } as PropSidebarItem,
    ],
  } as PropSidebarItem,
];

const flatList: PropSidebarItem[] = [
  {
    type: 'link',
    label: 'Introduction',
    href: '/introduction',
  } as PropSidebarItem,
  {
    type: 'link',
    label: 'Getting Started',
    href: '/getting-started',
  } as PropSidebarItem,
  {
    type: 'link',
    label: 'Installation',
    href: '/installation',
  } as PropSidebarItem,
  {
    type: 'link',
    label: 'Configuration',
    href: '/configuration',
  } as PropSidebarItem,
  {
    type: 'link',
    label: 'Troubleshooting',
    href: '/troubleshooting',
  } as PropSidebarItem,
];

/**
 * Default Sidebar
 *
 * Shows a typical sidebar with mixed content:
 * - Section dividers (HTML items)
 * - Categories with nested items
 * - Direct links
 */
export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

/**
 * Deep Hierarchy
 *
 * Demonstrates sidebar with 3+ levels of nesting.
 * Shows how categories can contain sub-categories.
 */
export const DeepHierarchy: Story = {
  args: {
    items: deepHierarchy,
  },
};

/**
 * Flat List
 *
 * Simple sidebar with no categories - just a list of links.
 * Useful for simple documentation structures.
 */
export const FlatList: Story = {
  args: {
    items: flatList,
  },
};

/**
 * With Section Dividers
 *
 * Shows sidebar with HTML dividers to separate major sections.
 * Uses <strong> tags and line breaks for visual separation.
 */
export const WithSectionDividers: Story = {
  args: {
    items: [
      {
        type: 'html',
        value: '<strong>Guides</strong>',
      } as PropSidebarItem,
      {
        type: 'link',
        label: 'Quick Start',
        href: '/guides/quick-start',
      } as PropSidebarItem,
      {
        type: 'link',
        label: 'Best Practices',
        href: '/guides/best-practices',
      } as PropSidebarItem,
      {
        type: 'html',
        value: '<br/><strong>API Reference</strong>',
      } as PropSidebarItem,
      {
        type: 'link',
        label: 'Authentication',
        href: '/api/auth',
      } as PropSidebarItem,
      {
        type: 'link',
        label: 'Endpoints',
        href: '/api/endpoints',
      } as PropSidebarItem,
      {
        type: 'html',
        value: '<br/><strong>Resources</strong>',
      } as PropSidebarItem,
      {
        type: 'link',
        label: 'FAQ',
        href: '/resources/faq',
      } as PropSidebarItem,
      {
        type: 'link',
        label: 'Changelog',
        href: '/resources/changelog',
      } as PropSidebarItem,
    ],
  },
};

/**
 * Single Category
 *
 * Sidebar with a single expanded category.
 * Shows focused navigation for a specific section.
 */
export const SingleCategory: Story = {
  args: {
    items: [
      {
        type: 'category',
        label: 'Moderne Platform',
        items: [
          {
            type: 'link',
            label: 'Overview',
            href: '/platform/overview',
          } as PropSidebarItem,
          {
            type: 'link',
            label: 'Architecture',
            href: '/platform/architecture',
          } as PropSidebarItem,
          {
            type: 'link',
            label: 'Security',
            href: '/platform/security',
          } as PropSidebarItem,
          {
            type: 'link',
            label: 'Performance',
            href: '/platform/performance',
          } as PropSidebarItem,
        ],
      } as PropSidebarItem,
    ],
  },
};

/**
 * Multiple Categories
 *
 * Sidebar with several top-level categories.
 * Demonstrates category organization pattern.
 */
export const MultipleCategories: Story = {
  args: {
    items: [
      {
        type: 'category',
        label: 'Platform',
        items: [
          { type: 'link', label: 'Overview', href: '/platform/overview' } as PropSidebarItem,
          { type: 'link', label: 'Features', href: '/platform/features' } as PropSidebarItem,
        ],
      } as PropSidebarItem,
      {
        type: 'category',
        label: 'CLI',
        items: [
          { type: 'link', label: 'Overview', href: '/cli/overview' } as PropSidebarItem,
          { type: 'link', label: 'Commands', href: '/cli/commands' } as PropSidebarItem,
        ],
      } as PropSidebarItem,
      {
        type: 'category',
        label: 'DX',
        items: [
          { type: 'link', label: 'Overview', href: '/dx/overview' } as PropSidebarItem,
          { type: 'link', label: 'Setup', href: '/dx/setup' } as PropSidebarItem,
        ],
      } as PropSidebarItem,
    ],
  },
};

/**
 * Dark Mode Showcase
 *
 * Toggle between light and dark modes to see sidebar styling changes.
 * The sidebar adapts its background, text, and hover colors.
 */
export const DarkModeShowcase: Story = {
  args: {
    items: sampleItems,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toggle between light and dark modes using the theme switcher. The sidebar background, text colors, and hover states adapt to the current theme.',
      },
    },
  },
};

/**
 * All Variations
 *
 * Side-by-side comparison of different sidebar configurations.
 * Useful for visual regression testing.
 */
export const AllVariations: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
      }}
    >
      <div>
        <h4 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Default (Mixed Content)
        </h4>
        <SimplifiedSidebarItems items={sampleItems} />
      </div>

      <div>
        <h4 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Deep Hierarchy
        </h4>
        <SimplifiedSidebarItems items={deepHierarchy} />
      </div>

      <div>
        <h4 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Flat List
        </h4>
        <SimplifiedSidebarItems items={flatList} />
      </div>
    </div>
  ),
};
