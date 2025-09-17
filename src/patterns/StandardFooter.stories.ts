import type { Meta, StoryObj } from '@storybook/vue3-vite';
import StandardFooter from '@/patterns/StandardFooter.vue';
import AppointmentLogo from '@/assets/svg/appointment-logo.svg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof StandardFooter> = {
  title: 'Patterns/StandardFooter',
  component: StandardFooter,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    contributeToThisSiteUrl: 'https://github.com/mozilla/services-ui',
  },
  render: (args) => ({
    components: { StandardFooter },
    setup() {
      return { args };
    },
    template: `
      <StandardFooter v-bind="args">
        <template #privacyPolicy>
          <li><a href="#privacy">Privacy Policy</a></li>
        </template>
        <template #legal>
          <li><a href="#legal">Legal</a></li>
        </template>
      </StandardFooter>
    `,
  }),
};

export const WithTBProServiceFooter: Story = {
  args: {
    contributeToThisSiteUrl: 'https://github.com/mozilla/services-ui',
  },
  render: (args) => ({
    components: { StandardFooter },
    setup() {
      return { args };
    },
    template: `
      <StandardFooter v-bind="args">
        <template #default>
          <nav style="display: flex; justify-content: space-between; align-items: center;">
            <img src="${AppointmentLogo}" alt="Appointment Logo" />

            <ul style="display: flex; list-style: none; gap: 1rem; margin: 0; padding: 0;">
              <li><a href="#">LOGIN</a></li>
            </ul>
          </nav>
        </template>
        <template #privacyPolicy>
          <li><a href="#privacy">Privacy Policy</a></li>
        </template>
        <template #legal>
          <li><a href="#legal">Legal</a></li>
        </template>
      </StandardFooter>
    `,
  }),
};