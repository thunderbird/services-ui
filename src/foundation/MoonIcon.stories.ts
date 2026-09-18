import type { Meta, StoryObj } from '@storybook/vue3-vite';

import MoonIcon from '@/foundation/MoonIcon.vue';

const meta: Meta<typeof MoonIcon> = {
  title: 'Foundational Items/Moon Icon',
  component: MoonIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  parameters: {
    docs: {
      source: { code: '<moon-icon />' },
    },
  },
};
