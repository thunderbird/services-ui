import { describe, it, expect, afterEach, beforeAll } from 'vitest';
import { mount } from '@vue/test-utils';
import IconButton from '@/components/IconButton.vue';
import RefreshIcon from '@/foundation/RefreshIcon.vue';
import {
  expectDimensionNear,
  injectComponentStyles,
  remToPx,
  setRootFontSize,
} from '../utils';

const sizeExpectations = [
  { size: 'small', expectedRem: 0.75 },
  { size: 'default', expectedRem: 1 },
  { size: 'medium', expectedRem: 1.25 },
  { size: 'large', expectedRem: 1.5 },
];

const BASE_BUTTON_HEIGHT_PX = remToPx(2.875);

describe('IconButton', () => {
  let wrapper;

  beforeAll(async () => {
    setRootFontSize();
    await injectComponentStyles('src/components/BaseButton.vue');
    await injectComponentStyles('src/components/IconButton.vue');
  });

  afterEach(() => {
    wrapper?.unmount();
  });

  it.each(sizeExpectations)(
    'renders icon at expected size for size="$size"',
    ({ size, expectedRem }) => {
      const expectedPx = remToPx(expectedRem);

      wrapper = mount(IconButton, {
        props: { size },
        slots: {
          default: RefreshIcon,
        },
        attachTo: document.body,
      });

      const iconSvg = wrapper.find('.icon svg');
      expect(iconSvg.exists()).toBe(true);

      const styles = getComputedStyle(iconSvg.element);
      expectDimensionNear(parseFloat(styles.width), expectedPx);
      expectDimensionNear(parseFloat(styles.height), expectedPx);
    },
  );

  it('uses auto height instead of the fixed BaseButton height', () => {
    wrapper = mount(IconButton, {
      slots: {
        default: RefreshIcon,
      },
      attachTo: document.body,
    });

    const buttonStyles = getComputedStyle(wrapper.find('.base').element);
    expect(buttonStyles.height).toBe('auto');
    expect(parseFloat(buttonStyles.height)).not.toBe(BASE_BUTTON_HEIGHT_PX);
  });

  it('hides button label text', () => {
    wrapper = mount(IconButton, {
      slots: {
        default: RefreshIcon,
      },
      attachTo: document.body,
    });

    const textStyles = getComputedStyle(wrapper.find('.text').element);
    expect(textStyles.display).toBe('none');
  });
});
