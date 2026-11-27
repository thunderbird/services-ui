import type { Meta, StoryObj } from '@storybook/vue3-vite';
import RelativeTime from '@/components/RelativeTime.vue';
import { TooltipPosition } from '@/definitions';

// Timestamps relative to the current time, so stories always read sensibly
const minute = 60 * 1000;
const fiveMinutesAgo = Date.now() - 5 * minute;
const examples = [
  Date.now() - 30 * 1000,
  Date.now() - 3 * 60 * minute,
  Date.now() - 25 * 60 * minute,
  Date.now() - 90 * 24 * 60 * minute,
  Date.now() + 25 * 60 * minute,
  Date.now() + 3 * 24 * 60 * minute,
];

const meta: Meta<typeof RelativeTime> = {
  title: 'Components/RelativeTime',
  component: RelativeTime,
  tags: ['autodocs'],
  args: {
    datetime: fiveMinutesAgo,
    format: 'short',
    tooltipPosition: TooltipPosition.Top,
  },
  argTypes: {
    datetime: {
      description: 'Date to display, as Date object, timestamp or date string.',
      control: 'date',
    },
    format: {
      description: 'Length of the relative text, passed as style to Intl.RelativeTimeFormat.',
      control: 'select',
      options: ['long', 'short', 'narrow'],
    },
    tooltipPosition: {
      description: 'Side of the tooltip that shows the full timestamp.',
      control: 'select',
      options: Object.values(TooltipPosition),
    },
    dataTestid: {
      description: 'Test ID for the component',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { RelativeTime },
    setup() {
      return { args };
    },
    template: `
      <p style="padding-top: 1.5rem;">
        Last signed in <relative-time v-bind="args" /> from Firefox on Linux.
      </p>
    `,
  }),
  parameters: {
    docs: {
      source: { code: '<p>\n  Last signed in <relative-time :datetime="date" /> from Firefox on Linux.\n</p>' },
    },
  },
};

export const Formats: Story = {
  render: () => ({
    components: { RelativeTime },
    setup() {
      return { fiveMinutesAgo, TooltipPosition };
    },
    template: `
      <div style="display:flex;flex-direction:column;align-items:start;gap:0.5rem;">
        <relative-time :datetime="fiveMinutesAgo" format="long" :tooltip-position="TooltipPosition.Right" />
        <relative-time :datetime="fiveMinutesAgo" format="short" :tooltip-position="TooltipPosition.Right" />
        <relative-time :datetime="fiveMinutesAgo" format="narrow" :tooltip-position="TooltipPosition.Right" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<relative-time :datetime="date" format="long" :tooltip-position="TooltipPosition.Right" />\n<relative-time :datetime="date" format="short" :tooltip-position="TooltipPosition.Right" />\n<relative-time :datetime="date" format="narrow" :tooltip-position="TooltipPosition.Right" />',
      },
    },
  },
};

export const PastAndFuture: Story = {
  render: () => ({
    components: { RelativeTime },
    setup() {
      return { examples, TooltipPosition };
    },
    template: `
      <div style="display:flex;flex-direction:column;align-items:start;gap:0.5rem;">
        <relative-time v-for="example in examples" :key="example" :datetime="example" :tooltip-position="TooltipPosition.Right" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<relative-time :datetime="secondsAgo" :tooltip-position="TooltipPosition.Right" />\n<relative-time :datetime="hoursAgo" :tooltip-position="TooltipPosition.Right" />\n<relative-time :datetime="yesterday" :tooltip-position="TooltipPosition.Right" />\n<relative-time :datetime="monthsAgo" :tooltip-position="TooltipPosition.Right" />\n<relative-time :datetime="tomorrow" :tooltip-position="TooltipPosition.Right" />\n<relative-time :datetime="inThreeDays" :tooltip-position="TooltipPosition.Right" />',
      },
    },
  },
};

export const TooltipPositions: Story = {
  render: () => ({
    components: { RelativeTime },
    setup() {
      return { fiveMinutesAgo, TooltipPosition };
    },
    template: `
      <div style="display:flex;flex-direction:column;align-items:center;gap:4rem;padding:4rem 0;">
        <p v-for="position in TooltipPosition" :key="position" style="margin:0;">
          Last signed in <relative-time :datetime="fiveMinutesAgo" :tooltip-position="position" /> from Firefox on Linux.
        </p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<p>\n  Last signed in <relative-time :datetime="date" :tooltip-position="TooltipPosition.Top" /> from Firefox on Linux.\n</p>\n<p>\n  Last signed in <relative-time :datetime="date" :tooltip-position="TooltipPosition.Bottom" /> from Firefox on Linux.\n</p>\n<p>\n  Last signed in <relative-time :datetime="date" :tooltip-position="TooltipPosition.Left" /> from Firefox on Linux.\n</p>\n<p>\n  Last signed in <relative-time :datetime="date" :tooltip-position="TooltipPosition.Right" /> from Firefox on Linux.\n</p>',
      },
    },
  },
};
