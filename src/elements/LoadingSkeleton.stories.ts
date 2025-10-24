import type { Meta, StoryObj } from '@storybook/vue3-vite';

import LoadingSkeleton from '@/elements/LoadingSkeleton.vue';
import UserAvatar from '@/elements/UserAvatar.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof LoadingSkeleton> = {
  title: 'Elements/LoadingSkeleton',
  component: LoadingSkeleton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    borderRadius: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    isLoading: { control: 'boolean' },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { LoadingSkeleton },
    setup() {
      return { args };
    },
    template: `
      <loading-skeleton :is-loading="args.isLoading" :width="args.width" :height="args.height"
                        :border-radius="args.borderRadius">
        <p>This is content that will show once it's loaded!</p>
      </loading-skeleton>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
        <loading-skeleton :is-loading="true">
          <p>This is content that will show once it's loaded!</p>
        </loading-skeleton>
        `,
      },
    },
  },
};

export const Orb: Story = {
  render: (args) => ({
    components: { LoadingSkeleton, UserAvatar },
    setup() {
      args.borderRadius = '100%';
      return { args };
    },
    template: `
      <loading-skeleton :is-loading="args.isLoading" :width="args.width" :height="args.height"
                        :border-radius="args.borderRadius">
        <user-avatar username="Beatrice" avatar-url="/img/placeholder.png"/>
      </loading-skeleton>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
        <loading-skeleton :is-loading="true" :border-radius="100%">
          <user-avatar username="Beatrice" avatar-url="/img/placeholder.png"/>
        </loading-skeleton>
        `,
      },
    },
  },
};
