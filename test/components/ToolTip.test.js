import { describe, it, expect, afterEach } from 'vitest';
import { h } from 'vue';
import { mount } from '@vue/test-utils';
import ToolTip from '@/components/ToolTip.vue';
import { TooltipPosition } from '@/definitions';


describe('ToolTip', () => {
  var wrapper;

  const positions = [
    TooltipPosition.Top,
    TooltipPosition.Bottom,
    TooltipPosition.Left,
    TooltipPosition.Right
  ];

  afterEach(() => {
    wrapper.unmount();
  });

  // repeat tests for each availble tooltip position
  it.each(positions)('%s renders correctly', (position) => {
    const ourProps = {
      position: position,
      beak: true,
      dataTestid: `tooltip-test-${position}`,
    };
    const ourSlots = {
      // scoped default slot: the trigger, wired up with the tooltipId it's given
      default: (slotProps) => h('button', { 'aria-describedby': slotProps.tooltipId }, 'Trigger'),
      content: 'Hello!',
    };

    wrapper = mount(ToolTip, {
      propsData: ourProps,
      slots: ourSlots,
    });

    expect(wrapper.props()).toEqual(ourProps);

    // verify tooltip bubble exists, is a proper aria tooltip and shows the content slot text
    const tooltipSelector = `[data-testid=${ourProps['dataTestid']}]`;
    const toolTip = wrapper.find(tooltipSelector);
    expect(toolTip.exists()).toBe(true);
    expect(toolTip.isVisible()).toBe(true);
    expect(toolTip.attributes().role).toBe('tooltip');
    expect(toolTip.attributes().id).toBeTruthy();
    expect(toolTip.text()).toBe('Hello!');
    expect(toolTip.classes()).toContain(ourProps['position']);

    // verify the trigger (default slot) was handed the same id to describe itself with
    const trigger = wrapper.find('button');
    expect(trigger.exists()).toBe(true);
    expect(trigger.attributes()['aria-describedby']).toBe(toolTip.attributes().id);

    // verify beak exists (its visibility per position is CSS-only, not asserted here)
    const container = toolTip.find('.tooltip-container');
    expect(container.exists()).toBe(true);
    const beak = container.find('.beak');
    expect(beak.exists()).toBe(true);
  });

  it.each([
    { visible: true, expectedClass: 'force-visible' },
    { visible: false, expectedClass: 'force-hidden' },
  ])('visible=$visible forces the $expectedClass class', ({ visible, expectedClass }) => {
    wrapper = mount(ToolTip, {
      propsData: { visible },
      slots: { default: 'Trigger', content: 'Hello!' },
    });

    const toolTip = wrapper.find('[data-testid=tool-tip]');
    expect(toolTip.classes()).toContain(expectedClass);
  });

  it('visible unset leaves hover/focus in control (no force class)', () => {
    wrapper = mount(ToolTip, {
      slots: { default: 'Trigger', content: 'Hello!' },
    });

    const toolTip = wrapper.find('[data-testid=tool-tip]');
    expect(toolTip.classes()).not.toContain('force-visible');
    expect(toolTip.classes()).not.toContain('force-hidden');
  });

  it('beak defaults to visible', () => {
    wrapper = mount(ToolTip, {
      slots: { default: 'Trigger', content: 'Hello!' },
    });

    const toolTip = wrapper.find('[data-testid=tool-tip]');
    expect(toolTip.classes()).not.toContain('no-beak');
  });

  it('beak=false hides the beak', () => {
    wrapper = mount(ToolTip, {
      propsData: { beak: false },
      slots: { default: 'Trigger', content: 'Hello!' },
    });

    const toolTip = wrapper.find('[data-testid=tool-tip]');
    expect(toolTip.classes()).toContain('no-beak');
  });
});
