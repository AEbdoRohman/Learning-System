import { Link } from "react-router-dom";
// import { FaWhatsappSquare } from "react-icons/fa";
// import { IoMail } from "react-icons/io5";
// import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseurl } from "../api/api";
const Footer = () => {
  const { t } = useTranslation();
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
      } catch (err) {
        console.log(err);
      }
    };
    fetchSocial();
  }, []);

  return (
    <section className="py-8 bg-blue-500 text-white">
      <div className="flex flex-col justify-center  md:flex-row flex-wrap md:items-start md:justify-around gap-4  mx-12 px-4 md:px-0 md:mx-0">
        {/* logo */}

        <div className="flex flex-col items-center   w-full md:w-[20%]">
          <Link to="/" className="flex justify-center items-center tex-center">
            <img src={social.logo} alt="logo" className="w-2/3" />
          </Link>
          <p className="text-lg font-bold mt-4">{t("footer.desc")}</p>
        </div>

        {/* <div>
          <h1 className="font-bold text-2xl text-hoverColor mb-4">
            {t("footer.title3")}
          </h1>
          <div className="px-4 md:px-0">
            <Link className="flex items-center gap-2 font-semibold hover:text-hoverColor transition-all duration-200">
              <FaPhoneAlt className="text-sm" />
              132123132
            </Link>

            <Link className="flex items-center gap-2 my-3 font-semibold hover:text-hoverColor transition-all duration-200">
              <FaWhatsappSquare className="text-sm" />
              132123132
            </Link>

            <Link className="flex items-center gap-2 font-semibold hover:text-hoverColor transition-all duration-200">
              <IoMail className="text-sm" />
              info@iac.com
            </Link>
          </div>
        </div> */}

        <div>
          <h1 className="font-bold text-2xl text-hoverColor mb-4">
            {t("footer.title2")}
          </h1>
          <div className="px-4 md:px-0">
            <Link
              to={"/activities"}
              className="block font-semibold hover:text-hoverColor transition-all duration-200"
            >
              {t("header.activities")}
            </Link>
            <Link
              to={"/childrens"}
              className=" my-2 block font-semibold hover:text-hoverColor transition-all duration-200 "
            >
              {t("header.childrens")}
            </Link>
            <Link
              to={"/terms/terms-conditions"}
              className="block font-semibold hover:text-hoverColor transition-all duration-200 "
            >
              {t("footer.tarms")}
            </Link>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-2xl text-hoverColor mb-4">
            {t("footer.title1")}
          </h1>
          <div className="px-4 md:px-0">
            <Link
              to={"/why-us"}
              className="block hover:text-hoverColor transition-all duration-200 font-bold"
            >
              {t("footer.sub1")}
            </Link>
            <Link
              to={"/news"}
              className=" my-2 block hover:text-hoverColor transition-all duration-200 font-bold"
            >
              {t("footer.sub2")}
            </Link>
            <Link
              to={"/contact"}
              className="block mb-2 hover:text-hoverColor transition-all duration-200 font-bold"
            >
              {t("footer.sub3")}
            </Link>
            <Link
              to={"/dr-saly-words"}
              className="block hover:text-hoverColor transition-all duration-200 font-bold"
            >
              {t("footer.sub4")}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 w-[90%] h-[1px] mx-auto mt-8"></div>
      <div>
        <div className="mt-4 flex items-center justify-center gap-4">
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-2xl text-hoverColor hover:text-white transition-all duration-500 cursor-pointer" />
          </a>
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className="text-2xl text-hoverColor hover:text-white transition-all duration-500 cursor-pointer" />
          </a>
          <a href={social.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-2xl text-hoverColor hover:text-white transition-all duration-500 cursor-pointer" />
          </a>
        </div>
        <div className="mt-4 text-center font-semibold text-hoverColor">
          <span className="mx-1">©</span>
          {t("footer.allright")}
          <span className="mx-1 text-gray-900 font-bold"> 2024</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
