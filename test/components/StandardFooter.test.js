import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { t } from '@/composable/i18n';
import StandardFooter from '@/patterns/StandardFooter.vue';

// Mounted without the vue-i18n plugin on purpose, to match a consumer app that doesn't have it installed
describe('StandardFooter', () => {
  let wrapper;

  const contributeToThisSiteUrl = 'https://example.org/contribute';

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the copyright text without a global vue-i18n instance', () => {
    wrapper = mount(StandardFooter, {
      propsData: { contributeToThisSiteUrl },
    });

    const copyright = wrapper.find('.mozilla-navigation-content p');
    expect(copyright.exists()).toBe(true);
    expect(wrapper.find('i18n-t').exists()).toBe(false);

    const text = copyright.text();
    expect(text).toContain(t('footer.mzlaLinkText'));
    expect(text).toContain(t('footer.creativeCommonsLinkText'));
    expect(text).toContain(new Date().getFullYear().toString());
    expect(text).not.toContain('footer.');
  });

  it('renders the links inside the copyright text', () => {
    wrapper = mount(StandardFooter, {
      propsData: { contributeToThisSiteUrl },
    });

    const links = wrapper.findAll('.mozilla-navigation-content p a');
    expect(links.length).toBe(2);
    expect(links[0].text()).toBe(t('footer.mzlaLinkText'));
    expect(links[0].attributes('href')).toBe('https://blog.thunderbird.net/2020/01/thunderbirds-new-home/');
    expect(links[1].text()).toBe(t('footer.creativeCommonsLinkText'));
    expect(links[1].attributes('href')).toBe('https://www.mozilla.org/en-US/foundation/licensing/website-content/');
  });
});
