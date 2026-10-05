import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ModalDialog from '@/components/ModalDialog.vue';
import PrimaryButton from './PrimaryButton.vue';
import TextInput from './TextInput.vue';
import NoticeBar from './NoticeBar.vue';
import LinkButton from './LinkButton.vue';
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
        
        <strong>The druid circles of Mistward shaped oaks into halls. Over Highvale, dragons traced bright arcs above the thorn maze. Minstrels in Glimmerdeep still sing of the lost grimoire.</strong><br><br>
        <span>The blessed trials awaited in the hollow temple of Silverfen. Legends in Dragon's Rest foretell a shadow child who will mend the crown. Knights of Redmarsh raised their lances to a pale sun. Each solstice, Oakshield honors the crimson sigil with fire and song. A hidden door opened within Nightveil's echoing caverns.</span>

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
        
        <strong>The druid circles of Mistward...</strong><br><br>
        <span>The blessed trials awaited in the hollow temple of Silverfen...</span>

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
        <span>The blessed trials awaited in the hollow temple of Silverfen. Legends in Dragon's Rest foretell a shadow child who will mend the crown. Knights of Redmarsh raised their lances to a pale sun. Each solstice, Oakshield honors the crimson sigil with fire and song. A hidden door opened within Nightveil's echoing caverns.</span>
      </modal-dialog>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<modal-dialog ref="modal">
        <span>The blessed trials awaited in the hollow temple of Silverfen...</span>
      </modal-dialog>`,
      },
    },
  },
};

export const WithLogoAndHeader: Story = {
  render: (args) => ({
    components: { ModalDialog, PrimaryButton, NoticeBar },
    setup() {
      const modal = ref(null);
      return { args, modal };
    },
    template: `<div style="display:flex;flex-direction:column;gap:1rem;align-items:start;">
      <notice-bar type="info">A modal with a logo, a header and a body section.</notice-bar>
      <primary-button @click="modal.show()">Open Modal</primary-button>
      <modal-dialog ref="modal">
        <template #logo>
          <svg width="144" height="73" viewBox="0 0 144 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.919 13.676c4.85 0 9.205 1.527 12.19 3.95a18.01 18.01 0 0 0-5.219 1.03c2.412.89 4.484 2.262 6.02 3.958a18.66 18.66 0 0 0-3.509-.264 24.732 24.732 0 0 1 4.424 14.15c0 13.78-11.239 24.951-25.103 24.951-13.65 0-25.103-11.36-25.103-24.951 0-2.147.288-4.364.845-6.442.145-.436.35-.855.62-1.008.338-.191.646.38.696.566.368 1.373.864 2.701 1.475 3.973-.053-2.85 1.17-5.444 2.855-7.689 1.123-1.496 2.164-2.883 2.645-6.884.032-.268.289-.462.547-.378 3.57 1.162 5.517 6.96 5.323 11.942a12.368 12.368 0 0 0-2.336 7.252c0 6.864 5.566 12.428 12.433 12.428s12.434-5.564 12.434-12.428c0-6.864-5.567-12.428-12.434-12.428a12.39 12.39 0 0 0-8.254 3.134c-.386-2.044.306-5.2 3.95-6.688h.012c1.58-5.492 8.47-8.174 15.489-8.174Zm-8.26 6.27s-.66-.774-1.97-.346c-1.225.401-1.415 1.269-1.415 1.269a1.801 1.801 0 0 0 2.18.79c1.313-.411 1.207-1.697 1.206-1.714Z" fill="#1373D9"/>
              <path opacity=".2" d="m34.036 37.845 3.094-7.064" stroke="#1373D9" stroke-width="1.857"/>
              <path d="M43.968 36.43a.929.929 0 0 1 .609 1.628l-9.27 8.063c-1.052.915-2.61-.25-2.029-1.516l2.587-5.64 1.688.773-1.502 3.275 5.435-4.727h-1.903l.85-1.856h3.535ZM39.6 29.625a1.662 1.662 0 0 1 1.555 2.25l-.044.104-1.635 3.564-.844-.386-.844-.386 1.509-3.29H34.55a.907.907 0 0 0-.81.5l-.03.063-1.795 4.386h3.754l-.85 1.855h-4.286a.929.929 0 0 1-.86-1.279l2.32-5.665.04-.096a2.764 2.764 0 0 1 2.517-1.62h5.05Z" fill="#1373D9"/>
              <path d="m39.07 34.203-3.34 7.283" stroke="#1373D9" stroke-width="1.857"/>
              <path d="M71.526 46.192V27.24h3.45l6.237 11.56 6.266-11.56H90.9v18.953H87.48V33.53l-6.266 11.56-6.237-11.56v12.663h-3.45Zm29.125-14.594c3.782 0 6.128 2.4 6.128 6.014v8.58h-3.285v-1.71c-1.049 1.324-2.843 2.041-4.498 2.041-3.036 0-5.327-1.793-5.327-4.552 0-2.814 2.622-4.745 5.823-4.745 1.298 0 2.705.276 4.002.773v-.387c0-1.655-.91-3.255-3.505-3.255-1.352 0-2.65.469-3.864 1.076l-1.159-2.345c2.015-.993 3.891-1.49 5.685-1.49Zm-.91 12.47c1.628 0 3.367-.828 3.753-2.345v-1.6c-1.049-.359-2.235-.552-3.505-.552-1.683 0-3.036.938-3.036 2.29s1.187 2.207 2.788 2.207Zm11.843-14.29c-1.077 0-1.932-.911-1.932-1.932 0-1.02.855-1.903 1.932-1.903 1.049 0 1.904.882 1.904 1.903 0 1.02-.855 1.931-1.904 1.931Zm-1.711 16.414V31.93h3.367v14.263h-3.367Zm6.536 0V26.908h3.368v19.284h-3.368Z" fill="#3471D2"/>
          </svg>
        </template>
        <template #header>Modal Title</template>
        <span>The blessed trials awaited in the hollow temple of Silverfen. Legends in Dragon's Rest foretell a shadow child who will mend the crown. Knights of Redmarsh raised their lances to a pale sun. Each solstice, Oakshield honors the crimson sigil with fire and song. A hidden door opened within Nightveil's echoing caverns.</span>
      </modal-dialog>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<modal-dialog ref="modal">
        <template #logo><svg ...>...</svg></template>
        <template #header>Modal Title</template>
        <span>The blessed trials awaited in the hollow temple of Silverfen...</span>
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

