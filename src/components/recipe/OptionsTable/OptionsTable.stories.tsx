import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { OptionsTable } from './OptionsTable';
import { StoryLayout } from '../shared/storyLayout';
import { replaceDuplicateStringLiteralsContent as content } from '../shared/sampleData/replaceDuplicateStringLiterals.data';

/**
 * Options table. The `## Options` heading is passed as children and a metrics row (parameter count +
 * required/optional tally) sits on the right of the heading.
 */
const meta: Meta<typeof OptionsTable> = {
  title: 'Recipe/OptionsTable',
  component: OptionsTable,
  parameters: { layout: 'fullscreen', maxWidth: 920 },
  decorators: [StoryLayout],
};
export default meta;
type Story = StoryObj<typeof OptionsTable>;

export const Production: Story = {
  args: { options: content.options, children: <h2>Options</h2> },
};

/** A denser, mixed set — required + optional, with and without examples, short and long
 *  descriptions — to show the two-line rhythm and the between-option dividers. */
export const ManyOptions: Story = {
  args: {
    children: <h2>Options</h2>,
    options: [
      {
        name: 'oldPackageName',
        type: 'String',
        required: true,
        example: 'com.example.old',
        description: 'The fully-qualified package name to replace.',
      },
      {
        name: 'newPackageName',
        type: 'String',
        required: true,
        example: 'com.example.new',
        description: 'The fully-qualified package name to use instead.',
      },
      {
        name: 'includeTestSources',
        type: 'Boolean',
        required: false,
        example: 'true',
        description:
          'Changes only apply to main by default. `includeTestSources` will apply the recipe to `test` source files as well, which is useful when test code references the renamed package.',
      },
      {
        name: 'recursive',
        type: 'Boolean',
        required: false,
        description: 'Whether to also rename sub-packages nested beneath the target package.',
      },
      {
        name: 'fileMatcher',
        type: 'String',
        required: false,
        example: '**/*.java',
        description:
          'A glob applied to each source file path to narrow which files the recipe visits. When omitted, every matching source file is considered.',
      },
    ],
  },
};
