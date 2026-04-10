import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import TextArea from '@/components/TextArea.vue';


describe('TextArea', () => {
  var wrapper;

  // build out test cases for variants/options
  const testCases = [
    { 
      label: 'This is the TextArea label!',
      error: null,
      help: null,
      smallText: false,
      maxLength: null,
      modelValue: null,
      dataTestid: 'basic-text-area',
    },
    { 
      label: 'This is the TextArea label!',
      error: null,
      help: 'Please type in some text',
      smallText: false,
      maxLength: null,
      modelValue: null,
      dataTestid: 'text-area-help',
    },
    { 
      label: 'This is the TextArea label!',
      error: null,
      help: null,
      smallText: true,
      maxLength: null,
      modelValue: null,
      dataTestid: 'text-area-small',
    },
    { 
      label: 'This is the TextArea label!',
      error: null,
      help: null,
      smallText: false,
      maxLength: 25,
      modelValue: null,
      dataTestid: 'text-area-max',
    },
    { 
      label: 'This is the TextArea label!',
      error: null,
      help: null,
      smallText: false,
      maxLength: null,
      modelValue: 'Some default text',
      dataTestid: 'text-area-with-default',
    },
    { 
      label: 'This is the TextArea label!',
      error: null,
      help: null,
      smallText: false,
      maxLength: 25,
      modelValue: 'Some default text',
      dataTestid: 'text-area-max-with-default',
    },    
    { 
      label: 'This is the TextArea label!',
      error: null,
      help: null,
      smallText: false,
      maxLength: null,
      modelValue: 'This is the default text',
      dataTestid: 'standard-text-area-default',
    },
    { 
      label: 'This is the TextArea label!',
      error: null,
      help: null,
      smallText: false,
      maxLength: null,
      modelValue: 'This is the default text',
      dataTestid: 'standard-text-area-required',
    },
  ];

  afterEach(() => {
    wrapper.unmount();
  });

  it.each(testCases)('renders correctly with the given options',
    async ({ label, error, help, smallText, maxLength, modelValue, dataTestid}) => {
    const ourProps = {
      name: 'text-area-test',
      label: label,
      error: error,
      help: help,
      smallText: smallText,
      maxLength: maxLength,
      modelValue: modelValue,
      dataTestid: dataTestid,
    };

    wrapper = mount(TextArea, {
      propsData: ourProps,
    });

    expect(wrapper.props()).toEqual(ourProps);

    // verify text area element found, is visible, correct attributes and label
    const textAreaSel = `[data-testid=${ourProps['dataTestid']}]`;
    const textArea = wrapper.find(textAreaSel);
    expect(textArea.exists()).toBe(true);
    expect(textArea.isVisible()).toBe(true);

    expect(textArea.attributes().class).toBe('tbpro-textarea-element');
    expect(textArea.attributes().name).toBe(ourProps['name']);
    expect(textArea.attributes().id).toBe(ourProps['name']);

    const textAreaLbl = wrapper.find('span.label');
    expect(textAreaLbl.exists()).toBe(true);
    expect(textAreaLbl.isVisible()).toBe(true);
    expect(textAreaLbl.text()).toBe(ourProps['label']);

    // verify help text is there if was provided
    if (ourProps['help']) {
      const textAreaHelp = wrapper.find('span.help-label');
      expect(textAreaHelp.exists()).toBe(true);
      expect(textAreaHelp.isVisible()).toBe(true);
      expect(textAreaHelp.text()).toBe(ourProps['help']);
    }

    // verify default text is there if was provided
    if (ourProps['modelValue']) {
      expect(textArea.element.value).toBe(ourProps['modelValue']);
    }

    // if maxLength is set ensure char count displayed correctly taking into account any default text
    if (ourProps['maxLength']) {
      expect(textArea.attributes().maxLength).toBe(ourProps[maxLength]);
      const textAreaCharCount = wrapper.find('span.character-count');
      expect(textAreaCharCount.exists()).toBe(true);
      expect(textAreaCharCount.isVisible()).toBe(true);
      if (ourProps['modelValue']) {
        var expCharCount = `${ourProps['modelValue'].length}/${ourProps['maxLength']}`;
      } else {
        var expCharCount = `0/${ourProps['maxLength']}`;
      }
      expect(textAreaCharCount.text()).toBe(expCharCount);
    }
  });

  it('able to enter text', async () => {
    const ourProps = {
      name: 'text-area-test',
      label: 'Please enter some text',
      help: null,
      smallText: false,
      maxLength: null,
      modelValue: null,
      dataTestid: 'text-area-test',
    };

    wrapper = mount(TextArea, {
      propsData: ourProps,
    });

    const textAreaSel = `[data-testid=${ourProps['dataTestid']}]`;
    const textArea = wrapper.find(textAreaSel);
    expect(textArea.exists()).toBe(true);

    // currently empty
    expect(textArea.element.value).toBe('');

    // enter text and verify
    const inputText = 'This is some text entered in the text area.';
    await textArea.setValue(inputText);
    expect(wrapper.emitted().input, 'expected input event to have been emitted').toBeTruthy();
    expect(wrapper.emitted()['input'].length).toBe(1);
    expect(wrapper.emitted().change, 'expected change event to have been emitted').toBeTruthy();
    expect(wrapper.emitted()['change'].length).toBe(1);
    expect(textArea.element.value).toBe(inputText);
  });

  it('able to reset the text area using exposed reset method', async () => {
    const ourProps = {
      name: 'text-area-test',
      label: 'Please enter some text',
      help: null,
      smallText: false,
      maxLength: null,
      modelValue: 'Here is some default text.',
      dataTestid: 'text-area-reset-test',
    };

    wrapper = mount(TextArea, {
      propsData: ourProps,
    });

    const textAreaSel = `[data-testid=${ourProps['dataTestid']}]`;
    const textArea = wrapper.find(textAreaSel);
    expect(textArea.exists()).toBe(true);

    // currently contains default text
    expect(textArea.element.value).toBe(ourProps['modelValue']);

    // reset using the exposed reset method (need await for happy-dom to update); verify empty now
    await wrapper.vm.reset();
    expect(textArea.element.value).toBe('');
  });
});
