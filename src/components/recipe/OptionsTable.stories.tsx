import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { OptionsTable } from './OptionsTable';
import { OptionsTable as ProtoOptionsTable } from './_prototype/OptionsTable';
import { Compare } from './_prototype/Compare';
import { replaceDuplicateStringLiteralsContent as content } from './_sampleData/replaceDuplicateStringLiterals.data';

/** Options table. Production is a verbatim port of the prototype (only the type import path changed). */
const meta: Meta<typeof OptionsTable> = {
  title: 'Recipe/OptionsTable',
  component: OptionsTable,
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof OptionsTable>;

export const Production: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 920 }}>
      <OptionsTable options={content.options} />
    </div>
  ),
};

export const Comparison: Story = {
  render: () => (
    <Compare
      prototype={<ProtoOptionsTable options={content.options} />}
      production={<OptionsTable options={content.options} />}
    />
  ),
};
