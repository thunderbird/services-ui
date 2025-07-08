import type { Meta, StoryObj } from '@storybook/vue3';
import { TooltipPosition } from '@/definitions';
import ToolTip from '@/elements/ToolTip.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof ToolTip> = {
  title: 'Elements/ToolTip',
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
};

export const PositionTop: Story = {
  args: {
    default: 'Pointing upwards',
    position: TooltipPosition.Top,
  },
};

export const PositionLeft: Story = {
  args: {
    default: 'Pointing left',
    position: TooltipPosition.Left,
  },
};

export const PositionBottom: Story = {
  args: {
    default: 'Pointing downwards',
    position: TooltipPosition.Bottom,
  },
};

export const PositionRight: Story = {
  args: {
    default: 'Pointing right',
    position: TooltipPosition.Right,
  },
};
