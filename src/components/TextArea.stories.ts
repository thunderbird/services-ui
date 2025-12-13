import { ref, useTemplateRef } from 'vue';
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
        <text-area v-model="value" v-bind="args">{{ args.default }}</text-area>
        <p style="margin-block-start: 0.5rem; word-break: break-word;">
          Current v-model value: {{ value }}
        </p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-area v-model="value" name="name-standard">Blog Post</text-area>`,
      },
    },
  },
};

export const Required: Story = {
  decorators: [
    () => ({
      components: { TextArea },
      setup() {
        const input = useTemplateRef('input');
        return { input };
      },
      template: `
        <div>
          <text-area ref="input" name="fav-food-required" required>Why is a hot dog a sandwich?</text-area>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-block-start: 0.5rem;">
            <button @click="triggerInvalid">
              Force trigger invalid state
            </button>
            <button @click="input.reset()">
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
      },
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<text-area name="fav-food-required" required>Why is a hot dog a sandwich?</text-area>`,
      },
    },
  },
};

export const RequiredWithPlaceholder: Story = {
  render: () => ({
    components: { TextArea },
    template: `
      <text-area name="fav-food-required-with-placeholder" placeholder="Yes because it is food inside of bread." required>Why is a hot dog a sandwich?</text-area>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-area name="fav-food-required-with-placeholder" placeholder="Yes because it is food inside of bread." required>
          Why is a hot dog a sandwich?
        </text-area>`,
      },
    },
  },
};

export const Autofocus: Story = {
  render: () => ({
    components: { TextArea },
    template: `
      <text-area name="autofocus-input" placeholder="e.g. Aloy" autofocus>Give me my Focus</text-area>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-area name="autofocus-input" placeholder="e.g. Aloy" autofocus>
          Give me my Focus
        </text-area>`,
      },
    },
  },
};

export const Help: Story = {
  args: {
    name: 'fav-beverage',
    default: 'About your favourite beverage',
    help: 'When in doubt, go with water.',
  },
  parameters: {
    docs: {
      source: {
        code: `<text-area name="fav-beverage" help="When in doubt, go with water.">
          About your favourite beverage
        </text-area>`,
      },
    },
  },
};

export const NumRows: Story = {
  render: () => ({
    components: { TextArea },
    template: `
      <text-area name="num-rows" rows="13">Long Blog Post</text-area>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-area name="num-rows" rows="13">
          Long Blog Post
        </text-area>`,
      },
    },
  },
};

export const MaxLength: Story = {
  render: () => ({
    components: { TextArea },
    template: `
      <text-area name="char-count" rows="3" max-length="250">Input with max length</text-area>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-area name="char-count" rows="3" max-length="250">
          Input with max length
        </text-area>`,
      },
    },
  },
};
