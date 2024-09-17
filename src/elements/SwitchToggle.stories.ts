import { fn } from '@storybook/test';
import type {Meta, StoryObj} from '@storybook/vue3';

import SwitchToggle from "@/elements/SwitchToggle.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
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
} satisfies Meta<typeof SwitchToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Legend: Story = {
  args: {
    noLegend: false
  },
};
export const NoLegend: Story = {
  args: {
    noLegend: true
  },
};
export const Disabled: Story = {
  args: {
    disabled: true
  },
};
