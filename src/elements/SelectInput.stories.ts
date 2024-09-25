import { fn } from '@storybook/test';
import type {Meta, StoryObj} from '@storybook/vue3';

import SelectInput from "@/elements/SelectInput.vue";
import SyncCard from "@/elements/SyncCard.vue";
import {ref, watch} from "vue";
import CalendarIcon from "@/assets/svg/icons/calendar.svg";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Elements/SelectInput',
  component: SelectInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    name: 'example',
    default: "How many?",
    modelValue: 'all',
    options: [
      {label: 'All', value: 'all'},
      {label: 'Many', value: 'many'},
      {label: 'Some', value: 'some'},
    ]
  },
  render: (args) => ({
    components: {SelectInput},
    setup() {
      const model = ref(args.modelValue);

      watch(
        () => args.modelValue,
        (val) => {
          model.value = val;
        },
      );

      return {args, model};
    },
    template: `<select-input v-bind="args" v-model="model">{{ args?.default }}</select-input>`,
  }),
} satisfies Meta<typeof SelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    name: 'standard'
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    disabled: true,
  },
};


export const Required: Story = {
  args: {
    name: 'required',
    required: true,
  },
};