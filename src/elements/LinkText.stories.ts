import type { Meta, StoryObj } from '@storybook/vue3-vite';

import LinkText from '@/elements/LinkText.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof LinkText> = {
  title: 'Elements/LinkText',
  component: LinkText,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'primary'] },
    default: { control: 'text' },
  },
  args: {
    default: 'Recommended',
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
    default: 'Default link text',
  },
};

export const Primary: Story = {
  args: {
    type: 'primary',
    default: 'Primary link text'
  },
};
