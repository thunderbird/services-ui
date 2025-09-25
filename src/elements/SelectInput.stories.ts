import type { Meta, StoryObj } from '@storybook/vue3-vite';

import SelectInput from '@/elements/SelectInput.vue';
import { ref, watch } from 'vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof SelectInput> = {
  title: 'Elements/SelectInput',
  component: SelectInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    name: 'example',
    default: 'How many?',
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
  args: {
    name: 'disabled',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    name: 'required',
    required: true,
    modelValue: '',
    help: 'Choose wisely.',
    options: [
      { label: '', value: '' },
      { label: 'All', value: 'all' },
      { label: 'Many', value: 'many' },
      { label: 'Some', value: 'some' },
    ],
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div>
          <story />
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;margin-top: 0.5rem;">
            <button @click="triggerInvalid">
              Trigger Invalid State
            </button>
            <button @click="manualReset">
              Manual Reset
            </button>
          </div>
        </div>
      `,
      methods: {
        triggerInvalid() {
          const input = document.querySelector('select[name="required"]') as HTMLInputElement;
          const invalidEvent = new Event('invalid', { bubbles: true });
          input.dispatchEvent(invalidEvent);
        },
        manualReset() {
          const inputElement = document.querySelector('select[name="required"]');

          // Access the exposed methods through the Vue component's public interface
          const componentExposed = (inputElement as any).__vueParentComponent?.exposed;
          componentExposed.reset();
        },
      },
    }),
  ],
};
