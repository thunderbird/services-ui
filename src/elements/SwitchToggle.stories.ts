import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import SwitchToggle from "@/elements/SwitchToggle.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof SwitchToggle> = {
  title: 'Elements/SwitchToggle',
  component: SwitchToggle,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onChanged: fn(),
    active: true,
    disabled: false,
    label: 'Switch Toggle',
    noLegend: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Legend: Story = {
  args: {
    name: 'legend',
    noLegend: false,
    active: false,
  },
};
export const NoLegend: Story = {
  args: {
    name: 'nolegend',
    noLegend: true,
    active: false,
  },
};
export const Disabled: Story = {
  args: {
    name: 'disabled',
    disabled: true,
    active: false,
  },
};
