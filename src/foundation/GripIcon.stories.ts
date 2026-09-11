import type { Meta, StoryObj } from '@storybook/vue3-vite';

import GripIcon from '@/foundation/GripIcon.vue';

const meta: Meta<typeof GripIcon> = {
  title: 'Foundational Items/Grip Icon',
  component: GripIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  parameters: {
    docs: {
      source: { code: '<grip-icon />' },
    },
  },
};
