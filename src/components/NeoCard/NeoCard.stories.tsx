import type { Meta, StoryObj } from '@storybook/react';
import { NeoCard } from './NeoCard';
import React from 'react';
import { NeoButton } from '../NeoButton/NeoButton';

const meta: Meta<typeof NeoCard> = {
  title: 'Components/NeoCard',
  component: NeoCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title text',
    },
    description: {
      control: 'text',
      description: 'Card description text',
    },
    state: {
      control: 'select',
      options: ['default', 'active', 'focused', 'disabled'],
      description: 'Visual state of the card',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state - prevents interaction',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler - makes the card interactive',
    },
    icon: {
      control: false,
      description: 'Optional icon element',
    },
    gem: {
      control: false,
      description: 'Optional gem/logo element',
    },
    buttons: {
      control: false,
      description: 'Optional action buttons',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Demo icon component
const DemoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 12L7 6.5L1 1"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Demo gem component (representing a product logo)
const DemoGem = () => (
  <div
    style={{
      width: '20px',
      height: '20px',
      borderRadius: '4px',
      background: 'linear-gradient(135deg, #2f42ff 0%, #88fe9b 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '10px',
      fontWeight: 'bold',
    }}
  >
    M
  </div>
);

/**
 * Interactive story with controls
 */
export const Interactive: Story = {
  args: {
    title: 'Code Remix',
    description: 'Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics.',
    state: 'default',
    disabled: false,
  },
  render: (args) => {
    const [clickCount, setClickCount] = React.useState(0);
    const [currentState, setCurrentState] = React.useState<'default' | 'active' | 'focused' | 'disabled'>(
      args.state || 'default'
    );

    const handleClick = () => {
      setClickCount(clickCount + 1);
      setCurrentState('active');
      if (args.onClick) {
        args.onClick();
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <NeoCard
          {...args}
          state={currentState}
          onClick={handleClick}
          icon={<DemoIcon />}
          gem={<DemoGem />}
        />
        <div style={{ fontSize: '12px', color: '#666', textAlign: 'center' }}>
          Card clicked {clickCount} times
          <br />
          Current state: <strong>{currentState}</strong>
        </div>
        <button
          onClick={() => setCurrentState('default')}
          style={{
            padding: '8px 16px',
            fontSize: '12px',
            borderRadius: '4px',
            border: '1px solid #d1d5db',
            background: 'white',
            cursor: 'pointer',
          }}
        >
          Reset State
        </button>
      </div>
    );
  },
};

/**
 * All Variations - Comprehensive view of all states, element combinations, and themes
 */
export const AllVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '24px' }}>
      {/* States - Light and Dark Mode */}
      <div>
        <h2 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: 600 }}>
          States
        </h2>
        <div style={{ display: 'flex', gap: '48px' }}>
          {/* Light Mode States */}
          <div>
            <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600, color: '#666' }}>
              Light Mode
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#999', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Default
                </div>
                <NeoCard
                  title="Code Remix"
                  description="Weekly live sessions to cover updates and key topics"
                  state="default"
                  icon={<DemoIcon />}
                  gem={<DemoGem />}
                />
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#999', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Active
                </div>
                <NeoCard
                  title="Code Remix"
                  description="Weekly live sessions to cover updates and key topics"
                  state="active"
                  icon={<DemoIcon />}
                  gem={<DemoGem />}
                />
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#999', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Focused
                </div>
                <NeoCard
                  title="Code Remix"
                  description="Weekly live sessions to cover updates and key topics"
                  state="focused"
                  icon={<DemoIcon />}
                  gem={<DemoGem />}
                />
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#999', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Disabled
                </div>
                <NeoCard
                  title="Code Remix"
                  description="Weekly live sessions to cover updates and key topics"
                  disabled
                  icon={<DemoIcon />}
                  gem={<DemoGem />}
                />
              </div>
            </div>
          </div>

          {/* Dark Mode States */}
          <div data-theme="dark" style={{ padding: '24px', background: '#041834', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600, color: '#fff' }}>
              Dark Mode
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#999', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Default
                </div>
                <NeoCard
                  title="Code Remix"
                  description="Weekly live sessions to cover updates and key topics"
                  state="default"
                  icon={<DemoIcon />}
                  gem={<DemoGem />}
                />
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#999', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Active
                </div>
                <NeoCard
                  title="Code Remix"
                  description="Weekly live sessions to cover updates and key topics"
                  state="active"
                  icon={<DemoIcon />}
                  gem={<DemoGem />}
                />
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#999', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Focused
                </div>
                <NeoCard
                  title="Code Remix"
                  description="Weekly live sessions to cover updates and key topics"
                  state="focused"
                  icon={<DemoIcon />}
                  gem={<DemoGem />}
                />
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#999', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Disabled
                </div>
                <NeoCard
                  title="Code Remix"
                  description="Weekly live sessions to cover updates and key topics"
                  disabled
                  icon={<DemoIcon />}
                  gem={<DemoGem />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Element Combinations */}
      <div>
        <h2 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: 600 }}>
          Element Combinations
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Full: Icon + Gem + Buttons
            </div>
            <NeoCard
              title="Code Remix"
              description="Weekly live sessions to cover updates and key topics"
              icon={<DemoIcon />}
              gem={<DemoGem />}
              buttons={
                <>
                  <NeoButton variant="primary" size="small">
                    Join
                  </NeoButton>
                  <NeoButton variant="secondary" size="small">
                    Learn
                  </NeoButton>
                </>
              }
            />
          </div>

          <div>
            <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Icon + Gem
            </div>
            <NeoCard
              title="Code Remix"
              description="Weekly live sessions to cover updates and key topics"
              icon={<DemoIcon />}
              gem={<DemoGem />}
            />
          </div>

          <div>
            <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Icon Only
            </div>
            <NeoCard
              title="Code Remix"
              description="Weekly live sessions to cover updates and key topics"
              icon={<DemoIcon />}
            />
          </div>

          <div>
            <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Gem Only
            </div>
            <NeoCard
              title="Code Remix"
              description="Weekly live sessions to cover updates and key topics"
              gem={<DemoGem />}
            />
          </div>

          <div>
            <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Buttons Only
            </div>
            <NeoCard
              title="Code Remix"
              description="Weekly live sessions to cover updates and key topics"
              buttons={
                <>
                  <NeoButton variant="primary" size="small">
                    Primary
                  </NeoButton>
                  <NeoButton variant="outline" size="small">
                    Secondary
                  </NeoButton>
                </>
              }
            />
          </div>

          <div>
            <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Text Only (Minimal)
            </div>
            <NeoCard
              title="Code Remix"
              description="Weekly live sessions to cover updates and key topics"
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
