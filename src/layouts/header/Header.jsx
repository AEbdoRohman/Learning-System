import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/language/LanguageSwitcher";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import { baseurl } from "../../api/api";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("authToken");

  const [social, setSocial] = useState({});

  useEffect(() => {
    const fetchSocial = async () => {
      try {
        const response = await axios.get(`${baseurl}/show/media-logo/user`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setSocial(response.data.data);
        console.log(social.logo);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSocial();
  }, []);

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

  const handleLoginSuccess = () => {
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md py-2">
      <div className="flex items-center justify-between mx-1 md:mx-4">
        <div className="flex items-center gap-1 md:gap-2">
          <Link to="/" className="w-20">
            <img src={social.logo} alt="Logo" />
          </Link>

          {/* Show Login if no token, Show Calendar if token exists */}
          {token ? (
            <button
              className="border-[1px] text-hoverColor border-hoverColor rounded-lg hover:bg-hoverColor hover:text-white bg-opacity-5 transition-all duration-500 text-sm md:text-lg px-2 py-1"
              onClick={closeMenu}
            >
              <Link to={"/calender"}>{t("header.calendar")}</Link>
            </button>
          ) : (
            <button
              className=" border-[1px] text-hoverColor border-hoverColor rounded-lg hover:bg-hoverColor hover:text-white bg-opacity-5 transition-all duration-500 text-sm md:text-lg px-2 py-1"
              onClick={() => {
                handleLoginSuccess();
              }}
            >
              <Link to={"/login"}>{t("header.Login")}</Link>
            </button>
          )}

          <LanguageSwitcher onClick={closeMenu} />
        </div>
        <NavBar />
      </div>
    </nav>
  );
};

export default Header;
