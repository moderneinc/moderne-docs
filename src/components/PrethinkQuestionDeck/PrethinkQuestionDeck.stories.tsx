import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PrethinkQuestionDeck } from './PrethinkQuestionDeck';

const meta: Meta<typeof PrethinkQuestionDeck> = {
  title: 'Components/PrethinkQuestionDeck',
  component: PrethinkQuestionDeck,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A deck of Prethink questions, authored as a markdown list inside the component. ' +
          'Each list item becomes a card, and a leading bold run becomes the card theme. ' +
          'Click the face-down deck to draw the top card onto the pile beside it. Reshuffle ' +
          'returns every card and deals a fresh order. Motion is suppressed under ' +
          'prefers-reduced-motion.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PrethinkQuestionDeck>;

/**
 * The shape a docs page produces: a markdown list compiles to a `<ul>` of
 * `<li>` elements, each opening with a bold theme.
 */
export const Default: Story = {
  args: {
    children: (
      <ul>
        <li>
          <strong>Architecture</strong> — Are there package-level dependency cycles? Which packages
          sit furthest from the main sequence, and what would it take to break the worst cycle?
        </li>
        <li>
          <strong>Code health</strong> — Which methods breach every complexity threshold at once —
          cyclomatic, cognitive, nesting, and parameter count?
        </li>
        <li>
          <strong>Testing</strong> — What are the 20 riskiest untested methods in this codebase, and
          why is each one risky?
        </li>
        <li>
          <strong>Dependencies</strong> — Which libraries do we lean on most heavily, and are they
          current?
        </li>
        <li>
          <strong>Error handling</strong> — Show me every catch block that neither logs nor rethrows.
        </li>
      </ul>
    ),
  },
};

/**
 * A short deck, for exercising the empty state quickly: draw two cards and the
 * deck runs out, leaving only Reshuffle as a way forward.
 */
export const NearlyEmpty: Story = {
  args: {
    children: (
      <ul>
        <li>
          <strong>Architecture</strong> — Which packages sit furthest from the main sequence?
        </li>
        <li>
          <strong>Testing</strong> — Is test coverage correlated with complexity here?
        </li>
      </ul>
    ),
  },
};

/** A single very long question, to check that text fits the card at its worst case. */
export const LongestQuestion: Story = {
  args: {
    children: (
      <ul>
        <li>
          <strong>Error handling</strong> — Is error handling consistent across this codebase? Show
          me where we swallow exceptions, log-and-rethrow, or use different logging frameworks — then
          propose a single standard the codebase is already 80% aligned to.
        </li>
      </ul>
    ),
  },
};

/** Themes are optional; an item with no bold run becomes an untitled card. */
export const WithoutThemes: Story = {
  args: {
    children: (
      <ul>
        <li>Which packages concentrate the most complexity per class?</li>
        <li>What is the single most surprising thing about this codebase?</li>
        <li>Where is this codebase healthiest — what should I not touch?</li>
      </ul>
    ),
  },
};
