import type { Meta, StoryObj } from '@storybook/vue3-vite';
import CheckboxInput from '@/components/CheckboxInput.vue';
import { useTemplateRef } from 'vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof CheckboxInput> = {
  title: 'Components/CheckboxInput',
  component: CheckboxInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    name: 'example',
    label: 'Example Checkbox Input',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    name: 'standard',
    label: 'I agree to the terms and conditions',
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    label: 'I agree to the terms and conditions',
  },
  render: (args) => ({
    components: { CheckboxInput },
    setup() {
      return { args };
    },
    template: `
      <checkbox-input name="disabled" disabled label="${args.label}" />
    `,
  }),
};

export const Checked: Story = {
  render: (args) => ({
    components: { CheckboxInput },
    setup() {
      return { args };
    },
    template: `
      <checkbox-input name="checked" label="I agree to the terms and conditions" checked />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<checkbox-input name="checked" label="I agree to the terms and conditions" checked />'
      },
    },
  },
};

export const OnChangeEvent: Story = {
  args: {
    name: 'on-change-event',
    label: 'I agree to the terms and conditions',
  },
  decorators: [
    (story) => ({
      components: { story },
      data() {
        return {
          checkboxState: 'unchecked',
        };
      },
      template: `
        <div>
          <story @change="handleChange" />
          <p><strong>Current checkbox state:</strong> {{ checkboxState }}</p>
        </div>
      `,
      methods: {
        handleChange(newValue: boolean) {
          this.checkboxState = newValue ? 'checked' : 'unchecked';
        },
      },
    }),
  ],
};

export const Required: Story = {
  render: () => ({
    components: { CheckboxInput },
    setup() {
      const input = useTemplateRef('input');
      return { input };
    },
    template: `
      <div>
        <checkbox-input ref="input" name="required-checkbox" label="I agree to the terms and conditions" help="All good. Nothing to see here" required />
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-block-start: 1rem;">
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
        const input = document.querySelector('#required-checkbox');
        if (input) {
          const invalidEvent = new Event('invalid', { bubbles: true });
          input.dispatchEvent(invalidEvent);
        }
      },
    },
  }),
  parameters: {
    docs: {
      source: {
        code: '<checkbox-input name="required" label="I agree ..." help="All good..." required />'
      },
    },
  },
};

export const Autofocus: Story = {
  render: (args) => ({
    components: { CheckboxInput },
    setup() {
      return { args };
    },
    template: `
      <checkbox-input name="autofocus-input" label="Get focus" autofocus />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<checkbox-input name="autofocus-input" label="Get focus" autofocus />'
      },
    },
  },
};

export const Help: Story = {
  args: {
    name: 'help',
    label: 'I agree to the terms and conditions',
    help: 'There is no catch here, we promise.',
  },
};

export const CustomClass: Story = {
  render: (args) => ({
    components: { CheckboxInput },
    setup() {
      return { args };
    },
    template: `
      <checkbox-input name="custom-class" label="Red Dragon" class="red-dragon" help="The visual Checkbox element has a class .red-dragon applied" />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<checkbox-input name="custom-class" label="Red Dragon" class="red-dragon" />'
      },
    },
  },
};
