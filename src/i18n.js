// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import JSON files (works if you have a bundler that supports JSON imports)
import enCommon from "../public/locales/en/aboutMe.json";
import plCommon from "../public/locales/pl/aboutMe.json";
import deCommon from "../public/locales/de/aboutMe.json";
import frCommon from "../public/locales/fr/aboutMe.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en", // or whatever default you like
  resources: {
    en: {
      translation: enCommon,
    },
    pl: {
      translation: plCommon,
    },
    de: {
      translation: deCommon,
    },
    fr: {
      translation: frCommon,
    },
  },
});

export default i18n;
