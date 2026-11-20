import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { t } from '@/composable/i18n';
import UserMenu from '@/patterns/UserMenu.vue';

describe('UserMenu', () => {
  let wrapper;

  const username = 'Jane Doe';
  const dataTestid = 'user-menu-test';
  const triggerSel = `[data-testid=${dataTestid}] summary`;
  const detailsSel = `[data-testid=${dataTestid}]`;
  const slots = {
    default: '<a href="#account" role="menuitem">Account</a><a href="#logout" role="menuitem">Sign out</a>',
  };

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the trigger with the user avatar and default labels', () => {
    wrapper = mount(UserMenu, {
      propsData: { username, dataTestid },
    });

    const trigger = wrapper.find(triggerSel);
    expect(trigger.exists()).toBe(true);
    expect(trigger.find('.screen-reader-only').text()).toBe(t('userMenu.openLabel'));
    expect(trigger.attributes('title')).toBe(t('userMenu.openLabel'));
    expect(trigger.find('.initials').text()).toBe('JD');

    const menu = wrapper.find('[role=menu]');
    expect(menu.exists()).toBe(true);
    expect(menu.attributes('aria-label')).toBe(t('userMenu.menuLabel'));
  });

  it('renders the avatar image when an avatar url is provided', () => {
    wrapper = mount(UserMenu, {
      propsData: { username, dataTestid, avatarUrl: 'https://example.com/avatar.png' },
    });

    const img = wrapper.find(`${triggerSel} img`);
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe('https://example.com/avatar.png');
  });

  it('renders custom trigger and menu labels when provided', () => {
    wrapper = mount(UserMenu, {
      propsData: { username, dataTestid, triggerLabel: 'Open account menu', menuLabel: 'Account menu' },
    });

    const trigger = wrapper.find(triggerSel);
    expect(trigger.find('.screen-reader-only').text()).toBe('Open account menu');
    expect(trigger.attributes('title')).toBe('Open account menu');
    expect(wrapper.find('[role=menu]').attributes('aria-label')).toBe('Account menu');
  });

  it('renders the popover in dark mode only when forced', async () => {
    wrapper = mount(UserMenu, {
      propsData: { username, dataTestid },
    });

    const menu = wrapper.find('[role=menu]');
    expect(menu.classes()).not.toContain('dark');

    await wrapper.setProps({ forceDark: true });
    expect(menu.classes()).toContain('dark');
  });

  it('renders slot content inside the menu', () => {
    wrapper = mount(UserMenu, {
      propsData: { username, dataTestid },
      slots,
    });

    const items = wrapper.findAll('[role=menu] [role=menuitem]');
    expect(items.length).toBe(2);
    expect(items[0].text()).toBe('Account');
    expect(items[1].attributes('href')).toBe('#logout');
  });

  it('closes the popover when clicking a menu item', async () => {
    wrapper = mount(UserMenu, {
      propsData: { username, dataTestid },
      slots,
      attachTo: document.body,
    });

    const details = wrapper.find(detailsSel);
    details.element.open = true;

    const item = wrapper.find('[role=menuitem]');
    item.element.addEventListener('click', (event) => event.preventDefault());
    await item.trigger('click');

    expect(details.element.open).toBe(false);
  });

  it('closes the popover when pressing Escape', async () => {
    wrapper = mount(UserMenu, {
      propsData: { username, dataTestid },
      attachTo: document.body,
    });

    const details = wrapper.find(detailsSel);
    details.element.open = true;

    await details.trigger('keydown.escape');

    expect(details.element.open).toBe(false);
  });

  it('closes the popover when clicking outside of it', async () => {
    wrapper = mount(UserMenu, {
      propsData: { username, dataTestid },
      attachTo: document.body,
    });

    const details = wrapper.find(detailsSel);
    details.element.open = true;

    await document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(details.element.open).toBe(false);
  });
});
