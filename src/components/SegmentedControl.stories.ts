import { fn } from 'storybook/test';
import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { SelectOption } from '@/models';
import SegmentedControl from '@/components/SegmentedControl.vue';

const selectOptions: SelectOption<number>[] = [
  {
    label: 'Instant',
    value: 0,
  },
  {
    label: '12 hours',
    value: 12,
  },
  {
    label: 'a day',
    value: 24,
  },
  {
    label: '2 days',
    value: 48,
  },
  {
    label: '3 days',
    value: 72,
  },
  {
    label: '4 days',
    value: 96,
  },
  {
    label: '5 days',
    value: 120,
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
    label: 'Select a minimum duration',
    options: selectOptions,
    required: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  parameters: {
    docs: {
      source: {
        code: '<segmented-control\n  label="Select a minimum duration"\n  :options="[{ label: \'Instant\', value: 0 }, ...]"\n/>',
      },
    },
  },
};

export const Required: Story = {
  args: {
    label: 'Required segmented control',
    required: true,
  },
  parameters: {
    docs: {
      source: {
        code: '<segmented-control\n  label="Select a minimum duration"\n  :options="[{ label: \'Instant\', value: 0 }, ...]"\n  required\n/>',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled segmented control',
    disabled: true,
    modelValue: 48,
  },
  parameters: {
    docs: {
      source: {
        code: '<segmented-control\n  label="Select a minimum duration"\n  :options="[{ label: \'Instant\', value: 0 }, ...]"\n  disabled\n/>',
      },
    },
  },
};

export const VModel: Story = {
  render: (args) => ({
    components: { SegmentedControl },
    setup() {
      const options = selectOptions;
      const currentState = ref(24);

      return {
        ...args,
        options,
        currentState,
      };
    },
    template: `
      <div>
        <segmented-control
          label="With external v-model"
          v-model="currentState"
          :label="'Click me to trigger events'"
          :options="options"
        />
        <p><strong>Current State:</strong> {{ currentState }}</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<segmented-control\n  label="With external v-model"\n  v-model="state"\n  :options="[{ label: \'Instant\', value: 0 }, ...]"\n/>',
      },
    },
  },
};

export const OptionBadges: Story = {
  args: {
    label: 'Todo',
    options: [
      {
        label: 'Backlog',
        value: 0,
      },
      {
        label: 'In progress',
        value: 1,
      },
      {
        label: 'Done',
        value: 2,
      },
      {
        label: 'Blocked',
        value: 3,
      },
    ],
    optionBadges: {
      0: '256',
      1: '2',
      2: '14',
    },
    modelValue: 0,
  },
  parameters: {
    docs: {
      source: {
        code: '<segmented-control\n  label="Todo"\n  :options="[\n    { label: \'Backlog\', value: 0 },\n    { label: \'In progress\', value: 1 },\n    { label: \'Done\', value: 2 },\n    { label: \'Blocked\', value: 3 },\n  ]"\n  option-badges="{ 0: \'256\', 1: \'2\', 2: \'14\' }"\n/>',
      },
    },
  },
};
