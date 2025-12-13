import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import PersonaSwitcher from './index';
import type { PersonaSwitcherMetadata } from './index';

/**
 * PersonaSwitcher component for switching between documentation personas.
 *
 * The PersonaSwitcher displays a dropdown navigation element that allows users to switch
 * between different documentation personas (e.g., Practitioner ↔ Admin) within product
 * documentation sections.
 *
 * ## Features
 * - Click-outside-to-close behavior
 * - Keyboard navigation (Escape to close, Enter to select)
 * - Visual checkmark for current persona
 * - Smooth navigation to alternate persona paths
 * - Integrated with NeoBadge component
 * - Full accessibility support
 */
const meta: Meta<typeof PersonaSwitcher> = {
  title: 'Components/PersonaSwitcher',
  component: PersonaSwitcher,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A dropdown navigation component for switching between documentation personas. Used in the navbar to provide quick access to role-specific documentation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    metadata: {
      description: 'Persona switcher configuration containing current persona and alternates',
      table: {
        type: { summary: 'PersonaSwitcherMetadata' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample metadata for Practitioner persona
const practitionerMetadata: PersonaSwitcherMetadata = {
  current: 'practitioner',
  currentLabel: 'Practitioner',
  alternates: [
    {
      label: 'Admin',
      path: '/administrator-documentation/moderne-platform',
      sidebarCategory: 'platform.admin',
    },
  ],
};

// Sample metadata for Admin persona
const adminMetadata: PersonaSwitcherMetadata = {
  current: 'admin',
  currentLabel: 'Admin',
  alternates: [
    {
      label: 'Practitioner',
      path: '/user-documentation/moderne-platform',
      sidebarCategory: 'platform.practitioner',
    },
  ],
};

// Sample metadata with multiple alternates (hypothetical)
const multiPersonaMetadata: PersonaSwitcherMetadata = {
  current: 'practitioner',
  currentLabel: 'Practitioner',
  alternates: [
    {
      label: 'Admin',
      path: '/administrator-documentation/moderne-platform',
      sidebarCategory: 'platform.admin',
    },
    {
      label: 'Platform',
      path: '/platform-documentation/moderne-platform',
      sidebarCategory: 'platform.platform',
    },
    {
      label: 'Developer',
      path: '/developer-documentation/moderne-platform',
      sidebarCategory: 'platform.developer',
    },
  ],
};

/**
 * Default story showing the PersonaSwitcher with Practitioner persona selected.
 * Click the badge to open the dropdown and see the available persona options.
 */
export const PractitionerPersona: Story = {
  args: {
    metadata: practitionerMetadata,
  },
  parameters: {
    docs: {
      description: {
        story:
          'PersonaSwitcher displaying the Practitioner persona with the ability to switch to Admin persona. Click the badge to see the dropdown menu.',
      },
    },
  },
};

/**
 * Story showing the PersonaSwitcher with Admin persona selected.
 * Demonstrates the switcher from the admin perspective.
 */
export const AdminPersona: Story = {
  args: {
    metadata: adminMetadata,
  },
  parameters: {
    docs: {
      description: {
        story:
          'PersonaSwitcher displaying the Admin persona with the ability to switch to Practitioner persona.',
      },
    },
  },
};

/**
 * Story demonstrating multiple persona options (hypothetical scenario).
 * Shows how the switcher handles more than two personas.
 */
export const MultiplePersonas: Story = {
  args: {
    metadata: multiPersonaMetadata,
  },
  parameters: {
    docs: {
      description: {
        story:
          'PersonaSwitcher with multiple persona options. Demonstrates how the dropdown handles more than two alternate personas.',
      },
    },
  },
};

/**
 * Interactive story with stateful behavior showing persona switching.
 * This story demonstrates the full interaction flow including persona switching.
 */
export const InteractiveWithState: Story = {
  render: () => {
    const [currentPersona, setCurrentPersona] = useState<'practitioner' | 'admin'>('practitioner');

    const metadata: PersonaSwitcherMetadata =
      currentPersona === 'practitioner' ? practitionerMetadata : adminMetadata;

    // Override the metadata to actually switch personas in the story
    const interactiveMetadata: PersonaSwitcherMetadata = {
      ...metadata,
      alternates: metadata.alternates.map((alt) => ({
        ...alt,
        path: '#', // Prevent navigation in Storybook
      })),
    };

    return (
      <div>
        <div style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
          <p>
            <strong>Current Persona:</strong> {metadata.currentLabel}
          </p>
          <p style={{ fontSize: '12px', marginTop: '8px' }}>
            Click the badge to open the dropdown. Selecting an alternate persona will trigger a
            navigation (mocked in Storybook).
          </p>
        </div>
        <PersonaSwitcher metadata={interactiveMetadata} />
        <div style={{ marginTop: '24px', padding: '12px', background: '#f5f5f5', borderRadius: '4px' }}>
          <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>
            💡 <strong>Tip:</strong> In production, clicking an alternate persona navigates to the
            corresponding documentation section.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fully interactive story demonstrating the persona switcher behavior. Click the badge to open the dropdown and select different personas.',
      },
    },
  },
};

/**
 * Story showing all PersonaSwitcher states side-by-side for visual comparison.
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Practitioner State */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          Practitioner Persona
        </h3>
        <PersonaSwitcher metadata={practitionerMetadata} />
      </div>

      {/* Admin State */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Admin Persona</h3>
        <PersonaSwitcher metadata={adminMetadata} />
      </div>

      {/* Multiple Personas */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          Multiple Personas (Hypothetical)
        </h3>
        <PersonaSwitcher metadata={multiPersonaMetadata} />
      </div>

      <div style={{ marginTop: '16px', padding: '12px', background: '#f5f5f5', borderRadius: '4px' }}>
        <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>
          ℹ️ Each switcher above demonstrates different persona configurations. Click any badge to
          see the dropdown menu with available persona options.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Visual comparison of PersonaSwitcher in different states: Practitioner, Admin, and multiple personas.',
      },
    },
  },
};
