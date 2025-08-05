import type { Meta, StoryObj } from '@storybook/vue3-vite';

import RefreshIcon from '@/icons/RefreshIcon.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof RefreshIcon> = {
  title: 'Icons/Refresh',
  component: RefreshIcon,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  parameters: {
    docs: {
      source: { code: '<refresh-icon />' },
    },
  },
};
