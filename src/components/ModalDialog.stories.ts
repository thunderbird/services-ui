import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ModalDialog from '@/components/ModalDialog.vue';
import { ref } from 'vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof ModalDialog> = {
  title: 'Components/ModalDialog',
  component: ModalDialog,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    default: 'Important note',
  },
  render: (args) => ({
    components: { ModalDialog },
    setup() {
      const modal = ref(null);
      return { args, modal };
    },
    template: `
      <button @click="modal.show()">open</button>
      <modal-dialog ref="modal">test</modal-dialog>`,
  }),
};
