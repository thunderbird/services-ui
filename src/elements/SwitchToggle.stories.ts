import { fn } from 'storybook/test';
import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import SwitchToggle from '@/elements/SwitchToggle.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof SwitchToggle> = {
  title: 'Elements/SwitchToggle',
  component: SwitchToggle,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onChanged: fn(),
    // Spying on the update event breaks reactivity.
    // 'onUpdate:modelValue': fn(), // Spy on the update event for v-model
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
    modelValue: false,
  },
};
export const NoLegend: Story = {
  args: {
    name: 'nolegend',
    noLegend: true,
    modelValue: false,
  },
};
export const Disabled: Story = {
  args: {
    name: 'disabled',
    disabled: true,
    modelValue: false,
  },
};

export const WithVModel: Story = {
  render: (args) => ({
    components: { SwitchToggle },
    setup() {
      const currentState = ref(false);

      return {
        ...args,
        currentState,
      };
    },
    template: `
      <div>
        <SwitchToggle
          name="with-vmodel"
          v-model="currentState"
          :label="'Click me to trigger events'"
        />
        <p><strong>Current State:</strong> {{ currentState ? 'ON' : 'OFF' }}</p>
      </div>
    `,
  }),
};

export const WithoutVModel: Story = {
  render: (args) => ({
    components: { SwitchToggle },
    setup() {
      const currentState = ref(false);

      const handleChanged = (newState: boolean) => {
        currentState.value = newState;
      };

      return {
        ...args,
        currentState,
        handleChanged,
      };
    },
    template: `
      <div>
        <SwitchToggle
          name="without-vmodel"
          @changed="handleChanged"
          :label="'Click me to trigger events'"
        />
        <p><strong>Current State:</strong> {{ currentState ? 'ON' : 'OFF' }}</p>
      </div>
    `,
  }),
};
