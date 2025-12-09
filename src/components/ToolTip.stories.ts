import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { TooltipPosition } from '@/definitions';
import ToolTip from '@/components/ToolTip.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof ToolTip> = {
  title: 'Components/ToolTip',
  component: ToolTip,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    default: 'Important note',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `<div style="min-height:60px;"><story /></div>`,
    }),
  ],
};

export const PositionTop: Story = {
  args: {
    default: 'Pointing upwards',
    position: TooltipPosition.Top,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `<div style="min-height:60px;"><story /></div>`,
    }),
  ],
};

export const PositionLeft: Story = {
  args: {
    default: 'Pointing left',
    position: TooltipPosition.Left,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `<div style="min-height:60px;"><story /></div>`,
    }),
  ],
};

export const PositionBottom: Story = {
  args: {
    default: 'Pointing downwards',
    position: TooltipPosition.Bottom,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `<div style="min-height:60px;"><story /></div>`,
    }),
  ],
};

export const PositionRight: Story = {
  args: {
    default: 'Pointing right',
    position: TooltipPosition.Right,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `<div style="min-height:60px;"><story /></div>`,
    }),
  ],
};

export const PositionNone: Story = {
  args: {
    default: 'Pointing nowhere',
    position: TooltipPosition.None,
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `<div style="min-height:60px;"><story /></div>`,
    }),
  ],
};
