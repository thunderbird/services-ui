import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

import BaseButton from '@/components/BaseButton.vue';
import RefreshIcon from '@/foundation/RefreshIcon.vue';
import TextInput from '@/components/TextInput.vue';
import IconButton from '@/components/IconButton.vue';
import PrimaryButton from './PrimaryButton.vue';
import BrandButton from './BrandButton.vue';
import DangerButton from './DangerButton.vue';
import LinkButton from './LinkButton.vue';

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
    /* @ts-ignore */
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

export const Standard: Story = {
  render: (args) => ({
    components: { PrimaryButton },
    setup() {
      return { args };
    },
    template: `<primary-button v-bind="args">Primary</primary-button>`,
  }),
  parameters: {
    docs: {
      source: {
        code: '<primary-button>Primary</primary-button>',
      },
    },
  },
};

export const Type: Story = {
  render: (args) => ({
    components: { PrimaryButton, BrandButton, DangerButton, LinkButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display:flex;gap:.5rem;align-items:center;">
        <primary-button>Primary</primary-button>
        <brand-button>Brand</brand-button>
        <danger-button>Danger</danger-button>
        <link-button>Link</link-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<primary-button>Primary</primary-button>\n<brand-button>Brand</brand-button>\n<danger-button>Danger</danger-button>\n<link-button>Link</link-button>',
      },
    },
  },
};

export const Variant: Story = {
  render: (args) => ({
    components: { PrimaryButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display:flex;gap:.5rem;align-items:center;">
        <primary-button variant="filled">Filled</primary-button>
        <primary-button variant="outline">Outline</primary-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<primary-button variant="filled">Filled</primary-button>\n<primary-button variant="outline">Outline</primary-button>',
      },
    },
  },
};

export const Anchor: Story = {
  render: (args) => ({
    components: { PrimaryButton, LinkButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display:flex;gap:.5rem;align-items:center;">
        <primary-button href="https://mozilla.org">mozilla.org</primary-button>
        <link-button href="https://mozilla.org">mozilla.org</link-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<primary-button href="https://mozilla.org">mozilla.org</primary-button>\n<link-button href="https://mozilla.org">mozilla.org</link-button>',
      },
    },
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { PrimaryButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display:flex;gap:.5rem;align-items:center;">
        <primary-button variant="filled" disabled>Disabled</primary-button>
        <primary-button variant="outline" disabled>Disabled</primary-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<primary-button variant="filled" disabled>Filled</primary-button>\n<primary-button variant="outline" disabled>Outline</primary-button>',
      },
    },
  },
};

export const FormAction: Story = {
  render: (args) => ({
    components: { PrimaryButton, TextInput },
    setup() {
      return { args };
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:1rem;">
        <form style="display:flex;gap:.5rem;max-width:500px">
          <text-input name="submit" type="text" placeholder="Fill and submit me" />
          <primary-button form-action="submit">Submit</primary-button>
        </form>
        <form style="display:flex;gap:.5rem;max-width:500px">
          <text-input name="submit" type="text" placeholder="Fill and reset me" />
          <primary-button form-action="reset">Reset</primary-button>
        </form>
        <form style="display:flex;gap:.5rem;max-width:500px">
          <text-input name="submit" type="text" placeholder="Fill me" />
          <primary-button form-action="none">None</primary-button>
        </form>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<primary-button form-action="submit">Submit</primary-button>\n<primary-button form-action="reset">Reset</primary-button>\n<primary-button form-action="none">None</primary-button>',
      },
    },
  },
};

export const Size: Story = {
  render: (args) => ({
    components: { PrimaryButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display:flex;gap:.5rem;align-items:center;">
        <primary-button size="default">Default</primary-button>
        <primary-button size="small">Small</primary-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<primary-button size="default">Default</primary-button>\n<primary-button size="small">Small</primary-button>',
      },
    },
  },
};

export const WithIcon: Story = {
  render: (args) => ({
    components: { PrimaryButton, RefreshIcon },
    setup() {
      return { args };
    },
    template: `
      <div style="display:flex;gap:.5rem;align-items:center;">
        <primary-button>
          <template #iconLeft>
            <RefreshIcon />
          </template>
          Icon left
        </primary-button>
        <primary-button>
          <template #iconRight>
            <RefreshIcon />
          </template>
          Icon right
        </primary-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: '<primary-button><template #iconLeft><refresh-icon /></template>Icon left</primary-button>\n<primary-button><template #iconRight><refresh-icon /></template>Icon right</primary-button>',
      },
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
      source: {
        code: '<icon-button size="small"><refresh-icon /></icon-button>\n<icon-button><refresh-icon /></icon-button>\n<icon-button size="medium"><refresh-icon /></icon-button>\n<icon-button size="large"><refresh-icon /></icon-button>',
      },
    },
  },
};
