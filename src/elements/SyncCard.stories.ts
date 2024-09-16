import {fn} from '@storybook/test';
import type {Meta, StoryObj} from '@storybook/vue3';
import SyncCard from "@/elements/SyncCard.vue";
import {ref, watch} from "vue";
//import { CalendarItem } from '@/models';
import CalendarIcon from '@/assets/svg/icons/calendar.svg'

type CalendarItem = {
  key: number;
  label: string;
  checked: boolean;
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Elements/SyncCard',
  component: SyncCard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
    fakeModelValue: [],
    title: 'Sync Card Demo',
  },
  parameters: {
    docs: {
      /*
      source: {
        format: true,
        code: `
        <sync-card title="Sync Card Demo" v-model="sync-card-model">
          <template v-slot:icon>
            <span>
              <img :src="icon" alt="icon alt text"/>
            </span>
          </template>
        </sync-card>
      `
      },
       */
    },
  },
  render: (args) => ({
    components: {SyncCard},
    setup() {
      const model = ref(args.modelValue);

      watch(
        () => args.modelValue,
        (val) => {
          model.value = val;
        },
      );

      return {args, model};
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
} satisfies Meta<typeof SyncCard>;

export default meta;
type Story = StoryObj<typeof meta>;
export const CalendarSync: Story = {
  args: {
    modelValue: [
      {
        key: 0,
        label: 'My calendar',
        checked: false,
      },
      {
        key: 1,
        label: 'Test Calendar',
        checked: false,
      },
      {
        key: 2,
        label: 'Where all the spam events go',
        checked: true,
      },
      {
        key: 3,
        label: 'Work PTO',
        checked: false,
      },
      {
        key: 4,
        label: 'That calendar you never use but its full of holidays',
        checked: false,
      }
    ]
  }
};

export const FileSync: Story = {
  args: {
    modelValue: [
      {
        key: 0,
        label: 'acorn.png',
        checked: false,
      },
      {
        key: 1,
        label: 'squirrel shopping list.txt',
        checked: false,
      },
      {
        key: 2,
        label: 'chill beats to hibernate to.zip',
        checked: false,
      }
    ]
  },
};
