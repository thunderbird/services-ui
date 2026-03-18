import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ExpiryBadge from '@/components/ExpiryBadge.vue';
import { ExpiryUnitTypes } from '@/definitions';

describe('ExpiryBadge', () => {
  var wrapper;

  // build out test cases for variants/options
  const testCases = [
    { 
      timeRemaining: 24,
      warningThreshold: 3,
      timeUnit: ExpiryUnitTypes.Hours,
      decimalPlaces: 0,
      dataTestid: 'expiry-badge-24-hours',
    },
    { 
      timeRemaining: 30,
      warningThreshold: 7,
      timeUnit: ExpiryUnitTypes.Days,
      decimalPlaces: 0,
      dataTestid: 'expiry-badge-30-days',
    },
    { 
      timeRemaining: 4,
      warningThreshold: 1,
      timeUnit: ExpiryUnitTypes.Weeks,
      decimalPlaces: 0,
      dataTestid: 'expiry-badge-4-weeks',
    },
    { 
      timeRemaining: 6,
      warningThreshold: 1,
      timeUnit: ExpiryUnitTypes.Months,
      decimalPlaces: 0,
      dataTestid: 'expiry-badge-6-months',
    },
    { 
      timeRemaining: 2,
      warningThreshold: 1,
      timeUnit: ExpiryUnitTypes.Years,
      decimalPlaces: 0,
      dataTestid: 'expiry-badge-2-years',
    },
    { 
      timeRemaining: 5,
      warningThreshold: 7,
      timeUnit: ExpiryUnitTypes.Days,
      decimalPlaces: 0,
      dataTestid: 'expiry-badge-in-warning-threshold',
    },
    { 
      timeRemaining: 2.5,
      warningThreshold: 1,
      timeUnit: ExpiryUnitTypes.Months,
      decimalPlaces: 2,
      dataTestid: 'expiry-badge-2-decimal-places',
    },
    { 
      timeRemaining: 0,
      warningThreshold: 1,
      timeUnit: ExpiryUnitTypes.Days,
      decimalPlaces: 0,
      dataTestid: 'expiry-badge-expired',
    },
  ];

  afterEach(() => {
    wrapper.unmount();
  });

  it.each(testCases)('expiry badge renders correctly with the given options',
    async ({ timeRemaining, warningThreshold, timeUnit, decimalPlaces, dataTestid }) => {
    const ourProps = {
      timeRemaining: timeRemaining,
      warningThreshold: warningThreshold,
      timeUnit: timeUnit,
      decimalPlaces: decimalPlaces,
      dataTestid: dataTestid,
    };

    wrapper = mount(ExpiryBadge, {
      propsData: ourProps,
    });

    expect(wrapper.props()).toEqual(ourProps);

    // verify attribs, class, and displayed correctly etc.
    const expBadgeSelector = `[data-testid=${ourProps['dataTestid']}]`;
    const expBadge = wrapper.find(expBadgeSelector);
    expect(expBadge.exists()).toBe(true);
    expect(expBadge.isVisible()).toBe(true);

    // badge is in one of three states: notify, warning, expired
    var badgeState;
    if (ourProps['timeRemaining'] == 0) {
      badgeState = 'expired';
    } else if (ourProps['timeRemaining'] < ourProps['warningThreshold']) {
      badgeState = 'warning';
    } else {
      badgeState = 'notify';
    }

    // badge class matches state
    expect(expBadge.attributes().class).toBe(`${badgeState} badge`);

    // badge label
    const badgeText = expBadge.text();

    if (badgeState !== 'expired') {
      const expBadgeText = `Expires in ${ourProps['timeRemaining']} ${ourProps['timeUnit']}s`;
      expect(badgeText).toBe(expBadgeText);
    } else {
      // verify expired state
      expect(badgeText).toBe('Expired');
    }
  });
});
