import type { Meta, StoryObj } from '@storybook/vue3-vite';

import SelectInput from '@/components/SelectInput.vue';
import { ref, useTemplateRef, watch } from 'vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof SelectInput> = {
  title: 'Components/SelectInput',
  component: SelectInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    name: 'example',
    label: 'How many?',
    modelValue: 'all',
    options: [
      { label: 'All', value: 'all' },
      { label: 'Many', value: 'many' },
      { label: 'Some', value: 'some' },
    ],
  },
  render: (args) => ({
    components: { SelectInput },
    setup() {
      const model = ref(args.modelValue);

      watch(
        () => args.modelValue,
        (val) => {
          model.value = val;
        }
      );

      return { args, model };
    },
    template: `<select-input v-bind="args" v-model="model">{{ args?.default }}</select-input>`,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    name: 'standard',
  },
};

export const Disabled: Story = {
  render: () => ({
    components: { SelectInput },
    template: `
      <select-input name="select-disabled" disabled />
    `,
  }),
  parameters: {
    docs: {
      source: { code: '<select-input name="select-disabled" :options="[...]" disabled />' },
    },
  },
};

export const Required: Story = {
  args: {
    name: 'required',
    modelValue: '',
    help: 'Choose wisely.',
    options: [
      { label: '', value: '' },
      { label: 'All', value: 'all' },
      { label: 'Many', value: 'many' },
      { label: 'Some', value: 'some' },
    ],
  },
  render: (args) => ({
    components: { SelectInput },
    setup() {
      const input = useTemplateRef('input');
      return { args, input };
    },
    template: `
      <div>
        <select-input v-bind="args" ref="input" required />
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;margin-top: 0.5rem;">
          <button @click="triggerInvalid">
            Trigger Invalid State
          </button>
          <button @click="input.reset()">
            Manual Reset
          </button>
        </div>
      </div>
    `,
    methods: {
      triggerInvalid() {
        const input = document.querySelector('select[name="required"]') as HTMLSelectElement;
        const invalidEvent = new Event('invalid', { bubbles: true });
        input.dispatchEvent(invalidEvent);
      },
    },
  }),
};

export const Autofocus: Story = {
  args: {
    name: 'autofocus-select',
    label: 'Get Focus from',
    options: [
      { label: 'Aloy', value: 'aloy' },
      { label: 'Rost', value: 'rost' },
      { label: 'Sylens', value: 'sylens' },
    ],
  },
  render: (args) => ({
    components: { SelectInput },
    setup() {
      return { args };
    },
    template: `
      <select-input v-bind="args" autofocus />
    `,
  }),
  parameters: {
    docs: {
      source: { code: '<select-input name="select-autofocus" :options="[...]" disabled />' },
    },
  },
};
