// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translations from './components/text/translations.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translations.en },
            de: { translation: translations.de }
        },
        fallbackLng: 'en',
        supportedLngs: ['de', 'en'],
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;