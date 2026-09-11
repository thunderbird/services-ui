import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { markRaw } from 'vue';
import AppDrawer, { type AppDrawerApp } from '@/patterns/AppDrawer.vue';
import MailIcon from '@/foundation/MailIcon.vue';
import AppointmentIcon from '@/foundation/AppointmentIcon.vue';
import SendIcon from '@/foundation/SendIcon.vue';

const apps: AppDrawerApp[] = [
  { id: 'mail', name: 'Mail', icon: markRaw(MailIcon), current: true },
  { id: 'send', name: 'Send', icon: markRaw(SendIcon), href: 'https://send.example' },
  { id: 'appointment', name: 'Appointment', icon: markRaw(AppointmentIcon), href: 'https://appointment.example' },
];

const meta: Meta<typeof AppDrawer> = {
  title: 'Patterns/AppDrawer',
  component: AppDrawer,
  tags: ['autodocs'],
  args: {
    apps,
    onSelect: fn(),
  },
  argTypes: {
    apps: {
      description:
        'The apps to show as tiles. The one marked `current` renders as a non-navigable, highlighted tile; the rest link out via `href`, or emit `select` when omitted (for in-app navigation).',
    },
    triggerLabel: {
      description: "aria-label and title for the trigger button.",
      control: 'text',
    },
    menuLabel: {
      description: 'aria-label for the popover menu.',
      control: 'text',
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
    components: { AppDrawer },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: flex-end; padding: 2rem;">
        <AppDrawer v-bind="args" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<app-drawer :apps="apps" @select="onSelect" />`,
      },
    },
  },
};

export const InTopNav: Story = {
  render: (args) => ({
    components: { AppDrawer },
    setup() {
      return { args };
    },
    template: `
      <nav style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; border-radius: 0.5rem; background: var(--colour-neutral-lower);">
        <strong>Service</strong>
        <AppDrawer v-bind="args" />
      </nav>
    `,
  }),
};

// An app without an `href` emits `select` instead of navigating, so it can be wired up to a router.
// Check this story by clicking on "Send" or "Appointment" and checking the "Actions" tab for the emitted event.
export const WithoutHref: Story = {
  args: {
    apps: apps.map((app) => (app.id === 'send' || app.id === 'appointment' ? { ...app, href: undefined } : app)),
  },
  render: (args) => ({
    components: { AppDrawer },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: flex-end; padding: 2rem;">
        <AppDrawer v-bind="args" />
      </div>
    `,
  }),
};
