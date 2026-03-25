import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import SwitchToggle from '@/components/SwitchToggle.vue';


describe('SwitchToggle', () => {
  var wrapper;

  // build out test cases for variants/options
  const testCases = [
    { 
      label: 'This is the toggle label',
      noLegend: false,
      modelValue: false,
      active: false,
      disabled: false,
      dataTestid: 'standard-switch-toggle',
    },
    { 
      label: 'Turn some option on or off',
      noLegend: true,
      modelValue: false,
      active: false,
      disabled: false,
      dataTestid: 'switch-toggle-no-legend',
    },
    { 
      label: 'Do you want this option on?',
      noLegend: false,
      modelValue: false,
      active: false,
      disabled: false,
      dataTestid: 'switch-toggle-not-active',
    },
    { 
      label: 'Select yes or no',
      noLegend: false,
      modelValue: true,
      active: false,
      disabled: false,
      dataTestid: 'switch-toggle-on-by-default',
    },
    { 
      label: 'Some option label',
      noLegend: false,
      modelValue: false,
      active: false,
      disabled: true,
      dataTestid: 'switch-toggle-disabled',
    },
  ];

  afterEach(() => {
    wrapper.unmount();
  });

  it.each(testCases)('renders correctly with the given options',
    async ({ label, noLegend, modelValue, active, disabled, dataTestid }) => {
    const ourProps = {
      name: 'toggle-switch',
      label: label,
      noLegend: noLegend,
      modelValue: modelValue,
      active: active,
      disabled: disabled,
      dataTestid: dataTestid,
    };

    wrapper = mount(SwitchToggle, {
      propsData: ourProps,
    });

    expect(wrapper.props()).toEqual(ourProps);

    // find, verify exists and is visible
    const toggleSel = `[data-testid=${ourProps['dataTestid']}]`;
    const toggle = wrapper.find(toggleSel);
    expect(toggle.exists()).toBe(true);
    expect(toggle.isVisible()).toBe(true);
    expect(toggle.attributes().name).toBe(ourProps['name']);

    // verify toggle switch label text is displayed
    const toggleLbl = wrapper.findAll('div').filter(itemWrapper => {
      return itemWrapper.text() === ourProps['label'];
    });
    expect(toggleLbl[0].exists()).toBe(true);
    expect(toggleLbl[0].text()).toBe(ourProps['label']);

    // verify toggle value
    if (ourProps['modelValue']) {
      expect(toggle.attributes().checked).not.toBeUndefined();
    } else {
      expect(toggle.attributes().checked).toBeUndefined();
    }

    // legend ('off' and 'on' labels) is/is not displayed depending on noLegend prop
    const toggleLegendLbls = wrapper.findAll('.toggle-label');
    if (ourProps['noLegend']) {
      expect(toggleLegendLbls.length).toBe(0);
    } else {
      expect(toggleLegendLbls.length).toBe(2);
      expect(toggleLegendLbls[0].text()).toBe('Off');
      expect(toggleLegendLbls[1].text()).toBe('On');
    }

    // if disabled set, verify
    if(ourProps['disabled']) {
      expect(toggle.attributes().disabled).not.toBeUndefined();
    } else {
      expect(toggle.attributes().disabled).toBeUndefined();
    }
  });

  it('able to toggle the switch on and off by clicking on it', async () => {
    const ourProps = {
      name: 'toggle-switch',
      label: 'Toggle label',
      noLegend: false,
      disabled: false,
      dataTestid: 'switch-toggle-test',
    };

    wrapper = mount(SwitchToggle, {
      propsData: ourProps,
    });

    // verify toggle switch is off/unchecked
    const toggleSel = `[data-testid=${ourProps['dataTestid']}]`;
    const toggle = wrapper.find(toggleSel);
    expect(toggle.exists()).toBe(true);
    expect(toggle.attributes().checked).toBeUndefined();

    // click on it, verify click event generated and is now turned on/checked
    await toggle.trigger('click');
    expect(wrapper.emitted()['click'].length).toBe(1);
    expect(toggle.attributes().checked).not.toBeUndefined();

    // now click on it again to turn it back off
    await toggle.trigger('click');
    expect(wrapper.emitted()['click'].length).toBe(2);
    expect(toggle.attributes().checked).toBeUndefined();
  });

  it('unable to toggle the switch when disabled', async () => {
    const ourProps = {
      name: 'toggle-switch',
      label: 'Toggle label',
      noLegend: false,
      modelValue: false,
      disabled: true,
      dataTestid: 'switch-toggle-test-disabled',
    };

    wrapper = mount(SwitchToggle, {
      propsData: ourProps,
    });

    const toggleSel = `[data-testid=${ourProps['dataTestid']}]`;
    const toggle = wrapper.find(toggleSel);
    expect(toggle.exists()).toBe(true);
    expect(toggle.attributes().checked).toBeUndefined();

    // click on it, verify click event not generated since is disabled
    await toggle.trigger('click');
    expect(wrapper.emitted()['click']).toBeUndefined();

    // toggle should still be in previous state (off)
    expect(toggle.attributes().checked).toBeUndefined();
  });
});
