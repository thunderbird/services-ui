import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import SegmentedControl from '@/components/SegmentedControl.vue';


describe('SegmentedControl', () => {
  var wrapper;
  const options = [
    {
      "label": "Option 1",
      "value": 1
    },
    {
      "label": "Option 2",
      "value": 2
    },
    {
      "label": "Option 3",
      "value": 3
    },
    {
      "label": "Option 4",
      "value": 4
    },
    {
      "label": "Option 5",
      "value": 5
    },
    {
      "label": "Option 6",
      "value": 6,
    },
    {
      "label": "Option 7",
      "value": 7,
    }
  ];

  // build out test cases for variants/options
  const testCases = [
    { 
      label: 'Please select an option',
      options: options,
      modelValue: 4,
      required: false,
      disabled: false,
      dataTestid: 'segmented-control-1',
    },
    { 
      label: 'Please select an option',
      options: options,
      modelValue: 1,
      required: true,
      disabled: false,
      dataTestid: 'segmented-control-required',
    },
    { 
      label: 'Please select an option',
      options: options,
      modelValue: 7,
      required: true,
      disabled: true,
      dataTestid: 'segmented-control-disabled',
    },
  ];

  afterEach(() => {
    wrapper.unmount();
  });

  it.each(testCases)('renders correctly with the given options',
    async ({ label, options, modelValue, required, disabled, dataTestid }) => {
    const ourProps = {
      label: label,
      options: options,
      modelValue: modelValue,
      required: required,
      disabled: disabled,
      dataTestid: dataTestid,
    };

    wrapper = mount(SegmentedControl, {
      propsData: ourProps,
    });

    expect(wrapper.props()).toEqual(ourProps);

    // find segment control, verify exists and is visible
    const segCtrlWrapper = wrapper.find('.segment-wrapper');
    expect(segCtrlWrapper.exists()).toBe(true);
    const segCtrlLabel = segCtrlWrapper.find('.label');
    expect(segCtrlLabel.exists()).toBe(true);
    expect(segCtrlLabel.isVisible()).toBe(true);
    expect(segCtrlLabel.text()).toContain(ourProps['label']);

    // verify each option exists in the control and has correct label
    const segCtrlList = wrapper.find('.segment-list');
    expect(segCtrlList.exists()).toBe(true);
    const segCtrlButtons = segCtrlList.findAll('button');
    expect(segCtrlButtons.length).toBe(ourProps['options'].length);

    segCtrlButtons.forEach((item, index) => {
      expect(item.text()).toBe(ourProps['options'][index]['label']);
      expect(item.attributes()['data-testid']).toBe(ourProps['dataTestid']);
      if(ourProps['disabled']) {
        expect(item.attributes().class).toContain('disabled');
      } else {
        expect(item.attributes().class).not.toContain('disabled');
      }
      // verify only the specified default selected option is selected
      if(ourProps['modelValue'] == (index + 1)) {
        expect(item.attributes().class).toContain('selected');
      } else {
        expect(item.attributes().class).not.toContain('selected');
      }
    });

    // if required option set, ensure required asterisk is displayed
    if (ourProps['required'] == true) {
      expect(segCtrlLabel.text()).toContain('*');
    }
  });

  it('clicking an option selects the option and triggers click event', async () => {
    const ourProps = {
      label: 'Please select an option',
      options: options,
      modelValue: 4,
      required: false,
      disabled: false,
      dataTestid: 'segmented-control-click-test',
    };

    wrapper = mount(SegmentedControl, {
      propsData: ourProps,
    });

    // get all the option buttons in our segment control
    const segCtrlList = wrapper.find('.segment-list');
    expect(segCtrlList.exists()).toBe(true);
    const segCtrlButtons = segCtrlList.findAll('button');
    expect(segCtrlButtons.length).toBe(ourProps['options'].length);

    // verify the first option is not currently selected
    expect(segCtrlButtons[0].attributes().class).not.toContain('selected');

    // now click on the first option, verify click event triggered
    await segCtrlButtons[0].trigger('click');
    expect(wrapper.emitted().click, 'expected click event to have been emitted').toBeTruthy();
    expect(wrapper.emitted()['click'].length).toBe(1);

    // verify option is now selected
    expect(segCtrlButtons[0].attributes().class).toContain('selected');

    // now click on the last option in the control
    await segCtrlButtons[segCtrlButtons.length - 1].trigger('click');
    expect(wrapper.emitted().click, 'expected click event to have been emitted').toBeTruthy();
    expect(wrapper.emitted()['click'].length).toBe(2);

    // now verify the first option is no longer selected, and the last option is
    expect(segCtrlButtons[0].attributes().class).not.toContain('selected');
    expect(segCtrlButtons[segCtrlButtons.length - 1].attributes().class).toContain('selected');
  });
  
  it('option badges render correctly', async () => {
    const optionBadges = { '1':'45', '2':'37', '3':'18', '4': null, '5': '550', '6': null, '7': '789' };
    const ourProps = {
      label: 'Please select an option',
      options: options,
      modelValue: 4,
      required: false,
      disabled: false,
      dataTestid: 'segmented-control-with-option-badges',
      optionBadges: optionBadges,
    };

    wrapper = mount(SegmentedControl, {
      propsData: ourProps,
    });

    // find our segmented control buttons and verify each option is dislayed with correct optionBadge
    const segCtrlList = wrapper.find('.segment-list');
    expect(segCtrlList.exists()).toBe(true);
    const segCtrlButtons = segCtrlList.findAll('button');
    expect(segCtrlButtons.length).toBe(ourProps['options'].length);

    segCtrlButtons.forEach((item, index) => {
      if (ourProps['optionBadges'][index + 1]) {
        expect(item.text()).toEqual(`${ourProps['options'][index]['label']} ${ourProps['optionBadges'][index + 1]}`);
      } else {
        // no option badge specified/expected for that particular item
        expect(item.text()).toEqual(ourProps['options'][index]['label']);
      }
    });
  });

  it('no click event is emitted when disabled', async () => {
    const ourProps = {
      label: 'Please select an option',
      options: options,
      modelValue: 4,
      required: false,
      disabled: true,
      dataTestid: 'segmented-control-disabled',
    };

    wrapper = mount(SegmentedControl, {
      propsData: ourProps,
    });

    // get all the option buttons in our segment control
    const segCtrlList = wrapper.find('.segment-list');
    expect(segCtrlList.exists()).toBe(true);
    const segCtrlButtons = segCtrlList.findAll('button');
    expect(segCtrlButtons.length).toBe(ourProps['options'].length);

    // verify the first option is not currently selected
    expect(segCtrlButtons[0].attributes().class).not.toContain('selected');

    // now attempt to click on the first option, verify click event not triggered since control is disabled
    await segCtrlButtons[0].trigger('click');
    expect(wrapper.emitted().click, 'expected click event to not have been emitted').toBeFalsy();

    // verify option is still not selected
    expect(segCtrlButtons[0].attributes().class).not.toContain('selected');
  });
});
