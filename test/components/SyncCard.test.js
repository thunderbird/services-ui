import { describe, it, expect, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import SyncCard from '@/components/SyncCard.vue';
import CalendarIcon from '@/assets/svg/icons/calendar.svg';
import { nextTick } from 'vue';


describe('SyncCard', () => {
  var wrapper;

  const cardOpts = [
    {
      "key": 0,
      "label": "Calendar One",
      "checked": true
    },
    {
      "key": 1,
      "label": "Calendar Two",
      "checked": false
    },
    {
      "key": 2,
      "label": "Calendar Three",
      "checked": false
    },
    {
      "key": 3,
      "label": "Calendar Four",
      "checked": false
    },
  ];

  const calIcon = `
    <span class="icon-calendar">
      <img src="${CalendarIcon}" alt="Calendar Icon"/>
    </span>
   `

  const ourProps = {
    title: 'Please select calendar(s)',
    modelValue: cardOpts,
    dataTestid: 'test-sync-card',
  };
  
  const ourSlots = {
    icon: calIcon,
  };

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders correctly', async () => {
    wrapper = mount(SyncCard, {
      propsData: ourProps,
      slots: ourSlots,
    });

    expect(wrapper.props()).toEqual(ourProps);

    const syncCardSel = `[data-testid=${ourProps['dataTestid']}]`;
    const syncCard = wrapper.find(syncCardSel);
    expect(syncCard.exists()).toBe(true);
    expect(syncCard.isVisible()).toBe(true);

    // header icon, text, selected count
    const syncCardHdrIcon = wrapper.find('.icon-calendar');
    expect(syncCardHdrIcon.exists()).toBe(true);
    const syncCardHdrTitle = wrapper.find('div.title');
    expect(syncCardHdrTitle.exists()).toBe(true);
    expect(syncCardHdrTitle.text()).toBe(ourProps['title']);
    const syncCardSelected = wrapper.find('div.selected');
    expect(syncCardSelected.exists()).toBe(true);
    expect(syncCardSelected.text()).toBe('1 Selected'); // only 1 is checked in our cardOpts

    // verify select all button is displayed
    const selAllBtn = wrapper.find('button.select-all');
    expect(selAllBtn.exists()).toBe(true);
    expect(selAllBtn.isVisible()).toBe(true);
    expect(selAllBtn.text()).toBe('Select All');

    // verify each list item on the card
    const cardList = syncCard.findAll('li.row');
    expect(cardList.length).toBe(ourProps['modelValue'].length);

    cardList.forEach((item, index) => {
      // go thru each, check label and checked/unchecked as expected
      expect(item.text()).toBe(ourProps['modelValue'][index]['label']);
      const cardItemCbox = item.find('input.tbpro-checkbox');
      expect(cardItemCbox.exists()).toBe(true);
      expect(cardItemCbox.isVisible()).toBe(true);
      expect(cardItemCbox.element.checked).toBe(ourProps['modelValue'][index]['checked']);           
    });
  });

  it('able to select an unselected item on the card', async () => {
    wrapper = mount(SyncCard, {
      propsData: ourProps,
      slots: ourSlots,
    });

    // verify the second option on the card list is unchecked
    const syncCardSel = `[data-testid=${ourProps['dataTestid']}]`;
    const syncCard = wrapper.find(syncCardSel);
    const cardList = syncCard.findAll('li.row');
    const cardItem2Cbox = cardList[1].find('input.tbpro-checkbox');
    expect(cardItem2Cbox.element.checked).toBe(false);

    // click on our second option/checkbox on our sync card to turn it on / checked, verify
    await cardItem2Cbox.trigger('click');
    expect(wrapper.emitted().click, 'expected click event to have been emitted').toBeTruthy();
    expect(wrapper.emitted()['click'].length).toBe(1);
    expect(cardItem2Cbox.element.checked).toBe(true);
  });

  it('select all button selects all items on the card', async () => {
    wrapper = mount(SyncCard, {
      propsData: ourProps,
      slots: ourSlots,
    });

    // click the select all button
    const selAllBtn = wrapper.find('button.select-all');
    await selAllBtn.trigger('click');
    expect(wrapper.emitted().click, 'expected click event to have been emitted').toBeTruthy();
    expect(wrapper.emitted()['click'].length).toBe(1);

    // verify each sync card option is now checked on
    const syncCardSel = `[data-testid=${ourProps['dataTestid']}]`;
    const syncCard = wrapper.find(syncCardSel);
    const cardList = syncCard.findAll('li.row');
    cardList.forEach((item, index) => {
      const cardItemCbox = item.find('input.tbpro-checkbox');
      expect(cardItemCbox.element.checked).toBe(true);
    });
  });

  it('clicking on a selected card item deselects it', async () => {
    wrapper = mount(SyncCard, {
      propsData: ourProps,
      slots: ourSlots,
    });

    // verify the first option on the card list is checked on
    const syncCardSel = `[data-testid=${ourProps['dataTestid']}]`;
    const syncCard = wrapper.find(syncCardSel);
    const cardList = syncCard.findAll('li.row');
    const cardItem1Cbox = cardList[0].find('input.tbpro-checkbox');
    expect(cardItem1Cbox.element.checked).toBe(true);

    // click on the first option/checkbox and verify it is no longer checked on
    await cardItem1Cbox.trigger('click');
    expect(wrapper.emitted().click, 'expected click event to have been emitted').toBeTruthy();
    expect(wrapper.emitted()['click'].length).toBe(1);
    expect(cardItem1Cbox.element.checked).toBe(false);
  });
});
