import type { Meta, StoryObj } from '@storybook/vue3-vite';

import UserAvatar from '@/elements/UserAvatar.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof UserAvatar> = {
  title: 'Elements/UserAvatar',
  component: UserAvatar,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    username: { control: 'text' },
    avatarUrl: { control: 'text' },
  },
  args: {
    username: 'Username',
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Initials: Story = {
  args: {
    username: 'Beatrice',
  },
};

export const InitialsWithEmptyString: Story = {
  args: {
    username: '',
  },
};

export const AvatarUrl: Story = {
  args: {
    username: 'Beatrice',
    avatarUrl: '/img/placeholder.png'
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { UserAvatar },
    template: `
      <div style="display:flex;gap:1rem;align-items:center;">
        <user-avatar
          username="Jennifer"
          size="extra-small"
        />
        <user-avatar
          username="Jennifer"
          size="small"
        />
        <user-avatar
          username="Jennifer"
          size="regular"
        />
        <user-avatar
          username="Jennifer"
          size="large"
        />
      </div>
    `,
  }),
};
