// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translations from "./components/text/translations.json";
import easyTranslations from "./components/text/translations.easy.json";

// Easy-language mode is a language variant (BCP 47 private use subtag "x-easy").
// It only holds the simplified keys; everything else falls back to the base language.
const EASY_SUFFIX = "-x-easy";

export type BaseLanguage = "en" | "de";

export const isEasyLanguage = (lng: string | undefined): boolean =>
  !!lng && lng.endsWith(EASY_SUFFIX);

export const getBaseLanguage = (lng: string | undefined): BaseLanguage =>
  lng?.startsWith("de") ? "de" : "en";

export const toLanguage = (base: BaseLanguage, easy: boolean): string =>
  easy ? `${base}${EASY_SUFFIX}` : base;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translations.en },
      de: { translation: translations.de },
      [`en${EASY_SUFFIX}`]: { translation: easyTranslations.en },
      [`de${EASY_SUFFIX}`]: { translation: easyTranslations.de },
    },
    lng: "en",
    fallbackLng: {
      [`en${EASY_SUFFIX}`]: ["en"],
      [`de${EASY_SUFFIX}`]: ["de", "en"],
      default: ["en"],
    },
    supportedLngs: ["de", "en", `de${EASY_SUFFIX}`, `en${EASY_SUFFIX}`],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
  });

// Keep <html lang> in sync so screen readers use the right pronunciation
const syncHtmlLang = (lng: string) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = getBaseLanguage(lng);
  }
};
syncHtmlLang(i18n.language);
i18n.on("languageChanged", syncHtmlLang);

export default i18n;
