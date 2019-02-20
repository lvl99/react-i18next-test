import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

export default function Changer({ language }) {
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useState(language);

  const handleLanguageChange = useCallback(
    newLanguage => {
      if (newLanguage !== lng) {
        setLng(newLanguage);
      }
    },
    [lng]
  );

  return (
    <>
      <h3>{t("this.is.a.test", { name: "Test", lng })}</h3>
      <p>
        Current component language: {lng}
        <br />
        i18n currentLanguage: {i18n.language}
      </p>
      <button onClick={() => handleLanguageChange("en")}>Language: EN</button>
      <button onClick={() => handleLanguageChange("fr")}>Language: FR</button>
    </>
  );
}
