import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../../components/language/LanguageSwitcher";
import NavBar from "./NavBar";
const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up by removing the class when the component unmounts
    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md py-2">
      <div className="flex items-center justify-between mx-4 ">
        <div className="flex items-center gap-2">
          <div className="w-40 ">
            <img src="/images/Artboard.png" alt="Logo" />
          </div>
          <button
            className="w-32 border-[1px] text-hoverColor border-hoverColor rounded-lg hover:bg-hoverColor hover:text-white bg-opacity-5 transition-all duration-500 text-sm md:text-lg px-1 py-1"
            onClick={closeMenu}
          >
            <Link to={"/login"}> {t("header.Login")} </Link>
          </button>
          <LanguageSwitcher onClick={closeMenu} />
        </div>
        <NavBar />
      </div>
    </nav>
  );
};

export default Header;
