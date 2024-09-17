import {fn} from '@storybook/test';
import type {Meta, StoryObj} from '@storybook/vue3';

import BubbleSelect from "@/elements/BubbleSelect.vue";
import type {SelectOption} from "@/models";
import NoticeBar from "@/elements/NoticeBar.vue";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Elements/NoticeBar',
  component: NoticeBar,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: {control: 'select', options: ['info', 'success', 'warning', 'error']},
  },
  args: {
    default: 'Hello World!',
    type: 'info',
  }
} satisfies Meta<typeof BubbleSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    default: 'You have 10,000 new emails.',
    type: 'info'
  },
};

export const Success: Story = {
  args: {
    default: 'You have 10,000 new emails.',
    type: 'success'
  },
};

export const Warning: Story = {
  args: {
    default: 'You have 10,000 new emails.',
    type: 'warning'
  },
};

export const Error: Story = {
  args: {
    default: 'You have 10,000 new emails.',
    type: 'error'
  },
};
