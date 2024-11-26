import {fn} from '@storybook/test';
import type {Meta, StoryObj} from '@storybook/vue3';

import BubbleSelect from "@/elements/BubbleSelect.vue";
import type {SelectOption} from "@/models";
import ExpiryIndicator from "@/elements/ExpiryIndicator.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Elements/ExpiryIndicator",
  component: ExpiryIndicator,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    days: 10,
  },
} satisfies Meta<typeof BubbleSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    days: 10
  },
};

export const Warning: Story = {
  args: {
    days: 1
  },
};

export const Expired: Story = {
  args: {
    days: 0
  },
};
