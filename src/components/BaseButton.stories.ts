import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseButton from '@/components/BaseButton.vue';
import RefreshIcon from '@/foundation/RefreshIcon.vue';
import TextInput from '@/components/TextInput.vue';
import IconButton from '@/components/IconButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof BaseButton> = {
  title: 'Components/Button',
  component: BaseButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['regular', 'small'] },
    variant: { control: 'select', options: ['filled', 'outline'] },
    type: { control: 'select', options: ['primary', 'brand', 'danger', 'link'] },
    tooltip: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    tooltip: '',
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
    default: 'Click me!',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    type: 'primary',
  },
  parameters: {
    docs: {
      source: { code: '<primary-button>Click me!</primary-button>' },
    },
  },
};

export const Brand: Story = {
  args: {
    type: 'brand',
    variant: 'filled',
    default: 'Subscribe now',
  },
  parameters: {
    docs: {
      source: { code: '<brand-button>Subscribe now</brand-button>' },
    },
  },
};

export const Outline: Story = {
  args: {
    type: 'brand',
    variant: 'outline',
    default: 'Subscribe now',
  },
  parameters: {
    docs: {
      source: { code: '<brand-button type="outline">Subscribe now</brand-button>' },
    },
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
  },
  parameters: {
    docs: {
      source: { code: '<danger-button>Click me!</danger-button>' },
    },
  },
};

export const Link: Story = {
  args: {
    type: 'link',
  },
  parameters: {
    docs: {
      source: { code: '<link-button>Click me!</link-button>' },
    },
  },
};

export const Submit: Story = {
  args: {
    type: 'primary',
    formAction: 'submit',
    default: 'Submit',
  },
  decorators: [
    (story) => ({
      components: { story, TextInput },
      template: `
        <form style="display:flex;gap:1rem;max-width:500px">
          <text-input name="submit" type="text" placeholder="Fill and submit me" />
          <story />
        </form>
      `,
    })
  ]
};

export const Reset: Story = {
  args: {
    type: 'primary',
    formAction: 'reset',
    default: 'Reset',
  },
  decorators: [
    (story) => ({
      components: { story, TextInput },
      template: `
        <form style="display:flex;gap:1rem;max-width:500px">
          <text-input name="reset" type="text" placeholder="Fill and reset me" />
          <story />
        </form>
      `,
    })
  ]
};

export const Small: Story = {
  args: {
    type: 'primary',
    size: 'small',
  },
  parameters: {
    docs: {
      source: { code: '<primary-button size="small">Click me!</primary-button>' },
    },
  },
};

export const WithIconLeft: Story = {
  args: {
    type: 'primary',
    variant: 'filled',
    default: 'Refresh',
  },
  render: (args) => ({
    components: { BaseButton, RefreshIcon },
    setup() {
      return { args };
    },
    template: `
      <BaseButton v-bind="args" @click="args.onClick">
        <template #iconLeft>
          <RefreshIcon />
        </template>
        {{ args.default }}
      </BaseButton>
    `,
  }),
  parameters: {
    docs: {
      source: { code: '<primary-button variant="filled"><template #icon><RefreshIcon /></template>Refresh</primary-button>' },
    },
  },
};

export const WithIconRight: Story = {
  args: {
    type: 'primary',
    variant: 'filled',
    default: 'Refresh',
  },
  render: (args) => ({
    components: { BaseButton, RefreshIcon },
    setup() {
      return { args };
    },
    template: `
      <BaseButton v-bind="args" @click="args.onClick">
        {{ args.default }}

        <template #iconRight>
          <RefreshIcon />
        </template>
      </BaseButton>
    `,
  }),
  parameters: {
    docs: {
      source: { code: '<primary-button variant="filled"><template #iconRight><RefreshIcon /></template>Refresh</primary-button>' },
    },
  },
};

export const IconOnly: Story = {
  render: (args) => ({
    components: { IconButton, RefreshIcon },
    setup() {
      return { args };
    },
    template: `
      <div style="display:flex;gap:.5rem;align-items:center;">
        <icon-button size="small">
          <refresh-icon />
        </icon-button>
        <icon-button>
        <refresh-icon />
        </icon-button>
        <icon-button size="medium">
          <refresh-icon />
        </icon-button>
        <icon-button size="large">
          <refresh-icon />
        </icon-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: { code: '<icon-button size="small"><refresh-icon /></icon-button>\n<icon-button><refresh-icon /></icon-button>\n<icon-button size="medium"><refresh-icon /></icon-button>\n<icon-button size="large"><refresh-icon /></icon-button>' },
    },
  },
};
