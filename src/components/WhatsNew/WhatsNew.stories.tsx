import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { WhatsNewEntry } from './WhatsNewEntry';
import { WhatsNewFeed } from './WhatsNewFeed';
import { WhatsNewFigure } from './WhatsNewFigure';
import { WhatsNewMonth } from './WhatsNewMonth';

const meta: Meta<typeof WhatsNewEntry> = {
  title: 'Components/WhatsNew',
  component: WhatsNewEntry,
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
    kind: { control: 'text' },
    title: { control: 'text' },
    badge: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof WhatsNewEntry>;

export const Feature: Story = {
  args: {
    product: 'platform',
    kind: 'Feature',
    title: 'See your agents’ work in the activity view',
    links: [{ label: 'Activity view documentation', to: '/user-documentation/moderne-platform/getting-started/activity-view' }],
    children: (
      <>
        <p>
          When you start a session with <code>mod &lt;agent&gt; chat</code>, that session now shows up in the activity
          view as a project. Each project holds the actions the agent took.
        </p>
        <WhatsNewFigure
          src="/img/whats-new/activity-view-agent-project.png"
          alt="The activity view listing agent sessions with their changesets"
          caption="Agent sessions in the activity view, with their changesets and the prompt that started them."
        />
        <ul>
          <li>A button on the project row shows the prompt and which agent ran it.</li>
          <li>Filter activity by name, type, status, who ran it, or when it ran.</li>
        </ul>
      </>
    ),
  },
};

export const Release: Story = {
  args: {
    product: 'cli',
    kind: 'Release v4.5.0',
    title: 'Moderne CLI v4.5.0',
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
    product: 'platform',
    kind: 'Notice',
    badge: 'Action required',
    title: 'Artifact distribution moves to a Moderne-hosted repository',
    links: [
      { label: 'Get access and credentials', to: '/user-documentation/recipes/accessing-the-code-genome-project' },
      { label: 'Contact support with questions', to: 'mailto:support@moderne.io' },
    ],
    children: (
      <p>
        OpenRewrite recipe artifacts, the Moderne CLI and wrapper, and open-source OpenRewrite modules are moving
        from Maven Central to a Moderne-hosted repository.
      </p>
    ),
  },
};

export const FeedWithFilters: Story = {
  render: () => (
    <WhatsNewFeed>
      <WhatsNewMonth label="August 2026">
        <WhatsNewEntry {...(Release.args as React.ComponentProps<typeof WhatsNewEntry>)} />
        <WhatsNewEntry {...(Feature.args as React.ComponentProps<typeof WhatsNewEntry>)} />
      </WhatsNewMonth>
      <WhatsNewMonth label="July 2026">
        <WhatsNewEntry {...(ActionRequired.args as React.ComponentProps<typeof WhatsNewEntry>)} />
      </WhatsNewMonth>
    </WhatsNewFeed>
  ),
};
