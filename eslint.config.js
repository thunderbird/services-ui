import jsLint from '@eslint/js';
import playwright from 'eslint-plugin-playwright';
import storybook from 'eslint-plugin-storybook';
import vueLint from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';

export default [
  jsLint.configs.recommended,
  ...vueLint.configs['flat/essential'],
  ...vueTsEslintConfig(),
  ...storybook.configs['flat/recommended'],
  {
    ...playwright.configs['flat/recommended'],
    files: [
      '**/*.vue',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
    ],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
    }
  }
];
