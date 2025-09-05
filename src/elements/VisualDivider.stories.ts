import type { Meta, StoryObj } from '@storybook/vue3-vite';

import VisualDivider from '@/elements/VisualDivider.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof VisualDivider> = {
  title: 'Elements/VisualDivider',
  component: VisualDivider,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['horizontal', 'vertical'] },
  },
  decorators:
    // Make it a little more obvious what we're looking at by framing the divider
    (_, {}) => {
      return {
        template: `<section style="width: 256px; height: 256px; padding: 32px; border: 1px lightgrey solid; display: flex; justify-content: center; align-items: center;"><story/></section>`,
      };
    },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const HorziontalDivider: Story = {
  args: {
    type: 'horizontal',
  },
};

export const VerticalDivider: Story = {
  args: {
    type: 'vertical',
  },
};
