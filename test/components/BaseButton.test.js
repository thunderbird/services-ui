import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseButton from '@/components/BaseButton.vue';
import CheckCircleFilledIcon from '@/foundation/CheckCircleFilledIcon.vue';


describe('BaseButton', () => {
  var wrapper;

  // repeat all tests for each availble BaseButton type
  describe.each([ 'primary', 'brand', 'danger', 'link'])('Type: %s', (type) => {

    // build out test cases for variants/options
    const testCases = [
      { type: type, size: 'default', variant: 'filled', iconLeft: false, iconRight: false, formAction: 'none',
        forceToolTip: false, disabled: false, href: null, text: `${type} button` },
      { type: type, size: 'default', variant: 'filled', iconLeft: true, iconRight: false, formAction: 'none',
        forceToolTip: false, disabled: false, href: null, text: `${type} button with icon left` },
      { type: type, size: 'default', variant: 'filled', iconLeft: false, iconRight: true, formAction: 'none',
        forceToolTip: false, disabled: false, href: null, text: `${type} button with icon right` },
      { type: type, size: 'default', variant: 'filled', iconLeft: true, iconRight: true, formAction: 'none',
        forceToolTip: false, disabled: false, href: null, text: `${type} button with icon left and right` },
      { type: type, size: 'small', variant: 'filled', iconLeft: false, iconRight: false, formAction: 'none',
        forceToolTip: false, disabled: false, href: null, text: `small ${type} button` },
      { type: type, size: 'default', variant: 'outline', iconLeft: false, iconRight: false, formAction: 'none',
        forceToolTip: false, disabled: false, href: null, text: `${type} outlined` },
      { type: type, size: 'default', variant: 'filled', iconLeft: false, iconRight: false, formAction: 'none',
        forceToolTip: true, disabled: false, href: null, text: `${type} forced tt` },
      { type: type, size: 'default', variant: 'filled', iconLeft: false, iconRight: false, formAction: 'none',
        forceToolTip: false, disabled: false, href: 'http://tb.pro', text: `${type} HREF` },
      { type: type, size: 'default', variant: 'filled', iconLeft: false, iconRight: false, formAction: 'submit',
        forceToolTip: false, disabled: false, href: null, text: `${type} submit` },
      { type: type, size: 'default', variant: 'filled', iconLeft: false, iconRight: false, formAction: 'reset',
        forceToolTip: false, disabled: false, href: null, text: `${type} reset` },
      { type: type, size: 'default', variant: 'filled', iconLeft: false, iconRight: false, formAction: 'none',
        forceToolTip: false, disabled: true, href: null, text: `${type} disabled` },
    ];

    afterEach(() => {
      wrapper.unmount();
    });

    it.each(testCases)('$type button renders correctly with the given options',
      async ({ type, size, variant, iconLeft, iconRight, formAction, forceToolTip, disabled, href, text }) => {
      const ourProps = {
        type: type,
        size: size,
        variant: variant,
        formAction: formAction,
        tooltip: 'Button tooltip!',
        forceTooltip: forceToolTip,
        disabled: disabled,
        href: type == 'link'? 'http://tb.pro' : href, // we want our link type buttons to always have an href
        dataTestid: `${type}-data-test-id`,
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
      const tooltipSelector = `[data-testid=tool-tip]`;

      wrapper = mount(BaseButton, {
        propsData: ourProps,
        slots: ourSlots,
      });

      expect(wrapper.props()).toEqual(ourProps);

      const btn = wrapper.find(btnSelector);
      expect(btn.isVisible()).toBe(true);
      expect(btn.attributes().class).toContain(ourProps['type']);
      expect(btn.attributes().class).toContain(ourProps['variant']);
      expect(btn.text()).toContain(text); // btn text contains all dom text including btn label and tooltip
      expect(wrapper.find(tooltipSelector).text()).toBe(ourProps['tooltip']);

      // icon displayed or not depending on option
      if (iconLeft || iconRight) {
        expect(wrapper.find('.icon').exists()).toBe(true);
      } else {
        expect(wrapper.find('.icon').exists()).toBe(false);
      }

      // button is of type 'button' unless formAction provided
      if (ourProps['formAction'] == 'none') {
        expect(btn.attributes().type).toBe('button');
      } else {
        expect(btn.attributes().type).toBe(ourProps['formAction']);
      }

      // force tooltip causes tooltip to display even when not hovering over button
      if (forceToolTip) {
        expect(wrapper.find(tooltipSelector).isVisible()).toBeTruthy();
      }

      // providing href turns button into an anchor tag
      if (href) {
        expect(btn.attributes().href).toBe(ourProps['href']);
      }
    });

    it.each(testCases)('able to click $type button with the given options',
      async ({ type, size, variant, formAction, forceToolTip, disabled, href, text }) => {
      const ourProps = {
        type: type,
        size: size,
        variant: variant,
        formAction: formAction,
        tooltip: 'Button tooltip!',
        forceTooltip: forceToolTip,
        disabled: disabled,
        href: type == 'link'? 'http://tb.pro' : href, // we want our link type buttons to always have an href
        dataTestid: `${type}-data-test-id`,
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
        if (type !== 'link') {
          expect(wrapper.emitted().click, 'expected click event not to have been emitted because button is disabled').toBeFalsy();
        } else {
          // link type buttons can still be clicked (to navigate the to the link) even if disabled
          expect(wrapper.emitted().click, 'expected click event to have been emitted').toBeTruthy();
        }
      }
    });
  });
});
