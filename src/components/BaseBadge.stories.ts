import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseBadge from '@/components/BaseBadge.vue';
import CheckCircleFilledIcon from '@/foundation/CheckCircleFilledIcon.vue';
import { BaseBadgeTypes } from '@/definitions';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof BaseBadge> = {
  title: 'Components/Badge',
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

export const Standard: Story = {
  render: () => ({
    components: { BaseBadge },
    template: `<base-badge>Primary</base-badge>`,
  }),
  parameters: {
    docs: {
      source: {
        code: '<base-badge>Primary</base-badge>',
      },
    },
  },
};


export const Type: Story = {
  render: () => ({
    components: { BaseBadge },
    template: `
      <div style="display:flex;gap:.5rem;align-items:center;">
        <base-badge type="default">Default</base-badge>
        <base-badge type="not-set">Not Set</base-badge>
        <base-badge type="primary">Primary</base-badge>
        <base-badge type="subscription">Subscription</base-badge>
        <base-badge type="verified">Verified</base-badge>
        <base-badge type="set">Set</base-badge>
        <base-badge type="pending">Pending</base-badge>
        <base-badge type="emails">Emails</base-badge>
        <base-badge type="counter">Counter</base-badge>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<base-badge type="default">Default</base-badge>\n<base-badge type="not-set">Not Set</base-badge>\n<base-badge type="primary">Primary</base-badge>\n<base-badge type="subscription">Subscription</base-badge>\n<base-badge type="verified">Verified</base-badge>\n<base-badge type="set">Set</base-badge>\n<base-badge type="pending">Pending</base-badge>\n<base-badge type="emails">Emails</base-badge>\n<base-badge type="counter">Counter</base-badge>',
      },
    },
  },
};


export const Icon: Story = {
  render: () => ({
    components: { BaseBadge, CheckCircleFilledIcon },
    template: `
      <div style="display:flex;gap:.5rem;align-items:center;">
        <base-badge type="default"><template #icon><check-circle-filled-icon /></template>Default</base-badge>
        <base-badge type="not-set"><template #icon><check-circle-filled-icon /></template>Not Set</base-badge>
        <base-badge type="primary"><template #icon><check-circle-filled-icon /></template>Primary</base-badge>
        <base-badge type="subscription"><template #icon><check-circle-filled-icon /></template>Subscription</base-badge>
        <base-badge type="verified"><template #icon><check-circle-filled-icon /></template>Verified</base-badge>
        <base-badge type="set"><template #icon><check-circle-filled-icon /></template>Set</base-badge>
        <base-badge type="pending"><template #icon><check-circle-filled-icon /></template>Pending</base-badge>
        <base-badge type="emails"><template #icon><check-circle-filled-icon /></template>#Emails</base-badge>
        <base-badge type="counter"><template #icon><check-circle-filled-icon /></template>16</base-badge>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<base-badge type="default">\n  <template #icon>\n    <check-circle-filled-icon />\n  </template>\n  Default\n</base-badge>\n...',
      },
    },
  },
};
