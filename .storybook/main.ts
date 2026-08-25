import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-themes', '@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },
  core: {
    disableTelemetry: true,
  },
  // The root vite config's dts plugin only makes sense for the library build, not for storybook-static.
  // It fails there since api-extractor can't resolve an entry file under storybook's own outDir.
  viteFinal: async (config) => {
    config.plugins = config.plugins?.filter(
      (plugin) => !(plugin && 'name' in plugin && plugin.name === 'unplugin-dts'),
    );
    return config;
  },
};
export default config;
