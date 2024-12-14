import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";
import { useState } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [toggleLng, setToggleLng] = useState(false);

  const toggleMenu = () => setToggleLng((prev) => !prev);

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);

    // Store the selected language in local storage
    localStorage.setItem("i18nextLng", language);

    window.location.reload();

    setToggleLng(false);
  };
  const renderFlag = (language) => (
    <div className="flag-container">
      <img
        src={`/${language}.png`}
        alt={language === "en" ? "English" : "Ar"}
        className="flag"
      />
      <span className="language-text">{language === "en" ? "En" : "Ar"}</span>
    </div>
  );

  return (
    <div className="language-switcher">
      <div className="language-select" onClick={toggleMenu}>
        {renderFlag(i18n.language)}
      </div>

      {toggleLng && (
        <div className="language-options">
          <div
            className="language-option"
            onClick={() => handleChangeLanguage("en")}
          >
            {renderFlag("en")}
          </div>
          <div
            className="language-option"
            onClick={() => handleChangeLanguage("ar")}
          >
            {renderFlag("ar")}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
