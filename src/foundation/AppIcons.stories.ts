import type { Meta, StoryObj } from '@storybook/vue3-vite';

import MailIcon from '@/foundation/MailIcon.vue';
import AppointmentIcon from '@/foundation/AppointmentIcon.vue';
import SendIcon from '@/foundation/SendIcon.vue';

const meta: Meta<typeof MailIcon> = {
  title: 'Foundational Items/App Icons',
  component: MailIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Mail: Story = {
  render: () => ({
    components: { MailIcon },
    template: '<mail-icon />',
  }),
  parameters: {
    docs: {
      source: { code: '<mail-icon />' },
    },
  },
};

export const Appointment: Story = {
  render: () => ({
    components: { AppointmentIcon },
    template: '<appointment-icon />',
  }),
  parameters: {
    docs: {
      source: { code: '<appointment-icon />' },
    },
  },
};

export const Send: Story = {
  render: () => ({
    components: { SendIcon },
    template: '<send-icon />',
  }),
  parameters: {
    docs: {
      source: { code: '<send-icon />' },
    },
  },
};
