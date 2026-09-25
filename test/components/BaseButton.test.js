import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseButton from '@/components/BaseButton.vue';
import CheckCircleFilledIcon from '@/foundation/CheckCircleFilledIcon.vue';


describe('BaseButton', () => {
  var wrapper;

  // repeat all tests for each availble BaseButton variant
  describe.each([ 'primary', 'brand', 'danger', 'link'])('Variant: %s', (variant) => {

    // build out test cases for variants/options
    const testCases = [
      { variant: variant, size: 'default', outline: false, iconLeft: false, iconRight: false, type: 'button',
        disabled: false, href: null, text: `${variant} button` },
      { variant: variant, size: 'default', outline: false, iconLeft: true, iconRight: false, type: 'button',
        disabled: false, href: null, text: `${variant} button with icon left` },
      { variant: variant, size: 'default', outline: false, iconLeft: false, iconRight: true, type: 'button',
        disabled: false, href: null, text: `${variant} button with icon right` },
      { variant: variant, size: 'default', outline: false, iconLeft: true, iconRight: true, type: 'button',
        disabled: false, href: null, text: `${variant} button with icon left and right` },
      { variant: variant, size: 'small', outline: false, iconLeft: false, iconRight: false, type: 'button',
        disabled: false, href: null, text: `small ${variant} button` },
      { variant: variant, size: 'default', outline: true, iconLeft: false, iconRight: false, type: 'button',
        disabled: false, href: null, text: `${variant} outlined` },
      { variant: variant, size: 'default', outline: false, iconLeft: false, iconRight: false, type: 'button',
        disabled: false, href: 'http://tb.pro', text: `${variant} HREF` },
      { variant: variant, size: 'default', outline: false, iconLeft: false, iconRight: false, type: 'submit',
        disabled: false, href: null, text: `${variant} submit` },
      { variant: variant, size: 'default', outline: false, iconLeft: false, iconRight: false, type: 'reset',
        disabled: false, href: null, text: `${variant} reset` },
      { variant: variant, size: 'default', outline: false, iconLeft: false, iconRight: false, type: 'button',
        disabled: true, href: null, text: `${variant} disabled` },
    ];

    afterEach(() => {
      wrapper.unmount();
    });

    it.each(testCases)('$variant button renders correctly with the given options',
      async ({ variant, size, outline, iconLeft, iconRight, type, disabled, href, text }) => {
      const ourProps = {
        variant: variant,
        size: size,
        outline: outline,
        type: type,
        disabled: disabled,
        href: variant == 'link'? 'http://tb.pro' : href, // we want our link variant buttons to always have an href
        dataTestid: `${variant}-data-test-id`,
      };
      const ourSlots = {
          default: text,
      };

      if (iconLeft) {
        ourSlots['iconLeft'] = CheckCircleFilledIcon;
      }

      if (iconRight) {
        ourSlots['iconRight'] = CheckCircleFilledIcon;
      }

      const btnSelector = `[data-testid=${ourProps['dataTestid']}]`;

      wrapper = mount(BaseButton, {
        propsData: ourProps,
        slots: ourSlots,
      });

      expect(wrapper.props()).toEqual(ourProps);

      const btn = wrapper.find(btnSelector);
      expect(btn.isVisible()).toBe(true);
      expect(btn.attributes().class).toContain(ourProps['variant']);
      expect(btn.attributes().class).toContain(ourProps['outline'] ? 'outline' : 'filled');
      expect(btn.text()).toBe(text);

      // icon displayed or not depending on option
      if (iconLeft || iconRight) {
        expect(wrapper.find('.icon').exists()).toBe(true);
      } else {
        expect(wrapper.find('.icon').exists()).toBe(false);
      }

      // native button type attribute always matches the type prop
      expect(btn.attributes().type).toBe(ourProps['type']);

      // providing href turns button into an anchor tag
      if (href) {
        expect(btn.attributes().href).toBe(ourProps['href']);
      }
    });

    it.each(testCases)('able to click $variant button with the given options',
      async ({ variant, size, outline, type, disabled, href, text }) => {
      const ourProps = {
        variant: variant,
        size: size,
        outline: outline,
        type: type,
        disabled: disabled,
        href: variant == 'link'? 'http://tb.pro' : href, // we want our link variant buttons to always have an href
        dataTestid: `${variant}-data-test-id`,
      };
      const ourSlots = {
          default: text,
      };

      const btnSelector = `[data-testid=${ourProps['dataTestid']}]`;

      wrapper = mount(BaseButton, {
        propsData: ourProps,
        slots: ourSlots,
      });

      // clicking the button only emits a click event when button is enabled
      const btn = wrapper.find(btnSelector);
      await btn.trigger('click');

      if (!disabled) {
        expect(wrapper.emitted().click, 'expected click event to have been emitted').toBeTruthy();
        if (href) {
          // after clicking button with href the window.location should be updated to that url
          expect(window.location.href).toContain(href);
        }
      } else {
        expect(btn.attributes().disabled).not.toBeNull();
        if (variant !== 'link') {
          expect(wrapper.emitted().click, 'expected click event not to have been emitted because button is disabled').toBeFalsy();
        } else {
          // link variant buttons can still be clicked (to navigate the to the link) even if disabled
          expect(wrapper.emitted().click, 'expected click event to have been emitted').toBeTruthy();
          expect(wrapper.emitted()['click'].length).toBe(1);
        }
      }
    });
  });
});