export const WithNotification: Story = {
  render: (args) => ({
    components: { ModalDialog, PrimaryButton, TextInput, NoticeBar },
    setup() {
      const modal = ref(null);
      return { args, modal };
    },
    template: `<div style="display:flex;flex-direction:column;gap:1rem;align-items:start;">
      <notice-bar type="info">A modal with a notification slot, used here as a hint about required fields.</notice-bar>
      <primary-button @click="modal.show()">Open Modal</primary-button>
      <modal-dialog ref="modal">
        <template #header>Modal Title</template>
        <template #notification>
          <notice-bar type="info">Please fill out all required fields.</notice-bar>
        </template>
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
        <template #header>Modal Title</template>
        <template #notification>
          <notice-bar type="info">Please fill out all required fields.</notice-bar>
        </template>
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
    components: { ModalDialog, PrimaryButton, NoticeBar, LinkButton },
    setup() {
      const modal = ref(null);
      return { args, modal };
    },
    template: `<div style="display:flex;flex-direction:column;gap:1rem;align-items:start;">
      <notice-bar type="info">A modal with a footer section.</notice-bar>
      <primary-button @click="modal.show()">Open Modal</primary-button>
      <modal-dialog ref="modal">
        <strong>The druid circles of Mistward shaped oaks into halls. Over Highvale, dragons traced bright arcs above the thorn maze. Minstrels in Glimmerdeep still sing of the lost grimoire.</strong><br><br>
        <span>The blessed trials awaited in the hollow temple of Silverfen. Legends in Dragon's Rest foretell a shadow child who will mend the crown. Knights of Redmarsh raised their lances to a pale sun. Each solstice, Oakshield honors the crimson sigil with fire and song. A hidden door opened within Nightveil's echoing caverns.</span>

        <template #footer>
          <link-button href="#">Support</link-button>
          <span>•</span>
          <link-button href="#">Privacy Policy</link-button>
        </template>

      </modal-dialog>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<modal-dialog ref="modal">
        <strong>The druid circles of Mistward...</strong><br><br>
        <span>The blessed trials awaited in the hollow temple of Silverfen...</span>

        <template #footer>
          <link-button href="#">Support</link-button>
          <span>•</span>
          <link-button href="#">Privacy Policy</link-button>
        </template>
      </modal-dialog>`,
      },
    },
  },
};

export const WithoutClosingOnClickOutside: Story = {
  render: (args) => ({
    components: { ModalDialog, PrimaryButton, NoticeBar, LinkButton },
    setup() {
      const modal = ref(null);
      return { args, modal };
    },
    template: `<div style="display:flex;flex-direction:column;gap:1rem;align-items:start;">
      <notice-bar type="info">A modal that can't be closed by clicking outside.</notice-bar>
      <primary-button @click="modal.show()">Open Modal</primary-button>
      <modal-dialog ref="modal" :close-outside="false">
        <strong>The druid circles of Mistward shaped oaks into halls. Over Highvale, dragons traced bright arcs above the thorn maze. Minstrels in Glimmerdeep still sing of the lost grimoire.</strong><br><br>
        <span>The blessed trials awaited in the hollow temple of Silverfen. Legends in Dragon's Rest foretell a shadow child who will mend the crown. Knights of Redmarsh raised their lances to a pale sun. Each solstice, Oakshield honors the crimson sigil with fire and song. A hidden door opened within Nightveil's echoing caverns.</span>
      </modal-dialog>
    </div>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<modal-dialog ref="modal" :close-outside="false">
        <strong>The druid circles of Mistward...</strong><br><br>
        <span>The blessed trials awaited in the hollow temple of Silverfen...</span>
      </modal-dialog>`,
      },
    },
  },
};
