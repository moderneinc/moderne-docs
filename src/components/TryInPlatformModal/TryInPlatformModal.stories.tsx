import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TryInPlatformModal } from './TryInPlatformModal';

const meta: Meta<typeof TryInPlatformModal> = {
  title: 'Components/TryInPlatformModal',
  component: TryInPlatformModal,
};
export default meta;

type Story = StoryObj<typeof TryInPlatformModal>;

export const Open: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <TryInPlatformModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
        recipeName="Upgrade to Java 21"
      />
    );
  },
};
