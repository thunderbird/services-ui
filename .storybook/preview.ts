import type { Preview } from '@storybook/vue3-vite';
import '@/assets/styles/fonts.css';
import '@/assets/styles/main.css';
import { withThemeByClassName } from '@storybook/addon-themes';
import { setup } from '@storybook/vue3-vite';
import i18ninstance from '@/composable/i18n';

export const decorators = [
  withThemeByClassName({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
    parentSelector: 'html',
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
    a11y: {
      test: 'error',
    },
  },
};

setup((app) => {
  app.use(i18ninstance);
});

export default preview;
