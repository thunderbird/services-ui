// init localization
import { createI18n, type Composer, type I18n } from 'vue-i18n';

// language source files
import de from '@/locales/de.json';
import en from '@/locales/en.json';

const messages = {
  de, // German
  en, // English
};
const loc = localStorage?.getItem('locale') ?? navigator.language.split('-')[0];
const instance: I18n<typeof messages, Record<string, never>, Record<string, never>, string, false> = createI18n({
  legacy: false,
  globalInjection: true,
  locale: loc,
  fallbackLocale: 'en',
  messages,
});

export default instance;
export const i18n: Composer<typeof messages, Record<string, never>, Record<string, never>, string> = instance.global;
export const t: Composer<typeof messages, Record<string, never>, Record<string, never>, string>['t'] = i18n.t;
