import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseBadge from '@/elements/BaseBadge.vue';
import CheckCircleFilledIcon from '@/icons/CheckCircleFilledIcon.vue';
import { BaseBadgeTypes } from '@/definitions';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof BaseBadge> = {
  title: 'Elements/Badge',
  component: BaseBadge,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: Object.values(BaseBadgeTypes) },
    default: { control: 'text' },
  },
  args: {
    default: 'Recommended',
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: BaseBadgeTypes.Default,
    default: 'default'
  },
};

export const DefaultWithIcon: Story = {
  args: {
    type: BaseBadgeTypes.Default,
    default: 'default'
  },
  render: (args) => ({
    components: { BaseBadge, CheckCircleFilledIcon },
    setup() {
      return { args };
    },
    template: `
      <BaseBadge type="default">
        <template #icon>
          <CheckCircleFilledIcon />
        </template>
        {{ args.default }}
      </BaseBadge>
    `,
  }),
};

export const Set: Story = {
  args: {
    type: BaseBadgeTypes.Set,
    default: 'set'
  },
};

export const SetWithIcon: Story = {
  args: {
    type: BaseBadgeTypes.Set,
    default: 'set'
  },
  render: (args) => ({
    components: { BaseBadge, CheckCircleFilledIcon },
    setup() {
      return { args };
    },
    template: `
      <BaseBadge type="set">
        <template #icon>
          <CheckCircleFilledIcon />
        </template>
        {{ args.default }}
      </BaseBadge>
    `,
  }),
};

export const Primary: Story = {
  args: {
    type: BaseBadgeTypes.Primary,
    default: 'primary'
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    type: BaseBadgeTypes.Primary,
    default: 'primary'
  },
  render: (args) => ({
    components: { BaseBadge, CheckCircleFilledIcon },
    setup() {
      return { args };
    },
    template: `
      <BaseBadge>
        <template #icon>
          <CheckCircleFilledIcon />
        </template>
        {{ args.default }}
      </BaseBadge>
    `,
  }),
};

export const Subscription: Story = {
  args: {
    type: BaseBadgeTypes.Subscription,
    default: 'subscription'
  },
};

export const SubscriptionWithIcon: Story = {
  args: {
    type: BaseBadgeTypes.Subscription,
    default: 'subscription'
  },
  render: (args) => ({
    components: { BaseBadge, CheckCircleFilledIcon },
    setup() {
      return { args };
    },
    template: `
      <BaseBadge type="subscription">
        <template #icon>
          <CheckCircleFilledIcon />
        </template>
        {{ args.default }}
      </BaseBadge>
    `,
  }),
};

export const Pending: Story = {
  args: {
    type: BaseBadgeTypes.Pending,
    default: 'pending'
  },
};

export const PendingWithIcon: Story = {
  args: {
    type: BaseBadgeTypes.Pending,
    default: 'pending'
  },
  render: (args) => ({
    components: { BaseBadge, CheckCircleFilledIcon },
    setup() {
      return { args };
    },
    template: `
      <BaseBadge type="pending">
        <template #icon>
          <CheckCircleFilledIcon />
        </template>
        {{ args.default }}
      </BaseBadge>
    `,
  }),
};

export const NotSet: Story = {
  args: {
    type: BaseBadgeTypes.NotSet,
    default: 'not set'
  },
};

export const NotSetWithIcon: Story = {
  args: {
    type: BaseBadgeTypes.NotSet,
    default: 'not set'
  },
  render: (args) => ({
    components: { BaseBadge, CheckCircleFilledIcon },
    setup() {
      return { args };
    },
    template: `
      <BaseBadge type="not-set">
        <template #icon>
          <CheckCircleFilledIcon />
        </template>
        {{ args.default }}
      </BaseBadge>
    `,
  }),
};

export const Verified: Story = {
  args: {
    type: BaseBadgeTypes.Verified,
    default: 'verified'
  },
};

export const VerifiedWithIcon: Story = {
  args: {
    type: BaseBadgeTypes.Verified,
    default: 'verified'
  },
  render: (args) => ({
    components: { BaseBadge, CheckCircleFilledIcon },
    setup() {
      return { args };
    },
    template: `
      <BaseBadge type="verified">
        <template #icon>
          <CheckCircleFilledIcon />
        </template>
        {{ args.default }}
      </BaseBadge>
    `,
  }),
};

export const Emails: Story = {
  args: {
    type: BaseBadgeTypes.Emails,
    default: '#emails'
  },
};

export const EmailsWithIcon: Story = {
  args: {
    type: BaseBadgeTypes.Emails,
    default: '#emails'
  },
  render: (args) => ({
    components: { BaseBadge, CheckCircleFilledIcon },
    setup() {
      return { args };
    },
    template: `
      <BaseBadge type="emails">
        <template #icon>
          <CheckCircleFilledIcon />
        </template>
        {{ args.default }}
      </BaseBadge>
    `,
  }),
};

export const Counter: Story = {
  args: {
    type: BaseBadgeTypes.Counter,
    default: '2'
  },
};
