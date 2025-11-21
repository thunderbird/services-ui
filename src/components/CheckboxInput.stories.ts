import type { Meta, StoryObj } from '@storybook/vue3-vite';
import CheckboxInput from '@/components/CheckboxInput.vue';

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
  args: {
    name: 'checked',
    label: 'I agree to the terms and conditions',
    checked: true,
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
        handleChange(event) {
          this.checkboxState = event.target.checked ? 'checked' : 'unchecked';
        },
      },
    }),
  ],
};

export const Required: Story = {
  args: {
    name: 'required',
    label: 'I agree to the terms and conditions',
    help: 'All good. Nothing to see here',
    required: true,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div>
          <story />
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-block-start: 1rem;">
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
          const input = document.querySelector('#required');
          if (input) {
            const invalidEvent = new Event('invalid', { bubbles: true });
            input.dispatchEvent(invalidEvent);
          }
        },
        manualReset() {
          const input = document.querySelector('#required');

          // Access the exposed methods through the Vue component's public interface
          const componentExposed = (input as any).__vueParentComponent?.exposed;
          componentExposed.reset();
        },
      },
    }),
  ],
};

export const Autofocus: Story = {
  args: {
    name: 'autofocus-input',
    label: 'Get Focus',
    autofocus: true,
  },
};

export const Help: Story = {
  args: {
    name: 'help',
    label: 'I agree to the terms and conditions',
    help: 'There is no catch here, we promise.',
  },
};
