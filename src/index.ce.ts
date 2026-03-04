if (typeof (window as any).process === 'undefined') {
  (window as any).process = { env: { NODE_ENV: 'production' } };
}
import { defineCustomElement } from 'vue';

import { PrimaryButton } from './main';

// Convert Vue components to Web Components
const BoltPrimaryButton = defineCustomElement(PrimaryButton);

// Register them globally
customElements.define('bolt-primary-button', BoltPrimaryButton);

export { BoltPrimaryButton };
