import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import BubbleSelect from '@/components/BubbleSelect.vue';


describe('BubbleSelect', () => {
  var wrapper;
  const bubbleLocator = 'ul.bubble-list';
  const weekDayOptions = [
    {
      "label": "Sun",
      "value": "Sunday"
    },
    {
      "label": "Mon",
      "value": "Monday"
    },
    {
      "label": "Tue",
      "value": "Tuesday"
    },
    {
      "label": "Wed",
      "value": "Wednesday"
    },
    {
      "label": "Thu",
      "value": "Thursday"
    },
    {
      "label": "Fri",
      "value": "Friday"
    },
    {
      "label": "Sat",
      "value": "Saturday"
    }
  ];

  function verifyBubbleSelector(mounted, props) {
    // verify the BubbleSelect element was rendered correctly given the mounted element and props used
    expect(mounted.props().label).toEqual(props['label']);
    expect(mounted.props().options).toEqual(props['options']);
    expect(mounted.props().required).toEqual(props['required']);
    expect(mounted.props().bubbleGap).toEqual(props['bubbleGap']);
    expect(mounted.props().help).toEqual(props['help']);
    expect(mounted.props().error).toEqual(props['error']);
    expect(mounted.props().disabled).toEqual(props['disabled']);
    expect(mounted.props().singleSelection).toEqual(props['singleSelection']);
    expect(mounted.props().dataTestid).toEqual(props['dataTestid']);

    // verify bubble selector element exists
    const ourBubbleSelect = mounted.find(bubbleLocator);
    expect(ourBubbleSelect.isVisible()).toBe(true);
    expect(ourBubbleSelect.attributes().class).toBe(`bubble-list gap-${props['bubbleGap']}`);

    // verify each of the selector buttons inside the bubble select
    for (const nextOpt of weekDayOptions) {
      const bubbleBtnLocator = `[data-testid=${props['dataTestid']}][title=${nextOpt['value']}]`;
      const ourBubbleBtn = mounted.find(bubbleBtnLocator);
      expect(ourBubbleBtn.isVisible()).toBe(true);
      if (!props['disabled']) {
        if (!props['error']) {
          expect(ourBubbleBtn.attributes().class).toBe('tbpro-bubble');
        } else {
          expect(ourBubbleBtn.attributes().class).toBe('tbpro-bubble error');
        }
      } else {
        expect(ourBubbleBtn.attributes().class).toBe('tbpro-bubble disabled');
      }
      expect(ourBubbleBtn.attributes().type).toBe('button');
      expect(ourBubbleBtn.text()).toBe(nextOpt['label']);
    }
  };

  describe('Multiple options', () => {
    var ourProps = {
      label: 'Please select day(s):',
      options: weekDayOptions,
      required: false,
      bubbleGap: 'default',
      help: null,
      error: null,
      disabled: false,
      singleSelection: false,
      dataTestid: 'bubble-select-test',
    };

    beforeEach(() => {
      wrapper = mount(BubbleSelect, {
        propsData: ourProps,
      });     
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('renders correctly with multiple selection', () => {
      verifyBubbleSelector(wrapper, ourProps);
    });

    it('able to select multiple options', async () => {
      // verify each button in the bubble selector is NOT selected by default, then select each button
      for (const nextOpt of weekDayOptions) {
        const bubbleBtnLocator = `[data-testid=${ourProps['dataTestid']}][title=${nextOpt['value']}]`;
        const ourBubbleBtn = wrapper.find(bubbleBtnLocator);
        expect(ourBubbleBtn.attributes().class).not.toContain(`selected`);
        await ourBubbleBtn.trigger('click');
      }

      // should have received one click event for each bubble button
      expect(wrapper.emitted()['click'].length).toBe(weekDayOptions.length);

      // verify each button is now selected; then click on it again to deselect it
      for (const nextOpt of weekDayOptions) {
        const bubbleBtnLocator = `[data-testid=${ourProps['dataTestid']}][title=${nextOpt['value']}]`;
        const ourBubbleBtn = wrapper.find(bubbleBtnLocator);
        expect(ourBubbleBtn.attributes().class).toContain(`selected`);
        await ourBubbleBtn.trigger('click');
      }

      // again should have received one click event for each bubble button added to total click events
      expect(wrapper.emitted()['click'].length).toBe(2 * weekDayOptions.length);

      // verify each button is now NOT selected
      for (const nextOpt of weekDayOptions) {
        const bubbleBtnLocator = `[data-testid=${ourProps['dataTestid']}][title=${nextOpt['value']}]`;
        const ourBubbleBtn = wrapper.find(bubbleBtnLocator);
        expect(ourBubbleBtn.attributes().class).not.toContain(`selected`);
      }
    });

    it('clicking on a selected option de-selects it', async () => {
      // verify the first button in our bubble selector is NOT selected by default, then select it
      const firstBubbleBtnLocator = `[data-testid=${ourProps['dataTestid']}][title=${weekDayOptions[0]['value']}]`;
      const ourFirstBubbleBtn = wrapper.find(firstBubbleBtnLocator);
      expect(ourFirstBubbleBtn.attributes().class).not.toContain(`selected`);
      await ourFirstBubbleBtn.trigger('click');

      // should have received one click event
      expect(wrapper.emitted()['click'].length).toBe(1);

      // the first button should now be selected
      expect(ourFirstBubbleBtn.attributes().class).toContain(`selected`);

      // click on the same first button again
      await ourFirstBubbleBtn.trigger('click');

      // should have received an additional click event
      expect(wrapper.emitted()['click'].length).toBe(2);

      // the first button should NOT be selected anymore
      expect(ourFirstBubbleBtn.attributes().class).not.toContain(`selected`);
    });
  });

  describe('Disabled', () => {
    var ourProps = {
      label: 'Please select day(s):',
      options: weekDayOptions,
      required: false,
      bubbleGap: 'default',
      help: null,
      error: null,
      disabled: true,
      singleSelection: false,
      dataTestid: 'bubble-select-test',
    };

    beforeEach(() => {
      wrapper = mount(BubbleSelect, {
        propsData: ourProps,
      });     
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('renders correctly when disabled', () => {
      verifyBubbleSelector(wrapper, ourProps);
    });
  
    it('unable to select options when disabled', async () => {
      // verify each button in the bubble selector is NOT selected by default, then select each button
      for (const nextOpt of weekDayOptions) {
        const bubbleBtnLocator = `[data-testid=${ourProps['dataTestid']}][title=${nextOpt['value']}]`;
        const ourBubbleBtn = wrapper.find(bubbleBtnLocator);
        expect(ourBubbleBtn.attributes().class).not.toContain(`selected`);
        await ourBubbleBtn.trigger('click');
      }

      // since selector is disabled, should NOT have received an click events
      expect(wrapper.emitted()['click']).toBeUndefined();

      // verify each button is still NOT selected
      for (const nextOpt of weekDayOptions) {
        const bubbleBtnLocator = `[data-testid=${ourProps['dataTestid']}][title=${nextOpt['value']}]`;
        const ourBubbleBtn = wrapper.find(bubbleBtnLocator);
        expect(ourBubbleBtn.attributes().class).not.toContain(`selected`);
      }
    });
  });

  describe('Single selection', () => {
    var ourProps = {
      label: 'Please select day(s):',
      options: weekDayOptions,
      required: false,
      bubbleGap: 'default',
      help: null,
      error: null,
      disabled: false,
      singleSelection: true,
      dataTestid: 'bubble-select-test',
    };

    beforeEach(() => {
      wrapper = mount(BubbleSelect, {
        propsData: ourProps,
      });     
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('renders correctly with single selection', () => {
      verifyBubbleSelector(wrapper, ourProps);
    });

    it('only able to select a single option', async () => {
      // verify the first button in our bubble selector is NOT selected by default, then select it
      const firstBubbleBtnLocator = `[data-testid=${ourProps['dataTestid']}][title=${weekDayOptions[0]['value']}]`;
      const ourFirstBubbleBtn = wrapper.find(firstBubbleBtnLocator);
      expect(ourFirstBubbleBtn.attributes().class).not.toContain(`selected`);
      await ourFirstBubbleBtn.trigger('click');

      // should have received one click event
      expect(wrapper.emitted()['click'].length).toBe(1);

      // the first button should now be selected
      expect(ourFirstBubbleBtn.attributes().class).toContain(`selected`);

      // verify the second button in our bubble selector is NOT selected by default, then select it
      const secondBubbleBtnLocator = `[data-testid=${ourProps['dataTestid']}][title=${weekDayOptions[1]['value']}]`;
      const ourSecondBubbleBtn = wrapper.find(secondBubbleBtnLocator);
      expect(ourSecondBubbleBtn.attributes().class).not.toContain(`selected`);
      await ourSecondBubbleBtn.trigger('click');

      // one additional click event should have been added to total click events
      expect(wrapper.emitted()['click'].length).toBe(2);

      // the second button should now be selected, and the first button NOT selected anymore
      expect(ourSecondBubbleBtn.attributes().class).toContain(`selected`);
      expect(ourFirstBubbleBtn.attributes().class).not.toContain(`selected`);  
    });
  });

  describe('Large gap', () => {
    var ourProps = {
      label: 'Please select day(s):',
      options: weekDayOptions,
      required: false,
      bubbleGap: 'large',
      help: null,
      error: null,
      disabled: false,
      singleSelection: false,
      dataTestid: 'bubble-select-test',
    };

    beforeEach(() => {
      wrapper = mount(BubbleSelect, {
        propsData: ourProps,
      });     
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('renders correctly with large gap', () => {
      verifyBubbleSelector(wrapper, ourProps);
    });

    it('able to select options when rendered with large gap', async () => {
      // verify the first button in our bubble selector is NOT selected by default, then select it
      const firstBubbleBtnLocator = `[data-testid=${ourProps['dataTestid']}][title=${weekDayOptions[0]['value']}]`;
      const ourFirstBubbleBtn = wrapper.find(firstBubbleBtnLocator);
      expect(ourFirstBubbleBtn.attributes().class).not.toContain(`selected`);
      await ourFirstBubbleBtn.trigger('click');

      // should have received one click event
      expect(wrapper.emitted()['click'].length).toBe(1);

      // the first button should now be selected
      expect(ourFirstBubbleBtn.attributes().class).toContain(`selected`);

      // verify the second button in our bubble selector is NOT selected by default, then select it
      const secondBubbleBtnLocator = `[data-testid=${ourProps['dataTestid']}][title=${weekDayOptions[1]['value']}]`;
      const ourSecondBubbleBtn = wrapper.find(secondBubbleBtnLocator);
      expect(ourSecondBubbleBtn.attributes().class).not.toContain(`selected`);
      await ourSecondBubbleBtn.trigger('click');

      // one additional click event should have been added to total click events
      expect(wrapper.emitted()['click'].length).toBe(2);

      // the second button should now be selected also
      expect(ourSecondBubbleBtn.attributes().class).toContain(`selected`); 
    });
  });

  describe('Selection required', () => {
    var ourProps = {
      label: 'Please select day(s):',
      options: weekDayOptions,
      required: true,
      bubbleGap: 'large',
      help: null,
      error: null,
      disabled: false,
      singleSelection: false,
      dataTestid: 'bubble-select-test',
    };

    beforeEach(() => {
      wrapper = mount(BubbleSelect, {
        propsData: ourProps,
      });     
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('renders correctly with selection required', () => {
      verifyBubbleSelector(wrapper, ourProps);
    });

    it('message appears if at least one option is not selected', async () => {
      // first verify no options are selected on our bubble select, by default
      for (const nextOpt of weekDayOptions) {
        const bubbleBtnLocator = `[data-testid=${ourProps['dataTestid']}][title=${nextOpt['value']}]`;
        const ourBubbleBtn = wrapper.find(bubbleBtnLocator);
        expect(ourBubbleBtn.attributes().class).not.toContain(`selected`);
      }

      // and by default the selection required message is NOT yet displayed
      const selReqMsgLocator = '.help-label';
      expect(wrapper.find(selReqMsgLocator).exists()).toBe(false);

      // select the last option in our bubble select
      const lastBubbleBtnLocator = `[data-testid=${ourProps['dataTestid']}][title=${weekDayOptions[(weekDayOptions.length -1)]['value']}]`;
      const ourLastBubbleBtn = wrapper.find(lastBubbleBtnLocator);
      expect(ourLastBubbleBtn.attributes().class).not.toContain(`selected`);
      await ourLastBubbleBtn.trigger('click');

      // should have received one click event
      expect(wrapper.emitted()['click'].length).toBe(1);

      // the last button should now be selected
      expect(ourLastBubbleBtn.attributes().class).toContain(`selected`);

      // now click on the same option again to deselect it, so no options are selected
      await ourLastBubbleBtn.trigger('click');

      // should have received an additional click event
      expect(wrapper.emitted()['click'].length).toBe(2);

      // the last button should NOT be selected anymore
      expect(ourLastBubbleBtn.attributes().class).not.toContain(`selected`);

      // verify the selection required message is now displayed
      expect(wrapper.find(selReqMsgLocator).exists()).toBe(true);
      expect(wrapper.find(selReqMsgLocator).text()).toBe('Please select at least one option.');

      // now select the first option on our bubble select
      const firstBubbleBtnLocator = `[data-testid=${ourProps['dataTestid']}][title=${weekDayOptions[0]['value']}]`;
      const ourFirstBubbleBtn = wrapper.find(firstBubbleBtnLocator);
      expect(ourFirstBubbleBtn.attributes().class).not.toContain(`selected`);
      await ourFirstBubbleBtn.trigger('click');

      // should have received an additional click event
      expect(wrapper.emitted()['click'].length).toBe(3);

      // the first button should now be selected
      expect(ourFirstBubbleBtn.attributes().class).toContain(`selected`);

      // verify the selection required message is now gone
      expect(wrapper.find(selReqMsgLocator).exists()).toBe(false);
    });
  });

  describe('Help text', () => {
    var helpText = 'Please select at least one day.';
    var ourProps = {
      label: 'Please select day(s):',
      options: weekDayOptions,
      required: false,
      bubbleGap: 'large',
      help: helpText,
      error: null,
      disabled: false,
      singleSelection: false,
      dataTestid: 'bubble-select-test',
    };

    beforeEach(() => {
      wrapper = mount(BubbleSelect, {
        propsData: ourProps,
      });     
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('renders correctly with help text', () => {
      verifyBubbleSelector(wrapper, ourProps);

      // verify help text is displayed
      const helpTextLocator = '.help-label';
      expect(wrapper.find(helpTextLocator).exists()).toBe(true);
      expect(wrapper.find(helpTextLocator).text()).toBe(helpText);
    });
  });

  describe('Error text', () => {
    var errText = 'Error: Invalid Selection!';
    var ourProps = {
      label: 'Please select day(s):',
      options: weekDayOptions,
      required: false,
      bubbleGap: 'large',
      help: null,
      error: errText,
      disabled: false,
      singleSelection: false,
      dataTestid: 'bubble-select-test',
    };

    beforeEach(() => {
      wrapper = mount(BubbleSelect, {
        propsData: ourProps,
      });     
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('renders correctly with error text', () => {
      verifyBubbleSelector(wrapper, ourProps);

      // verify error text is displayed
      const errTextLocator = '.help-label';
      expect(wrapper.find(errTextLocator).exists()).toBe(true);
      expect(wrapper.find(errTextLocator).text()).toBe(errText);
    });
  });
});
