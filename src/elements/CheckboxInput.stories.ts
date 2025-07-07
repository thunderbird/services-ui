import type { Meta, StoryObj } from '@storybook/vue3';
import CheckboxInput from '@/elements/CheckboxInput.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof CheckboxInput> = {
  title: 'Elements/CheckboxInput',
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
    label: 'I agree to the terms and conditions.',
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    label: 'I agree to the terms and conditions.',
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    name: 'checked',
    label: 'I agree to the terms and conditions.',
    checked: true,
  },
};

export const Required: Story = {
  args: {
    name: 'required',
    label: 'I agree to the terms and conditions.',
    required: true,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div>
          <story />
          <button @click="triggerInvalid">
            Force trigger invalid state
          </button>
        </div>
      `,
      methods: {
        triggerInvalid() {
          const input = document.querySelector('#required');
          if (input) {
            const invalidEvent = new Event('invalid', { bubbles: true });
            input.dispatchEvent(invalidEvent);
          }
        }
      }
    })
  ]
};

export const Help: Story = {
  args: {
    name: 'help',
    label: 'I agree to the terms and conditions.',
    help: 'There is no catch here, we promise.',
  },
};
