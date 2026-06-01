import type { Meta, StoryObj } from '@storybook/vue3-vite';

import NoticeBar from '@/components/NoticeBar.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import LinkButton from '@/components/LinkButton.vue';
import { NoticeBarTypes } from '@/definitions';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof NoticeBar> = {
  title: 'Components/NoticeBar',
  component: NoticeBar,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: Object.values(NoticeBarTypes) },
    default: { control: 'text' },
  },
  args: {
    default: 'Hello World!',
    type: NoticeBarTypes.Info,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    default: 'You have 10,000 new emails.',
  },
  parameters: {
    docs: {
      source: {
        code: '<notice-bar>You have 10,000 new emails.</notice-bar>',
      },
    },
  },
};

export const CTAControls: Story = {
  render: () => ({
    components: { NoticeBar, PrimaryButton, LinkButton },
    template: `
      <notice-bar>
        This form is dirty.

        <template #cta>
          <link-button>Revert changes</link-button>
          <primary-button size="small">Save changes</primary-button>
        </template>
      </notice-bar>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<notice-bar>\n  This form is dirty.\n\n  <template #cta>\n    <link-button>Revert changes</link-button>\n    <primary-button size="small">Save changes</primary-button>\n  </template>\n</notice-bar>',
      },
    },
  },
};

export const Type: Story = {
  render: () => ({
    components: { NoticeBar, PrimaryButton, LinkButton },
    template: `<div style="display:flex;flex-direction:column;gap:1rem">
        <notice-bar type="info">You have unread emails.</notice-bar>
        <notice-bar type="success">You have no new emails.</notice-bar>
        <notice-bar type="warning">You have 10 new emails.</notice-bar>
        <notice-bar type="critical">You have 10,000 new emails.</notice-bar>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<notice-bar type="info">You have unread emails.</notice-bar>\n<notice-bar type="success">You have no new emails.</notice-bar>\n<notice-bar type="warning">You have 10 new emails.</notice-bar>\n<notice-bar type="critical">You have 10,000 new emails.</notice-bar>',
      },
    },
  },
};
