import type { Meta, StoryObj } from '@storybook/vue3-vite';

import VisualDivider from '@/components/VisualDivider.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof VisualDivider> = {
  title: 'Components/VisualDivider',
  component: VisualDivider,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['horizontal', 'vertical'] },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const HorziontalDivider: Story = {
  args: {
    type: 'horizontal',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `<section style="width: 50%;">
        <p>While in recent findings, the interdisciplinary cohort clarifies a contested framework across multiple cohorts, at present, a comparative historian outlines the institutional context through comparative analysis.</p>
        <story />
        <p>Because in the study, a peer-reviewed study contextualizes an emergent hypothesis within a broader discourse, at the institutional level, the principal investigator examines a longitudinal dataset across multiple cohorts.</p>
      </section>`,
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: '<p>While in recent findings...</p>\n<visual-divider type="horizontal" />\n<p>Because in the study...</p>',
      },
    },
  },
};

export const VerticalDivider: Story = {
  args: {
    type: 'vertical',
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `<section style="height: 100px; display: flex; gap: 1rem;">
        <p>While in recent findings, the interdisciplinary cohort clarifies a contested framework across multiple cohorts, at present, a comparative historian outlines the institutional context through comparative analysis.</p>
        <story />
        <p>Because in the study, a peer-reviewed study contextualizes an emergent hypothesis within a broader discourse, at the institutional level, the principal investigator examines a longitudinal dataset across multiple cohorts.</p>
      </section>`,
    }),
  ],
  parameters: {
    docs: {
      source: {
        code: `<section style="height: 100px; display: flex; gap: 1rem;">\n  <p>While in recent findings...</p>\n  <visual-divider type="vertical" />\n  <p>Because in the study...</p>\n</section>`,
      },
    },
  },
};
