import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import CheckboxInput from '@/components/CheckboxInput.vue';


describe('CheckboxInput', () => {
  var wrapper;

  // build out test cases for variants/options
  const testCases = [
    { 
      name: 'standard-cbox',
      label: 'I agree to the TB.pro terms and conditions',
      help: null,
      error: null,
      dataTestid: 'checkbox-standard',
      checked: false,
    },
    { 
      name: 'standard-cbox',
      label: 'I agree to the TB.pro terms and conditions',
      help: 'Please agree to the terms',
      error: null,
      dataTestid: 'checkbox-standard',
      checked: false,
    },
    { 
      name: 'standard-cbox',
      label: 'I agree to the TB.pro terms and conditions',
      help: null,
      error: 'Error: You must agree to terms in order to continue',
      dataTestid: 'checkbox-standard',
      checked: false,
    },
    { 
      name: 'standard-cbox',
      label: 'This checkbox is checked on by default',
      help: null,
      error: null,
      dataTestid: 'checkbox-standard',
      checked: true,
    },
    { 
      name: 'disabled',
      label: 'This checkbox is disabled',
      help: null,
      error: null,
      dataTestid: 'checkbox-disabled',
      checked: false,
      disabled: true,
    },
  ];

  afterEach(() => {
    wrapper.unmount();
  });

  it.each(testCases)('checkbox input renders correctly with the given options',
    async ({ name, label, help, error, dataTestid, checked }) => {
    const ourProps = {
      name: name,
      label: label,
      help: help,
      error: error,
      dataTestid: dataTestid,
      modelValue: checked,
    };

    wrapper = mount(CheckboxInput, {
      propsData: ourProps,
    });

    expect(wrapper.props()).toEqual(ourProps);

    // find the top-level checkbox input element
    const cboxInputSelector = `[data-testid=${ourProps['dataTestid']}]`;
    const cboxInput = wrapper.find(cboxInputSelector);
    expect(cboxInput.exists()).toBe(true);
    expect(cboxInput.isVisible()).toBe(true);
    expect(cboxInput.attributes().type).toBe('checkbox');
    expect(cboxInput.attributes().id).toBe(ourProps['name']);
    expect(cboxInput.attributes().name).toBe(ourProps['name']);

    const cboxLbl = wrapper.find('.label');
    expect(cboxLbl.isVisible()).toBe(true);
    expect(cboxLbl.text()).toBe(ourProps['label']);

    // verify the checkbox state
    expect(cboxInput.element.checked).toBe(ourProps['modelValue']);

    // verify help text if provided
    if (help) {
      const helpTxt = wrapper.find('.help-label');
      expect(helpTxt.isVisible()).toBe(true);
      expect(helpTxt.text()).toBe(ourProps['help']);
    }

    // verify error text if provided
    if (error) {
      const errTxt = wrapper.find('.help-label.invalid');
      expect(errTxt.isVisible()).toBe(true);
      expect(errTxt.text()).toBe(ourProps['error']);
    }
  });

  it('clicking on unchecked checkbox checks it', async () => {
    const ourProps = {
      name: 'standard',
      label: 'Agree to terms & conditions',
      dataTestid: 'cbox-check-test',
      modelValue: false,
    };

    wrapper = mount(CheckboxInput, {
      propsData: ourProps,
    });

    // verify checkbox is UNchecked by default
    const cboxInputSelector = `[data-testid=${ourProps['dataTestid']}]`;
    const cboxInput = wrapper.find(cboxInputSelector);
    expect(cboxInput.element.checked).toBe(false);

    // click on checkbox, verify received click event
    await cboxInput.trigger('click');
    expect(wrapper.emitted().click, 'expected click event to have been emitted').toBeTruthy();

    // checkbox should now be checked
    expect(cboxInput.element.checked).toBe(true);
  });

  it('clicking on already-checked check box unchecks it', async () => {
    const ourProps = {
      name: 'standard',
      label: 'This checkbox is already checked',
      dataTestid: 'cbox-already-checked-test',
      modelValue: true,
    };

    wrapper = mount(CheckboxInput, {
      propsData: ourProps,
    });

    // verify checkbox is checked by default
    const cboxInputSelector = `[data-testid=${ourProps['dataTestid']}]`;
    const cboxInput = wrapper.find(cboxInputSelector);
    expect(cboxInput.element.checked).toBe(true);

    // click on checkbox, verify received click event
    await cboxInput.trigger('click');
    expect(wrapper.emitted().click, 'expected click event to have been emitted').toBeTruthy();

    // checkbox should now be UNchecked
    expect(cboxInput.element.checked).toBe(false);
  });

  it('clicking on disabled checkbox does not change checkbox state', async () => {
    const ourProps = {
      name: 'disabled',
      label: 'This checkbox is checked but disabled',
      dataTestid: 'cbox-disabled-check-test',
      modelValue: false,
      disabled: true,
    };

    wrapper = mount(CheckboxInput, {
      propsData: ourProps,
    });

    // verify checkbox is UNchecked by default
    const cboxInputSelector = `[data-testid=${ourProps['dataTestid']}]`;
    const cboxInput = wrapper.find(cboxInputSelector);
    expect(cboxInput.element.checked).toBe(false);

    // click on checkbox, verify NO click event was received
    await cboxInput.trigger('click');
    expect(wrapper.emitted().click, 'expected click event to have been emitted').not.toBeTruthy();

    // verify checkbox is still UNchecked
    expect(cboxInput.element.checked).toBe(false);
  });
});
