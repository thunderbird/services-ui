import type { Meta, StoryObj } from '@storybook/vue3-vite';
import CopyToClipboard from '@/patterns/CopyToClipboard.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof CopyToClipboard> = {
  title: 'Patterns/CopyToClipboard',
  component: CopyToClipboard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    displayText: 'Copy to clipboard',
  },
  render: (args) => ({
    components: { CopyToClipboard },
    setup() {
      return { args };
    },
    template: `
      <CopyToClipboard v-bind="args" />
    `,
  }),
};

export const WithCopyValue: Story = {
  args: {
    displayText: 'Copy to clipboard',
    copyValue: 'https://github.com/mozilla/services-ui',
  },
  render: (args) => ({
    components: { CopyToClipboard },
    setup() {
      return { args };
    },
    template: `
      <CopyToClipboard v-bind="args" />
    `,
  }),
};