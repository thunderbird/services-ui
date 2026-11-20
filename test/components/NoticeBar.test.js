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
      closable: false,
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

    // verify no close button is rendered by default
    expect(wrapper.find('button.notice-close').exists()).toBe(false);
  });

  describe('NoticeBar with CTA', () => {
    var wrapper;
    const ourProps = {
      type: NoticeBarTypes.Info,
      closable: false,
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

  describe('NoticeBar with close button', () => {
    var wrapper;
    const ourProps = {
      type: NoticeBarTypes.Info,
      closable: true,
      dataTestid: `info-noticebar-closable`,
    };
    const nbCloseBtnSel = 'button.notice-close';

    beforeEach(() => {
      // mount a closable noticebar
      wrapper = mount(NoticeBar, {
        propsData: ourProps,
        slots: { default: 'This noticebar can be closed!' },
      });

      expect(wrapper.props()).toEqual(ourProps);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('close button renders correctly on noticebar', async () => {
      const nbCloseBtn = wrapper.find(nbCloseBtnSel);
      expect(nbCloseBtn.exists()).toBe(true);
      expect(nbCloseBtn.isVisible()).toBe(true);
      expect(nbCloseBtn.attributes()['aria-label']).toBe('Close');
    });

    it('clicking on noticebar close button hides the noticebar and emits a close event', async () => {
      // click on close button and verify noticebar is gone and event triggered
      await wrapper.find(nbCloseBtnSel).trigger('click');
      expect(wrapper.find(`[data-testid=${ourProps['dataTestid']}]`).exists()).toBe(false);
      expect(wrapper.emitted().close, 'expected close event to have been emitted').toBeTruthy();
      expect(wrapper.emitted()['close'].length).toBe(1);
    });

    it('closed noticebar can be reopened via exposed show function', async () => {
      // close noticebar, then reopen it from outside
      const nbSel = `[data-testid=${ourProps['dataTestid']}]`;
      await wrapper.find(nbCloseBtnSel).trigger('click');
      expect(wrapper.find(nbSel).exists()).toBe(false);
      wrapper.vm.show();
      await wrapper.vm.$nextTick();
      expect(wrapper.find(nbSel).exists()).toBe(true);
    });

    it('noticebar can be hidden via exposed hide function', async () => {
      const nbSel = `[data-testid=${ourProps['dataTestid']}]`;
      wrapper.vm.hide();
      await wrapper.vm.$nextTick();
      expect(wrapper.find(nbSel).exists()).toBe(false);
      expect(wrapper.emitted()['close'].length).toBe(1);
    });
  });
});
