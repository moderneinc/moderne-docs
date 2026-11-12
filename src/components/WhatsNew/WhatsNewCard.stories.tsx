import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { WhatsNewCard } from './WhatsNewCard';
import { WhatsNewMonth } from './WhatsNewMonth';

const meta: Meta<typeof WhatsNewCard> = {
  title: 'Components/WhatsNewCard',
  component: WhatsNewCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    product: {
      control: 'select',
      options: ['platform', 'cli', 'dx', 'openrewrite', 'agents', 'moddy', 'docs', 'moderne'],
      description: 'Which product the update belongs to',
    },
    tone: {
      control: 'select',
      options: ['default', 'warning'],
      description: 'Warning tone tints the card for notices that need action',
    },
    kind: { control: 'text' },
    title: { control: 'text' },
    badge: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof WhatsNewCard>;

export const Feature: Story = {
  args: {
    product: 'platform',
    kind: 'Feature',
    title: 'Code Search comes to the Moderne Platform',
    links: [
      { label: 'Code Search documentation', to: '/user-documentation/moderne-platform/getting-started/code-search' },
      { label: 'Try it in the public Moderne app', to: 'https://app.moderne.io' },
    ],
    children: (
      <>
        <p>
          The type-aware search Trigrep provides in the CLI is now available in the platform. Because the index
          includes LST type information, Code Search returns exact matches for a class or method across all of your
          organization's code.
        </p>
        <ul>
          <li>Search by dependency to find every file still using a framework version.</li>
          <li>Saved searches appear in the activity view, just like a search recipe.</li>
        </ul>
      </>
    ),
  },
};

export const Release: Story = {
  args: {
    product: 'cli',
    kind: 'Release · v4.12.8',
    title: 'Moderne CLI v4.12.8',
    links: [{ label: 'Full release notes', to: '/releases/cli-releases' }],
    children: (
      <ul>
        <li>
          <strong>One release track.</strong> Separate stable and staging builds are gone. Every CLI release is
          fully tested and production-ready.
        </li>
      </ul>
    ),
  },
};

export const ActionRequired: Story = {
  args: {
    product: 'openrewrite',
    kind: 'Notice',
    tone: 'warning',
    badge: 'Action required',
    title: 'Artifact distribution moves to a Moderne-hosted repository',
    links: [
      { label: 'Configure access', to: '/user-documentation/recipes/accessing-the-code-genome-project' },
      { label: 'Contact support', to: 'mailto:support@moderne.io' },
    ],
    children: (
      <p>
        OpenRewrite recipe artifacts, the Moderne CLI and wrapper, and open-source OpenRewrite modules are moving
        from Maven Central to a Moderne-hosted repository.
      </p>
    ),
  },
};

export const Preview: Story = {
  args: {
    product: 'agents',
    kind: 'Coming soon',
    badge: 'Preview',
    title: 'Moderne Factory',
    children: <p>A goal-driven code evolution engine for your entire portfolio.</p>,
  },
};

export const MonthSection: Story = {
  render: () => (
    <WhatsNewMonth label="October 2026">
      <WhatsNewCard {...(Feature.args as React.ComponentProps<typeof WhatsNewCard>)} />
      <WhatsNewCard {...(Release.args as React.ComponentProps<typeof WhatsNewCard>)} />
      <WhatsNewCard {...(ActionRequired.args as React.ComponentProps<typeof WhatsNewCard>)} />
    </WhatsNewMonth>
  ),
};
