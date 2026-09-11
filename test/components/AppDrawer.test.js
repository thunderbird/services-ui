import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { markRaw } from 'vue';
import { t } from '@/composable/i18n';
import AppDrawer from '@/patterns/AppDrawer.vue';
import MailIcon from '@/foundation/MailIcon.vue';
import AppointmentIcon from '@/foundation/AppointmentIcon.vue';
import SendIcon from '@/foundation/SendIcon.vue';


describe('AppDrawer', () => {
  let wrapper;

  const apps = [
    { id: 'mail', name: 'Mail', icon: markRaw(MailIcon), current: true },
    { id: 'send', name: 'Send', icon: markRaw(SendIcon), href: 'https://send.example' },
    { id: 'appointment', name: 'Appointment', icon: markRaw(AppointmentIcon) },
  ];

  const dataTestid = 'app-drawer-test';
  const triggerSel = `[data-testid=${dataTestid}] summary`;
  const detailsSel = `[data-testid=${dataTestid}]`;
  const tileSel = `[data-testid=${dataTestid}] .app-drawer__tile`;

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the trigger button with default labels', () => {
    wrapper = mount(AppDrawer, {
      propsData: { apps, dataTestid },
    });

    const details = wrapper.find(detailsSel);
    expect(details.exists()).toBe(true);

    const trigger = wrapper.find(triggerSel);
    expect(trigger.exists()).toBe(true);
    expect(trigger.attributes('aria-label')).toBe(t('appDrawer.openLabel'));
    expect(trigger.attributes('title')).toBe(t('appDrawer.openLabel'));

    const menu = wrapper.find('[role=menu]');
    expect(menu.exists()).toBe(true);
    expect(menu.attributes('aria-label')).toBe(t('appDrawer.menuLabel'));
  });

  it('renders custom trigger and menu labels when provided', () => {
    wrapper = mount(AppDrawer, {
      propsData: {
        apps,
        dataTestid,
        triggerLabel: 'Open the app switcher',
        menuLabel: 'App switcher menu',
      },
    });

    const trigger = wrapper.find(triggerSel);
    expect(trigger.attributes('aria-label')).toBe('Open the app switcher');
    expect(trigger.attributes('title')).toBe('Open the app switcher');

    const menu = wrapper.find('[role=menu]');
    expect(menu.attributes('aria-label')).toBe('App switcher menu');
  });

  it('renders one tile per app with the correct name and element type', () => {
    wrapper = mount(AppDrawer, {
      propsData: { apps, dataTestid },
    });

    const tiles = wrapper.findAll(tileSel);
    expect(tiles.length).toBe(apps.length);

    // current app: renders as a non-navigable, highlighted button
    const mailTile = tiles[0];
    expect(mailTile.element.tagName).toBe('BUTTON');
    expect(mailTile.attributes('href')).toBeUndefined();
    expect(mailTile.attributes('aria-current')).toBe('page');
    expect(mailTile.classes()).toContain('app-drawer__tile--current');
    expect(mailTile.text()).toBe('Mail');

    // app with an href: renders as a link that opens in a new tab
    const sendTile = tiles[1];
    expect(sendTile.element.tagName).toBe('A');
    expect(sendTile.attributes('href')).toBe('https://send.example');
    expect(sendTile.attributes('target')).toBe('_blank');
    expect(sendTile.attributes('rel')).toBe('noopener noreferrer');
    expect(sendTile.text()).toBe('Send');

    // app without an href: renders as a plain button
    const appointmentTile = tiles[2];
    expect(appointmentTile.element.tagName).toBe('BUTTON');
    expect(appointmentTile.attributes('href')).toBeUndefined();
    expect(appointmentTile.text()).toBe('Appointment');
  });

  it('emits select with the app id when clicking a tile without an href', async () => {
    wrapper = mount(AppDrawer, {
      propsData: { apps, dataTestid },
    });

    const appointmentTile = wrapper.findAll(tileSel)[2];
    await appointmentTile.trigger('click');

    expect(wrapper.emitted().select, 'expected select event to have been emitted').toBeTruthy();
    expect(wrapper.emitted().select[0]).toEqual(['appointment']);
  });

  it('does not emit select when clicking a tile with an href', async () => {
    wrapper = mount(AppDrawer, {
      propsData: { apps, dataTestid },
    });

    const sendTile = wrapper.findAll(tileSel)[1];
    sendTile.element.addEventListener('click', (event) => event.preventDefault());
    await sendTile.trigger('click');

    expect(wrapper.emitted().select).toBeUndefined();
  });

  it('closes the popover when clicking a tile', async () => {
    wrapper = mount(AppDrawer, {
      propsData: { apps, dataTestid },
      attachTo: document.body,
    });

    const details = wrapper.find(detailsSel);
    details.element.open = true;

    const appointmentTile = wrapper.findAll(tileSel)[2];
    await appointmentTile.trigger('click');

    expect(details.element.open).toBe(false);
  });

  it('closes the popover when pressing Escape', async () => {
    wrapper = mount(AppDrawer, {
      propsData: { apps, dataTestid },
      attachTo: document.body,
    });

    const details = wrapper.find(detailsSel);
    details.element.open = true;

    await details.trigger('keydown.escape');

    expect(details.element.open).toBe(false);
  });

  it('closes the popover when clicking outside of it', async () => {
    wrapper = mount(AppDrawer, {
      propsData: { apps, dataTestid },
      attachTo: document.body,
    });

    const details = wrapper.find(detailsSel);
    details.element.open = true;

    await document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(details.element.open).toBe(false);
  });
});
