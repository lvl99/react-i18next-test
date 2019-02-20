import i18next from "i18next";
import ICU from "i18next-icu";
import en from "i18next-icu/locale-data/en";
import Backend from "i18next-chained-backend";
import XHR from "i18next-xhr-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Cache a list of the loaded i18next ICU locales
const loadedI18nLocales = ["en"];

function envI18nextConfigOverrides(env) {
  switch (env) {
    case "test":
      return {
        lng: "cimode",
        fallbackLng: false,
        debug: false,
        resources: {},
        backend: {
          backends: []
        },
        initImmediate: true
      };

    default:
    case "development":
    case "production":
      return {
        backend: {
          backends: [LocalStorageBackend, XHR],
          backendOptions: [
            {},
            {
              loadPath: "/locales/{{lng}}/{{ns}}.json"
            }
          ]
        }
      };
  }
}

// Trigger loading the i18next ICU locale data and react-timeago formatter when the language is changed
i18next.on("languageChanged", languageCode => {
  const localeCode = (languageCode.indexOf("-") !== -1
    ? languageCode.split("-")[0]
    : languageCode
  ).toLowerCase();

  if (loadedI18nLocales.indexOf(localeCode) === -1) {
    // Load the ICU locale data
    import(`i18next-icu/locale-data/${localeCode}`).then(localeData => {
      console.log(`[utils/i18n] Loaded locale data for ${localeCode}`, {
        localeData
      });
    });
    loadedI18nLocales.push(localeCode);
  } else {
    console.log(`Already loaded locale data for ${localeCode}`);
  }
});

i18next
  .use(LanguageDetector)
  .use(ICU)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    ns: ["translation"],
    defaultNS: "translation",
    debug: process.env.NODE_ENV === "development",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true,
      defaultTransParent: "span"
    },
    i18nFormat: {
      localeData: [en]
    },
    initImmediate: false,
    ...envI18nextConfigOverrides(process.env.NODE_ENV)
  });

export default i18next;
