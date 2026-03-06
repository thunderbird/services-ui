import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import CheckboxInput from '@/components/CheckboxInput.vue';


describe('CheckboxInput', () => {
  var wrapper;

  // build out test cases for variants/options
  const testCases = [
    { name: 'standard',
      label: 'I agree to the TB.pro terms and conditions',
      help: null,
      error: null,
      dataTestid: 'checkbox-standard',
      checked: false,
    },
    // todo add next set to test with - test each opt
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

    const cboxSelector = `[data-testid=${ourProps['dataTestid']}]`;
    const btn = wrapper.find(cboxSelector);
    expect(btn.isVisible()).toBe(true);

    // TODO
    // check attributes (name, class, etc)
    // verify label is displayed and correct
    // verify help text if provided
    // verify error text if provided
    // verify correct state / modelValue checked/unchecked
  });

  it('clicking on unchecked checkbox checks it', async () => {
    // todo
  });

  it('clicking on already-checked check box unchecks it', async () => {
    // todo
  });

  it('clicking on disabled checkbox does not change checkbox state', async () => {
    // todo
  });
});
