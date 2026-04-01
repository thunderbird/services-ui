import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import VisualDivider from '@/components/VisualDivider.vue';


describe('VisualDivider', () => {
  var wrapper;

  const testCases = [
    {
      divType: 'horizontal'
    },
    {
      divType: 'vertical'
    },
  ];

  afterEach(() => {
    wrapper.unmount();
  });

  describe.each(testCases)('$divType', ({ divType }) => {  
    it('renders correctly', () => {
      const ourProps = {
        type: divType,
      };

      wrapper = mount(VisualDivider, {
        propsData: ourProps,
      });

      expect(wrapper.props()).toEqual(ourProps);
      const visDiv = wrapper.find('.divider');
      expect(visDiv.exists()).toBe(true);
      expect(visDiv.isVisible()).toBe(true);
      expect(visDiv.attributes().class).toBe(`${ourProps['type']} divider`);
    });
  });
});
