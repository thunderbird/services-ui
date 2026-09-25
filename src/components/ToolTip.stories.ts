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
    beak: { control: 'boolean' },
    content: { control: 'text' },
  },
  args: {
    content: 'Primary',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  render: (args) => ({
    components: { ToolTip, PrimaryButton },
    setup() {
      return { args };
    },
    template: `<div style="min-height:60px;">
      <tool-tip v-bind="args">
        <primary-button>Hover me</primary-button>
        <template #content>{{ args.content }}</template>
      </tool-tip>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: '<tool-tip>\n  <primary-button>Hover me</primary-button>\n  <template #content>Primary</template>\n</tool-tip>',
      },
    },
  },
};

export const Position: Story = {
  render: () => ({
    components: { ToolTip, PrimaryButton },
    template: `<div style="display:flex;gap:2rem;padding:3rem;">
      <tool-tip position="pos-top"><primary-button>Top</primary-button><template #content>Appears above</template></tool-tip>
      <tool-tip position="pos-left"><primary-button>Left</primary-button><template #content>Appears to the left</template></tool-tip>
      <tool-tip position="pos-bottom"><primary-button>Bottom</primary-button><template #content>Appears below</template></tool-tip>
      <tool-tip position="pos-right"><primary-button>Right</primary-button><template #content>Appears to the right</template></tool-tip>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: '<tool-tip position="pos-top"><primary-button>Top</primary-button><template #content>Appears above</template></tool-tip>\n<tool-tip position="pos-left"><primary-button>Left</primary-button><template #content>Appears to the left</template></tool-tip>\n<tool-tip position="pos-bottom"><primary-button>Bottom</primary-button><template #content>Appears below</template></tool-tip>\n<tool-tip position="pos-right"><primary-button>Right</primary-button><template #content>Appears to the right</template></tool-tip>',
      },
    },
  },
};

export const NoBeak: Story = {
  render: () => ({
    components: { ToolTip, PrimaryButton },
    template: `<div style="display:flex;gap:2rem;padding:3rem;">
      <tool-tip position="pos-top" :beak="false"><primary-button>Top</primary-button><template #content>Appears above</template></tool-tip>
      <tool-tip position="pos-left" :beak="false"><primary-button>Left</primary-button><template #content>Appears to the left</template></tool-tip>
      <tool-tip position="pos-bottom" :beak="false"><primary-button>Bottom</primary-button><template #content>Appears below</template></tool-tip>
      <tool-tip position="pos-right" :beak="false"><primary-button>Right</primary-button><template #content>Appears to the right</template></tool-tip>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: '<tool-tip position="pos-top" :beak="false"><primary-button>Top</primary-button><template #content>Appears above</template></tool-tip>\n<tool-tip position="pos-left" :beak="false"><primary-button>Left</primary-button><template #content>Appears to the left</template></tool-tip>\n<tool-tip position="pos-bottom" :beak="false"><primary-button>Bottom</primary-button><template #content>Appears below</template></tool-tip>\n<tool-tip position="pos-right" :beak="false"><primary-button>Right</primary-button><template #content>Appears to the right</template></tool-tip>',
      },
    },
  },
};

export const AlwaysVisible: Story = {
  render: () => ({
    components: { ToolTip, PrimaryButton },
    template: `<div style="padding-top:3rem;">
      <tool-tip visible position="pos-top">
        <primary-button>
          Copy the booking link
        </primary-button>
        <template #content>
          This button copies to clipboard
        </template>
      </tool-tip>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: '<tool-tip visible position="pos-top">\n  <primary-button>\n    Copy the booking link\n  </primary-button>\n  <template #content>\n    This button copies to clipboard\n  </template>\n</tool-tip>',
      },
    },
  },
};
