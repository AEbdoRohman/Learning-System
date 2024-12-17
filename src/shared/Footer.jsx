import { Link } from "react-router-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <section className=" pt-[120px] pb-[2rem] px-[20px] md:px-[50px] bg-mainColor text-white text-right">
      <div className="flex flex-col justify-center px-[30px] md:flex-row flex-wrap md:items-start md:justify-around">
        {/* logo */}

        <div className="flex flex-col items-center md:items-end justify-center w-[100%] md:w-[20%]">
          <Link className="flex justify-center items-center tex-center">
            <img
              src="/src/assets/images/logo-2.png"
              alt="logo"
              className="w-[80px]"
            />
            <span className="text-[50px] text-hoverColor font-semibold">
              IAC
            </span>
          </Link>
          <p className="text-[30] md:text-[15px] font-bold my-[10px]">
          {t("footer.desc")}
          </p>
          <form action="" className=" flex flex-row-reverse my-[15px]">
            <input
              placeholder= {t("footer.placeholder")}
              type="email"
              className="text-black px-[10px] mx-[1%] border-gray-400 border-[1px] w-[75%] h-[30px] rounded-[10px]  bg-gray-100 focus:border-[#525fe1] focus:outline-none"
            />
            <button className="mx-auto w-[130px] md:w-[100px]  text-white rounded-[10px]   bg-hoverColor">
            {t("footer.btn")}
            </button>
          </form>
        </div>

        <div className="text-right">
          <h1 className="font-bold text-[30px] text-hoverColor mt-[15px]">
          {t("footer.title3")}
          </h1>
          <Link
            className="font-semibold hover:underline hover:text-hoverColor transition-all duration-200 flex items-start justify-end mt-[15px]
                "
          >
            132123132 <FaPhoneAlt className="text-[20px] pt-[5px] mx-[10px]" />
          </Link>

          <Link
            className="font-semibold my-[4px] hover:underline hover:text-hoverColor transition-all duration-200 flex items-start justify-end
                "
          >
            132123132{" "}
            <FaWhatsappSquare className="text-[20px] pt-[5px] mx-[10px]" />
          </Link>

          <Link
            className="font-semibold hover:underline hover:text-hoverColor transition-all duration-200 flex items-start justify-end
                "
          >
            info@iac.com <IoMail className="text-[20px] pt-[5px] mx-[10px]" />
          </Link>
        </div>

        <div>
          <h1 className="font-bold text-[30px] text-hoverColor mt-[15px]">
          {t("footer.title2")}
          </h1>
          <Link className="block font-semibold hover:underline hover:text-hoverColor transition-all duration-200  mt-[15px]">
          {t("footer.sub5")}
          </Link>
          <Link className=" my-[4px] block font-semibold hover:underline hover:text-hoverColor transition-all duration-200  ">
          {t("footer.sub6")}
          </Link>
          <Link className="block font-semibold hover:underline hover:text-hoverColor transition-all duration-200 ">
          {t("footer.sub66")}
          </Link>
        </div>
        <div>
          <h1 className="font-bold text-[30px] text-hoverColor mt-[15px]">
          {t("footer.title1")}
          </h1>
          <Link className="block hover:text-hoverColor transition-all duration-200 underline font-bold mt-[15px]">
          {t("footer.sub1")}
          </Link>
          <Link className=" my-[4px] block hover:text-hoverColor transition-all duration-200 underline font-bold">
          {t("footer.sub2")}
          </Link>
          <Link className="block mb-[4px] hover:text-hoverColor transition-all duration-200 underline font-bold">
          {t("footer.sub3")}
          </Link>
          <Link className="block hover:text-hoverColor transition-all duration-200 underline font-bold">
          {t("footer.sub4")}
          </Link>
        </div>
      </div>
      <div className="bg-gray-200 w-[90%] h-[2px] mx-auto mt-[35px] flex items-center justify-around"></div>
      <div className="text-[20px]  md:flex md:flex-row-reverse md:items-center md:justify-between px-[4%]">
        <div className="mt-[20px] flex items-center justify-center text-center  text-hoverColor font-semibold">
        {t("footer.allright")}
        </div>
        <div className=" mt-[1.5rem] flex items-center justify-center text-center">
          <FaPhoneAlt className="mx-[5px] text-[30px] text-hoverColor hover:text-white transition-all duration-200 cursor-pointer " />
          <FaTiktok className="mx-[5px] text-[30px] text-hoverColor hover:text-white transition-all duration-200 cursor-pointer" />
          <FaInstagramSquare className="mx-[5px] text-[30px] text-hoverColor hover:text-white transition-all duration-200 cursor-pointer" />
          <FaFacebookF className="mx-[5px] text-[30px] text-hoverColor hover:text-white transition-all duration-200 cursor-pointer" />
          <FaSquareXTwitter className="mx-[5px] text-[30px] text-hoverColor hover:text-white transition-all duration-200 cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
