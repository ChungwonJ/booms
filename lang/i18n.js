import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './Setting/ko.json'
import en from './Setting/en.json'
import jp from './Setting/jp.json'

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
  jp: {
    translation: jp,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;