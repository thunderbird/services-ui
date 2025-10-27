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
  args: {
    default: 'Hello World!',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    default: 'You have 10,000 new emails.',
    type: NoticeBarTypes.Info,
  },
};

export const InfoWithCTA: Story = {
  args: {
    default: 'You have 10,000 new emails.',
    type: NoticeBarTypes.Info,
  },
  render: (args) => ({
    components: { NoticeBar, PrimaryButton, LinkButton },
    setup() {
      return { args };
    },
    template: `
      <NoticeBar>
        {{ args.default }}

        <template #cta>
          <button
            style="border:none;background-color:inherit;color: var(--colour-ti-secondary);text-decoration:underline;cursor:pointer;"
          >
            Revert changes
          </button>
          <PrimaryButton size="small">Save changes</PrimaryButton>
        </template>
      </NoticeBar>
    `,
  }),
};

export const Success: Story = {
  args: {
    default: 'You have 10,000 new emails.',
    type: NoticeBarTypes.Success,
  },
};

export const Warning: Story = {
  args: {
    default: 'You have 10,000 new emails.',
    type: NoticeBarTypes.Warning,
  },
};

export const Critical: Story = {
  args: {
    default: 'You have 10,000 new emails.',
    type: NoticeBarTypes.Critical,
  },
};
