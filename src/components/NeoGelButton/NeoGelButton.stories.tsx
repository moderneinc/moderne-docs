import type { Meta, StoryObj } from '@storybook/react';
import { NeoGelButton } from './NeoGelButton';
import React from 'react';

/**
 * Gem icons available in the design system (from sidebar configuration)
 */
const GEM_ICONS = {
  platform: '/img/gems/clear-block.png',
  dx: '/img/gems/red-triangle.png',
  cli: '/img/gems/blue-block.png',
  moddy: '/img/gems/green-triangle.png',
  recipes: '/img/gems/yellow-block.png',
};

const meta: Meta<typeof NeoGelButton> = {
  title: 'Components/NeoGelButton',
  component: NeoGelButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    gemIcon: {
      control: 'select',
      options: Object.values(GEM_ICONS),
      description: 'Path to gem icon image',
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
    gemIcon: GEM_ICONS.platform,
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
              <NeoGelButton gemIcon={GEM_ICONS.platform}>Platform</NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.dx}>DX</NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.cli}>CLI</NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.moddy}>Moddy</NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.recipes}>Recipes</NeoGelButton>
            </div>
          </div>

          {/* Disabled State */}
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#666' }}>
              Disabled State
            </h3>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <NeoGelButton gemIcon={GEM_ICONS.platform} disabled>
                Platform
              </NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.dx} disabled>
                DX
              </NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.cli} disabled>
                CLI
              </NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.moddy} disabled>
                Moddy
              </NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.recipes} disabled>
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
              <NeoGelButton gemIcon={GEM_ICONS.platform} href="https://moderne.io" target="_blank" rel="noopener noreferrer">
                Platform
              </NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.dx} href="/docs/dx">
                DX
              </NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.cli} href="/docs/cli">
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
              <NeoGelButton gemIcon={GEM_ICONS.platform}>Platform</NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.dx}>DX</NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.cli}>CLI</NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.moddy}>Moddy</NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.recipes}>Recipes</NeoGelButton>
            </div>
          </div>

          {/* Disabled State */}
          <div>
            <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600, color: '#fff' }}>
              Disabled State
            </h3>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <NeoGelButton gemIcon={GEM_ICONS.platform} disabled>
                Platform
              </NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.dx} disabled>
                DX
              </NeoGelButton>
              <NeoGelButton gemIcon={GEM_ICONS.cli} disabled>
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
