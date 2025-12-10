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
  render: () => ({
    components: { ExpiryBadge },
    template: `
      <expiry-badge :time-remaining="10" time-unit="year" />
    `,
  }),
  parameters: {
    docs: {
      source: { code: '<expiry-badge :time-remaining="10" time-unit="year" />' },
    },
  },
};

export const Units: Story = {
  render: () => ({
    components: { ExpiryBadge },
    template: `
      <div style="display:flex;flex-direction:column;align-items:start;gap:0.5rem;">
        <expiry-badge :time-remaining="5" time-unit="year" />
        <expiry-badge :time-remaining="6" time-unit="month" />
        <expiry-badge :time-remaining="7" time-unit="week" />
        <expiry-badge :time-remaining="8" time-unit="day" />
        <expiry-badge :time-remaining="9" time-unit="hour" />
        <expiry-badge :time-remaining="10" time-unit="minute" />
        <expiry-badge :time-remaining="11" time-unit="second" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: { code: '<expiry-badge :time-remaining="5" time-unit="year" />\n<expiry-badge :time-remaining="6" time-unit="month" />\n<expiry-badge :time-remaining="7" time-unit="week" />\n<expiry-badge :time-remaining="8" time-unit="day" />\n<expiry-badge :time-remaining="9" time-unit="hour" />\n<expiry-badge :time-remaining="10" time-unit="minute" />\n<expiry-badge :time-remaining="11" time-unit="second" />' },
    },
  },
};

export const DecimalPlaces: Story = {
  render: () => ({
    components: { ExpiryBadge },
    template: `
      <div style="display:flex;flex-direction:column;align-items:start;gap:0.5rem;">
        <expiry-badge :time-remaining="5.111" time-unit="minute" :decimal-places="0" />
        <expiry-badge :time-remaining="5.111" time-unit="minute" :decimal-places="1" />
        <expiry-badge :time-remaining="5.111" time-unit="minute" :decimal-places="2" />
        <expiry-badge :time-remaining="5.111" time-unit="minute" :decimal-places="3" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: { code: '<expiry-badge :time-remaining="1.111" time-unit="minute" :decimal-places="0" />\n<expiry-badge :time-remaining="1.111" time-unit="minute" :decimal-places="1" />\n<expiry-badge :time-remaining="1.111" time-unit="minute" :decimal-places="2" />\n<expiry-badge :time-remaining="1.111" time-unit="minute" :decimal-places="3" />' },
    },
  },
};

export const WarningThreshold: Story = {
  render: () => ({
    components: { ExpiryBadge },
    template: `
      <div style="display:flex;flex-direction:column;align-items:start;gap:0.5rem;">
        <expiry-badge :time-remaining="7" warning-threshold="5" time-unit="minute" />
        <expiry-badge :time-remaining="7" warning-threshold="10" time-unit="minute" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: { code: '<expiry-badge :time-remaining="7" warning-threshold="5" time-unit="minute" />\n<expiry-badge :time-remaining="7" warning-threshold="10" time-unit="minute" />' },
    },
  },
};


export const Expired: Story = {
  render: () => ({
    components: { ExpiryBadge },
    template: `
      <expiry-badge :time-remaining="0" time-unit="year" />
    `,
  }),
  parameters: {
    docs: {
      source: { code: '<expiry-badge :time-remaining="0" time-unit="year" />' },
    },
  },
};
