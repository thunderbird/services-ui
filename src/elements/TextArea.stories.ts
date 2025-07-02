import type { Meta, StoryObj } from '@storybook/vue3';
import TextArea from '@/elements/TextArea.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof TextArea> = {
  title: 'Elements/TextArea',
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
    name: 'name',
    default: 'Blog Post',
  },
};

export const Disabled: Story = {
  args: {
    name: 'name',
    default: 'Blog Post',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    name: 'fav-food',
    default: 'Why is a hot dog a sandwich?',
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
          const textarea = document.querySelector('textarea');
          if (textarea) {
            const invalidEvent = new Event('invalid', { bubbles: true });
            textarea.dispatchEvent(invalidEvent);
          }
        }
      }
    })
  ]
};

export const RequiredWithPlaceholder: Story = {
  args: {
    name: 'fav-food',
    default: 'Why is a hot dog a sandwich?',
    placeholder: 'Yes because it is food inside of bread.',
    required: true,
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
    name: 'name',
    default: 'Long Blog Post',
    rows: 13,
  },
};
