import {fn} from '@storybook/test';
import type {Meta, StoryObj} from '@storybook/vue3';

import BubbleSelect from "@/elements/BubbleSelect.vue";
import type {SelectOption} from "@/models";
import ExpiryIndicator from "@/elements/ExpiryIndicator.vue";
import { ExpiryUnitTypes } from "@/definitions";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Elements/ExpiryIndicator",
  component: ExpiryIndicator,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    timer: 10,
    warn: 5,
    unit: ExpiryUnitTypes.Days,
  },
} satisfies Meta<typeof BubbleSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    timer: 10,
    unit: ExpiryUnitTypes.Years,
  },
};

export const Warning: Story = {
  args: {
    timer: 5,
    warn: 15,
    unit: ExpiryUnitTypes.Minutes,
  },
};

export const Expired: Story = {
  args: {
    timer: 0,
  },
};
