import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import TextInput from '@/components/TextInput.vue';


describe('TextInput', () => {
  var wrapper;

  // build out test cases for variants/options
  const testCases = [
    { 
      label: 'This is the TextInput label!',
      help: null,
      error: null,
      prefix: null,
      outerPrefix: null,
      outerSuffix: null,
      smallText: false,
      smallInput: false,
      maxLength: null,
      modelValue: null,
      dataTestid: 'basic-text-input',
      type: 'text',
    },
    { 
      label: 'This is the TextInput label!',
      help: 'Please enter some text.',
      error: null,
      prefix: null,
      outerPrefix: null,
      outerSuffix: null,
      smallText: false,
      smallInput: false,
      maxLength: null,
      modelValue: null,
      dataTestid: 'text-input-help',
      type: 'text',
    },
    { 
      label: 'This is the TextInput label!',
      help: null,
      error: 'You must enter some text.',
      prefix: null,
      outerPrefix: null,
      outerSuffix: null,
      smallText: false,
      smallInput: false,
      maxLength: null,
      modelValue: null,
      dataTestid: 'text-input-err',
      type: 'text',
    },
    { 
      label: 'This is the TextInput label!',
      help: null,
      error: null,
      prefix: 'PREFIX',
      outerPrefix: null,
      outerSuffix: null,
      smallText: false,
      smallInput: false,
      maxLength: null,
      modelValue: null,
      dataTestid: 'text-input-prefix',
      type: 'text',
    },
    { 
      label: 'This is the TextInput label!',
      help: null,
      error: null,
      prefix: null,
      outerPrefix: 'OUTER-PREFIX',
      outerSuffix: null,
      smallText: false,
      smallInput: false,
      maxLength: null,
      modelValue: null,
      dataTestid: 'text-input-outer-prefix',
      type: 'text',
    },
    { 
      label: 'This is the TextInput label!',
      help: null,
      error: null,
      prefix: null,
      outerPrefix: null,
      outerSuffix: 'OUTER-SUFFIX',
      smallText: false,
      smallInput: false,
      maxLength: null,
      modelValue: null,
      dataTestid: 'text-input-outer-suffix',
      type: 'text',
    },
    { 
      label: 'This is the TextInput label!',
      help: null,
      error: null,
      prefix: 'PREFIX',
      outerPrefix: 'OUTER-PREFIX',
      outerSuffix: 'OUTER-SUFFIX',
      smallText: false,
      smallInput: false,
      maxLength: null,
      modelValue: null,
      dataTestid: 'text-input-prefix-and-suffix',
      type: 'text',
    },
    { 
      label: 'This is the TextInput label!',
      help: null,
      error: null,
      prefix: null,
      outerPrefix: null,
      outerSuffix: null,
      smallText: true,
      smallInput: false,
      maxLength: null,
      modelValue: null,
      dataTestid: 'text-input-small-text',
      type: 'text',
    },
    { 
      label: 'This is the TextInput label!',
      help: null,
      error: null,
      prefix: null,
      outerPrefix: null,
      outerSuffix: null,
      smallText: false,
      smallInput: true,
      maxLength: null,
      modelValue: null,
      dataTestid: 'text-input-small-input',
      type: 'text',
    },
    { 
      label: 'This is the TextInput label!',
      help: null,
      error: null,
      prefix: null,
      outerPrefix: null,
      outerSuffix: null,
      smallText: false,
      smallInput: false,
      maxLength: 100,
      modelValue: null,
      dataTestid: 'text-input-max-len',
      type: 'text',
    },
    { 
      label: 'This is the TextInput label!',
      help: null,
      error: null,
      prefix: null,
      outerPrefix: null,
      outerSuffix: null,
      smallText: false,
      smallInput: false,
      maxLength: null,
      modelValue: 'Here is some default text.',
      dataTestid: 'text-input-default-text',
      type: 'text',
    },
    { 
      label: 'This is the TextInput label!',
      help: null,
      error: null,
      prefix: null,
      outerPrefix: null,
      outerSuffix: null,
      smallText: false,
      smallInput: false,
      maxLength: 100,
      modelValue: 'Here is some default text.',
      dataTestid: 'text-input-default-text-with-max-len',
      type: 'text',
    },
  ];

  afterEach(() => {
    wrapper.unmount();
  });

  it.each(testCases)('renders correctly with the given options',
    async ({ label, help, error, prefix, outerPrefix, outerSuffix, smallText, smallInput, maxLength, modelValue, dataTestid, type }) => {
    const ourProps = {
      name: 'text-area-test',
      label: label,
      help: help,
      error: error,
      prefix: prefix,
      outerPrefix: outerPrefix,
      outerSuffix: outerSuffix,
      smallText: smallText,
      smallInput: smallInput,
      maxLength: maxLength,
      modelValue: modelValue,
      dataTestid: dataTestid,
      type: type,
    };

    wrapper = mount(TextInput, {
      propsData: ourProps,
    });

    expect(wrapper.props()).toEqual(ourProps);

    if (ourProps['smallInput']) {
      const textInputWrapper = wrapper.find('.tbpro-input-wrapper');
      expect(textInputWrapper.exists()).toBe(true);    
      expect(textInputWrapper.attributes().class).contains('small-input');
    }

    // verify text input element found, is visible, correct attributes and label
    const textInputSel = `[data-testid=${ourProps['dataTestid']}]`;
    const textInput = wrapper.find(textInputSel);
    expect(textInput.exists()).toBe(true);
    expect(textInput.isVisible()).toBe(true);

    var expClass = 'tbpro-input-element';
    if (ourProps['error']) {
      expClass += ' error';
    }
    expect(textInput.attributes().class).toBe(expClass);

    expect(textInput.attributes().name).toBe(ourProps['name']);
    expect(textInput.attributes().id).toBe(ourProps['name']);

    const textInputLbl = wrapper.find('span.label');
    expect(textInputLbl.exists()).toBe(true);
    expect(textInputLbl.isVisible()).toBe(true);
    expect(textInputLbl.text()).toBe(ourProps['label']);

    // verify default text is there if was provided
    if (ourProps['modelValue']) {
      expect(textInput.element.value).toBe(ourProps['modelValue']);
    }

    // verify help text is there if was provided
    if (ourProps['help']) {
      const textInputHelp = wrapper.find('span.help-label');
      expect(textInputHelp.exists()).toBe(true);
      expect(textInputHelp.isVisible()).toBe(true);
      expect(textInputHelp.text()).toBe(ourProps['help']);
    }

    // verify error text is there if was provided
    if (ourProps['error']) {
      const textInputErr = wrapper.find('span.help-label.invalid');
      expect(textInputErr.exists()).toBe(true);
      expect(textInputErr.isVisible()).toBe(true);
      expect(textInputErr.text()).toBe(ourProps['error']);
    }

    // prefix
    if (ourProps['prefix']) {
      const textInputPre = wrapper.find('span.tbpro-input-prefix');
      expect(textInputPre.exists()).toBe(true);
      expect(textInputPre.isVisible()).toBe(true);
      expect(textInputPre.text()).toBe(ourProps['prefix']);
    }

    // outerPrefix
    if (ourProps['outerPrefix']) {
      const textInputOutPre = wrapper.find('span.tbpro-input-outer-prefix');
      expect(textInputOutPre.exists()).toBe(true);
      expect(textInputOutPre.isVisible()).toBe(true);
      expect(textInputOutPre.text()).toBe(ourProps['outerPrefix']);
    }

    // outerSuffix
    if (ourProps['outerSuffix']) {
      const textInputOutSuf = wrapper.find('span.tbpro-input-outer-suffix');
      expect(textInputOutSuf.exists()).toBe(true);
      expect(textInputOutSuf.isVisible()).toBe(true);
      expect(textInputOutSuf.text()).toBe(ourProps['outerSuffix']);
    }

    // smallText
    if (ourProps['smallText']) {
      const textInputSmallText = wrapper.find('span.tbpro-input.small-text');
      expect(textInputSmallText.exists()).toBe(true);
      expect(textInputSmallText.isVisible()).toBe(true);
    } else {
      const textInputInput = wrapper.find('span.tbpro-input');
      expect(textInputInput.exists()).toBe(true);
      expect(textInputInput.isVisible()).toBe(true);
    }

    // if maxLength is set ensure char count displayed correctly taking into account any default text
    if (ourProps['maxLength']) {
      expect(textInput.attributes().maxLength).toBe(ourProps[maxLength]);
      const textInputCharCount = wrapper.find('span.character-count');
      expect(textInputCharCount.exists()).toBe(true);
      expect(textInputCharCount.isVisible()).toBe(true);
      if (ourProps['modelValue']) {
        var expCharCount = `${ourProps['modelValue'].length}/${ourProps['maxLength']}`;
      } else {
        var expCharCount = `0/${ourProps['maxLength']}`;
      }
      expect(textInputCharCount.text()).toBe(expCharCount);
    }
  });

  it('able to enter text', async () => {
    const ourProps = {
      name: 'text-input-test',
      label: 'This is the TextInput label!',
      help: null,
      error: null,
      prefix: null,
      outerPrefix: null,
      smallText: false,
      smallInput: false,
      maxLength: null,
      modelValue: null,
      dataTestid: 'text-input-test',
      type: 'text',
    };

    wrapper = mount(TextInput, {
      propsData: ourProps,
    });

    const textInputSel = `[data-testid=${ourProps['dataTestid']}]`;
    const textInput = wrapper.find(textInputSel);
    expect(textInput.exists()).toBe(true);

    // currently empty
    expect(textInput.element.value).toBe('');

    // enter text and verify
    const inputText = 'This is some text entered in the text area.';
    await textInput.setValue(inputText);
    expect(wrapper.emitted().input, 'expected input event to have been emitted').toBeTruthy();
    expect(wrapper.emitted()['input'].length).toBe(1);
    expect(wrapper.emitted().change, 'expected change event to have been emitted').toBeTruthy();
    expect(wrapper.emitted()['change'].length).toBe(1);
    expect(textInput.element.value).toBe(inputText);

    // now blur and verify
    await textInput.trigger('blur');
    expect(wrapper.emitted().blur, 'expected blur event to have been emitted').toBeTruthy();
    expect(wrapper.emitted()['blur'].length).toBe(1);
    expect(wrapper.emitted()['blur'][0][0]).toBe(inputText);
  });

  it('able to reset the text input using exposed reset method', async () => {
    const ourProps = {
      name: 'text-input-test',
      label: 'This is the TextInput label!',
      help: null,
      error: null,
      prefix: null,
      outerPrefix: null,
      smallText: false,
      smallInput: false,
      maxLength: null,
      modelValue: 'Some default text.',
      dataTestid: 'text-input-reset-test',
      type: 'text',
    };

    wrapper = mount(TextInput, {
      propsData: ourProps,
    });

    const textInputSel = `[data-testid=${ourProps['dataTestid']}]`;
    const textInput = wrapper.find(textInputSel);
    expect(textInput.exists()).toBe(true);

    // currently contains default text
    expect(textInput.element.value).toBe(ourProps['modelValue']);

    // reset using the exposed reset method (need await for happy-dom to update); verify empty now
    await wrapper.vm.reset();
    expect(textInput.element.value).toBe('');
  });
});
