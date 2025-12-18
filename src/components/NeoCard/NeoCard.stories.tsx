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
 * All States - Shows all state variations in both light and dark mode
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '48px', padding: '24px' }}>
      {/* Light Mode */}
      <div>
        <h3 style={{ marginBottom: '24px', fontSize: '16px', fontWeight: 600 }}>
          Light Mode
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px', fontWeight: 500 }}>
              Default
            </div>
            <NeoCard
              title="Code Remix"
              description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
              state="default"
              icon={<DemoIcon />}
              gem={<DemoGem />}
            />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px', fontWeight: 500 }}>
              Active
            </div>
            <NeoCard
              title="Code Remix"
              description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
              state="active"
              icon={<DemoIcon />}
              gem={<DemoGem />}
            />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px', fontWeight: 500 }}>
              Focused
            </div>
            <NeoCard
              title="Code Remix"
              description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
              state="focused"
              icon={<DemoIcon />}
              gem={<DemoGem />}
            />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px', fontWeight: 500 }}>
              Disabled
            </div>
            <NeoCard
              title="Code Remix"
              description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
              disabled
              icon={<DemoIcon />}
              gem={<DemoGem />}
            />
          </div>
        </div>
      </div>

      {/* Dark Mode */}
      <div data-theme="dark" style={{ padding: '24px', background: '#041834', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '16px', fontWeight: 600, color: 'white' }}>
          Dark Mode
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px', fontWeight: 500 }}>
              Default
            </div>
            <NeoCard
              title="Code Remix"
              description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
              state="default"
              icon={<DemoIcon />}
              gem={<DemoGem />}
            />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px', fontWeight: 500 }}>
              Active
            </div>
            <NeoCard
              title="Code Remix"
              description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
              state="active"
              icon={<DemoIcon />}
              gem={<DemoGem />}
            />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px', fontWeight: 500 }}>
              Focused
            </div>
            <NeoCard
              title="Code Remix"
              description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
              state="focused"
              icon={<DemoIcon />}
              gem={<DemoGem />}
            />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px', fontWeight: 500 }}>
              Disabled
            </div>
            <NeoCard
              title="Code Remix"
              description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
              disabled
              icon={<DemoIcon />}
              gem={<DemoGem />}
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

/**
 * With All Elements - Shows card with icon, gem, and action buttons
 */
export const WithAllElements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          With Action Buttons
        </h3>
        <NeoCard
          title="Code Remix"
          description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
          icon={<DemoIcon />}
          gem={<DemoGem />}
          buttons={
            <>
              <NeoButton variant="primary" size="small">
                Join Session
              </NeoButton>
              <NeoButton variant="secondary" size="small">
                Learn More
              </NeoButton>
            </>
          }
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          Minimal (No Icon/Gem)
        </h3>
        <NeoCard
          title="Code Remix"
          description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
          buttons={
            <>
              <NeoButton variant="primary" size="small">
                Primary CTA
              </NeoButton>
              <NeoButton variant="outline" size="small">
                Secondary
              </NeoButton>
            </>
          }
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          Icon Only (No Gem)
        </h3>
        <NeoCard
          title="Code Remix"
          description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
          icon={<DemoIcon />}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          Gem Only (No Icon)
        </h3>
        <NeoCard
          title="Code Remix"
          description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
          gem={<DemoGem />}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>
          Text Only (No Icon/Gem/Buttons)
        </h3>
        <NeoCard
          title="Code Remix"
          description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

/**
 * Interactive Grid - Shows multiple clickable cards
 */
export const InteractiveGrid: Story = {
  render: () => {
    const [selectedCard, setSelectedCard] = React.useState<number | null>(null);

    const cards = [
      {
        title: 'Code Remix',
        description: 'Weekly live sessions covering updates and key topics',
        color: 'linear-gradient(135deg, #2f42ff 0%, #88fe9b 100%)',
      },
      {
        title: 'Platform Docs',
        description: 'Comprehensive guides for the Moderne Platform',
        color: 'linear-gradient(135deg, #992fb9 0%, #2f42ff 100%)',
      },
      {
        title: 'CLI Guide',
        description: 'Command-line tools and automation workflows',
        color: 'linear-gradient(135deg, #88fe9b 0%, #3bcca6 100%)',
      },
      {
        title: 'API Reference',
        description: 'Complete API documentation and examples',
        color: 'linear-gradient(135deg, #ffc52e 0%, #ff9800 100%)',
      },
    ];

    return (
      <div>
        <div style={{ marginBottom: '24px', fontSize: '14px', color: '#666' }}>
          Click a card to select it
          {selectedCard !== null && (
            <span style={{ marginLeft: '8px', fontWeight: 600 }}>
              (Selected: {cards[selectedCard].title})
            </span>
          )}
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 340px)',
            gap: '24px',
          }}
        >
          {cards.map((card, index) => (
            <NeoCard
              key={index}
              title={card.title}
              description={card.description}
              state={selectedCard === index ? 'active' : 'default'}
              onClick={() => setSelectedCard(index)}
              gem={
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '4px',
                    background: card.color,
                  }}
                />
              }
            />
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};
