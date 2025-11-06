import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import TextArea from '@/components/TextArea.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    name: 'example',
    default: 'Example TextArea',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    name: 'name-standard',
    default: 'Blog Post',
  },
  render: (args) => ({
    components: { TextArea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <div>
        <TextArea v-model="value" v-bind="args">{{ args.default }}</TextArea>
        <p style="margin-block-start: 0.5rem; word-break: break-word;">
          Current v-model value: {{ value }}
        </p>
      </div>
    `,
  }),
};

export const Required: Story = {
  args: {
    name: 'fav-food-required',
    default: 'Why is a hot dog a sandwich?',
    required: true,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div>
          <story />
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-block-start: 0.5rem;">
            <button @click="triggerInvalid">
              Force trigger invalid state
            </button>
            <button @click="manualReset">
              Manual Reset
            </button>
          </div>
        </div>
      `,
      methods: {
        triggerInvalid() {
          const textarea = document.querySelector('textarea[name="fav-food-required"]');
          if (textarea) {
            const invalidEvent = new Event('invalid', { bubbles: true });
            textarea.dispatchEvent(invalidEvent);
          }
        },
        manualReset() {
          const inputElement = document.querySelector('textarea[name="fav-food-required"]');

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
    name: 'fav-food-required-with-placeholder',
    default: 'Why is a hot dog a sandwich?',
    placeholder: 'Yes because it is food inside of bread.',
    required: true,
  },
};

export const Autofocus: Story = {
  args: {
    name: 'autofocus-input',
    default: 'Give me my Focus',
    placeholder: 'e.g. Aloy',
    autofocus: true,
  },
};

export const Help: Story = {
  args: {
    name: 'fav-beverage',
    default: 'About your favourite beverage',
    help: 'When in doubt, go with water.',
  },
};

export const NumRows: Story = {
  args: {
    name: 'num-rows',
    default: 'Long Blog Post',
    rows: 13,
  },
};

export const MaxLength: Story = {
  args: {
    name: 'char-count',
    default: 'Input with max length',
    maxLength: 250,
    rows: 3,
  },
};
