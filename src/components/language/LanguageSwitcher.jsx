/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

const LanguageSwitcher = ({ onClick }) => {
  const { i18n } = useTranslation();

  // Check the saved language on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"; // Default to "en" if no language is saved
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  // Change the language
  const handleLanguageChange = () => {
    if (onClick) onClick();
    const newLang = i18n.language === "en" ? "ar" : "en"; // Switch between "en" and "ar"
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang); // Save the selected language in LocalStorage
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick={handleLanguageChange}
    >
      <FaGlobe
        style={{
          fontSize: "24px",
          color: i18n.language === "en" ? "#231f40" : "#1e91f6",
        }}
      />
      <span style={{ marginInline: "8px", fontSize: "14px" }}>
        {i18n.language === "en" ? "English" : "العربية"}
      </span>
    </div>
  );
};

export default LanguageSwitcher;
