import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseBadge from '@/components/BaseBadge.vue';
import CheckCircleFilledIcon from '@/foundation/CheckCircleFilledIcon.vue';


describe('BaseBadge', () => {
  var wrapper;
  var ourProps;
  var ourSlots;
  const badgeTestId = 'default-badge';
  const badgeSelector = `[data-testid=${badgeTestId}]`;
  const badgeText = 'Test Badge!';

  beforeEach(() => {
    ourProps = {
      type: 'default',
      dataTestid: badgeTestId,
    };
    ourSlots = {
        default: badgeText,
    };
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('default badge renders correctly', () => {
    wrapper = mount(BaseBadge, {
      propsData: ourProps,
      slots: ourSlots,
    });

    expect(wrapper.props()).toEqual(ourProps);
    expect(wrapper.find(badgeSelector).isVisible()).toBeTruthy();
    expect(wrapper.find(badgeSelector).text()).toEqual(badgeText);
  });

    it('default badge with icon renders correctly', () => {
    ourSlots['icon'] = CheckCircleFilledIcon;

    wrapper = mount(BaseBadge, {
      propsData: ourProps,
      slots: ourSlots,
    });

    expect(wrapper.props()).toEqual(ourProps);
    expect(wrapper.find(badgeSelector).isVisible()).toBeTruthy();
    expect(wrapper.find(badgeSelector).text()).toEqual(badgeText);
    expect(wrapper.find('.icon').exists()).toBe(true);
    expect(wrapper.find('.icon').isVisible()).toBe(true);
  });

  it('"set" type badge renders correctly', () => {
    ourProps['type'] = 'set',
    wrapper = mount(BaseBadge, {
      propsData: ourProps,
      slots: ourSlots,
    });

    expect(wrapper.props()).toEqual(ourProps);
    expect(wrapper.find(badgeSelector).isVisible()).toBeTruthy();
    expect(wrapper.find(badgeSelector).text()).toEqual(badgeText);
  });

  it('"set" type badge with icon renders correctly', () => {
    ourProps['type'] = 'set',
    ourSlots['icon'] = CheckCircleFilledIcon;

    wrapper = mount(BaseBadge, {
      propsData: ourProps,
      slots: ourSlots,
    });

    expect(wrapper.props()).toEqual(ourProps);
    expect(wrapper.find(badgeSelector).isVisible()).toBeTruthy();
    expect(wrapper.find(badgeSelector).text()).toEqual(badgeText);
    expect(wrapper.find('.icon').exists()).toBe(true);
    expect(wrapper.find('.icon').isVisible()).toBe(true);
  });

  // todo: use test.each and provide arguments to test all types (primary, etc. with and without icons
});
