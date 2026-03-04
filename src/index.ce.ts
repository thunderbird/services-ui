import { defineCustomElement } from 'vue';

// Import the Components to convert.
import { PrimaryButton } from './main';

// Convert each to a Web Component.
const BoltPrimaryButton = defineCustomElement(PrimaryButton);

// Register globally.
customElements.define('bolt-primary-button', BoltPrimaryButton);

// Provide components for use.
export { BoltPrimaryButton };
