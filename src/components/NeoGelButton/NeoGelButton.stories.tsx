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
 * Interactive story with controls
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

/**
 * All Variations - Comprehensive view of all product types, states, and themes
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '24px' }}>
      {/* Light Mode */}
      <div>
        <h2 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: 600 }}>
          Light Mode
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* All Products */}
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#666' }}>
              All Products
            </h3>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <NeoGelButton product="platform">Platform</NeoGelButton>
              <NeoGelButton product="dx">DX</NeoGelButton>
              <NeoGelButton product="cli">CLI</NeoGelButton>
              <NeoGelButton product="moddy">Moddy</NeoGelButton>
              <NeoGelButton product="recipes">Recipes</NeoGelButton>
            </div>
          </div>

          {/* Disabled State */}
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#666' }}>
              Disabled State
            </h3>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
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

          {/* As Links */}
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#666' }}>
              As Links (with href)
            </h3>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
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
      </div>

      {/* Dark Mode */}
      <div data-theme="dark" style={{ background: '#041834', padding: '24px', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: 600, color: '#fff' }}>
          Dark Mode
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* All Products */}
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#fff' }}>
              All Products
            </h3>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <NeoGelButton product="platform">Platform</NeoGelButton>
              <NeoGelButton product="dx">DX</NeoGelButton>
              <NeoGelButton product="cli">CLI</NeoGelButton>
              <NeoGelButton product="moddy">Moddy</NeoGelButton>
              <NeoGelButton product="recipes">Recipes</NeoGelButton>
            </div>
          </div>

          {/* Disabled State */}
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#fff' }}>
              Disabled State
            </h3>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
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
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
