import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PrethinkQuestionDeck } from './PrethinkQuestionDeck';
import { PRETHINK_QUESTIONS } from './questions';

const meta: Meta<typeof PrethinkQuestionDeck> = {
  title: 'Components/PrethinkQuestionDeck',
  component: PrethinkQuestionDeck,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A deck of curated Prethink questions. Click the face-down deck to draw the top ' +
          'card onto the pile beside it. Reshuffle returns every card and deals a fresh order. ' +
          'Motion is suppressed under prefers-reduced-motion.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PrethinkQuestionDeck>;

/** The full curated set of 100 questions, as used in the docs. */
export const Default: Story = {};

/**
 * A short deck, for exercising the empty state quickly: draw three cards and the
 * deck runs out, leaving only Reshuffle as a way forward.
 */
export const NearlyEmpty: Story = {
  args: {
    questions: PRETHINK_QUESTIONS.slice(0, 3),
  },
};

/** A single very long question, to check that text fits the card at its worst case. */
export const LongestQuestion: Story = {
  args: {
    questions: [
      {
        id: 1,
        theme: 'Error handling',
        text:
          'Is error handling consistent across this codebase? Show me where we swallow ' +
          'exceptions, log-and-rethrow, or use different logging frameworks — then propose ' +
          'a single standard the codebase is already 80% aligned to.',
      },
    ],
  },
};
