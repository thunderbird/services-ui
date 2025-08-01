import type { Preview } from "@storybook/vue3-vite";
import '@/assets/styles/fonts.css';
import '@/assets/styles/main.css';
import {withThemeByClassName, withThemeByDataAttribute} from "@storybook/addon-themes";

export const decorators = [
  withThemeByClassName({
    themes: {
      lightApmt: '',
      darkApmt: 'dark',
      lightSend: '',
      darkSend: 'dark',
    },
    defaultTheme: 'lightApmt',
    parentSelector: 'html',
  }),
  withThemeByDataAttribute({
    themes: {
      lightApmt: 'apmt',
      darkApmt: 'apmt',
      lightSend: 'send',
      darkSend: 'send',
    },
    defaultTheme: 'lightApmt',
    attributeName: 'data-tbpro-service',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
