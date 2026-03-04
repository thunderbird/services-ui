if (typeof (window as any).process === 'undefined') {
  (window as any).process = { env: { NODE_ENV: 'production' } };
}
import { defineCustomElement } from 'vue';

// Import the Components to convert.
import { PrimaryButton } from './main';

// Convert each to a Web Component.
const BoltPrimaryButton = defineCustomElement(PrimaryButton);

// Register globally.
customElements.define('bolt-primary-button', BoltPrimaryButton);

// Provide components for use.
export { BoltPrimaryButton };
