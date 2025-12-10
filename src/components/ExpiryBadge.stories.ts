import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ExpiryBadge from '@/components/ExpiryBadge.vue';
import { ExpiryUnitTypes } from '@/definitions';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof ExpiryBadge> = {
  title: 'Components/ExpiryBadge',
  component: ExpiryBadge,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    timeRemaining: 10,
    warningThreshold: 5,
    timeUnit: ExpiryUnitTypes.Days,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    timeRemaining: 10,
    timeUnit: ExpiryUnitTypes.Years,
  },
};

export const DecimalPlaces: Story = {
  render: (args) => ({
    components: { ExpiryBadge },
    setup() {
      return { args };
    },
    template: `
      <div style="display:flex;flex-direction:column;align-items:start;gap:0.5rem;">
        <expiry-badge :time-remaining="1.111" time-unit="minute" :decimal-places="0" />
        <expiry-badge :time-remaining="1.111" time-unit="minute" :decimal-places="1" />
        <expiry-badge :time-remaining="1.111" time-unit="minute" :decimal-places="2" />
        <expiry-badge :time-remaining="1.111" time-unit="minute" :decimal-places="3" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: { code: '<expiry-badge :time-remaining="1.111" time-unit="minute" :decimal-places="0" />\n<expiry-badge :time-remaining="1.111" time-unit="minute" :decimal-places="1" />\n<expiry-badge :time-remaining="1.111" time-unit="minute" :decimal-places="2" />\n<expiry-badge :time-remaining="1.111" time-unit="minute" :decimal-places="3" />' },
    },
  },
};

export const Warning: Story = {
  args: {
    timeRemaining: 5,
    warningThreshold: 15,
    timeUnit: ExpiryUnitTypes.Minutes,
  },
};

export const Expired: Story = {
  args: {
    timeRemaining: 0,
  },
};
