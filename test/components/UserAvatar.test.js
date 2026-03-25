import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import UserAvatar from '@/components/UserAvatar.vue';


describe('UserAvatar', () => {
  var wrapper;

  // repeat all tests for each avatar size
  describe.each([ 'extra-small', 'small', 'regular', 'large'])('Size: %s', (size) => {

    // build out test cases for variants/options
    const testCases = [
      {
        size: size,
        username: 'First Middle Last',
        desc: 'first, middle, and last name', // not a prop, just using to add test description
      },
      {
        size: size,
        username: 'First Last',
        desc: 'first and last name',
      },
      {
        size: size,
        username: 'First',
        desc: 'first name only',
      },
      {
        size: size,
        username: 'First Middle1 Middle2 Middle3 Last',
        desc: 'multiple middle names',
      },
      {
        size: size,
        username: 'example@example.com',
        desc: 'email address for username',
      },
      {
        size: size,
        username: '',
        desc: 'empty username',
      },
      {
        size: size,
        username: '',
        avatarUrl: 'https://tb.pro', // image on avatar instead of initials
        desc: 'avatar with url',
      },
      {
        size: size,
        username: '',
        avatarUrl: '/img/placeholder.png', // image on avatar instead of initials
        desc: 'avatar with image',
      },
    ];

    afterEach(() => {
      wrapper.unmount();
    });

    it.each(testCases)('renders correctly with $desc',
      async ({ size, username, avatarUrl, desc }) => {
      const ourProps = {
        size: size,
        username: username,
        avatarUrl: avatarUrl,
      };

      // only add url prop when provided as adding any url value will remove initials from avatar
      if (avatarUrl) {
        ourProps['avatarUrl'] = avatarUrl;
      }
  
      wrapper = mount(UserAvatar, {
        propsData: ourProps,
      });

      expect(wrapper.props()).toEqual(ourProps);

      // exists, visible, size
      const avatar = wrapper.find('.avatar');
      expect(avatar.exists()).toBe(true);
      expect(avatar.isVisible()).toBe(true);
      expect(avatar.attributes().class).toBe(`avatar ${ourProps['size']}`);

      // avatar will display either username intials or url/image
      if (!ourProps['avatarUrl']) {
        // correct initials displayed corresponding to username
        const avatarInitials = avatar.find('.initials');
        expect(avatarInitials.exists()).toBe(true);
        expect(avatarInitials.isVisible()).toBe(true);

        // figure out what initials we expect to be displayed on the avatar
        var expInitials = '?'; // empty username will display a '?'
        if (ourProps['username'].length > 0) {
          const unSegments = ourProps['username'].split(' ');
          // username with just one segment (i.e. first name only, or email address) will display first two chars
          // username with multiple segments will display first char of first segment + first char of last segment
          if (unSegments.length == 1) {
            expInitials = unSegments[0].slice(0, 2).toUpperCase();  
          } else {
            expInitials = `${unSegments[0][0]}${unSegments[unSegments.length -1][0]}`.toUpperCase();
          }
        }
        expect(avatarInitials.text()).toBe(expInitials);
      } else {
        // verify avatar url/img src
        const avatarImg = avatar.find('img.img');
        expect(avatarImg.exists()).toBe(true);
        expect(avatarImg.isVisible()).toBe(true);
        expect (avatarImg.attributes().src).toBe(ourProps['avatarUrl']);
      }
    });
  });
});
