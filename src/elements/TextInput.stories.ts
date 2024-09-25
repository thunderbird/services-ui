import { fn } from '@storybook/test';
import type {Meta, StoryObj} from '@storybook/vue3';

import TextInput from "@/elements/TextInput.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Elements/TextInput',
  component: TextInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    name: 'example',
    default: 'Example Input'
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    name: 'name',
    default: 'Full Name'
  },
};

export const Disabled: Story = {
  args: {
    name: 'name',
    default: 'Full Name',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    name: 'fav-food',
    default: 'Favourite Food?',
    required: true,
  },
};

export const RequiredWithPlaceholder : Story = {
  args: {
    name: 'fav-food',
    default: 'Favourite Food?',
    placeholder: 'Pizza',
    required: true,
  },
};

export const Help : Story = {
  args: {
    name: 'fav-beverage',
    default: 'Favourite Beverage',
    help: 'When in doubt, go with water.',
  },
};

export const Time: Story = {
  args: {
    name: 'time',
    default: 'Current Time',
    type: 'time'
  },
};

export const Email: Story = {
  args: {
    name: 'email',
    default: 'Email Address',
    type: 'email',
    required: true,
  },
};
