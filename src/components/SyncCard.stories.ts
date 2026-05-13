import type { Meta, StoryObj } from '@storybook/vue3-vite';
import SyncCard from '@/components/SyncCard.vue';
import { ref, watch } from 'vue';
import CalendarIcon from '@/assets/svg/icons/calendar.svg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof SyncCard> = {
  title: 'Components/SyncCard',
  component: SyncCard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    title: 'Title',
  },
  render: (args) => ({
    components: { SyncCard },
    setup() {
      const model = ref(args.modelValue);

      watch(
        () => args.modelValue,
        (val) => {
          model.value = val;
        }
      );

      return { args, model };
    },
    template: `<sync-card v-bind="args" v-model="model" />`,
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    modelValue: [
      {
        key: 0,
        label: 'Option 1',
        checked: false,
      },
      {
        key: 1,
        label: 'Option 2',
        checked: true,
      },
      {
        key: 2,
        label: 'Option 3',
        checked: false,
      },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: '<sync-card\n  title="Title"\n  v-model="[\n    { key: 0, label: \'Option 1\', checked: false },\n    { key: 1, label: \'Option 2\', checked: true },\n    { key: 2, label: \'Option 3\', checked: false },\n  ]"\n/>',
      },
    },
  },
};

export const Icon: Story = {
  args: {
    title: 'Select calendars to sync',
    modelValue: [
      {
        key: 0,
        label: 'My calendar',
        checked: true,
      },
      {
        key: 1,
        label: 'Test Calendar',
        checked: false,
      },
      {
        key: 2,
        label: 'Where all the spam events go',
        checked: false,
      },
      {
        key: 3,
        label: 'Work PTO',
        checked: true,
      },
    ],
  },
  render: (args) => ({
    components: { SyncCard },
    setup() {
      const model = ref(args.modelValue);

      watch(
        () => args.modelValue,
        (val) => {
          model.value = val;
        }
      );

      return { args, model };
    },
    template: `
      <sync-card v-bind="args" v-model="model">
        <template v-slot:icon>
          <span class="icon-calendar">
            <img src="${CalendarIcon}" alt="Calendar Icon"/>
          </span>
        </template>
      </sync-card>`,
  }),
  parameters: {
    docs: {
      source: {
        code: '<sync-card\n  title="Title"\n  v-model="[\n    { key: 0, label: \'My calendar\', checked: true },\n    { key: 1, label: \'Test Calendar\', checked: false },\n    { key: 2, label: \'Where all the spam events go\', checked: false },\n    { key: 3, label: \'Work PTO\', checked: true },\n  ]"\n>\n  <template v-slot:icon>\n    <img src="/assets/svg/icons/calendar.svg" alt="Calendar Icon"/>\n  </template>\n</sync-card>',
      },
    },
  },
};
