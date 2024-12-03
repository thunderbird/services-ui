import type { Meta, StoryObj } from '@storybook/vue3';

import BaseBadge from "@/elements/BaseBadge.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof BaseBadge> = {
  title: "Elements/Badge",
  component: BaseBadge,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["primary", "secondary", "warning"] },
    icon: { control: "boolean" },
    default: { control: "text" },
  },
  args: {
    default: "Recommended",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "primary",
    icon: false,
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    icon: false,
    default: "Updated",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    icon: false,
    default: "Experimental"
  },
};

export const IconPrimary: Story = {
  args: {
    type: "primary",
    icon: true,
  },
};

export const IconSecondary: Story = {
  args: {
    type: "secondary",
    icon: true,
    default: "Updated",
  },
};

export const IconWarning: Story = {
  args: {
    type: "warning",
    icon: true,
    default: "Experimental",
  },
};
