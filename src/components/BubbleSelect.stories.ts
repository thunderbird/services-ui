import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BubbleSelect from '@/components/BubbleSelect.vue';
import type { SelectOption } from '@/models';

const scheduleDayOptions: SelectOption<string>[] = [
  {
    label: 'Sun',
    value: 'Sunday',
  },
  {
    label: 'Mon',
    value: 'Monday',
  },
  {
    label: 'Tue',
    value: 'Tuesday',
  },
  {
    label: 'Wed',
    value: 'Wednesday',
  },
  {
    label: 'Thu',
    value: 'Thursday',
  },
  {
    label: 'Fri',
    value: 'Friday',
  },
  {
    label: 'Sat',
    value: 'Saturday',
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof BubbleSelect> = {
  title: 'Components/BubbleSelect',
  component: BubbleSelect,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
    disabled: false,
    options: scheduleDayOptions,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Weekdays: Story = {
  args: {
    default: 'Select Days',
    required: true,
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
    required: false,
  },
};
export const SingleSelection: Story = {
  args: {
    singleSelection: true,
  },
};
export const LargeGap: Story = {
  args: {
    default: 'Select Days',
    bubbleGap: 'large',
  },
};
export const WithHelp: Story = {
  args: {
    default: 'Select Days',
    required: true,
    help: 'Select a desired day'
  },
};
