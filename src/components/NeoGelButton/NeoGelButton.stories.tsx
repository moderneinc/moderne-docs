import type { Meta, StoryObj } from '@storybook/react';
import { NeoGelButton } from './NeoGelButton';
import React from 'react';

const meta: Meta<typeof NeoGelButton> = {
  title: 'Components/NeoGelButton',
  component: NeoGelButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    product: {
      control: 'select',
      options: ['dx', 'cli', 'platform', 'recipes', 'moddy'],
      description: 'Product type determines which gem icon to display',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
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

/**
 * All Products - Shows all product types with their respective gem icons
 */
export const AllProducts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          Product Gel Buttons
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <NeoGelButton product="platform">Platform</NeoGelButton>
          <NeoGelButton product="dx">DX</NeoGelButton>
          <NeoGelButton product="cli">CLI</NeoGelButton>
          <NeoGelButton product="moddy">Moddy</NeoGelButton>
          <NeoGelButton product="recipes">Recipes</NeoGelButton>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          Disabled State
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <NeoGelButton product="platform" disabled>
            Platform
          </NeoGelButton>
          <NeoGelButton product="dx" disabled>
            DX
          </NeoGelButton>
          <NeoGelButton product="cli" disabled>
            CLI
          </NeoGelButton>
          <NeoGelButton product="moddy" disabled>
            Moddy
          </NeoGelButton>
          <NeoGelButton product="recipes" disabled>
            Recipes
          </NeoGelButton>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          As Links (with href)
        </h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <NeoGelButton product="platform" href="https://moderne.io" target="_blank" rel="noopener noreferrer">
            Platform
          </NeoGelButton>
          <NeoGelButton product="dx" href="/docs/dx">
            DX
          </NeoGelButton>
          <NeoGelButton product="cli" href="/docs/cli">
            CLI
          </NeoGelButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

/**
 * Platform - Red gem icon
 */
export const Platform: Story = {
  args: {
    product: 'platform',
    children: 'Platform',
  },
};

/**
 * DX - Pink gem icon
 */
export const DX: Story = {
  args: {
    product: 'dx',
    children: 'DX',
  },
};

/**
 * CLI - Blue gem icon
 */
export const CLI: Story = {
  args: {
    product: 'cli',
    children: 'CLI',
  },
};

/**
 * Moddy - Green gem icon
 */
export const Moddy: Story = {
  args: {
    product: 'moddy',
    children: 'Moddy',
  },
};

/**
 * Recipes - Yellow gem icon
 */
export const Recipes: Story = {
  args: {
    product: 'recipes',
    children: 'Recipes',
  },
};

/**
 * Dark Mode - Shows how buttons appear in dark mode
 */
export const DarkMode: Story = {
  render: () => (
    <div data-theme="dark" style={{ background: '#111827', padding: '32px', borderRadius: '8px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600, color: 'white' }}>
            Dark Mode - All Products
          </h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <NeoGelButton product="platform">Platform</NeoGelButton>
            <NeoGelButton product="dx">DX</NeoGelButton>
            <NeoGelButton product="cli">CLI</NeoGelButton>
            <NeoGelButton product="moddy">Moddy</NeoGelButton>
            <NeoGelButton product="recipes">Recipes</NeoGelButton>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600, color: 'white' }}>
            Dark Mode - Disabled
          </h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <NeoGelButton product="platform" disabled>
              Platform
            </NeoGelButton>
            <NeoGelButton product="dx" disabled>
              DX
            </NeoGelButton>
            <NeoGelButton product="cli" disabled>
              CLI
            </NeoGelButton>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
  },
};

/**
 * Interactive - Test click interactions
 */
export const Interactive: Story = {
  args: {
    product: 'dx',
    children: 'Click me',
    disabled: false,
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
        <NeoGelButton {...args} onClick={handleClick} />
        <div style={{ fontSize: '12px', color: '#666' }}>
          Button clicked {clickCount} times
        </div>
      </div>
    );
  },
};
