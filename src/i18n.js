import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';
import uzTranslation from './locales/uz.json';

const resources = {
    en: { translation: enTranslation },
    ru: { translation: ruTranslation },
    uz: { translation: uzTranslation },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('lang') || 'ru',
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
