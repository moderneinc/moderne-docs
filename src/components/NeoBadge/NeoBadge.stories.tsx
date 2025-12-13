import type { Meta, StoryObj } from '@storybook/react';
import { NeoBadge } from './NeoBadge';

/**
 * NeoBadge component following Moderne's Neo Design system.
 *
 * Badges are compact, pill-shaped elements used to display status, labels, or categories.
 * They can be static or interactive depending on whether onClick is provided.
 *
 * ## Features
 * - 5 semantic variants: default, primary, success, warning, error
 * - 2 size options: small, medium
 * - Optional icons with configurable position
 * - Static or interactive (button) rendering
 * - Full accessibility support
 * - Dark mode support
 */
const meta: Meta<typeof NeoBadge> = {
  title: 'Components/NeoBadge',
  component: NeoBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile badge component for displaying status, labels, and categories. Supports multiple variants, sizes, and optional icons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Visual style variant for different semantic meanings',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Size variant of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    children: {
      control: 'text',
      description: 'Badge text content',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Position of the icon relative to text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    onClick: {
      description: 'Click handler - if provided, badge becomes interactive',
      table: {
        type: { summary: '(event) => void' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Aria label for accessibility',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story showcasing all badge variants in both sizes.
 * This demonstrates the full range of visual styles available.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Medium size badges */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          Medium Size (Default)
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <NeoBadge variant="default">Default</NeoBadge>
          <NeoBadge variant="primary">Primary</NeoBadge>
          <NeoBadge variant="success">Success</NeoBadge>
          <NeoBadge variant="warning">Warning</NeoBadge>
          <NeoBadge variant="error">Error</NeoBadge>
        </div>
      </div>

      {/* Small size badges */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          Small Size
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <NeoBadge variant="default" size="small">
            Default
          </NeoBadge>
          <NeoBadge variant="primary" size="small">
            Primary
          </NeoBadge>
          <NeoBadge variant="success" size="small">
            Success
          </NeoBadge>
          <NeoBadge variant="warning" size="small">
            Warning
          </NeoBadge>
          <NeoBadge variant="error" size="small">
            Error
          </NeoBadge>
        </div>
      </div>

      {/* Badges with icons */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          With Icons
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <NeoBadge variant="primary" icon={<span>★</span>}>
            New
          </NeoBadge>
          <NeoBadge variant="success" icon={<span>✓</span>}>
            Beta
          </NeoBadge>
          <NeoBadge variant="warning" icon={<span>⚠</span>}>
            Preview
          </NeoBadge>
          <NeoBadge variant="error" icon={<span>✕</span>}>
            Deprecated
          </NeoBadge>
        </div>
      </div>

      {/* Interactive badges */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          Interactive (Clickable)
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <NeoBadge
            variant="primary"
            onClick={() => alert('Primary clicked!')}
            ariaLabel="Click to interact"
          >
            Clickable
          </NeoBadge>
          <NeoBadge
            variant="default"
            icon={<span>▾</span>}
            iconPosition="right"
            onClick={() => alert('Dropdown badge clicked!')}
            ariaHasPopup={true}
            ariaExpanded={false}
          >
            Dropdown
          </NeoBadge>
        </div>
      </div>

      {/* Icon-only badges */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          Icon Only
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <NeoBadge variant="primary" icon={<span>★</span>} ariaLabel="Star" />
          <NeoBadge variant="success" icon={<span>✓</span>} ariaLabel="Check" />
          <NeoBadge
            variant="primary"
            icon={<span>★</span>}
            size="small"
            ariaLabel="Small star"
          />
          <NeoBadge
            variant="success"
            icon={<span>✓</span>}
            size="small"
            ariaLabel="Small check"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Comprehensive showcase of all badge variants, sizes, and configurations. Includes static badges, badges with icons, interactive badges, and icon-only badges.',
      },
    },
  },
};

/**
 * Interactive story with full control over all badge properties.
 * Use the controls panel to customize the badge appearance and behavior.
 */
export const Interactive: Story = {
  args: {
    children: 'Interactive Badge',
    variant: 'primary',
    size: 'medium',
    iconPosition: 'left',
  },
  argTypes: {
    icon: {
      control: false, // Icons are complex to edit in controls
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fully interactive story allowing customization of all badge properties via controls. Try changing the variant, size, and text content.',
      },
    },
  },
};

/**
 * Story demonstrating common use cases for badges in documentation.
 */
export const CommonUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      {/* Feature status badges */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          Feature Status
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <NeoBadge variant="primary" icon={<span>★</span>}>
            New
          </NeoBadge>
          <NeoBadge variant="success" icon={<span>✓</span>}>
            Beta
          </NeoBadge>
          <NeoBadge variant="warning" icon={<span>⚡</span>}>
            Preview
          </NeoBadge>
          <NeoBadge variant="error" icon={<span>⚠</span>}>
            Deprecated
          </NeoBadge>
          <NeoBadge variant="default">Stable</NeoBadge>
        </div>
      </div>

      {/* Platform indicators */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          Platform Indicators
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <NeoBadge variant="primary">CLI</NeoBadge>
          <NeoBadge variant="primary">Platform</NeoBadge>
          <NeoBadge variant="primary">DX</NeoBadge>
          <NeoBadge variant="primary">IDE</NeoBadge>
        </div>
      </div>

      {/* Version tags */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          Version Tags
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <NeoBadge variant="success" size="small">
            v3.2.0
          </NeoBadge>
          <NeoBadge variant="default" size="small">
            v3.1.5
          </NeoBadge>
          <NeoBadge variant="default" size="small">
            v3.0.0
          </NeoBadge>
        </div>
      </div>

      {/* Status indicators */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          Status Indicators
        </h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <NeoBadge variant="success" icon={<span>●</span>}>
            Active
          </NeoBadge>
          <NeoBadge variant="warning" icon={<span>●</span>}>
            Pending
          </NeoBadge>
          <NeoBadge variant="error" icon={<span>●</span>}>
            Inactive
          </NeoBadge>
          <NeoBadge variant="default" icon={<span>●</span>}>
            Unknown
          </NeoBadge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Examples of common badge use cases in documentation: feature status, platform indicators, version tags, and status indicators.',
      },
    },
  },
};
