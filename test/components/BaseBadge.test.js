import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseBadge from '@/components/BaseBadge.vue';
import CheckCircleFilledIcon from '@/foundation/CheckCircleFilledIcon.vue';


describe('BaseBadge', () => {
  var wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  // repeat each test for each badge type
  const testCases = [
    { badgeType: 'default', badgeTestId: 'default-badge', badgeText: 'Default Badge' },
    { badgeType: 'set', badgeTestId: 'set-badge', badgeText: 'Set Badge' },
    { badgeType: 'primary', badgeTestId: 'primay-badge', badgeText: 'Primary Badge' },
    { badgeType: 'subscription', badgeTestId: 'subscription-badge', badgeText: 'Subscription Badge' },
    { badgeType: 'pending', badgeTestId: 'pending-badge', badgeText: 'Pending Badge' },
    { badgeType: 'not-set', badgeTestId: 'not-set-badge', badgeText: 'Not-Set Badge' },
    { badgeType: 'verified', badgeTestId: 'verified-badge', badgeText: 'Verified Badge' },
    { badgeType: 'emails', badgeTestId: 'emails-badge', badgeText: 'Emails Badge' },
    { badgeType: 'counter', badgeTestId: 'counter-badge', badgeText: '0' },
  ];

  it.each(testCases)('$badgeType badge renders correctly', ({ badgeType, badgeTestId, badgeText }) => {
    const badgeSelector = `[data-testid=${badgeTestId}]`;
    const ourProps = {
      type: badgeType,
      dataTestid: badgeTestId,
    };
    const ourSlots = {
        default: badgeText,
    };

    wrapper = mount(BaseBadge, {
      propsData: ourProps,
      slots: ourSlots,
    });

    expect(wrapper.props()).toEqual(ourProps);
    const badge = wrapper.find(badgeSelector);
    expect(badge.isVisible()).toBe(true);
    expect(badge.text()).toEqual(badgeText);
    expect(badge.attributes().class).toContain(ourProps['type']);
    expect(wrapper.find('.icon').exists()).toBe(false);
  });

  it.each(testCases)('$badgeType badge with icon renders correctly', ({ badgeType, badgeTestId, badgeText }) => {
    const badgeSelector = `[data-testid=${badgeTestId}]`;
    const ourProps = {
      type: badgeType,
      dataTestid: badgeTestId,
    };
    const ourSlots = {
        default: badgeText,
        icon: CheckCircleFilledIcon,
    };

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
});
