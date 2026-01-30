import type { Meta, StoryObj } from '@storybook/vue3-vite';

import UserAvatar from '@/components/UserAvatar.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof UserAvatar> = {
  title: 'Components/UserAvatar',
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
  render: () => ({
    components: { UserAvatar },
    template: `
      <div style="display:flex;gap:1rem;align-items:center;">
        <user-avatar username="B" />
        <user-avatar username="Beatrice" />
        <user-avatar username="Beatrice Smith" />
        <user-avatar username="Beatrice Anna Smith" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: { code: '<user-avatar username="B" />\n<user-avatar username="Beatrice" />\n<user-avatar username="Beatrice Smith" />\n<user-avatar username="Beatrice Anna Smith" />' },
    },
  },
};

export const InitialsWithEmptyString: Story = {
  render: () => ({
    components: { UserAvatar },
    template: `<user-avatar username="" />`,
  }),
  parameters: {
    docs: {
      source: { code: '<user-avatar username="" />' },
    },
  },
};

export const AvatarUrl: Story = {
  args: {
    username: 'Beatrice',
    avatarUrl: '/img/placeholder.png',
  },
  render: () => ({
    components: { UserAvatar },
    template: `<user-avatar username="Beatrice" avatar-url="/img/placeholder.png" />`,
  }),
  parameters: {
    docs: {
      source: { code: '<user-avatar username="Beatrice" avatar-url="/img/placeholder.png" />' },
    },
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
