import type { Meta, StoryObj } from '@storybook/vue3-vite';

import StatusInfoIcon from '@/foundation/StatusInfoIcon.vue';
import StatusExpiryIcon from '@/foundation/StatusExpiryIcon.vue';
import StatusWarningIcon from '@/foundation/StatusWarningIcon.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof StatusInfoIcon> = {
  title: 'Foundational Items/Status Icons',
  component: StatusInfoIcon,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => ({
    components: { StatusInfoIcon },
    template: '<status-info-icon />',
  }),
  parameters: {
    docs: {
      source: { code: '<status-info-icon />' },
    },
  },
};

export const Expiry: Story = {
  render: () => ({
    components: { StatusExpiryIcon },
    template: '<status-expiry-icon />',
  }),
  parameters: {
    docs: {
      source: { code: '<status-expiry-icon />' },
    },
  },
};

export const Warning: Story = {
  render: () => ({
    components: { StatusWarningIcon },
    template: '<status-warning-icon />',
  }),
  parameters: {
    docs: {
      source: { code: '<status-warning-icon />' },
    },
  },
};
