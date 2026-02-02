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
    label: 'Example TextArea',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    name: 'name-standard',
    label: 'Blog Post',
  },
  render: (args) => ({
    components: { TextArea },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <div>
        <text-area v-model="value" v-bind="args" />
        <p style="margin-block-start: 0.5rem; word-break: break-word;">
          Current v-model value: {{ value }}
        </p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-area v-model="value" name="name-standard" label="Blog Post" />`,
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
          <text-area ref="input" name="fav-food-required" label="Why is a hot dog a sandwich?" required />
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
        code: `<text-area name="fav-food-required" label="Why is a hot dog a sandwich?" required />`,
      },
    },
  },
};

export const RequiredWithPlaceholder: Story = {
  render: () => ({
    components: { TextArea },
    template: `
      <text-area name="fav-food-required-with-placeholder" label="Is a hot dog a sandwich?" placeholder="Yes because it is food inside of bread." required />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-area name="fav-food-required-with-placeholder" label="Is a hot dog a sandwich?" placeholder="Yes because it is food inside of bread." required />`,
      },
    },
  },
};

export const Autofocus: Story = {
  render: () => ({
    components: { TextArea },
    template: `
      <text-area name="autofocus-input" label="Give me my Focus" placeholder="e.g. Aloy" autofocus />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-area name="autofocus-input" label="Give me my Focus" placeholder="e.g. Aloy" autofocus />`,
      },
    },
  },
};

export const Help: Story = {
  args: {
    name: 'fav-beverage',
    label: 'About your favourite beverage',
    help: 'When in doubt, go with water.',
  },
  parameters: {
    docs: {
      source: {
        code: `<text-area name="fav-beverage" label="About your favourite beverage" help="When in doubt, go with water." />`,
      },
    },
  },
};

export const NumRows: Story = {
  render: () => ({
    components: { TextArea },
    template: `
      <text-area name="num-rows" label="Long Blog Post" rows="13" />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-area name="num-rows" label="Long Blog Post" rows="13" />`,
      },
    },
  },
};

export const MaxLength: Story = {
  render: () => ({
    components: { TextArea },
    template: `
      <text-area name="char-count" label="Input with max length" rows="3" max-length="250" />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<text-area name="char-count" label="Input with max length" rows="3" max-length="250" />`,
      },
    },
  },
};
