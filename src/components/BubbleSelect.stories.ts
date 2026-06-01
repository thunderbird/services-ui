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
    label: 'Select Days',
    required: false,
    disabled: false,
    singleSelection: false,
    bubbleGap: 'default',
    options: scheduleDayOptions,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  parameters: {
    docs: {
      source: {
        code: '<bubble-select\n  label="Select Days"\n  :options="[{ label: \'Sun\', value: \'Sunday\'}, ...]"\n/>',
      },
    },
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
  parameters: {
    docs: {
      source: {
        code: '<bubble-select\n  label="Select Days"\n  :options="[{ label: \'Sun\', value: \'Sunday\'}, ...]"\n  required\n/>',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: '<bubble-select\n  label="Select Days"\n  :options="[{ label: \'Sun\', value: \'Sunday\'}, ...]"\n  disabled\n/>',
      },
    },
  },
};

export const SingleSelection: Story = {
  args: {
    singleSelection: true,
  },
  parameters: {
    docs: {
      source: {
        code: '<bubble-select\n  label="Select Days"\n  :options="[{ label: \'Sun\', value: \'Sunday\'}, ...]"\n  single-selection\n/>',
      },
    },
  },
};

export const Gap: Story = {
  render: (args) => ({
    components: { BubbleSelect },
    setup() {
      return { args };
    },
    template: `<div style="display:flex;flex-direction:column;gap:1rem;">
      <bubble-select bubble-gap="default" label="Default" :options="args.options" />
      <bubble-select bubble-gap="large" label="Large" :options="args.options" />
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: '<bubble-select\n  label="Default"\n  :options="[{ label: \'Sun\', value: \'Sunday\'}, ...]"\n  bubble-gap="default"\n/>\n\n<bubble-select\n  label="Large"\n  :options="[{ label: \'Sun\', value: \'Sunday\'}, ...]"\n  bubble-gap="large"\n/>',
      },
    },
  },
};

export const Help: Story = {
  args: {
    required: true,
    help: 'Select a desired day',
  },
  parameters: {
    docs: {
      source: {
        code: '<bubble-select\n  label="Select Days"\n  :options="[{ label: \'Sun\', value: \'Sunday\'}, ...]"\n  help="Select a desired day"\n  required\n/>',
      },
    },
  },
};
