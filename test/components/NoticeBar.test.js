import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import NoticeBar from '@/components/NoticeBar.vue';
import { NoticeBarTypes } from '@/definitions';


describe('NoticeBar', () => {
  var wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  // repeat each test for each badge type
  const testCases = [
    { type: NoticeBarTypes.Info, text: 'Info noticebar text!', dataTestid: 'info-noticebar', expIconAriaLabel: 'Information' },
    { type: NoticeBarTypes.Success, text: 'Success noticebar text!', dataTestid: 'success-noticebar', expIconAriaLabel: 'Success' },
    { type: NoticeBarTypes.Warning, text: 'Warning noticebar text!', dataTestid: 'warning-noticebar', expIconAriaLabel: 'Warning' },
    { type: NoticeBarTypes.Critical, text: 'Critical noticebar text!', dataTestid: 'critical-noticebar', expIconAriaLabel: 'Critical' },
  ];

  it.each(testCases)('$type noticebar renders correctly', ({ type, text, dataTestid, expIconAriaLabel }) => {
    const ourProps = {
      type: type,
      dataTestid: dataTestid,
    };
    const ourSlots = {
        default: text,
    };

    // mount noticebar with given opts
    wrapper = mount(NoticeBar, {
      propsData: ourProps,
      slots: ourSlots,
    });

    expect(wrapper.props()).toEqual(ourProps);

    // verify noticebar exists, and is visible with correct text
    const nbSel = `[data-testid=${ourProps['dataTestid']}]`;
    const nb = wrapper.find(nbSel);
    expect(nb.exists()).toBe(true);
    expect(nb.attributes().class).toBe(`${ourProps['type']} notice notice-bar`);
    expect(nb.isVisible()).toBe(true);
    expect(nb.text()).toEqual(ourSlots['default']);

    // verify icon is displayed on noticebar and corresponds to type
    const nbIconSel = 'span.icon';
    const nbIcon = wrapper.find(nbIconSel);
    expect(nbIcon.exists()).toBe(true);
    expect(nbIcon.isVisible()).toBe(true);
    const nbIconAriaLabel = nbIcon.find('svg').attributes()['aria-label'];
    expect(nbIconAriaLabel).toBe(expIconAriaLabel);
  });

  describe('NoticeBar with CTA', () => {
    var wrapper;
    const ourProps = {
      type: NoticeBarTypes.Info,
      dataTestid: `info-noticebar-with-cta`,
    };
    const nbBtnLabel = 'Click me!';
    const ourSlots = {
        default: 'This noticebar has a CTA!',
        cta: `<button class="nb-cta">${nbBtnLabel}</button>`,
    };
    const nbBtnSel = 'button.nb-cta';

    beforeEach(() => {
      // mount a noticebar with a CTA button
      wrapper = mount(NoticeBar, {
        propsData: ourProps,
        slots: ourSlots,
      });

      expect(wrapper.props()).toEqual(ourProps);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('CTA button renders correctly on noticebar', async () => {
      const nbBtn = wrapper.find(nbBtnSel);
      expect(nbBtn.exists()).toBe(true);
      expect(nbBtn.isVisible()).toBe(true);
      expect(nbBtn.text()).toBe(nbBtnLabel);
    });

    it('clicking on noticebar CTA button generates a click event', async () => {
      // click on button and verify event triggered
      const nbBtn = wrapper.find(nbBtnSel);
      await nbBtn.trigger('click');
      expect(wrapper.emitted().click, 'expected click event to have been emitted').toBeTruthy();
      expect(wrapper.emitted()['click'].length).toBe(1);
    });
  });
});
