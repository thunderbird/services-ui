import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ToolTip from '@/components/ToolTip.vue';
import { TooltipPosition } from '@/definitions';


describe('ToolTip', () => {
  var wrapper;

  const positions = [
    TooltipPosition.None,
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
      alt: `alt-${position}`,
      dataTestid: `tooltip-test-${position}`,
    };
    const ourSlots = {
        default: 'Hello!',
    };

    wrapper = mount(ToolTip, {
      propsData: ourProps,
      slots: ourSlots,
    });

    expect(wrapper.props()).toEqual(ourProps);

    // verify exists and is displayed with correct text
    const tooltipSelector = `[data-testid=${ourProps['dataTestid']}]`;
    const toolTip = wrapper.find(tooltipSelector);
    expect(toolTip.exists()).toBe(true);
    expect(toolTip.isVisible()).toBe(true);
    expect(toolTip.attributes()['aria-label']).toBe(ourProps['alt']);
    expect(toolTip.text()).toBe(ourSlots['default']);

    // verify position 'beak'
    const container = toolTip.find('.tooltip-container');
    expect(container.exists()).toBe(true);
    const beak = container.find('.beak');
    expect(beak.exists()).toBe(true);
    expect(beak.attributes().class).toBe(`beak ${ourProps['position']}`);
  });
});
