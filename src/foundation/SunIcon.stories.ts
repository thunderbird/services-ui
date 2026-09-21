import type { Meta, StoryObj } from '@storybook/vue3-vite';

import SunIcon from '@/foundation/SunIcon.vue';

const meta: Meta<typeof SunIcon> = {
  title: 'Foundational Items/Sun Icon',
  component: SunIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  parameters: {
    docs: {
      source: { code: '<sun-icon />' },
    },
  },
};
