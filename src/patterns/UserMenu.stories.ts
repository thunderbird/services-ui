import type { Meta, StoryObj } from '@storybook/vue3-vite';
import UserMenu from '@/patterns/UserMenu.vue';

// Slotted menu items, shared by all story templates
const menuItems = [
  '<a href="#" role="menuitem">Account</a>',
  '<a href="#" role="menuitem">Manage subscription</a>',
  '<a href="#" role="menuitem">Support</a>',
  '<a href="#" role="menuitem">Sign out</a>',
];

const meta: Meta<typeof UserMenu> = {
  title: 'Patterns/UserMenu',
  component: UserMenu,
  tags: ['autodocs'],
  args: {
    username: 'Jane Doe',
    forceDark: false,
  },
  argTypes: {
    username: {
      description: 'Name of the logged in user, used for the avatar initials.',
      control: 'text',
    },
    avatarUrl: {
      description: 'Optional avatar image URL, shown instead of the initials.',
      control: 'text',
    },
    triggerLabel: {
      description: 'Screen reader label and title for the trigger button.',
      control: 'text',
    },
    menuLabel: {
      description: 'aria-label for the popover menu.',
      control: 'text',
    },
    forceDark: {
      description: 'Render the popover in dark mode regardless of the current theme.',
      control: 'boolean',
    },
    dataTestid: {
      description: 'Test ID for the component',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  render: (args) => ({
    components: { UserMenu },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: flex-end; align-items: flex-start; min-height: 12rem; padding: 2rem;">
        <user-menu v-bind="args">${menuItems.join('')}</user-menu>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<user-menu username="Jane Doe">\n  ${menuItems.join('\n  ')}\n</user-menu>`,
      },
    },
  },
};

export const InTopNav: Story = {
  render: (args) => ({
    components: { UserMenu },
    setup() {
      return { args };
    },
    template: `
      <div style="min-height: 14rem;">
        <nav style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; border-radius: 0.5rem; background: var(--colour-neutral-lower);">
          <strong>Service</strong>
          <user-menu v-bind="args">${menuItems.join('')}</user-menu>
        </nav>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<nav>\n  <strong>Service</strong>\n  <user-menu username="Jane Doe">\n    ${menuItems.join('\n    ')}\n  </user-menu>\n</nav>`,
      },
    },
  },
};

export const ForceDark: Story = {
  args: {
    forceDark: true,
  },
  render: Standard.render,
  parameters: {
    docs: {
      source: {
        code: `<user-menu username="Jane Doe" force-dark>\n  ${menuItems.join('\n  ')}\n</user-menu>`,
      },
    },
  },
};
