import i18n from "i18next";
import ICU from "i18next-icu";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";
import en from "i18next-icu/locale-data/en";
import fr from "i18next-icu/locale-data/fr";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(ICU)
  .use(reactI18nextModule)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true
    },
    i18nFormat: {
      locateData: [en, fr]
    }
  });

export default i18n;
