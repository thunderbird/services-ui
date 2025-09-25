import type { Meta, StoryObj } from '@storybook/vue3-vite';
import CopyToClipboard, { Props } from '@/patterns/CopyToClipboard.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof CopyToClipboard> = {
  title: 'Patterns/CopyToClipboard',
  component: CopyToClipboard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    displayText: {
      description: 'Text to display in the button. Required unless iconOnly is true.',
      control: 'text',
    },
    copyValue: {
      description: 'Value to copy to clipboard. Required if iconOnly is true, optional otherwise. If not provided, displayText will be copied.',
      control: 'text',
    },
    iconOnly: {
      description: 'If true, only shows the copy icon without text. Requires copyValue to be set.',
      control: 'boolean',
    },
    dataTestid: {
      description: 'Test ID for the component',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<Props>;

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
      <div style="padding: 2rem;">
        <CopyToClipboard v-bind="args" />
      </div>
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
      <div style="padding: 2rem;">
        <CopyToClipboard v-bind="args" />
      </div>
    `,
  }),
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    copyValue: 'https://github.com/mozilla/services-ui',
  },
  render: (args) => ({
    components: { CopyToClipboard },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 2rem;">
        <CopyToClipboard v-bind="args" />
      </div>
    `,
  }),
};
