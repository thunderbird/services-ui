import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseBadge from '@/elements/BaseBadge.vue';
import CheckCircleFilledIcon from '@/icons/CheckCircleFilledIcon.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof BaseBadge> = {
  title: 'Elements/Badge',
  component: BaseBadge,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['set', 'primary', 'subscription', 'pending', 'not-set', 'verified', 'emails', 'default'] },
    default: { control: 'text' },
  },
  args: {
    default: 'Recommended',
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Set: Story = {
  args: {
    type: 'set',
    default: 'set'
  },
};

export const SetWithIcon: Story = {
  args: {
    type: 'set',
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
    type: 'primary',
    default: 'primary'
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    type: 'primary',
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
    type: 'subscription',
    default: 'subscription'
  },
};

export const SubscriptionWithIcon: Story = {
  args: {
    type: 'subscription',
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
    type: 'pending',
    default: 'pending'
  },
};

export const PendingWithIcon: Story = {
  args: {
    type: 'pending',
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
    type: 'not-set',
    default: 'not set'
  },
};

export const NotSetWithIcon: Story = {
  args: {
    type: 'not-set',
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
    type: 'verified',
    default: 'verified'
  },
};

export const VerifiedWithIcon: Story = {
  args: {
    type: 'verified',
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
    type: 'emails',
    default: '#emails'
  },
};

export const EmailsWithIcon: Story = {
  args: {
    type: 'emails',
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

export const Default: Story = {
  args: {
    type: 'default',
    default: 'default'
  },
};

export const DefaultWithIcon: Story = {
  args: {
    type: 'default',
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

export const Counter: Story = {
  args: {
    type: 'counter',
    default: '2'
  },
};
