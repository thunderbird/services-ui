import {fn} from '@storybook/test';
import type {Meta, StoryObj} from '@storybook/vue3';

import BaseButton from './BaseButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Elements/Button',
  component: BaseButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: {control: 'select', options: ['regular', 'small']},
    type: {control: 'select', options: ['primary', 'secondary', 'link']},
    tooltip: {control: 'text'}
  },
  args: {
    tooltip: '',
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
    default: 'Click me!'
  },
} satisfies Meta<typeof BaseButton>;

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
      source: {code: '<primary-button>Click me!</primary-button>'},
    },
  }
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
  parameters: {
    docs: {
      source: {code: '<secondary-button>Click me!</secondary-button>'},
    },
  }
};

export const Link: Story = {
  args: {
    type: 'link',
  },
  parameters: {
    docs: {
      source: {code: '<link-button>Click me!</link-button>'},
    },
  }
};

export const Small: Story = {
  args: {
    type: 'primary',
    size: 'small',
  },
  parameters: {
    docs: {
      source: {code: '<primary-button size="small">Click me!</primary-button>'},
    },
  }
};
