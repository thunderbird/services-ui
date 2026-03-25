import { describe, it, expect, afterEach, test } from 'vitest';
import { mount } from '@vue/test-utils';
import ModalDialog from '@/components/ModalDialog.vue';


describe('ModalDialog', () => {
  var wrapper;

  const ourProps = {
    closeOutside: true,
    dataTestid: 'our-test-modal',
  };

  const basicSlots = {
    header: 'Basic Test Modal Header!',
    default: 'This is the body text of our basic test modal.',
  };

  const btn1Label = 'OK!';
  const btn2Label = 'Cancel!';

  const standardSlots = {
    header: 'Standard Test Modal Header!',
    default: 'This is the body text of our standard test modal.',
    actions: `<button class="button-1">${btn1Label}</button><button class="button-2">${btn2Label}</button>`,
    footer: 'Standard test modal footer',
  };

  const modalSel = `[data-testid=${ourProps['dataTestid']}]`;
  const modalHdrSel = 'div.modal-header';
  const modalBodySel = 'div.modal-body';
  const modalFooterSel = 'div.footer';
  const modalActionsSel = 'div.modal-actions';
  const modalActionBtn1Sel = '.button-1';
  const modalActionBtn2Sel = '.button-2';
  const modalCloseBtnSel = 'button.modal-close';

  async function verifyBasicModal(wrapper, testSlots) {
    // verify modal exists and is visible
    const testModal = wrapper.find(modalSel);
    expect(testModal.exists()).toBe(true);
    expect(testModal.isVisible()).toBe(true);
    expect(testModal.attributes().class).toBe('overlay');
    expect(testModal.attributes().role).toBe('dialog');

    // verify the header is displayed and is correct
    const modalHdr = wrapper.find(modalHdrSel);
    expect(modalHdr.exists()).toBe(true);
    expect(modalHdr.isVisible()).toBe(true);
    expect(modalHdr.attributes().class).toBe('modal-header');
    expect(modalHdr.text()).toBe(testSlots['header']);

    // verify the body text is displayed and correct
    const modalBody = wrapper.find(modalBodySel);
    expect(modalBody.exists()).toBe(true);
    expect(modalBody.isVisible()).toBe(true);
    expect(modalBody.attributes().class).toBe('modal-body');
    expect(modalBody.text()).toBe(testSlots['default']);

    // verify dialog close button exists (will be tested in separate test)
    const closeBtn = wrapper.find(modalCloseBtnSel);
    expect(closeBtn.exists()).toBe(true);
    expect(closeBtn.isVisible()).toBe(true);
  };

  afterEach(() => {
    wrapper.unmount();
  });

  it('basic modal renders correctly', async () => {
    // modal with only a title and body text
    wrapper = mount(ModalDialog, {
      propsData: ourProps,
      slots: basicSlots,
    });

    expect(wrapper.props()).toEqual(ourProps);

    // now call the exposed show method to have the modal be displayed; need 'await'
    // to give time for the DOM to be updated (via happy-dom) otherwise won't be found
    await wrapper.vm.show();

    // verify modal is displayed as expected
    await verifyBasicModal(wrapper, basicSlots);
  });

  it('standard modal renders correctly', async () => {
    // modal with header/title, body text, action buttons, and a footer
    wrapper = mount(ModalDialog, {
      propsData: ourProps,
      slots: standardSlots,
    });

    expect(wrapper.props()).toEqual(ourProps);

    // now call the exposed show method to have the modal be displayed; need 'await'
    // to give time for the DOM to be updated (via happy-dom) otherwise won't be found
    await wrapper.vm.show();

    // verify modal is visible with header, body, and close button
    await verifyBasicModal(wrapper, standardSlots);

    // verify action buttons are displayed; modal actions element contains the buttons
    const modalActions = wrapper.find(modalActionsSel);
    expect(modalActions.exists()).toBe(true);
    expect(modalActions.isVisible()).toBe(true);

    const modalActionBtn1 = wrapper.find(modalActionBtn1Sel);
    expect(modalActionBtn1.exists()).toBe(true);
    expect(modalActionBtn1.isVisible()).toBe(true);
    expect(modalActionBtn1.text()).toBe(btn1Label);

    const modalActionBtn2 = wrapper.find(modalActionBtn2Sel);
    expect(modalActionBtn2.exists()).toBe(true);
    expect(modalActionBtn2.isVisible()).toBe(true);
    expect(modalActionBtn2.text()).toBe(btn2Label);

    // verify the footer text is displayed and correct
    const modalFooter = wrapper.find(modalFooterSel);
    expect(modalFooter.exists()).toBe(true);
    expect(modalFooter.isVisible()).toBe(true);
    expect(modalFooter.attributes().class).toBe('footer');
    expect(modalFooter.text()).toBe(standardSlots['footer']);
   });

  it('modal is displayed when call exposed show method', async () => {
    // mount a basic modal
    wrapper = mount(ModalDialog, {
      propsData: ourProps,
      slots: basicSlots,
    });

    // verify modal is not found
    var testModal = wrapper.find(modalSel);
    expect(testModal.exists()).toBe(false);

    // call show exposed method, need await for dom to render
    await wrapper.vm.show();

    // verify modal is now found/displayed
    testModal = wrapper.find(modalSel);
    expect(testModal.exists()).toBe(true);
    expect(testModal.isVisible()).toBe(true);
  });

  it('modal is hidden when call exposed hide method', async () => {
    // mount a basic modal
    wrapper = mount(ModalDialog, {
      propsData: ourProps,
      slots: basicSlots,
    });

    // call show exposed method, need await for dom to render
    await wrapper.vm.show();

    // verify modal is now found/displayed
    var testModal = wrapper.find(modalSel);
    expect(testModal.exists()).toBe(true);
    expect(testModal.isVisible()).toBe(true);

    // call hide exposed method, need await for dom to render
    await wrapper.vm.hide();

    // verify modal is no longer displayed
    testModal = wrapper.find(modalSel);
    expect(testModal.exists()).toBe(false);
  });

  it('clicking a modal action button generates an event', async () => {
    // modal with header/title, body text, action buttons, and a footer
    wrapper = mount(ModalDialog, {
      propsData: ourProps,
      slots: standardSlots,
    });

    expect(wrapper.props()).toEqual(ourProps);

    // now call the exposed show method to have the modal be displayed; need 'await'
    // to give time for the DOM to be updated (via happy-dom) otherwise won't be found
    await wrapper.vm.show();

    // verify modal is displayed
    const testModal = wrapper.find(modalSel);
    expect(testModal.exists()).toBe(true);
    expect(testModal.isVisible()).toBe(true);

    // click on the first action button and verify a click event was generated
    const modalActionBtn1 = wrapper.find(modalActionBtn1Sel);
    await modalActionBtn1.trigger('click');
    expect(wrapper.emitted().click, 'expected click event to have been emitted').toBeTruthy();

    // click on the second action button and verify a click event was generated
    const modalActionBtn2 = wrapper.find(modalActionBtn1Sel);
    await modalActionBtn2.trigger('click');
    expect(wrapper.emitted().click, 'expected click event to have been emitted').toBeTruthy();
    expect(wrapper.emitted()['click'].length).toBe(2);
  });

  it('able to close modal by clicking the window close button', async () => {
    // mount a basic modal
    wrapper = mount(ModalDialog, {
      propsData: ourProps,
      slots: basicSlots,
    });

    // call show exposed method, need await for dom to render
    await wrapper.vm.show();

    // verify modal is now found/displayed
    var testModal = wrapper.find(modalSel);
    expect(testModal.exists()).toBe(true);
    expect(testModal.isVisible()).toBe(true);

    // click the mnodal window close button
    const modalCloseBtn = wrapper.find(modalCloseBtnSel);
    await modalCloseBtn.trigger('click');

    // verify modal is now closed
    testModal = wrapper.find(modalSel);
    expect(testModal.exists()).toBe(false);
  });

  it('modal closes when click outside of it (when closeOutside is true)', async () => {
    // mount a basic modal with closeOutside true and attach do document body so it has underlying element
    wrapper = mount(ModalDialog, {
      propsData: ourProps,
      slots: basicSlots,
      attachTo: document.body,
    });

    // call show exposed method, need await for dom to render
    await wrapper.vm.show();

    // verify modal is now found/displayed
    var testModal = wrapper.find(modalSel);
    expect(testModal.exists()).toBe(true);
    expect(testModal.isVisible()).toBe(true);

    // now click outside of the modal on the document body
    await document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  
    // verify modal is now closed
    testModal = wrapper.find(modalSel);
    expect(testModal.exists()).toBe(false);
  });

  it('modal does not close when click outside of it (when closeOutside is false)', async () => {
    // mount a basic modal with closeOutside false, and attach to document body so has underlying element
    ourProps['closeOutside'] = false;
    wrapper = mount(ModalDialog, {
      propsData: ourProps,
      slots: basicSlots,
      attachTo: document.body,
    });

    // call show exposed method, need await for dom to render
    await wrapper.vm.show();

    // verify modal is now found/displayed
    var testModal = wrapper.find(modalSel);
    expect(testModal.exists()).toBe(true);
    expect(testModal.isVisible()).toBe(true);

    // now click outside of the modal on the document body
    await document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  
    // verify modal is still displayed / was not closed
    testModal = wrapper.find(modalSel);
    expect(testModal.exists()).toBe(true);
  });
});
