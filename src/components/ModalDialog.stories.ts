import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ModalDialog from '@/components/ModalDialog.vue';
import PrimaryButton from './PrimaryButton.vue';
import TextInput from './TextInput.vue';
import NoticeBar from './NoticeBar.vue';
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
  render: (args) => ({
    components: { ModalDialog, PrimaryButton, NoticeBar },
    setup() {
      const modal = ref(null);
      return { args, modal };
    },
    template: `<div style="display:flex;flex-direction:column;gap:1rem;align-items:start;">
      <notice-bar type="warning">Please note: Each story of this component should be viewed in fullscreen / in a new tab.</notice-bar>
      <notice-bar type="info">A modal with header, body, actions and footer section.</notice-bar>
      <primary-button @click="modal.show()">Open Modal</primary-button>
      <modal-dialog ref="modal">
        <template #header>
          Modal Title
        </template>
        
        <strong>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</strong><br><br>
        <span>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>

        <template #actions>
          <primary-button name="cancel" variant="outline">Secondary</primary-button>
          <primary-button name="go">Primary</primary-button>
        </template>

        <template #footer>
          <a href="#">Support</a>
          <span>•</span>
          <a href="#">Privacy Policy</a>
        </template>
      </modal-dialog>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<modal-dialog ref="modal">
        <template #header>
          Modal Title
        </template>
        
        <strong>Lorem ipsum dolor sit amet...</strong><br><br>
        <span>At vero eos et accusam et ...</span>

        <template #actions>
          <primary-button name="cancel" variant="outline">Secondary</primary-button>
          <primary-button name="go">Primary</primary-button>
        </template>

        <template #footer>
          <a href="#">Support</a>
          <span>•</span>
          <a href="#">Privacy Policy</a>
        </template>
      </modal-dialog>`,
      },
    },
  },
};

export const Simple: Story = {
  render: (args) => ({
    components: { ModalDialog, PrimaryButton, NoticeBar },
    setup() {
      const modal = ref(null);
      return { args, modal };
    },
    template: `<div style="display:flex;flex-direction:column;gap:1rem;align-items:start;">
      <notice-bar type="info">A modal with only a body section.</notice-bar>
      <primary-button @click="modal.show()">Open Modal</primary-button>
      <modal-dialog ref="modal">
        <span>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>
      </modal-dialog>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<modal-dialog ref="modal">
        <span>At vero eos et accusam et ...</span>
      </modal-dialog>`,
      },
    },
  },
};

export const WithHeader: Story = {
  render: (args) => ({
    components: { ModalDialog, PrimaryButton, NoticeBar },
    setup() {
      const modal = ref(null);
      return { args, modal };
    },
    template: `<div style="display:flex;flex-direction:column;gap:1rem;align-items:start;">
      <notice-bar type="info">A modal with a header and a body section.</notice-bar>
      <primary-button @click="modal.show()">Open Modal</primary-button>
      <modal-dialog ref="modal">
        <template #header>Modal Title</template>
        <span>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>
      </modal-dialog>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<modal-dialog ref="modal">
        <template #header>Modal Title</template>
        <span>At vero eos et accusam et ...</span>
      </modal-dialog>`,
      },
    },
  },
};

export const WithActions: Story = {
  render: (args) => ({
    components: { ModalDialog, PrimaryButton, TextInput, NoticeBar },
    setup() {
      const modal = ref(null);
      return { args, modal };
    },
    template: `<div style="display:flex;flex-direction:column;gap:1rem;align-items:start;">
      <notice-bar type="info">A modal with a form and an actions section.</notice-bar>
      <primary-button @click="modal.show()">Open Modal</primary-button>
      <modal-dialog ref="modal">
        <form style="display:flex;flex-direction:column;gap:1rem;">
          <text-input name="one" label="Important field" required />
          <text-input name="two" label="Another field" />
        </form>
        <template #actions>
          <primary-button name="cancel" variant="outline">Cancel</primary-button>
          <primary-button name="save">Save</primary-button>
        </template>
      </modal-dialog>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<modal-dialog ref="modal">
        <form>
          <text-input name="one" label="Important field" required />
          <text-input name="two" label="Another field" />
        </form>
        <template #actions>
          <primary-button name="cancel" variant="outline">Cancel</primary-button>
          <primary-button name="save">Save</primary-button>
        </template>
      </modal-dialog>`,
      },
    },
  },
};

export const WithFooter: Story = {
  render: (args) => ({
    components: { ModalDialog, PrimaryButton, NoticeBar },
    setup() {
      const modal = ref(null);
      return { args, modal };
    },
    template: `<div style="display:flex;flex-direction:column;gap:1rem;align-items:start;">
      <notice-bar type="info">A modal with a footer section.</notice-bar>
      <primary-button @click="modal.show()">Open Modal</primary-button>
      <modal-dialog ref="modal">
        <strong>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</strong><br><br>
        <span>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>

        <template #footer>
          <a href="#">Support</a>
          <span>•</span>
          <a href="#">Privacy Policy</a>
        </template>

      </modal-dialog>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<modal-dialog ref="modal">
        <strong>Lorem ipsum dolor...</strong><br><br>
        <span>At vero eos et ...</span>

        <template #footer>
          <a href="#">Support</a>
          <span>•</span>
          <a href="#">Privacy Policy</a>
        </template>
      </modal-dialog>`,
      },
    },
  },
};
