import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { i18n } from '@/composable/i18n';
import RelativeTime from '@/components/RelativeTime.vue';

describe('RelativeTime', () => {
  let wrapper;

  const now = new Date('2026-11-27T12:00:00Z');
  const fiveMinutesAgo = new Date('2026-11-27T11:55:00Z');
  const dataTestid = 'relative-time-test';
  const timeSel = `[data-testid=${dataTestid}]`;
  const tooltipSel = `[data-testid=${dataTestid}-tooltip]`;

  // Expected output is computed with Intl directly, so tests don't depend on locale data
  const rtf = (style) => new Intl.RelativeTimeFormat(i18n.locale.value, { style, numeric: 'auto' });

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(now);
  });

  afterEach(() => {
    wrapper.unmount();
    vi.useRealTimers();
  });

  it('renders a time element with a machine-readable datetime attribute', () => {
    wrapper = mount(RelativeTime, {
      propsData: { datetime: fiveMinutesAgo, dataTestid },
    });

    const time = wrapper.find(timeSel);
    expect(time.element.tagName).toBe('TIME');
    expect(time.attributes('datetime')).toBe(fiveMinutesAgo.toISOString());
    expect(time.attributes('tabindex')).toBe('0');
  });

  it.each(['long', 'short', 'narrow'])('renders the relative text in %s format', (format) => {
    wrapper = mount(RelativeTime, {
      propsData: { datetime: fiveMinutesAgo, format, dataTestid },
    });

    expect(wrapper.find(timeSel).text()).toBe(rtf(format).format(-5, 'minute'));
  });

  it('renders future dates', () => {
    wrapper = mount(RelativeTime, {
      propsData: { datetime: new Date('2026-11-30T12:00:00Z'), dataTestid },
    });

    expect(wrapper.find(timeSel).text()).toBe(rtf('short').format(3, 'day'));
  });

  it.each([
    ['Date', fiveMinutesAgo],
    ['number', fiveMinutesAgo.getTime()],
    ['string', fiveMinutesAgo.toISOString()],
  ])('accepts a %s as datetime', (_, datetime) => {
    wrapper = mount(RelativeTime, {
      propsData: { datetime, dataTestid },
    });

    expect(wrapper.find(timeSel).attributes('datetime')).toBe(fiveMinutesAgo.toISOString());
  });

  it('renders nothing if datetime is null', () => {
    wrapper = mount(RelativeTime, {
      propsData: { datetime: null, dataTestid },
    });

    expect(wrapper.find(timeSel).exists()).toBe(false);
    expect(wrapper.find(tooltipSel).exists()).toBe(false);
  });

  it('shows the full timestamp in a tooltip linked to the time element', () => {
    wrapper = mount(RelativeTime, {
      propsData: { datetime: fiveMinutesAgo, dataTestid },
    });

    const tooltip = wrapper.find(tooltipSel);
    const expected = new Intl.DateTimeFormat(i18n.locale.value, { dateStyle: 'long', timeStyle: 'long' })
      .format(fiveMinutesAgo);
    expect(tooltip.text()).toBe(expected);
    expect(wrapper.find(timeSel).attributes('aria-describedby')).toBe(tooltip.attributes('id'));
  });

  it('updates the relative text as time passes', async () => {
    wrapper = mount(RelativeTime, {
      propsData: { datetime: fiveMinutesAgo, dataTestid },
    });

    await vi.advanceTimersByTimeAsync(60 * 60 * 1000);
    expect(wrapper.find(timeSel).text()).toBe(rtf('short').format(-1, 'hour'));
  });
});
