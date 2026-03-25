import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import LoadingSkeleton from '@/components/LoadingSkeleton.vue';
import { AnimationTypes } from '@/definitions';


describe('LoadingSkeleton', () => {
  var wrapper;

  // repeat all tests for each availble BaseButton type
  describe.each([ AnimationTypes.Scan, AnimationTypes.Pulse ])('Animation type: %s', (type) => {

    // build out test cases for variants/options to be repeated for each animation type
    const testCases = [
      {
        desc: 'default', // not a prop, using for test case name
        type: type,
        radius: null,
        width: null,
        height: null,
        isLoading: true
      },
      {
        desc: 'rectangle',
        type: type,
        radius: null,
        width: '10rem',
        height: '4rem',
        isLoading: true
      },
      {
        desc: 'rectangle with rounded edges',
        type: type,
        radius: '16px',
        width: '10rem',
        height: '4rem',
        isLoading: true
      },
      {
        desc: 'square',
        type: type,
        radius: null,
        width: '5rem',
        height: '5rem',
        isLoading: true
      },
      {
        desc: 'square with rounded edges',
        type: type,
        radius: '16px',
        width: '5rem',
        height: '5rem',
        isLoading: true
      },
      {
        desc: 'circle',
        type: type,
        radius: '100%',
        width: '5rem',
        height: '5rem',
        isLoading: true
      },
      {
        desc: 'finished loading',
        type: type,
        radius: null,
        width: null,
        height: null,
        isLoading: false
      },
    ];

    afterEach(() => {
      wrapper.unmount();
    });

    it.each(testCases)('$desc renders correctly',
      async ({ type, radius, width, height, isLoading}) => {
      const ourProps = {
        animationType: type,
        borderRadius: radius,
        width: width,
        height: height,
        isLoading: isLoading
      };

      wrapper = mount(LoadingSkeleton, {
        propsData: ourProps,
      });

      expect(wrapper.props()).toEqual(ourProps);
      const loader = wrapper.find('.skeleton');

      // verify skeleton loader is displayed as expected (unless isLoading is false)
      if (ourProps['isLoading']) {
        expect(loader.exists()).toBe(true);
        expect(loader.isVisible()).toBe(true);
        expect(loader.attributes().class).toBe(`skeleton ${ourProps['animationType']}`);
        
        var expStyle = '';
        if (ourProps['width']) {
          expStyle += `width: ${ourProps['width']}; `;
        }
        if (ourProps['height']) {
          expStyle += `height: ${ourProps['height']}; `;
        }
        if (ourProps['borderRadius']) {
          expStyle += `border-radius: ${ourProps['borderRadius']};`
        }
        if (expStyle.length) {
          expect(loader.attributes().style).toBe(expStyle.trim());
        }

      } else {
        expect(loader.exists()).toBe(false);
      }
    });
  });
});
