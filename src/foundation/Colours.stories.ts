import type { Meta, StoryObj } from '@storybook/vue3-vite';

import ColourPalette, { type ColourGroup } from '@/stories/ColourPalette.vue';

// Keep in sync with src/assets/styles/colours.css, use the theme switcher to preview dark mode.
// Reference: https://bolt.thunderbird.net/8b179dbfd/p/61e4c7-color
const tokens = (prefix: string, names: string[]) => names.map((name) => `--colour-${prefix}-${name}`);
const states = ['soft', 'default', 'hover', 'pressed'];

const surface: ColourGroup = {
  name: 'Surface',
  description: 'Applied frequently for backgrounds, surfaces, dividers, and outlines.',
  tokens: tokens('surface', ['base', 'raised', 'lower', 'subtle', 'deep', 'border', 'border-intense']),
};

const primary: ColourGroup = {
  name: 'Primary',
  description: 'Applied frequently to surfaces highlight actions & information.',
  tokens: tokens('primary', [...states, 'default-light', 'default-dark', 'hover-light']),
};

const success: ColourGroup = {
  name: 'Success',
  description: 'Applied sparingly to show positive feedback/status.',
  tokens: tokens('success', states),
};

const warning: ColourGroup = {
  name: 'Warning',
  description: 'Applied sparingly to show warning feedback/status. Notifications/messaging.',
  tokens: tokens('warning', states),
};

const critical: ColourGroup = {
  name: 'Critical',
  description: 'Applied sparingly to show negative feedback/status or dangerous actions. Errors.',
  tokens: tokens('critical', states),
};

const textAndIcon: ColourGroup = {
  name: 'Text+Icon',
  description: 'Applied frequently for text and icons.',
  tokens: tokens('ti', [
    'base',
    'base-light',
    'base-dark',
    'base-inverted',
    'secondary',
    'muted',
    'disabled',
    'brand',
    'highlight',
    'warning',
    'critical',
    'success',
  ]),
};

const accent: ColourGroup = {
  name: 'Accent Colours',
  description: 'Used for accents, gradients, highlights. Do not use with text.',
  tokens: tokens('accent', ['teal', 'blue', 'purple', 'orange', 'pink', 'gray']),
};

const neutral: ColourGroup = {
  name: 'Neutral',
  description: 'Superseded by Surface.',
  deprecated: true,
  tokens: tokens('neutral', ['base', 'lower', 'raised', 'subtle', 'border', 'border-intense']),
};

const danger: ColourGroup = {
  name: 'Danger',
  description: 'Superseded by Critical.',
  deprecated: true,
  tokens: tokens('danger', states),
};

const meta: Meta<typeof ColourPalette> = {
  title: 'Foundational Items/Colours',
  component: ColourPalette,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: { groups: [surface, primary, success, warning, critical, textAndIcon, accent, neutral, danger] },
};

export const Surface: Story = { args: { groups: [surface] } };
export const Primary: Story = { args: { groups: [primary] } };
export const Success: Story = { args: { groups: [success] } };
export const Warning: Story = { args: { groups: [warning] } };
export const Critical: Story = { args: { groups: [critical] } };
export const TextAndIcon: Story = { args: { groups: [textAndIcon] } };
export const Accent: Story = { args: { groups: [accent] } };
export const DeprecatedNeutral: Story = { args: { groups: [neutral] } };
export const DeprecatedDanger: Story = { args: { groups: [danger] } };
