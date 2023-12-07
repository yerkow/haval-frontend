import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";
import ruTranslation from "./locales/ru.json";
import kzTranslation from "./locales/kz.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
  kz: {
    translation: kzTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
