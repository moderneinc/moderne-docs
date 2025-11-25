import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

/**
 * Simplified Category Item Component for Storybook
 *
 * This demonstrates the visual design of sidebar category items with Lucide icons.
 * Shows the caret icon behavior in collapsed and expanded states.
 */
function SimplifiedCategoryItem({
  label,
  collapsed,
  isActive,
  href,
  children,
}: {
  label: string;
  collapsed: boolean;
  isActive?: boolean;
  href?: string;
  children?: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  const Icon = isCollapsed ? ChevronRight : ChevronDown;

  return (
    <li style={{ listStyle: 'none', margin: 0 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <a
          href={href || '#'}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: 'var(--sidebar-item-padding, 12px)',
            fontSize: 'var(--sidebar-item-font-size, 16px)',
            fontWeight: 'var(--neo-font-weight-semi-bold, 600)',
            lineHeight: 'var(--sidebar-item-line-height, 1.5)',
            color: isActive
              ? 'var(--sidebar-link-active-color, #283af7)'
              : 'var(--sidebar-link-color, #1f2937)',
            textDecoration: 'none',
            transition: 'background-color 0.2s, color 0.2s',
            borderRadius: '4px',
          }}
          onMouseOver={(e) => {
            if (!isActive) {
              e.currentTarget.style.backgroundColor = 'var(--sidebar-link-hover-bg, rgba(212, 211, 228, 0.2))';
            }
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          {label}
        </a>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: isActive ? 'var(--sidebar-link-active-color, #283af7)' : 'var(--neo-grey-800, #1f2937)',
            transition: 'color 0.2s',
          }}
          aria-label={isCollapsed ? `Expand ${label}` : `Collapse ${label}`}
          aria-expanded={!isCollapsed}
        >
          <Icon size={16} strokeWidth={1.25} />
        </button>
      </div>
      {!isCollapsed && children && (
        <ul style={{ margin: 0, paddingLeft: '16px' }}>{children}</ul>
      )}
    </li>
  );
}

/**
 * Simplified Sidebar Link Component
 */
function SimplifiedSidebarLink({
  label,
  href,
  isActive,
}: {
  label: string;
  href: string;
  isActive?: boolean;
}) {
  return (
    <li style={{ listStyle: 'none', margin: 0 }}>
      <a
        href={href}
        style={{
          display: 'block',
          padding: 'var(--sidebar-item-padding, 12px)',
          fontSize: 'var(--sidebar-item-font-size, 16px)',
          fontWeight: 'var(--neo-font-weight-regular, 400)',
          lineHeight: 'var(--sidebar-item-line-height, 1.5)',
          color: isActive
            ? 'var(--sidebar-link-active-color, #283af7)'
            : 'var(--sidebar-link-color, #1f2937)',
          textDecoration: 'none',
          transition: 'background-color 0.2s, color 0.2s',
          borderRadius: '4px',
        }}
        onMouseOver={(e) => {
          if (!isActive) {
            e.currentTarget.style.backgroundColor = 'var(--sidebar-link-hover-bg, rgba(212, 211, 228, 0.2))';
          }
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        {label}
      </a>
    </li>
  );
}

/**
 * Container Component for Stories
 */
function CategoryContainer({ children }: { children: React.ReactNode }) {
  return (
    <aside
      style={{
        width: '307px',
        background: 'var(--ifm-background-surface-color)',
        border: '1px solid var(--ifm-color-border)',
        borderRadius: '4px',
        padding: '16px 0',
      }}
    >
      <ul style={{ margin: 0, padding: 0 }}>{children}</ul>
    </aside>
  );
}

/**
 * DocSidebarItem/Category - Swizzled component with Lucide icons
 *
 * This component renders collapsible sidebar categories with:
 * - Lucide React icons (ChevronRight/ChevronDown) instead of CSS pseudo-elements
 * - Updated typography aligned with Figma design (16px font size)
 * - Brand digital blue for active states
 * - Proper Neo Design CSS variables
 *
 * Key changes from default Docusaurus:
 * - Font size: 14px → 16px for navigation items
 * - Padding: 16px/10px → 12px uniform
 * - Active color: Neo primary blue → Brand digital blue (#283af7)
 * - Caret icons: SVG data URIs → Lucide React components
 * - Sub-item font weight: Semi-bold (600) → Regular (400)
 */
const meta: Meta<typeof SimplifiedCategoryItem> = {
  title: 'Theme/DocSidebarItem/Category',
  component: SimplifiedCategoryItem,
  parameters: {
    docs: {
      description: {
        component:
          'Sidebar category item with Lucide icons for expand/collapse. Swizzled from Docusaurus theme-classic to use proper React icons and updated design tokens.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <CategoryContainer>
        <Story />
      </CategoryContainer>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Collapsed Category
 *
 * Default state with ChevronRight icon indicating the category can be expanded.
 */
export const Collapsed: Story = {
  args: {
    label: 'Getting Started',
    collapsed: true,
    href: '/getting-started',
  },
};

/**
 * Expanded Category
 *
 * Expanded state with ChevronDown icon showing the category is open.
 * Children are visible.
 */
export const Expanded: Story = {
  args: {
    label: 'Getting Started',
    collapsed: false,
    href: '/getting-started',
    children: (
      <>
        <SimplifiedSidebarLink label="Quick Start" href="/getting-started/quick-start" />
        <SimplifiedSidebarLink label="Installation" href="/getting-started/installation" />
        <SimplifiedSidebarLink label="Configuration" href="/getting-started/configuration" />
      </>
    ),
  },
};

/**
 * Active Collapsed
 *
 * Active category in collapsed state.
 * Shows brand digital blue color (#283af7) for both text and icon.
 */
export const ActiveCollapsed: Story = {
  args: {
    label: 'Getting Started',
    collapsed: true,
    isActive: true,
    href: '/getting-started',
  },
};

/**
 * Active Expanded
 *
 * Active category in expanded state with children visible.
 * Icon and text use brand digital blue.
 */
export const ActiveExpanded: Story = {
  args: {
    label: 'Getting Started',
    collapsed: false,
    isActive: true,
    href: '/getting-started',
    children: (
      <>
        <SimplifiedSidebarLink label="Quick Start" href="/getting-started/quick-start" isActive />
        <SimplifiedSidebarLink label="Installation" href="/getting-started/installation" />
        <SimplifiedSidebarLink label="Configuration" href="/getting-started/configuration" />
      </>
    ),
  },
};

/**
 * Nested Categories
 *
 * Demonstrates multi-level category nesting with proper indentation.
 */
export const NestedCategories: Story = {
  args: {
    label: 'User Documentation',
    collapsed: false,
    href: '/user-documentation',
    children: (
      <>
        <SimplifiedCategoryItem label="Platform" collapsed={false} href="/user-documentation/platform">
          <SimplifiedSidebarLink label="Overview" href="/user-documentation/platform/overview" />
          <SimplifiedSidebarLink
            label="Getting Started"
            href="/user-documentation/platform/getting-started"
            isActive
          />
          <SimplifiedCategoryItem
            label="How-to Guides"
            collapsed={true}
            href="/user-documentation/platform/how-to"
          />
        </SimplifiedCategoryItem>
        <SimplifiedCategoryItem label="CLI" collapsed={true} href="/user-documentation/cli" />
      </>
    ),
  },
};

/**
 * Dark Mode
 *
 * Toggle between light and dark modes to see color transitions.
 * Dark mode uses mint green (#85fe99) for active states.
 */
export const DarkMode: Story = {
  args: {
    label: 'Getting Started',
    collapsed: false,
    isActive: true,
    href: '/getting-started',
    children: (
      <>
        <SimplifiedSidebarLink label="Quick Start" href="/getting-started/quick-start" />
        <SimplifiedSidebarLink label="Installation" href="/getting-started/installation" isActive />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Toggle between light and dark modes. Active states change from brand digital blue to mint green.',
      },
    },
  },
};

/**
 * All States Comparison
 *
 * Side-by-side comparison of different category states.
 */
export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
      }}
    >
      <div>
        <h4 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Collapsed (Default)
        </h4>
        <CategoryContainer>
          <SimplifiedCategoryItem label="Getting Started" collapsed={true} href="/getting-started" />
        </CategoryContainer>
      </div>

      <div>
        <h4 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Expanded
        </h4>
        <CategoryContainer>
          <SimplifiedCategoryItem label="Getting Started" collapsed={false} href="/getting-started">
            <SimplifiedSidebarLink label="Quick Start" href="/quick-start" />
            <SimplifiedSidebarLink label="Installation" href="/installation" />
          </SimplifiedCategoryItem>
        </CategoryContainer>
      </div>

      <div>
        <h4 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--ifm-color-emphasis-600)' }}>
          Active (Expanded)
        </h4>
        <CategoryContainer>
          <SimplifiedCategoryItem label="Getting Started" collapsed={false} isActive href="/getting-started">
            <SimplifiedSidebarLink label="Quick Start" href="/quick-start" isActive />
            <SimplifiedSidebarLink label="Installation" href="/installation" />
          </SimplifiedCategoryItem>
        </CategoryContainer>
      </div>
    </div>
  ),
};
