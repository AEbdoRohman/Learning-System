import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
// import { FaCartShopping } from "react-icons/fa6";
// import { useSelector } from "react-redux";
import SearchBar from "../SearchBar";
import LanguageSwitcher from "../../components/language/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // const numberOfItems = useSelector((state) => state.course);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <nav className="navbar">
      <div className="container flex items-center justify-between">
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              {t("header.home")}
            </Link>
          </li>
          <li>
            <Link to="/courses" onClick={closeMenu}>
              {t("header.Courses")}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMenu}>
              {t("header.Dimplomas")}
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={closeMenu}>
              {t("header.Blogs")}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMenu}>
              {t("header.Offers")}
            </Link>
          </li>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mx-8 mt-4 md:mt-0">
            <div className="flex items-center gap-3">
              <div
                className="bg-pColor bg-opacity-10 text-pColor rounded-full p-3 cursor-pointer  hover:text-hoverColor duration-700 ease-in-out"
                onClick={() => setShowSearch(true)}
              >
                <CiSearch className="text-[22px]" />
              </div>
              {/* <Link
                to={"/cart"}
                className="bg-pColor bg-opacity-10 relative text-pColor rounded-[50%] p-3"
                onClick={closeMenu}
              >
                <span className="absolute top-[-7px] z-[10] right-[-7px] text-sm p-2 w-[25px] h-[25px] border-2 text-white rounded-[50%] bg-pColor flex items-center justify-center">
                  {numberOfItems.length}
                </span>
                <FaCartShopping className="text-[22px]" />
              </Link> */}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 mx-3">
              <button
                className="w-full border-[1px] text-hoverColor border-hoverColor rounded-lg hover:bg-hoverColor hover:text-white bg-opacity-5 transition-all duration-500  text-lg px-2 py-1"
                onClick={closeMenu}
              >
                <Link to={"/login"}> {t("header.Login")} </Link>
              </button>

              <LanguageSwitcher onClick={closeMenu} />
            </div>
          </div>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className="flex items-center gap-4">
          <div className="logo">
            <img src="src/assets/images/logo-2.png" alt="Logo" />
          </div>
          <h1 className="text-2xl font-bold text-hoverColor">IAC</h1>
        </div>
      </div>
      {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}
    </nav>
  );
};

export default Header;
