import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { TooltipPosition } from '@/definitions';
import ToolTip from '@/components/ToolTip.vue';
import PrimaryButton from './PrimaryButton.vue';

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

export const Context: Story = {
  render: () => ({
    components: { ToolTip, PrimaryButton },
    template: `<div style="position:relative; padding-top:3rem;">
      <primary-button>
        Copy the booking link
      </primary-button>
      <tool-tip style="top:0;">
        This button copies to clipboard
      </tool-tip>
      <p>Tooltips are currently not assigned to a specific element, but placed and positioned separately. This will be improved in the future.</p>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: '<div style="position: relative; padding-top: 3rem;">\n  <primary-button>\n    Copy the booking link\n  </primary-button>\n  <tool-tip style="top: 0;">\n    This button copies to clipboard\n  </tool-tip>\n</div>',
      },
    },
  },
};
