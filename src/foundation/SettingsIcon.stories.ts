import type { Meta, StoryObj } from '@storybook/vue3-vite';

import SettingsIcon from '@/foundation/SettingsIcon.vue';

const meta: Meta<typeof SettingsIcon> = {
  title: 'Foundational Items/Settings Icon',
  component: SettingsIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  parameters: {
    docs: {
      source: { code: '<settings-icon />' },
    },
  },
};
