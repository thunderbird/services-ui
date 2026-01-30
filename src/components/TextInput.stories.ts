import type { Meta, StoryObj } from '@storybook/vue3-vite';

import TextInput from '@/components/TextInput.vue';
import { useTemplateRef } from 'vue';

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
      <text-input name="standard-input" label="Full Name" placeholder="e.g. John Doe" />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="standard-input" label="Full Name" placeholder="e.g. John Doe" />`,
      },
    },
  },
};

export const Disabled: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="disabled-input" label="Full Name" placeholder="e.g. John Doe" disabled />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="disabled-input" label="Full Name" placeholder="e.g. John Doe" disabled />`,
      },
    },
  },
};

export const Required: Story = {
  decorators: [
    () => ({
      components: { TextInput },
      setup() {
        const input = useTemplateRef('input');
        return { input };
      },
      template: `
        <div>
          <text-input ref="input" name="required-input" label="Favourite Food?" placeholder="(e.g. Pizza)" help="Choose wisely." required />
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
        code: `<text-input name="required-input" label="Favourite Food?" placeholder="(e.g. Pizza)" help="Choose wisely." required />`,
      },
    },
  },
};

export const RequiredWithPlaceholder: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="required-input-with-placeholder" label="Favourite Food?" placeholder="Pizza" required />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="required-input-with-placeholder" label="Favourite Food?" placeholder="Pizza" required>`,
      },
    },
  },
};

export const RequiredWithOuterPrefix: Story = {
  decorators: [
    () => ({
      components: { TextInput },
      setup() {
        const input = useTemplateRef('input');
        return { input };
      },
      template: `
        <div>
          <text-input ref="input" name="required-input-with-outer-prefix" label="Favourite Food?" placeholder="(e.g. Pizza)" help="Choose wisely." outer-prefix="https://test.org/" required />
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
        code: `<text-input name="required-input-with-outer-prefix" label="Favourite Food?" placeholder="(e.g. Pizza)" help="Choose wisely." outer-prefix="https://test.org/" required />`,
      },
    },
  },
};

export const Autofocus: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="autofocus-input" label="Give me my Focus" placeholder="e.g. Aloy" autofocus />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="autofocus-input" label="Give me my Focus" placeholder="e.g. Aloy" autofocus />`,
      },
    },
  },
};

export const Help: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="help-input" label="Favourite Beverage" placeholder="e.g. Ginger ale" help="When in doubt, go with water." />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="help-input" label="Favourite Beverage" placeholder="e.g. Ginger ale" help="When in doubt, go with water." />`,
      },
    },
  },
};

export const Time: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input type="time" name="time-input" label="Current time" />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input type="time" name="time-input" label="Current time" />`,
      },
    },
  },
};

export const Email: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input type="email" name="email-input" label="Email Address" required />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input type="email" name="email-input" label="Email Address" required />`,
      },
    },
  },
};

export const Password: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input type="password" name="password-input" label="Password" required />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input type="password" name="password-input" label="Password" required />`,
      },
    },
  },
};

export const InnerPrefix: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input type="number" name="currency-input" label="Currency" placeholder="100.00" prefix="€" required />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input type="number" name="currency-input" label="Currency" placeholder="100.00" prefix="€" required />`,
      },
    },
  },
};

export const OuterPrefix: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="outer-prefix-input" label="Username" placeholder="handle" outer-prefix="https://test.org/" />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="outer-prefix-input" label="Username" placeholder="handle" outer-prefix="https://test.org/" />`,
      },
    },
  },
};

export const OuterSuffix: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="outer-suffix-input" label="Username" placeholder="handle" outer-suffix="https://test.org/" />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="outer-suffix-input" label="Username" placeholder="handle" outer-suffix="https://test.org/" />`,
      },
    },
  },
};

export const SmallText: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="small-text" label="Small text" placeholder="What are you gonna do" small-text />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="small-text" label="Small text" placeholder="What are you gonna do" small-text />`,
      },
    },
  },
};

export const SmallInput: Story = {
  render: () => ({
    components: { TextInput },
    template: `
      <text-input name="small-input" label="Small input" placeholder="Save some space" small-input />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-input name="small-input" label="Small input" placeholder="Save some space" small-input />`,
      },
    },
  },
};
