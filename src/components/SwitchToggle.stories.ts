import { fn } from 'storybook/test';
import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import SwitchToggle from '@/components/SwitchToggle.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof SwitchToggle> = {
  title: 'Components/SwitchToggle',
  component: SwitchToggle,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    // Use `fn` to spy on the onChanged arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onChanged: fn(),
    // Spying on the update event breaks reactivity.
    // 'onUpdate:modelValue': fn(), // Spy on the update event for v-model
    disabled: false,
    label: null,
    noLegend: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  parameters: {
    docs: {
      source: {
        code: '<switch-toggle name="toggle" />',
      },
    },
  },
};

export const Label: Story = {
  args: {
    name: 'retro_mode',
    label: 'Activate retro mode',
  },
  parameters: {
    docs: {
      source: {
        code: '<switch-toggle name="retro_mode" label="Activate retro mode" />',
      },
    },
  },
};

export const Legend: Story = {
  args: {
    name: 'retro_mode',
    noLegend: false,
  },
  parameters: {
    docs: {
      source: {
        code: '<switch-toggle name="retro_mode" :no-legend="false" />',
      },
    },
  },
};

export const Disabled: Story = {
  render: () => ({
    components: { SwitchToggle },
    template: `
      <div style="display:flex;gap:1rem;align-items:center;">
        <switch-toggle name="toggle" :active="true" disabled />
        <switch-toggle name="toggle" disabled />
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<switch-toggle name="toggle" :active="true" disabled />\n<switch-toggle name="toggle" disabled />',
      },
    },
  },
};

export const VModel: Story = {
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
        <switch-toggle name="v-model" v-model="currentState" />
        <p><strong>Current State:</strong> {{ currentState ? 'ON' : 'OFF' }}</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<switch-toggle name="toggle" v-model="currentState" />\n\nCurrent State: {{ currentState ? "ON" : "OFF" }}',
      },
    },
  },
};

export const Events: Story = {
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
        <switch-toggle name="changed-event" @changed="handleChanged" />
        <p><strong>Current State:</strong> {{ currentState ? 'ON' : 'OFF' }}</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<switch-toggle name="toggle" @changed="(newState) => currentState = newState;" />\n\nCurrent State: {{ currentState ? "ON" : "OFF" }}',
      },
    },
  },
};
