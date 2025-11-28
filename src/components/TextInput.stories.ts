import type { Meta, StoryObj } from '@storybook/vue3-vite';

import TextInput from '@/components/TextInput.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    name: 'example',
    default: 'Example Input',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="standard-input" placeholder="e.g. John Doe">Full Name</text-input>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="standard-input" placeholder="e.g. John Doe">
          Full Name
        </text-input>`
      },
    },
  },
};

export const Disabled: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="disabled-input" placeholder="e.g. John Doe" disabled>Full Name</text-input>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="disabled-input" placeholder="e.g. John Doe" disabled>
          Full Name
        </text-input>`
      },
    },
  },
};

export const Required: Story = {
  decorators: [
    () => ({
      components: { TextInput },
      template: `
        <div>
          <text-input name="required-input" placeholder="(e.g. Pizza)" help="Choose wisely." required>Favourite Food?</text-input>
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
          const input = document.querySelector('input[name="required-input"]') as HTMLInputElement;
          const invalidEvent = new Event('invalid', { bubbles: true });
          input.dispatchEvent(invalidEvent);
        },
        manualReset() {
          const inputElement = document.querySelector('input[name="required-input"]');

          // Access the exposed methods through the Vue component's public interface
          const componentExposed = (inputElement as any).__vueParentComponent?.exposed;
          componentExposed.reset();
        },
      },
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<text-input name="required-input" placeholder="(e.g. Pizza)" help="Choose wisely." required>
          Favourite Food?
        </text-input>`
      },
    },
  },
};

export const RequiredWithPlaceholder: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="required-input-with-placeholder" placeholder="Pizza" required>Favourite Food?</text-input>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="required-input-with-placeholder" placeholder="Pizza" required>
          Favourite Food?
        </text-input>`
      },
    },
  },
};

export const RequiredWithOuterPrefix: Story = {
  decorators: [
    () => ({
      components: { TextInput },
      template: `
        <div>
          <text-input name="required-input-with-outer-prefix" placeholder="(e.g. Pizza)" help="Choose wisely." outer-prefix="https://test.org/" required>Favourite Food?</text-input>
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
          const input = document.querySelector('input[name="required-input-with-outer-prefix"]') as HTMLInputElement;
          const invalidEvent = new Event('invalid', { bubbles: true });
          input.dispatchEvent(invalidEvent);
        },
        manualReset() {
          const inputElement = document.querySelector('input[name="required-input-with-outer-prefix"]');

          // Access the exposed methods through the Vue component's public interface
          const componentExposed = (inputElement as any).__vueParentComponent?.exposed;
          componentExposed.reset();
        },
      },
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<text-input name="required-input-with-outer-prefix" placeholder="(e.g. Pizza)" help="Choose wisely." outer-prefix="https://test.org/" required>
          Favourite Food?
        </text-input>`
      },
    },
  },
};

export const Autofocus: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="autofocus-input" placeholder="e.g. Aloy" autofocus>Give me my Focus</text-input>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="autofocus-input" placeholder="e.g. Aloy" autofocus>
          Give me my Focus
        </text-input>`
      },
    },
  },
};

export const Help: Story = {
  args: {
    name: 'help-input',
    default: 'Favourite Beverage',
    placeholder: 'e.g. Ginger ale',
    help: 'When in doubt, go with water.',
  },
};

export const Time: Story = {
  args: {
    name: 'time-input',
    default: 'Current Time',
    type: 'time',
  },
};

export const Email: Story = {
  args: {
    name: 'email-input',
    default: 'Email Address',
    type: 'email',
    required: true,
  },
};

export const Password: Story = {
  args: {
    name: 'password-input',
    default: 'Password',
    type: 'password',
    required: true,
  },
};

export const InnerPrefix: Story = {
  args: {
    name: 'currency-input',
    default: 'Currency',
    placeholder: '100.00',
    required: true,
    prefix: '€',
  },
};

export const OuterPrefix: Story = {
  args: {
    name: 'outer-prefix-input',
    default: 'Username',
    placeholder: 'handle',
    outerPrefix: 'https://test.org/',
  },
};

export const OuterSuffix: Story = {
  args: {
    name: 'outer-suffix-input',
    default: 'Username',
    placeholder: 'handle',
    outerSuffix: '@example.org',
  },
};

export const SmallText: Story = {
  args: {
    name: 'small-text',
    default: 'Small text',
    placeholder: 'What are you gonna do',
    smallText: true,
  },
};

export const SmallInput: Story = {
  args: {
    name: 'small-input',
    default: 'Small input',
    placeholder: 'Save some space',
    smallInput: true,
  },
};
