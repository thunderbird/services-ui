import type { Preview } from '@storybook/vue3-vite';
import '@/assets/styles/fonts.css';
import '@/assets/styles/main.css';
import { createElement } from 'react';
import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks';
import { withThemeByClassName } from '@storybook/addon-themes';
import { themes } from 'storybook/theming';
import { setup } from '@storybook/vue3-vite';
import i18ninstance from '@/composable/i18n';

// The docs context's internal store holds the current globals, but isn't part of its public type
type DocsStore = { store: { userGlobals: { globals: { theme?: string } } } };

// Let docs pages follow the theme selected in the toolbar, otherwise they always stay light
const ThemedDocsContainer = (props: DocsContainerProps) => {
  const isDark = (props.context as unknown as DocsStore).store.userGlobals.globals.theme === 'dark';
  return createElement(DocsContainer, { ...props, theme: isDark ? themes.dark : themes.light });
};

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
    docs: {
      container: ThemedDocsContainer,
    },
  },
};

setup((app) => {
  app.use(i18ninstance);
});

export default preview;
