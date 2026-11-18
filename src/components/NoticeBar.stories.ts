import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { useTemplateRef } from 'vue';

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
    closable: { control: 'boolean' },
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
      <notice-bar type="warning">
        You have unsaved changes.

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
        code: '<notice-bar type="warning">\n  You have unsaved changes.\n\n  <template #cta>\n    <link-button>Revert changes</link-button>\n    <primary-button size="small">Save changes</primary-button>\n  </template>\n</notice-bar>',
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

export const Closable: Story = {
  render: () => ({
    components: { NoticeBar, LinkButton },
    setup() {
      const notice = useTemplateRef('notice');
      return { notice };
    },
    template: `<div style="display:flex;flex-direction:column;gap:1rem">
      <notice-bar closable>A very long and verbose message telling you that you have tens of thousands of new emails in your Thunderbird inbox. This message can just be closed.</notice-bar>
      <div>
        <notice-bar ref="notice" closable>You have 10,000 new emails. You can close this or show it again.</notice-bar>
        <link-button @click="notice.show()">Show notice again</link-button>
      </div>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: '<notice-bar closable>A very long...</notice-bar>\n\n<notice-bar ref="notice" closable>You have 10,000 new emails.</notice-bar>\n<link-button @click="notice.show()">Show notice again</link-button>',
      },
    },
  },
};
