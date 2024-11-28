import type { Meta, StoryObj } from '@storybook/vue3';
import ExpiryIndicator from "@/elements/ExpiryIndicator.vue";
import { ExpiryUnitTypes } from "@/definitions";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof ExpiryIndicator> = {
  title: "Elements/ExpiryIndicator",
  component: ExpiryIndicator,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    timeRemaining: 10,
    warningThreshold: 5,
    timeUnit: ExpiryUnitTypes.Days,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    timeRemaining: 10,
    timeUnit: ExpiryUnitTypes.Years,
  },
};

export const Warning: Story = {
  args: {
    timeRemaining: 5,
    warningThreshold: 15,
    timeUnit: ExpiryUnitTypes.Minutes,
  },
};

export const Expired: Story = {
  args: {
    timeRemaining: 0,
  },
};
