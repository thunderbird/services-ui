import type { Meta, StoryObj } from '@storybook/vue3-vite';

import TextInput from '@/elements/TextInput.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof TextInput> = {
  title: 'Elements/TextInput',
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
  args: {
    name: 'name',
    default: 'Full Name',
    placeholder: 'e.g. John Doe'
  },
};

export const Disabled: Story = {
  args: {
    name: 'name',
    default: 'Full Name',
    placeholder: 'e.g. John Doe',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    name: 'fav-food',
    default: 'Favourite Food?',
    placeholder: '(e.g. Pizza)',
    required: true,
    help: 'Choose wisely.',
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
          const input = document.querySelector('input[name="fav-food"]') as HTMLInputElement;
          const invalidEvent = new Event('invalid', { bubbles: true });
          input.dispatchEvent(invalidEvent);
        },
        manualReset() {
          const inputElement = document.querySelector('input[name="fav-food"]');

          // Access the exposed methods through the Vue component's public interface
          const componentExposed = (inputElement as any).__vueParentComponent?.exposed;
          componentExposed.reset();
        },
      },
    }),
  ],
};

export const RequiredWithPlaceholder: Story = {
  args: {
    name: 'fav-food',
    default: 'Favourite Food?',
    placeholder: 'Pizza',
    required: true,
  },
};

export const Help: Story = {
  args: {
    name: 'fav-beverage',
    default: 'Favourite Beverage',
    placeholder: 'e.g. Ginger ale',
    help: 'When in doubt, go with water.',
  },
};

export const Time: Story = {
  args: {
    name: 'time',
    default: 'Current Time',
    type: 'time',
  },
};

export const Email: Story = {
  args: {
    name: 'email',
    default: 'Email Address',
    type: 'email',
    required: true,
  },
};

export const InnerPrefix: Story = {
  args: {
    name: 'Currency',
    default: 'Currency',
    placeholder: '100.00',
    required: true,
    prefix: '€',
  },
};

export const OuterPrefix: Story = {
  args: {
    name: 'username',
    default: 'Username',
    placeholder: 'handle',
    outerPrefix: 'https://test.org/',
  },
};

export const OuterSuffix: Story = {
  args: {
    name: 'username',
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
