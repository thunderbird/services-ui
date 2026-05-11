import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { TooltipPosition } from '@/definitions';
import ToolTip from '@/components/ToolTip.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof ToolTip> = {
  title: 'Components/ToolTip',
  component: ToolTip,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: Object.values(TooltipPosition) },
    default: { control: 'text' },
  },
  args: {
    default: 'Primary',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  decorators: [
    (story) => ({
      components: { story },
      template: `<div style="min-height:60px;"><story /></div>`,
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: '<tool-tip>Primary</tool-tip>',
      },
    },
  },
};

export const Position: Story = {
  render: () => ({
    components: { ToolTip },
    template: `<div style="display:flex;flex-direction:column;gap:1rem;">
      <div style="position:relative;height:3rem;"><tool-tip position="pos-top">Pointing upwards</tool-tip></div>
      <div style="position:relative;height:3rem;"><tool-tip position="pos-left">Pointing left</tool-tip></div>
      <div style="position:relative;height:3rem;"><tool-tip position="pos-bottom">Pointing downwards</tool-tip></div>
      <div style="position:relative;height:3rem;"><tool-tip position="pos-right">Pointing right</tool-tip></div>
      <div style="position:relative;height:3rem;"><tool-tip position="pos-none">Pointing nowhere</tool-tip></div>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: '<tool-tip position="pos-top">Pointing upwards</tool-tip>\n<tool-tip position="pos-left">Pointing left</tool-tip>\n<tool-tip position="pos-bottom">Pointing downwards</tool-tip>\n<tool-tip position="pos-right">Pointing right</tool-tip>\n<tool-tip position="pos-none">Pointing nowhere</tool-tip>',
      },
    },
  },
};
