import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import SelectInput from '@/components/SelectInput.vue';


describe('SelectInput', () => {
  var wrapper;
  const options = [
    {
      "label": "Yes absolutely",
      "value": "yes",
    },
    {
      "label": "They have a good chance",
      "value": "chance"
    },
    {
      "label": "Wait and see",
      "value": "wait",
    },
    {
      "label": "Probably not",
      "value": "no",
    },
    {
      "label": "Never going to happen",
      "value": "never",
    }
  ];

  // build out test cases for variants/options
  const testCases = [
    { 
      options: options,
      defaultSelected: options[2]['value'],
      error: null,
      helpText: null,
      dataTestid: 'standard-select-input',
    },
    { 
      options: options,
      defaultSelected: null,
      error: null,
      helpText: null,
      dataTestid: 'select-input-no-default',
    },
    { 
      options: options,
      defaultSelected: options[0]['value'],
      error: null,
      helpText: 'This is the help text!',
      dataTestid: 'select-input-help-text',
    },
  ];

  afterEach(() => {
    wrapper.unmount();
  });

  it.each(testCases)('renders correctly with the given options',
    async ({ options, defaultSelected, error, helpText, dataTestid }) => {
    const ourProps = {
      name: 'standard',
      label: 'Will your favourite MLB team win the world series this year?',
      options: options,
      modelValue: defaultSelected,
      error: error,
      help: helpText,
      dataTestid: dataTestid,
    };

    wrapper = mount(SelectInput, {
      propsData: ourProps,
    });

    expect(wrapper.props()).toEqual(ourProps);

    // find, verify exists and is visible
    const selInputSel = `[data-testid=${ourProps['dataTestid']}]`;
    const selInput = wrapper.find(selInputSel);
    expect(selInput.exists()).toBe(true);
    expect(selInput.isVisible()).toBe(true);
    expect(selInput.attributes().name).toBe(ourProps['name']);

    const selInputLabel = wrapper.find('.label');
    expect(selInputLabel.exists()).toBe(true);
    expect(selInputLabel.isVisible()).toBe(true);
    expect(selInputLabel.text()).toContain(ourProps['label']);

    // if required option set, and no item selected by default, ensure required asterisk is displayed
    if (ourProps['required'] == true && !ourProps['modelValue']) {
      expect(selInputLabel.text()).toContain('*');
    }

    // if help text set, ensure it is displayed
    if (ourProps['help']) {
      const helpTxt = wrapper.find('.help-label');
      expect(helpTxt.isVisible()).toBe(true);
      expect(helpTxt.text()).toBe(ourProps['help']);
    }

    // if we set a default value ensure it is currently selected
    if (ourProps['modelValue']) {
      expect(selInput.element.value).toBe(ourProps['modelValue']);
    }

    // if disabled set, verify
    if(ourProps['disabled']) {
      expect(selInput.attributes().disabled).not.toBeUndefined();
    } else {
      expect(selInput.attributes().disabled).toBeUndefined();
    }

    // now verify each option exists in the pulldown
    const selInputOpts = selInput.findAll('option');
    expect(selInputOpts.length).toBe(ourProps['options'].length);

    selInputOpts.forEach((item, index) => {
      expect(item.text()).toBe(ourProps['options'][index]['label']);
      expect(item.attributes().value).toBe(ourProps['options'][index]['value']);
    });
  });

  it('able to select an option', async () => {
    const ourProps = {
      name: 'standard',
      label: 'Please select an option',
      options: options,
      modelValue: options[2]['value'],
      help: null,
      required: false,
      autofocus: false,
      disabled: true,
      dataTestid: 'select-input-select-test',
    };

    wrapper = mount(SelectInput, {
      propsData: ourProps,
    });

    // ensure default item is currently selected
    const selInputSel = `[data-testid=${ourProps['dataTestid']}]`;
    const selInput = wrapper.find(selInputSel);
    expect(selInput.exists()).toBe(true);
    expect(selInput.element.value).toBe(ourProps['modelValue']);

    // change to the first option
    await selInput.setValue(options[0]['value']);
    expect(selInput.element.value).toBe(options[0]['value']);
  });

  it('unable to select an option when disabled', async () => {
    const ourProps = {
      name: 'standard',
      label: 'Please select an option',
      options: options,
      modelValue: options[2]['value'],
      help: null,
      required: false,
      autofocus: false,
      disabled: true,
      dataTestid: 'select-input-disabled-test',
    };

    wrapper = mount(SelectInput, {
      propsData: ourProps,
    });

    // ensure default item is currently selected
    const selInputSel = `[data-testid=${ourProps['dataTestid']}]`;
    const selInput = wrapper.find(selInputSel);
    expect(selInput.exists()).toBe(true);
    expect(selInput.element.value).toBe(ourProps['modelValue']);

    // clicking on disabled control should not cause a click event
    await selInput.trigger('click');
    expect(wrapper.emitted().click, 'expected click event to have been emitted').toBeFalsy();
  });

  it('able to reset the selected input using exposed reset method', async () => {
    const ourProps = {
      name: 'standard',
      label: 'Please select an option',
      options: options,
      modelValue: options[2]['value'],
      help: null,
      required: false,
      autofocus: false,
      disabled: false,
      dataTestid: 'select-input-reset-test',
    };

    wrapper = mount(SelectInput, {
      propsData: ourProps,
    });

    // verify the 3rd option is selected by default
    const selInputSel = `[data-testid=${ourProps['dataTestid']}]`;
    const selInput = wrapper.find(selInputSel);
    expect(selInput.exists()).toBe(true);
    expect(selInput.element.value).toBe(ourProps['modelValue']);
    
    // reset the select input using the exposed reset method; need await for dom to render
    await wrapper.vm.reset();

    // verify no item is selected anymore
    expect(selInput.element.value).toBe('');
  });
});
