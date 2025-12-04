import type { Meta, StoryObj } from '@storybook/vue3-vite';

import TextInput from '@/components/TextInput.vue';
import { ref } from 'vue';

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
      setup() {
        const customRef = ref(null);
        return { customRef };
      },
      template: `
        <div>
          <text-input ref="customRef" name="required-input" placeholder="(e.g. Pizza)" help="Choose wisely." required>Favourite Food?</text-input>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;margin-top: 0.5rem;">
            <button @click="triggerInvalid">
              Trigger Invalid State
            </button>
            <button @click="customRef.reset()">
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
      setup() {
        const customRef = ref(null);
        return { customRef };
      },
      template: `
        <div>
          <text-input ref="customRef" name="required-input-with-outer-prefix" placeholder="(e.g. Pizza)" help="Choose wisely." outer-prefix="https://test.org/" required>Favourite Food?</text-input>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;margin-top: 0.5rem;">
            <button @click="triggerInvalid">
              Trigger Invalid State
            </button>
            <button @click="customRef.reset()">
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
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="help-input" placeholder="e.g. Ginger ale" help="When in doubt, go with water.">Favourite Beverage</text-input>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="help-input" placeholder="e.g. Ginger ale" help="When in doubt, go with water.">
          Favourite Beverage
        </text-input>`
      },
    },
  },
};

export const Time: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input type="time" name="time-input">Current time</text-input>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input type="time" name="time-input">
          Current time
        </text-input>`
      },
    },
  },
};

export const Email: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input type="email" name="email-input" required>Email Address</text-input>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input type="email" name="email-input" required>
          Email Address
        </text-input>`
      },
    },
  },
};

export const Password: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input type="password" name="password-input" required>Password</text-input>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input type="password" name="password-input" required>
          Password
        </text-input>`
      },
    },
  },
};

export const InnerPrefix: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input type="number" name="currency-input" placeholder="100.00" prefix="€" required>Currency</text-input>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input type="number" name="currency-input" placeholder="100.00" prefix="€" required>
          Currency
        </text-input>`
      },
    },
  },
};

export const OuterPrefix: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="outer-prefix-input" placeholder="handle" outer-prefix="https://test.org/">Username</text-input>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="outer-prefix-input" placeholder="handle" outer-prefix="https://test.org/">
          Username
        </text-input>`
      },
    },
  },
};

export const OuterSuffix: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="outer-suffix-input" placeholder="handle" outer-suffix="https://test.org/">Username</text-input>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="outer-suffix-input" placeholder="handle" outer-suffix="https://test.org/">
          Username
        </text-input>`
      },
    },
  },
};

export const SmallText: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="small-text" placeholder="What are you gonna do" small-text>Small text</text-input>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="small-text" placeholder="What are you gonna do" small-text>
          Small text
        </text-input>`
      },
    },
  },
};

export const SmallInput: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="small-input" placeholder="Save some space" small-input>Small input</text-input>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="small-input" placeholder="Save some space" small-input>
          Small input
        </text-input>`
      },
    },
  },
};
