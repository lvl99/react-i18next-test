import React, { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Changer from "./Changer";
import logo from "./logo.svg";
import "./App.css";

export default function App({ language }) {
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useState(language);

  const handleLanguageChange = useCallback(
    newLanguage => {
      if (newLanguage !== lng) {
        i18n.changeLanguage(newLanguage);
        setLng(newLanguage);
      }
    },
    [lng]
  );

  useEffect(() => {
    if (lng !== i18n.language) {
      setLng(i18n.language);
    }
  }, [lng, i18n.language]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{t("welcome.toReact", { name: "Test" })}</h1>
        <p>
          App language: {lng}
          <br />
          i18n currentLanguage: {i18n.language}
        </p>
        <button onClick={() => handleLanguageChange("en")}>Language: EN</button>
        <button onClick={() => handleLanguageChange("fr")}>Language: FR</button>
        <Changer language={lng} />
      </header>
    </div>
  );
}
