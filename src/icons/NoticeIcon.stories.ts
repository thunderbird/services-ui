import type { Meta, StoryObj } from '@storybook/vue3-vite';

import NoticeInfoIcon from "@/icons/NoticeInfoIcon.vue";
import NoticeSuccessIcon from "@/icons/NoticeSuccessIcon.vue";
import NoticeWarningIcon from "@/icons/NoticeWarningIcon.vue";
import NoticeCriticalIcon from "@/icons/NoticeCriticalIcon.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof NoticeInfoIcon> = {
  title: 'Icons/Notice',
  component: NoticeInfoIcon,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: () => ({
    components: { NoticeInfoIcon },
    template: '<notice-info-icon />',
  }),
  parameters: {
    docs: {
      source: { code: '<notice-info-icon />' },
    },
  }
};

export const Success: Story = {
  render: () => ({
    components: { NoticeSuccessIcon },
    template: '<notice-success-icon />',
  }),
  parameters: {
    docs: {
      source: { code: '<notice-success-icon />' },
    },
  }
};

export const Warning: Story = {
  render: () => ({
    components: { NoticeWarningIcon },
    template: '<notice-warning-icon />',
  }),
  parameters: {
    docs: {
      source: { code: '<notice-warning-icon />' },
    },
  }
};

export const Critical: Story = {
  render: () => ({
    components: { NoticeCriticalIcon },
    template: '<notice-critical-icon />',
  }),
  parameters: {
    docs: {
      source: { code: '<notice-critical-icon />' },
    },
  }
};
