import type { Meta, StoryObj } from '@storybook/react';
import { NeoButton } from './NeoButton';
import React from 'react';

const meta: Meta<typeof NeoButton> = {
  title: 'Components/NeoButton',
  component: NeoButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Icon position relative to text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type attribute',
    },
    href: {
      control: 'text',
      description: 'If provided, renders as an <a> tag instead of <button>',
    },
    target: {
      control: 'select',
      options: ['_blank', '_self', '_parent', '_top'],
      description: 'Link target (only used with href)',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Simple icon for demo purposes
const DemoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0L10.5 5.5L16 6.5L12 10.5L13 16L8 13.5L3 16L4 10.5L0 6.5L5.5 5.5L8 0Z" />
  </svg>
);

/**
 * All Variations - Comprehensive view of all button styles
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Primary Buttons */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          Primary Variant
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <NeoButton variant="primary" size="small">
            Small
          </NeoButton>
          <NeoButton variant="primary" size="medium">
            Medium
          </NeoButton>
          <NeoButton variant="primary" size="large">
            Large
          </NeoButton>
          <NeoButton variant="primary" size="medium" disabled>
            Disabled
          </NeoButton>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          Secondary Variant
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <NeoButton variant="secondary" size="small">
            Small
          </NeoButton>
          <NeoButton variant="secondary" size="medium">
            Medium
          </NeoButton>
          <NeoButton variant="secondary" size="large">
            Large
          </NeoButton>
          <NeoButton variant="secondary" size="medium" disabled>
            Disabled
          </NeoButton>
        </div>
      </div>

      {/* Outline Buttons */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          Outline Variant
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <NeoButton variant="outline" size="small">
            Small
          </NeoButton>
          <NeoButton variant="outline" size="medium">
            Medium
          </NeoButton>
          <NeoButton variant="outline" size="large">
            Large
          </NeoButton>
          <NeoButton variant="outline" size="medium" disabled>
            Disabled
          </NeoButton>
        </div>
      </div>

      {/* Buttons with Icons */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          With Icons
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <NeoButton variant="primary" icon={<DemoIcon />} iconPosition="left">
            Icon Left
          </NeoButton>
          <NeoButton variant="primary" icon={<DemoIcon />} iconPosition="right">
            Icon Right
          </NeoButton>
          <NeoButton variant="secondary" icon={<DemoIcon />}>
            Icon Left
          </NeoButton>
          <NeoButton variant="outline" icon={<DemoIcon />} iconPosition="right">
            Icon Right
          </NeoButton>
        </div>
      </div>

      {/* Icon-only Buttons */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          Icon Only
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <NeoButton variant="primary" icon={<DemoIcon />} aria-label="Star" size="small" />
          <NeoButton variant="primary" icon={<DemoIcon />} aria-label="Star" />
          <NeoButton variant="secondary" icon={<DemoIcon />} aria-label="Star" />
          <NeoButton variant="outline" icon={<DemoIcon />} aria-label="Star" />
        </div>
      </div>

      {/* As Link */}
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          As Link (with href)
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <NeoButton variant="primary" href="https://moderne.io" target="_blank" rel="noopener noreferrer">
            External Link
          </NeoButton>
          <NeoButton variant="secondary" href="/docs">
            Internal Link
          </NeoButton>
          <NeoButton
            variant="outline"
            href="https://moderne.io"
            icon={<DemoIcon />}
            iconPosition="right"
          >
            Link with Icon
          </NeoButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

/**
 * Interactive story with controls
 */
export const Interactive: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'medium',
    disabled: false,
    iconPosition: 'left',
  },
  render: (args) => {
    const [clickCount, setClickCount] = React.useState(0);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      setClickCount(clickCount + 1);
      if (args.onClick) {
        args.onClick(e);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <NeoButton {...args} onClick={handleClick} />
        <div style={{ fontSize: '12px', color: '#666' }}>
          Button clicked {clickCount} times
        </div>
      </div>
    );
  },
};
